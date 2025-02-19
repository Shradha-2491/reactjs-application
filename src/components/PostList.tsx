import React, { useState, useEffect } from "react";
import "../styles/PostList.css";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isPageChanging, setIsPageChanging] = useState(false);
    const postsPerPage = 12;

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    useEffect(() => {
        setIsPageChanging(true);
        setTimeout(() => {
            setIsPageChanging(false);
        }, 500);
        setCurrentPage(1);
    }, [searchQuery]);

    const handlePageChange = (direction) => {
        window.scrollTo(0, 400);
        setIsPageChanging(true);
        setTimeout(() => {
            setIsPageChanging(false);
        }, 500);

        if (direction === "next") {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        } else if (direction === "prev") {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
        }
    };

    return (
        <div className="post-container">
            <h1 className="post-title">Latest Posts</h1>

            <input
                type="text"
                placeholder="Search by title..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className={`post-grid ${isPageChanging ? "fade-out" : "fade-in"}`}>
                {currentPosts.length > 0 ? (
                    currentPosts.map((post, index) => (
                        <div key={index} className="post-card">
                            <h2 className="post-heading">{post.title}</h2>
                            <p className="post-description">{post.body}</p>
                            <Link to={`/item/${post.id}`} className="read-more">Read More →</Link>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No posts found.</p>
                )}
            </div>

            {filteredPosts.length > 0 && (
                <div className="pagination">
                    <button
                        className="pagination-btn"
                        onClick={() => handlePageChange("prev")}
                        disabled={currentPage === 1}
                    >
                        ← Previous
                    </button>
                    <span className="page-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="pagination-btn"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === totalPages}
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;

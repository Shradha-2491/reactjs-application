import React, { useState, useEffect } from "react";
import "../styles/PostList.css";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isPageChanging, setIsPageChanging] = useState(false);

    const postsPerPage = 12;

    // Filter posts based on search query (case-insensitive)
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate indices for slicing the filtered posts into pages
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Reset pagination when search query changes
    useEffect(() => {
        setIsPageChanging(true);
        setTimeout(() => {
            setIsPageChanging(false);
        }, 500);
        setCurrentPage(1);
    }, [searchQuery]);

    // Handle page navigation
    const handlePageChange = (direction) => {
        setIsPageChanging(true);

        // Scroll up smoothly after a short delay when changing pages
        setTimeout(() => {
            window.scrollTo({ top: 350, behavior: "smooth" });
        }, 100);

        // End animation effect after 500ms
        setTimeout(() => {
            setIsPageChanging(false);
        }, 500);

        // Update current page based on direction
        if (direction === "next") {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages)); // Prevent exceeding last page
        } else if (direction === "prev") {
            setCurrentPage((prev) => Math.max(prev - 1, 1)); // Prevent going below first page
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

            {/* Display filtered posts with animations when changing pages */}
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

            {/* Pagination Controls */}
            {filteredPosts.length > 0 && (
                <div className="pagination">
                    <button
                        className="pagination-btn"
                        onClick={() => handlePageChange("prev")}
                        disabled={currentPage === 1} // Disable if already on the first page
                    >
                        ← Previous
                    </button>
                    <span className="page-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="pagination-btn"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === totalPages} // Disable if already on the last page
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostList;

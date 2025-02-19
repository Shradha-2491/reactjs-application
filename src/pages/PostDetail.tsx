import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, User, MessageSquare } from "lucide-react";
import "../styles/PostDetail.css";
import { getCommentsByPostId, getPostById, getUserById } from "../api/api.ts";

const PostDetail = () => {
    const { itemId } = useParams();

    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPostDetails = async () => {
        try {
            const data = await getPostById(itemId);
            setPost(data);

            const commentData = await getCommentsByPostId(itemId);
            setComments(commentData);

            const userData = await getUserById(data.userId);
            setAuthor(userData);
        } catch (error) {
            console.error("Error fetching post details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchPostDetails();
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <Loader className="loading-spinner" size={50} />
                <p>Loading post details...</p>
            </div>
        );
    }

    if (!post) {
        return <p className="error-message">Post not found!</p>;
    }

    return (
        <div className="post-details-container">
            <div className="post-details-left">
                <h1 className="post-details-title">{post.title}</h1>
                <p className="post-details-body">{post.body}</p>

                {author && (
                    <div className="author-details">
                        <User className="icon" />
                        <div>
                            <h3>Author: {author.name}</h3>
                            <p>Email: {author.email}</p>
                            <p>Username: {author.username}</p>
                        </div>
                    </div>
                )}

            </div>

            <div className="post-details-right">
                <div className="comments-section">
                    <h3><MessageSquare className="icon" /> Comments</h3>
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <p className="comment-author">Comment by: {comment.name}</p>
                                <p className="comment-body">{comment.body}</p>
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
            </div>


        </div>

    );
};

export default PostDetail;

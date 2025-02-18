import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import PostList from "../components/PostList.tsx";
import { getPosts } from "../api/api";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Discover Inspiring Stories</h1>
                    <p className="hero-description">
                        Explore insightful articles, trends, and ideas from our passionate writers. Stay updated and inspired every day!
                    </p>
                </div>
            </section>

            <PostList posts={posts} />
        </div>
    );
};

export default Home;

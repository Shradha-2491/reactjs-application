import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com";

export const getPosts = async (filters = {}) => {
    try {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await axios.get(`${API_URL}/posts?${queryParams}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
};

export const getPostById = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
}

export const getCommentsByPostId = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error("Error fetching event:", error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching attendees:", error);
        return [];
    }
};

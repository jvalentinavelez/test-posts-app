import { useEffect, useState } from "react";
import { getPosts } from "./helpers/getPosts"

export const PostApp = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getPostsUsers = async() => {
        const posts = await getPosts();
        setPosts(posts);
        setIsLoading(false);
    }

    useEffect( () => {
        getPostsUsers();
    }, []);

    if (isLoading) {

        return <div>Loading...</div>;
    }

    return (
        <>
        <ul>
            {posts.map(post => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
            ))}
        </ul>
        </>
    )



}
import { useEffect, useState } from "react";
import { getPosts, editPost } from "./helpers/api"
import { PostsTable, PostModal } from "./components/index";

export const PostApp = () => {

    //posts states
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    // modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPosts = async() => {
        const posts = await getPosts();
        setPosts(posts);
        setIsLoading(false);
    }

    const handleUpdatePost = async (postId, updatedData) => {
        try {
            const updatedPost = await editPost(postId, updatedData);
            const updatedPosts = posts.map(post => (post.id === postId ? updatedPost : post));
            setPosts(updatedPosts);
        } catch (error) {
            console.error('There was an error updating post: ', error);
        }
    };

    const openModal = (title, post, confirmAction) => {
        setModalContent({ title, confirmAction });
        setSelectedPost(post);
        setModalOpen(true);
    };

    const handleConfirm = (postId, updatedData) => {
        modalContent.confirmAction(postId, updatedData);
        setModalOpen(false);
    };
    

    useEffect( () => {
        fetchPosts();
    }, []);

    if (isLoading) {

        return <div>Loading...</div>;
    }

    return (
        <>
            <PostsTable 
                posts={posts}
                onEditPost={(post) => openModal('Edit Post', post, handleUpdatePost)} 
            />
            <PostModal 
                open={modalOpen} 
                title={modalContent.title} 
                post={selectedPost}
                handleConfirm={handleConfirm}
                handleClose={() => setModalOpen(false)} 
            />
        </>
    )



}
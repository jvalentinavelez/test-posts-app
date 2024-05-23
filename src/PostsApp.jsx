import { useCallback, useEffect, useState } from "react";
import { getPosts, editPost, deletePost } from "./helpers/api"
import { PostsTable, PostModal } from "./components/index";

export const PostApp = () => {

    //posts states
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    // modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ modalTitle: '', confirmModalAction: null });
    const [selectedPost, setSelectedPost] = useState(null)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // Nuevo estado


    const fetchPosts = async() => {
        const posts = await getPosts();
        setPosts(posts);
        setIsLoading(false);
    }

    useEffect( () => {
        fetchPosts();
    }, []);

    const handleEditPost = useCallback(async (postId, updatedData) => {
        try {
            const updatedPost = await editPost(postId, updatedData);
            const updatedPosts = posts.map(post => (post.id === postId ? updatedPost : post));
            setPosts(updatedPosts);
        } catch (error) {
            console.error('There was an error updating the post: ', error.message);
        }
    }, [posts]);

    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
            const updatedPosts = posts.filter(post => post.id !== postId);
            setPosts(updatedPosts);
        } catch (error) {
            console.error('There was an error deleting post: ', error);
        }
    };

    const openModal = (modalTitle, selectedPost, confirmModalAction) => {
        if (modalTitle === 'Delete Post') { 
            setShowDeleteConfirmation(true);
            const postToDelete = posts.find(post => post.id === selectedPost);
            setSelectedPost(postToDelete);
        } else {
            setShowDeleteConfirmation(false);
            setSelectedPost(selectedPost);
        }
        setModalData({ modalTitle, confirmModalAction });
        console.log(modalData)
        setModalOpen(true);
    };

    const handleConfirmModal = (updatedData) => {
        if (modalData.confirmModalAction) {
            modalData.confirmModalAction(selectedPost.id, updatedData);
        }
        setModalOpen(false);
    };

    if (isLoading) {

        return <div>Loading...</div>;
    }

    return (
        <>
            <PostsTable 
                posts = {posts}
                onEditAction = {(post) => openModal('Edit Post', post, handleEditPost)}
                onDeleteAction = {(postId) => openModal('Delete Post', postId, handleDeletePost)} 
            />
            <PostModal 
                open = {modalOpen} 
                title = {modalData.title} 
                post = {selectedPost}
                handleConfirm = {handleConfirmModal}
                handleClose = {() => setModalOpen(false)} 
                showDeleteConfirmation={showDeleteConfirmation} 
            />
        </>
    )

}
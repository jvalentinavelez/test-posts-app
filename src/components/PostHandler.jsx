import { useCallback, useEffect, useState } from "react";
import { getPosts, editPost, deletePost, createPost } from "../services/api"
import { PostsTable, PostModal } from "./";

const PostHandler = () => {

    //posts states
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    // modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ modalTitle: '', confirmModalAction: () => {} });
    const [selectedPost, setSelectedPost] = useState({})
    const [isDeleteSelected, setDeleteSelected] = useState(false); 

    useEffect( () => {
        const fetchPosts = async() => {
            const posts = await getPosts();
            setPosts(posts);
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    const handleAddPost = useCallback( async (newPost) => {
        try {
            const addedPost = await createPost(newPost);
            setPosts(prevPosts => [...prevPosts, addedPost]);
        } catch (error) {
            console.error('There was an error creating post: ', error);
        }
    }, [setPosts]);

    const handleEditPost = useCallback(async (postId, updatedData) => {
        try {
            const updatedPost = await editPost(postId, updatedData);
            const updatedPosts = posts.map(post => (post.id === postId ? updatedPost : post));
            setPosts(updatedPosts);
        } catch (error) {
            console.error('There was an error updating the post: ', error.message);
        }
    }, [posts]);

    const handleDeletePost =  async (postId) => {
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
            setDeleteSelected(true);
            if (selectedPost) {
                const postToDelete = posts.find(post => post.id === selectedPost);
                setSelectedPost(postToDelete);
            } else {
                setSelectedPost({});
            }
        } else {
            setDeleteSelected(false);
            setSelectedPost(selectedPost);
        }
        setModalData({ modalTitle, confirmModalAction });
        setModalOpen(true);
    };

    const handleConfirmModal = (updatedData) => {   
        if (modalData.confirmModalAction === handleAddPost) {
            modalData.confirmModalAction(updatedData);
        } else {
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
                onAddAction={() => openModal('Create Post', { userId: 1, title: '', body: '' }, handleAddPost)}
                onEditAction = {(post) => openModal('Edit Post', post, handleEditPost)}
                onDeleteAction = {(postId) => openModal('Delete Post', postId, handleDeletePost)} 
            />
            <PostModal 
                open = {modalOpen} 
                action = {modalData.modalTitle} 
                postData = {selectedPost}
                handleConfirmAction = {handleConfirmModal}
                handleClose = {() => setModalOpen(false)} 
                isDeleteSelected={isDeleteSelected} 
            />
        </>
    )

}

export default PostHandler;
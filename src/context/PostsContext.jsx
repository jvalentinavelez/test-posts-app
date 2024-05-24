import { useState, useCallback, useContext, useEffect, createContext } from 'react';
import { createPost, editPost, deletePost, getPosts } from '../services/api.js';

const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }) => {
    //posts states
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

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
            console.log(addedPost)
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

    // const openModal = (modalTitle, selectedPost, confirmModalAction) => {
    //     if (modalTitle === 'Delete Post') { 
    //         setDeleteSelected(true);
    //         if (selectedPost) {
    //             const postToDelete = posts.find(post => post.id === selectedPost);
    //             setSelectedPost(postToDelete);
    //         } else {
    //             setSelectedPost({});
    //         }
    //     } else {
    //         setDeleteSelected(false);
    //         setSelectedPost(selectedPost);
    //     }
    //     setModalData({ modalTitle, confirmModalAction });
    //     setModalOpen(true);
    // };


    // const handleConfirmModal = (updatedData) => {   
    //     if (modalData.confirmModalAction === handleAddPost) {
    //         modalData.confirmModalAction(updatedData);
    //     } else {
    //         modalData.confirmModalAction(selectedPost.id, updatedData);
    //     }
    //     setModalOpen(false);
    // };

  return (
    <PostsContext.Provider value={{
        posts,
        isLoading,
        handleAddPost,
        handleEditPost,
        handleDeletePost,
        // selectedPost,        
        // modalOpen,
        // setModalOpen,
        // openModal,
        // modalData,
        // isDeleteSelected,
        // handleConfirmModal
    }}>
      {children}
    </PostsContext.Provider>
  );
};

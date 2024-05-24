import { useState, useCallback } from 'react';
import { usePosts } from '../context/PostsContext';

const useModal = () => {

  const { posts, handleAddPost } = usePosts(); 

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalData, setModalData] = useState({ modalTitle: '', confirmModalAction: null });
  const [isDeleteSelected, setDeleteSelected] = useState(false);

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

  return {
    modalOpen, 
    modalData, 
    selectedPost, 
    isDeleteSelected, 
    setDeleteSelected,
    openModal, 
    handleConfirmModal 
  };
};

export default useModal;

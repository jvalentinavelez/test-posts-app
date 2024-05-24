import { Modal, Box, Typography, Button, TextField, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { PostForm } from './PostForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.03)',
  padding: 4,
  borderRadius: '10px'
};

export const PostModal = ({ open, handleClose, action, postData, handleConfirmAction, isDeleteSelected }) => {

  const [formPostData, setFormPostData] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  });

  useEffect(() => {
    if (postData) {
      setFormPostData({
        userId: postData.userId || '',
        id: postData.id || '',
        title: postData.title || '',
        body: postData.body || ''
      });
    } else {
      setFormPostData({ userId: '', id: '', title: '', body: '' });
    }
  }, [postData]);

  const handlePostInput = (event) => {
    const { name, value } = event.target;
    setFormPostData( prevFormPostData => ({ ...prevFormPostData, [name]: value }));
  };

  const handleSubmit = () => {
    handleConfirmAction(formPostData);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {action}
        </Typography>
        <PostForm 
          title = {action}
          postData = {formPostData}
          handleInputChange = {handlePostInput}
          isDeleteSelected = {isDeleteSelected}
        />
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button color="primary" onClick={handleSubmit}>
            Confirm
          </Button>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};


import { Modal, Box, Typography, Button, TextField, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

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

export const PostModal = ({ open, handleClose, title, post, handleConfirm }) => {

  const [formPostData, setFormPostData] = useState({ title: '', body: '' });

  useEffect(() => {
    if (post) {
      setFormPostData({ ...post });
    }
  }, [post]);

  const handlePostInput = (event) => {
    const { name, value } = event.target;
    setFormPostData( prevFormPostData => ({ ...prevFormPostData, [name]: value }));
  };

  const handleSubmit = () => {
    handleConfirm(post.id, formPostData);
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
          {title}
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                  label="User ID"
                  name="userId"
                  value={formPostData.userId}
                  disabled 
                  fullWidth
                />
              </Grid>
              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                  label = "Title"
                  name = "title"
                  value={formPostData.title}
                  onChange={handlePostInput}
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                  label = "Body"
                  name = "body"
                  value={formPostData.body}
                  onChange={handlePostInput}
                  multiline
                  fullWidth
                />
              </Grid>
          </Grid>
        </form>
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

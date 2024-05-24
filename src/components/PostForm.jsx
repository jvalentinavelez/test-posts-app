import { Grid, TextField } from "@mui/material"

export const PostForm = ({title, postData, handleInputChange, isDeleteSelected}) => {
  return (
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={ 6 } sx={{ mt: 2}}>
            <TextField
              label="User ID"
              name="userId"
              value={postData.userId}
              disabled 
              fullWidth
            />
          </Grid>
          {title !== 'Create Post' &&( 
            <Grid item xs={ 6 } sx={{ mt: 2 }}>
              <TextField
                label="id"
                name="id"
                value={postData.id}
                disabled 
                fullWidth
              />
            </Grid> 
          )}
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label = "Title"
              name = "title"
              value={postData.title}
              onChange={handleInputChange}
              multiline
              fullWidth
              disabled={isDeleteSelected}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label = "Body"
              name = "body"
              value={postData.body}
              onChange={handleInputChange}
              multiline
              fullWidth
              disabled={isDeleteSelected}
            />
          </Grid>
        </Grid>
      </form>
  )
}
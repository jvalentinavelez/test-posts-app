import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types'
import { PostsTableColumns } from "./PostsTableColumns";
import { usePosts } from '../hooks/PostsContext';
import PostModal from "./PostModal";

const PostsTable = ( ) => {

      const {
        posts,
        selectedPost,
        handleAddPost,
        handleEditPost,
        handleDeletePost,        
        modalOpen,
        setModalOpen,
        openModal,
        modalData,
        isDeleteSelected,
        handleConfirmModal
    } = usePosts();

    const tableData = posts.map(post => ({
        userId: post.userId, 
        id: post.id, 
        title: post.title,
        body: post.body
    }));

    const options = {
        selectableRows: 'none',
        responsive: 'vertical',
        customToolbar: () => (
            <IconButton 
                color="primary" 
                aria-label="edit" 
                onClick={ 
                        () => openModal('Create Post', { userId: 1, title: '', body: '' }, handleAddPost)                         
                }
            >
                <AddIcon />
            </IconButton> 
        ),
    };

    const columns = PostsTableColumns(
        { 
            posts: posts, 
            onEditAction : (post) => openModal('Edit Post', post, handleEditPost),
            onDeleteAction : (postId) => openModal('Delete Post', postId, handleDeletePost)
        }
    )

    return (
        <>
            <MUIDataTable
                title={"Users Posts"}
                columns={columns}
                data={tableData}
                options={options}
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

// PostsTable.propTypes = {
//     posts: PropTypes.array.isRequired,
//     onAddAction: PropTypes.func.isRequired,
//     onEditAction: PropTypes.func.isRequired,
//     onDeleteAction: PropTypes.func.isRequired
// }

export default PostsTable
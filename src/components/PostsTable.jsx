import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types'
import { PostsTableColumns } from "./PostsTableColumns";


const PostsTable = ( {posts, onAddAction, onEditAction, onDeleteAction} ) => {

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
                onClick={ () => {
                        onAddAction()
                    }                           
                }
            >
                <AddIcon />
            </IconButton> 
        ),
    };

    const columns = PostsTableColumns(
        { 
            posts: posts, 
            onEditAction: onEditAction, 
            onDeleteAction: onDeleteAction 
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
        </>
    )

}

PostsTable.propTypes = {
    posts: PropTypes.array.isRequired,
    onAddAction: PropTypes.func.isRequired,
    onEditAction: PropTypes.func.isRequired,
    onDeleteAction: PropTypes.func.isRequired
}

export default PostsTable
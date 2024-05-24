import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const PostsTableColumns = ({posts, onEditAction, onDeleteAction}) => {

    const columns = 
    
        [
        {
            name: "userId",
            label: "Userid",
            editable: true,
            options: {
                filter: true,
                sort: true,
                editable: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div style={{ textAlign: 'center' }}>{value}</div>
                    );
                }
            }
        },
        {   
            name: "id",
            label: "Id",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div style={{ textAlign: 'center' }}>{value}</div>
                    );
                }
            }
        },
        {   
            name: "title",
            label: "Title",
            options: {
                filter: false,
                sort: false,
            }
        },
        {   
            name: "body",
            label: "Body",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "Actions",
                options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta) => {
                    const postId = tableMeta.rowData[1];
                    const post = posts.find(post => post.id === postId)
                    return (
                        <>
                            <IconButton 
                                aria-label="edit" 
                                onClick={ () => {
                                    onEditAction(post)
                                    }                           
                                }>
                                <EditIcon />
                            </IconButton> 
                            <IconButton 
                                aria-label="delete" 
                                onClick={ () => {
                                    onDeleteAction(postId)
                                    }
                                }>
                                <DeleteIcon />
                            </IconButton>
                        </>               
                    );
                }
            }
        }
    ]
    
    return columns;
}

import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const PostsTable = ( {posts, onEditPost} ) => {

    const columns = [

        {
            name: "userId",
            label: "Userid",
            editable: true,
            options: {
                filter: true,
                sort: true,
                editable: true
            }
        },
        {   
            name: "id",
            label: "Id",
            options: {
                filter: true,
                sort: true,
            }
        },
        {   
            name: "title",
            label: "Title",
            options: {
                filter: true,
                sort: false,
            }
        },
        {   
            name: "body",
            label: "Body",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Actions",
            options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                const postId = tableMeta.rowData[1];
                const post = posts.find(post => post.id === postId)
                return (
                    <>
                        <IconButton 
                            color="primary" 
                            aria-label="edit" 
                            onClick={ () => {
                                onEditPost(post)
                            }                           
                            }>
                            <EditIcon />
                        </IconButton> 
                    </>               
                );
            }
            }
        },
        {
            name: "Delete",
            options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                    <IconButton aria-label="delete" onClick={() => window.alert(`Clicked "Delete" for row ${rowIndex} with dataIndex of ${dataIndex}`)}>
                        <DeleteIcon />
                    </IconButton>
                );
            }
            }
        },
    ]

    const tableData = posts.map(post => ({
        userId: post.userId, 
        id: post.id, 
        title: post.title,
        body: post.body
    }));

    const options = {
        selectableRows: false,
        responsive: 'vertical'
    };

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
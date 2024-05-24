import MUIDataTable from "mui-datatables";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { PostsTableColumns } from "./PostsTableColumns";
import { usePosts } from '../context/PostsContext';
import { PostModal } from "./PostModal";
import useModal from "../hooks/useModal";
import { ThemeProvider, createTheme } from "@mui/material";

export const PostsTable = ( ) => {

    const {
        posts,
        handleAddPost,
        handleEditPost,
        handleDeletePost,        
    } = usePosts();

    const { modalOpen, setModalOpen, selectedPost, modalData, isDeleteSelected, openModal, handleConfirmModal } = useModal();


    const tableData = posts.map(post => ({
        userId: post.userId, 
        id: post.id, 
        title: post.title,
        body: post.body
    }));

    const options = {
        print: false,
        download: false,
        fixedHeader: true,
        selectableRows: 'none',
        responsive: 'simple',
        rowsPerPageOptions: [10, 20, 50, 100],
        customToolbar: () => (
            <IconButton 
                aria-label="edit" 
                onClick={ 
                        () => openModal('Create Post', { userId: 1, title: '', body: '' }, handleAddPost)                         
                }
            >
                <AddIcon />
            </IconButton> 
        ),
    };

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#1F618D', 
            },
        },
        typography: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 15,
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    h6: {
                        fontFamily: 'Montserrat, sans-serif', 
                        fontSize: 24,
                        fontWeight: 300
                    },
                },
            },
            MuiToolbar: {
                styleOverrides:{
                    root: {
                        backgroundColor: "#A9CCE3",                    
                    }
                }
            }, 
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#D4E6F1',
                    },
                },   
            },
            MUIDataTableHeadCell: {
                styleOverrides: {
                    fixedHeader: { backgroundColor: "transparent" },
                    root: {
                        textAlign: 'center',
                    },
                },
            },
            MuiTableFooter: {
                styleOverrides:{
                root: {
                    backgroundColor: "#A9CCE3"
                }
                }
            }, 
        },     
    });

    const columns = PostsTableColumns(
        { 
            posts: posts, 
            onEditAction : (post) => openModal('Edit Post', post, handleEditPost),
            onDeleteAction : (postId) => openModal('Delete Post', postId, handleDeletePost)
        }
    )

    return (
        <>
            <ThemeProvider theme={theme}>
                <MUIDataTable
                    title={"Users Posts"}
                    columns={columns}
                    data={tableData}
                    options={options}
                />
            </ThemeProvider>
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

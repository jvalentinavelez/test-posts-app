import { PostsTable } from "./components";
import { ModalProvider } from "./context/ModalContext";
import { PostsProvider } from "./context/PostsContext";

export const App = () => {

    return (
        <PostsProvider>
            <ModalProvider>
                <PostsTable />
            </ModalProvider>
        </PostsProvider>
    )

}
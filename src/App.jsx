import { PostsTable } from "./components";
import { PostsProvider } from "./context/PostsContext";

export const App = () => {

    return (
        <PostsProvider>
            <PostsTable />
        </PostsProvider>
    )

}
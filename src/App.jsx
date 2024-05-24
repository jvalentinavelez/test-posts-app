import { PostsTable } from "./components/PostsTable";
import { PostsProvider } from "./context/PostsContext";

export const App = () => {

    return (
        <PostsProvider>
            <PostsTable />
        </PostsProvider>
    )

}
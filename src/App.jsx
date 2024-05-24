import { PostsTable } from "./components";
import { PostsProvider } from "./hooks/PostsContext";

export const App = () => {

    return (
        <PostsProvider>
            <PostsTable />
        </PostsProvider>
    )

}
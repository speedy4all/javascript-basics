import PostView from "./components/PostView";
import Albums from "./containers/Albums";
import Posts from "./containers/Posts";
import Todos from "./containers/Todos";
import { PostProvider } from "./contexts/PostsContext";

export const ALBUM_ROUTE = "/albums";
export const SINGLE_POST = "/posts/:id";

const appRoutes = [
  {
    path: ALBUM_ROUTE,
    title: "Albums list",
    noHeader: false,
    permissions: ["READ_ALBUMS", "ADMIN"],
    render: () => <Albums />,
  },
  {
    path: "/todos",
    title: "Todos list",
    noHeader: false,
    permissions: ["READ_TODOS", "ADMIN"],
    render: () => <Todos />,
  },
  {
    path: "/posts",
    title: "Posts list",
    noHeader: false,
    permissions: ["READ_POSTS", "ADMIN"],
    render: (props) => (
      <PostProvider>
        <Posts {...props} />
      </PostProvider>
    ),
  },
  {
    path: SINGLE_POST,
    title: "Post view",
    noHeader: true,
    permissions: ["READ_POSTS", "ADMIN"],
    render: (props) => <PostView {...props} newData />,
  },
  {
    path: "",
    title: "Dashboard",
    permissions: [],
    render: () => "Dashboard",
  },
];

export default appRoutes;

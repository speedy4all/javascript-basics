import PostView from "./components/PostView";
import Albums from "./containers/Albums";
import Posts from "./containers/Posts";
import Todos from "./containers/Todos";
import { PostProvider } from "./contexts/PostsContext";

export const ALBUM_ROUTE = "/albums";
export const SINGLE_POST = "/posts/:idPost";

const appRoutes = [
  {
    path: ALBUM_ROUTE,
    title: "Albums",
    noHeader: false,
    exact: true,
    permissions: ["READ_ALBUMS", "ADMIN"],
    render: (props) => <Albums {...props}/>,
  },
  {
    path: "/todos",
    title: "Todos",
    noHeader: false,
    exact: true,
    permissions: ["READ_TODOS", "ADMIN"],
    render: (props) => <Todos  {...props}/>,
  },
  {
    path: "/posts",
    title: "Posts",
    noHeader: false,
    exact: true,
    permissions: ["READ_POSTS", "ADMIN"],
    render: (props) => (
      <PostProvider>
        <Posts {...props} />
      </PostProvider>
    ),
  },
  {
    path: SINGLE_POST,
    title: "Post",
    noHeader: true,
    exact: true,
    permissions: ["READ_POSTS", "ADMIN"],
    render: (props) => <PostView {...props} newData />,
  },
  {
    path: "",
    title: "Dashboard",
    permissions: [],
    exact: true,
    render: () => "Dashboard",
  },
];

export default appRoutes;

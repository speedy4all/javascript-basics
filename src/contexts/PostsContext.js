import React, { useState, useContext, useMemo }  from 'react'

export const PostsContext = React.createContext();

export function usePosts() {
    return useContext(PostsContext)
}

export function PostProvider({ children}) {
    const [posts, setPosts ] = useState([]);
    const [searchParam, setSearchParam] = useState("");

    const fetchPosts = () =>
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));

    const deletePost = (id) => {
    }

    const filteredPosts = useMemo(() => {
      if (!searchParam) {
        return posts;
      }
      return posts.filter(({ body }) => body.includes(searchParam));
    }, [searchParam, posts]);

    const value = {
        posts,
        filteredPosts,
        searchParam,
        fetchPosts,
        setSearchParam,
        deletePost,
    }

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}

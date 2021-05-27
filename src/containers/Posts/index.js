import React, { useCallback, useEffect, useMemo, useState } from "react";
import  { connect } from 'react-redux'

import PostsView from "../../components/PostsView";
import SearchView from "../../components/SearchView";

import { setPosts, setLoadingFlag } from '../../actions/posts';
import { setError } from '../../actions/error';

let Posts = (props) => {
  const { posts, error, isLoading } = props;
  const [searchParam, setSearchParam] = useState("");

  const fetchPosts = () => {
    props.dispatchSetLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          props.dispatchSetPosts(data)
          props.dispatchSetLoading(false);

          // simulare eroare
          // setTimeout(() => {
          //   props.dispatchSetError({
          //     code: 400,
          //     message: 'Eroare 400'
          //   })
          // }, 5000)

        })
  };

  useEffect(() => {

    if (!searchParam || !isLoading) {
      fetchPosts();
    }
  }, [searchParam]);

  const filteredPosts = useMemo(() => {
    if (!searchParam) {
      return posts;
    }
    return posts.filter(({ body }) => body.includes(searchParam));
  }, [searchParam, posts, !isLoading]);

  let renderPosts = <PostsView posts={filteredPosts} />;
  if(isLoading) {
    renderPosts = <div>Pagina se incarca!</div>
  }
  if(error?.message) {
    renderPosts = <div>{error.message}</div>
  }

  return (
    <>
      <SearchView search={searchParam} setSearch={setSearchParam} />
      {renderPosts}
    </>
  );
}

Posts.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  // "state" - este state-ul aplicatiei (redux)
  // ownProps - este props-urile componentei
  // console.log({state, ownProps});
  return {
    posts: state.posts.list,
    error: state.error,
    isLoading: state.posts.loading,
  }
}

const mapDispatchToProps = {
  dispatchSetPosts: setPosts,
  dispatchSetError: setError,
  dispatchSetLoading: setLoadingFlag,
}

Posts = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default Posts




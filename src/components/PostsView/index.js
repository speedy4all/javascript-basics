import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Grid} from '@material-ui/core';
import PostView from "../PostView";

export default function PostsView({posts}) {
    useEffect(() => {
        console.log("render PostsView list");
    }, [posts]);

    return (
        <Grid container spacing={1}>
            {posts.map((post) => (
                <Grid key={post.id} container item xs={12} md={3}>
                    <PostView  {...post} newData={false}/>
                </Grid>
            ))}
        </Grid>
    );
}

PostsView.propTypes = {
    posts: PropTypes.array.isRequired,
};

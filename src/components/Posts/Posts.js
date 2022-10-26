// create the Form Component

import React from "react";
import Post from "./Post/Post";
import useStyles from './styles'
// For showing the data we need to get the data from the global redux store.
// with the help selector you can do that.
import { useSelector } from "react-redux";



const Posts = () => {

    // After the import register the useSelector as a hook.
    // we are using state.posts since the index.js of reducer is exporting posts.
    const posts = useSelector((state) => state.posts);
    
    const classes = useStyles();
    console.log(posts);

    return(
        <div>
        <h1>Posts</h1>
        <Post></Post>
        <Post></Post>
        </div>
    );
}

export default Posts;
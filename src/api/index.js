//file for calling backend apis
// Use axios to make api calls
import axios from 'axios';

// add the base url for reaching out to the backend.
const url = 'http://localhost:5500/posts';
//calls to backend should be hanled by redux
export const fetchPosts = () => axios.get(url);

//Step1 : For setting up the call to backend
//Register an API for create post. Here you receive the post and then pass the post with the url to the backend
// Step 2: is goto action and create the createPost method
export const createPost = (newPost) =>axios.post(url,newPost);

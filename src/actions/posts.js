//it means you can call api from the api file
import * as api from '../api'
//Create Actions / Action Creators
// We are working on asynchronous data
// For dispatching action you have to use the dispatch hook from react-redux

export const getPosts = () => async(dispatch) => {

    try{
        // try to fetch all data from api. api has fetch posts
        // below pulls the data using fetch posts of api.
        const { data } = await api.fetchPosts();
        // action is an object and type is going to FETCH_ALL
        dispatch({ type : 'FETCH_ALL', payload : data });
    } catch(error) {
        console.log(error.message);
    }
    

}

//Step 2 of creating the method. First register the method in api and now come to action and create the
//actual method.

export const createPost = (post) => async(dispatch) => {
    try { 
        // get the data
        const {data} = await api.createPost(post);
        // dispatch action and then the payload of the data.
        // after this you have to dispatch the action
        dispatch({ type : 'CREATE' , payload:data });

    } catch(error) {
        console.log(error);
    }
}
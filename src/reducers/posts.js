// Reducer is a function is that accepts the state and action
// and based on action type then do some logic


// State always has to have some thing so in the function we set the initial value
// since state is always posts so we replaced the state with the posts.
// REDUCERS:
// These are functions that take the current state and action as arguments and then return a new state result
// (state,action)=> newState
export default (posts = [],action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            //return is the actual payload from api.
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}
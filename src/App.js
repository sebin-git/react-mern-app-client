// Best places to send action is through react hook
import React, { useEffect} from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png'
// import the components created to be used in the central App.js
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
//import App.js styles
import useStyles from './styles'
//import actions for dispatching to useEffect
import { getPosts } from './actions/posts'
// for using redux to react use the hooks from redux. 
// useDispatch : Allows to dispatch Action. Dispatch an action
import { useDispatch } from "react-redux";


const App = () => {
    
    const classes = useStyles();   // use the App.js styles
    // define the hook for dispatch and find a way to dispatch action.
    // best way to dispatch action is through react hooks useEffect
    const dispatch = useDispatch();    

    useEffect(() => {
        // you can use dispatch to dispatch an action
        //No actions deifned yet.
        dispatch(getPosts());

    },[dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant = "h2" align="center">Memories</Typography>
                    <img className = {classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts ></Posts>
                        </Grid>
                            
                        <Grid item xs={12} sm={4}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )

}

export default App;
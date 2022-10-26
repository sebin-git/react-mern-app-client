// create the Form Component

import React, {useState} from "react";
import useStyles from './styles'
import { TextField , Button , Typography , Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';

// Now for sending the actions we need a hook from react redux
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";


const Form =() => {
    
    const [postData,setPostData] = useState ({
        creator: '', title : '' , message : '', tags : '', selectedFile : ''
    });

    const dispatch = useDispatch(); // This allows to dispatch actions. where to dispatch => to Handle Submit
    const classes = useStyles(); // Styles for the form
    // Form Action Submit.
    const handleSubmit = (e) => {
        e.preventDefault(); // this will prevent the default action to take place. Meaning the Submit action wont take place.
        dispatch(createPost(postData));

    } 
    const clear = () => {} // FOR CLEARING THE FORM

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={'${classes.root} ${classes.form}'} 
                onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField  name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData( { ...postData, creator : e.target.value})} fullWidth/>
                <TextField  name="title" variant="outlined" label="Title" fullWidth  value={postData.title} onChange={(e) => setPostData( { ...postData, title : e.target.value})} fullWidth/>
                <TextField  name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData( { ...postData, message : e.target.value})} fullWidth/>
                <TextField  name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData( { ...postData, tags : e.target.value})} fullWidth/>
                <div className={classes.fileInput}>
                    <FileBase>
                        type="file"
                        multiple={false}
                        onDone={ ({base64}) => setPostData({...postData,selectedFile :base64})}
                    </FileBase>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
                </div>
            </form>
        </Paper>
    );
}

export default Form;
import React from 'react';
// import './App.css';
// import Post from './components/Post';
// import ColorBox from './components/ColorBox';
// import ColorBoxFun from './components/ColorBoxFun';
// import TodoList from './components/TodoList';
import Post from './components/Post';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  return (
    // <div className="App">
    //     {/* <Post /> */}
    //     {/* <ColorBoxFun /> */}
    //     {/* <TodoList></TodoList> */}
    //     <Post />
    // </div>

    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Post />
            </Paper>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;

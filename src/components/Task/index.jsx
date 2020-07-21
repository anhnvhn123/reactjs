import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { addTask } from '../../actions/taks';
import { Button, Input, makeStyles } from '@material-ui/core';

Task.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
function Task(props) {
    const classes = useStyles();

    const tasks = useSelector( state => state.task.list);
    const dispatch = useDispatch();

    const handleChangeName = (e) => {
        console.log(e.target.value);
        const body = {
            id : Math.random(),
            title : e.target.value
        }
        const action = addTask(body);
        dispatch(action);
    }
    const handleAddTask = () => {
        const newTask = {
            id : 2,
            title : "Vue js"
        }

        const action = addTask(newTask);
        dispatch(action);
    }


    return (
        <div>
            <h2>Demo Redux</h2>
                <form className={classes.root} noValidate autoComplete="off">
                <Input 
                    placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }}
                    onChange = {handleChangeName}
                />
                <Button variant="contained" color="primary" onClick={handleAddTask}>ADD TASK</Button>
                <TaskList taskList = {tasks}/>
            </form>
        </div>
    );
}

export default Task;
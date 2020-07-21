import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function TaskList(props) {
    const dataTask = props.taskList;
    const classes = useStyles();

    return (
        <List className={classes.root}>
        {dataTask.map((value, index) => {
            return (
            <ListItem key={index} role={undefined} dense button >
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': index }}
                />
                </ListItemIcon>
                <ListItemText  primary={value.title} />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    {/* <CommentIcon /> */}
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            );
        })}
        </List>
    );
}

export default TaskList;
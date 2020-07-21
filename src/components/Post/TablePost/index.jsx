import React from 'react';
// import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
// Table.propTypes = {
    
// };

function TablePost(props) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Stt</TableCell>
                    <TableCell>userId</TableCell>
                    <TableCell align="center">title</TableCell>
                    <TableCell align="center">Body</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.rows.map((row, index) => (
                    <TableRow key={row.id}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell component="th" scope="row">{row.userId}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.body}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
    
}

export default TablePost;
import React, {useState, useCallback } from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {myState} from '../../PubSub/pub-sub'


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

export default props => {
    const classes = useStyles();

    function filter(name, calories, fat, carbs, protein) {
        return name.toLowerCase().includes(props.searchData.title.toLowerCase());
    }

    function createData(title, description, user, up_votes, down_votes) {
        if (filter(title, description, user, up_votes, down_votes)) {
            return (
                <StyledTableRow key={title}>
                    <StyledTableCell>{title}</StyledTableCell>
                    < StyledTableCell>{description}</StyledTableCell>
                    <StyledTableCell>{user}</StyledTableCell>
                    <StyledTableCell>{up_votes}</StyledTableCell>
                    <StyledTableCell>{down_votes}</StyledTableCell>
                </StyledTableRow>
            )
        }
    }

    const rows = myState.rows.map(
        obj => createData(obj.title, obj.description, obj.user, obj.up_votes, obj.down_votes)
    );

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell>User</StyledTableCell>
                        <StyledTableCell>Up Votes</StyledTableCell>
                        <StyledTableCell>Down Votes</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (row))}
                </TableBody>
            </Table>
        </Paper>
    );
}

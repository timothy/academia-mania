import React, {useState, useCallback} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {Paper, TableRow, TableHead, TableCell, TableBody, Table, Badge, Fab} from '@material-ui/core'
import {myState} from '../../PubSub/pub-sub'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

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
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(0, 2),
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default props => {
    const classes = useStyles();


    let upVote = (id) => {
        let objIndex = myState.posts.findIndex((obj => obj.id == id));
        return (
            <Fab color="primary" aria-label="add" className={classes.fab}
                 onClick={() => { console.log(id, myState.posts[objIndex]);
                     myState.posts[objIndex].up_vote++;
                 }}>
            <Badge className={classes.margin} badgeContent={myState.posts[objIndex].up_vote} color="primary"><
                ThumbUpIcon onClick={() => {
                    console.log(id, myState.posts[objIndex]);
                myState.posts[objIndex].up_vote++;
            }}> </ThumbUpIcon>
            </Badge>
            </Fab>
        )
    };

    let downVote = (id) => {
        let objIndex = myState.posts.findIndex((obj => obj.id == id));
        return (
            <Fab color="primary" aria-label="add" className={classes.fab}
                 onClick={() => { console.log(id, myState.posts[objIndex]);
                     myState.posts[objIndex].down_vote++;
                 }}>
                <Badge className={classes.margin} badgeContent={myState.posts[objIndex].down_vote} color="primary"><
                    ThumbDownIcon> </ThumbDownIcon>
                </Badge>
            </Fab>
        )
    };

    function filter(name, calories, fat, carbs, protein) {
        return name.toLowerCase().includes(props.searchData.title.toLowerCase());
    }

    function createData(title, description, user, up_votes, down_votes, id) {
        if (filter(title, description, user, up_votes, down_votes)) {
            return (
                <StyledTableRow key={id}>
                    <StyledTableCell>{title}</StyledTableCell>
                    < StyledTableCell>{description}</StyledTableCell>
                    <StyledTableCell>{user}</StyledTableCell>
                    <StyledTableCell>{upVote(id)}</StyledTableCell>
                    <StyledTableCell>{downVote(id)}</StyledTableCell>
                </StyledTableRow>
            )
        }
    }

    const rows = myState.posts.map(
        obj => createData(obj.title, obj.description, obj.user, obj.up_votes, obj.down_votes, obj.id)
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

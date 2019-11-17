import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {Paper, TableRow, TableHead, TableCell, TableBody, Table, Badge, Fab} from '@material-ui/core'
import {myState} from '../../PubSub/pub-sub'
import { useHistory } from "react-router-dom";

import {ThumbUp as ThumbUpIcon,
        ThumbDown as ThumbDownIcon} from '@material-ui/icons';

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

    let history = useHistory();
    let [postState, setPostState] = useState(myState.posts);// why does setPostState not update badge count???? or re-render component???
    let upVote = (id) => {
        let objIndex = myState.posts.findIndex((obj => obj.id == id));
        return (
            <Fab key={"upVote4309lk" + id} color="primary" aria-label="add" className={classes.fab}
                 onClick={() => {
                     myState.posts[objIndex].up_vote++;
                     setPostState([...myState.posts]);
                 }}>
                <Badge key={"Ubadge" + objIndex} className={classes.margin} badgeContent={postState[objIndex].up_vote}
                       color="primary"><
                    ThumbUpIcon> </ThumbUpIcon>
                </Badge>
            </Fab>
        )
    };
    let downVote = (id) => {
        let objIndex = myState.posts.findIndex((obj => obj.id == id));
        return (
            <Fab key={"downVote0940v" + id} color="primary" aria-label="add" className={classes.fab}
                 onClick={() => {
                     myState.posts[objIndex].down_vote++;
                     setPostState([...myState.posts]);
                 }}>
                <Badge className={classes.margin} badgeContent={myState.posts[objIndex].down_vote} color="primary"><
                    ThumbDownIcon> </ThumbDownIcon>
                </Badge>
            </Fab>
        )
    };

    function filter(name) {
        return name.toLowerCase().includes(props.searchData.title.toLowerCase());
    }

    function createData(title, description, user, up_votes, down_votes, id) {
        if (filter(title, description, user, up_votes, down_votes)) {
            function handleCLick() {history.push('/viewpost');}
            return (
                <StyledTableRow key={id + "tableKey"}>
                    <StyledTableCell onClick={handleCLick}>{title}</StyledTableCell>
                    < StyledTableCell onClick={handleCLick}>{description}</StyledTableCell>
                    <StyledTableCell onClick={handleCLick}>{user}</StyledTableCell>
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

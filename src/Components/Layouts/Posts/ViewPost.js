import React from 'react';
import Box from '@material-ui/core/Box';
import {Link, useParams} from "react-router-dom";
import {myState} from '../../../PubSub/pub-sub';
import 'medium-draft/lib/index.css';
import 'medium-draft/lib/basic.css';
import 'isomorphic-fetch';
import PostReply from './PostReply'

export default props => {
    let id = (useParams().id && myState.posts[useParams().id]) ? useParams().id : 0;

    console.log(id);

    return <div>
        <h1>{myState.posts[id].topic} Post</h1>
        <h2>ID:{id}</h2>
        <Box p={2} bgcolor="background.paper">
            <div dangerouslySetInnerHTML={{__html: myState.posts[id].renderedHTML}}></div>
        </Box>
        {PostReply()}
        <Link to="/">Go to home</Link>
        {console.log(props.match)}
    </div>


}
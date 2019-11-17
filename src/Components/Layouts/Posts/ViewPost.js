import React from 'react';
import {Link, useParams} from "react-router-dom";
import {myState} from '../../../PubSub/pub-sub'

export default props => {
    let {id} = useParams();

    console.log(myState);

    return <div>
        <h1>View Posts Page ID:{id}</h1>
        <div dangerouslySetInnerHTML={{ __html: myState.posts[id].renderedHTML }}></div>
        <Link to="/">Go to home</Link>
        {console.log(props.match)}
    </div>
}


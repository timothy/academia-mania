import React from 'react';
import {Link, useParams} from "react-router-dom";


export default props => {
    let {id} = useParams();

    return <div>
        <h1>View Posts Page ID:{id}</h1>
        <Link to="/">Go to home</Link>
        {console.log(props.match)}
    </div>
}


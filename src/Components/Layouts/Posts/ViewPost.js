import React from 'react';
import {Link} from "react-router-dom";

export default props =>
    <div>
        <h1>View Posts Page</h1>
        <Link to="/">Go to home</Link>
        {console.log(props.match)}
    </div>

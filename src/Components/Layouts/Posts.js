import React from 'react';
import {Link} from "react-router-dom";

export default props =>
    <div>
        {
            console.log(props.match)
        }
        <h1>{props.match.params.id}</h1>
        <button onClick={() => {
            props.history.push('/1');
        }}>
            Footer
        </button>
    </div>

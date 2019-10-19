import React from 'react';
import {Link} from "react-router-dom";

export default props =>
    <div>
        <h1>Body</h1>
        <button onClick={() => {
            props.history.push('/1');
        }}>
            Footer
        </button>
    </div>

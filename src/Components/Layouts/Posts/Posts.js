import React from 'react';
import {Link} from "react-router-dom";
import {MyEditor} from './index'

export default props =>
    <div>
        <h1>post</h1>
        <MyEditor/>
        <button onClick={() => {
            props.history.push('/');
        }}>
            body
        </button>
    </div>

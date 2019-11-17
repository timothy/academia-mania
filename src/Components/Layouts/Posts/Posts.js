import React from 'react';
import {MyEditor} from './index'

export default props =>
    <div>
        <h1>Post</h1>
        <MyEditor/>
        <button onClick={() => {
            props.history.push('/');
            console.log(props, "posts props")
        }}>
            body
        </button>
    </div>

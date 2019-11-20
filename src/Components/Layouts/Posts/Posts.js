import React from 'react';
import { useParams} from "react-router-dom";
import {MyEditor} from './index'

export default props => {
    let {id} = useParams();

    return <div>
        <h1>{id}</h1>
        <MyEditor postType={id.replace("Post", "").trim()}/>
        <button onClick={() => {
            props.history.push('/');
            console.log(props, "posts props")
        }}>
            body
        </button>
    </div>
}
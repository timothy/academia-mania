import React from 'react'
import {Button, Container, Comment, Form, Header} from 'semantic-ui-react'
import {myState, stateBind, getState} from '../../../PubSub/pub-sub'
import 'semantic-ui-css/semantic.min.css'

console.log("main area");
let curComment = "";

let handleTextAreaChange = (event) => {
    console.log(curComment);
    curComment = event.target.value;
};

let onClickComment = () =>{

};

const avatar = (url) => {
    return !!url ? (<Comment.Avatar src={url}/>) : "";
};

const createComment = (comment, index) => (
    <Comment key={index}>
        {avatar(comment.avatar)}
        <Comment.Content>
            <Comment.Author as='a'>{comment.author}</Comment.Author>
            <Comment.Metadata>
                <div>{comment.metadata}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.text}</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>
);

const commentReply = (reply) => {
    return !!reply ? (
        <Comment.Group>
            {reply.map((obj, index) => createComment(obj, index))}
        </Comment.Group>
    ) : ""
};

const createCommentWithReply = (comment, index) => (
    <Comment key={index}>
        {avatar(comment.avatar)}
        <Comment.Content>
            <Comment.Author as='a'>{comment.author}</Comment.Author>
            <Comment.Metadata>
                <div>{comment.metadata}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.text}</Comment.Text>
            <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        {commentReply(comment.group)}
    </Comment>
);

let comments = getState('comments')[0];
const PostReply = () => <Container style={{margin: 20}}>

    <Comment.Group>
        <Header as='h3' dividing>
            {comments.header}
        </Header>
        {console.log("inside of posts", comments)}
        {
            comments.comments.map((obj, index) => {
                console.log(obj.comments, "HERE!!!!");
                return createCommentWithReply(obj, index)
            })
        }

        <Form reply>
            <Form.TextArea onChange={handleTextAreaChange}/>
            <Button onClick={onClickComment} content='Add Reply' labelPosition='left' icon='edit' primary/>
        </Form>
    </Comment.Group>
</Container>;


export default PostReply
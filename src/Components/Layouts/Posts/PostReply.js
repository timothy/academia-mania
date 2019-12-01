import React, {useState} from 'react'
import {Button, Container, Comment, Form, Header} from 'semantic-ui-react'
import { updateState, getState} from '../../../PubSub/pub-sub'
import 'semantic-ui-css/semantic.min.css'

let curComment = "";

let handleTextAreaChange = (event) => {
    curComment = event.target.value;
};

const loginFooData = {
    avatar: "/doctoravatar.png",
    author: "Dr. Dan",
    metadata: "Just Now",
    text: "",
    actions: [{action: "Reply"}],
    group: []
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

const PostReply = () => {
    let [comments, setComments] = useState(getState('comments')[0]);

    const onClickComment = () => {
        loginFooData.text = curComment;
        let tmpComments = JSON.parse(JSON.stringify(comments));
        tmpComments.comments.push(loginFooData);
        setComments(tmpComments);
        updateState("comments", [comments]);
    };

    return <Container style={{margin: 20}}>

        <Comment.Group>
            <Header as='h3' dividing>
                {comments.header}
            </Header>
            {
                comments.comments.map((obj, index) => {
                    return createCommentWithReply(obj, index)
                })
            }

            <Form reply>
                <Form.TextArea onChange={handleTextAreaChange}/>
                <Button onClick={onClickComment} content='Add Reply' labelPosition='left' icon='edit' primary/>
            </Form>
        </Comment.Group>
    </Container>
};


export default PostReply
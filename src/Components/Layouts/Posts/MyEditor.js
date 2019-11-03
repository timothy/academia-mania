import React, {useState} from 'react';

import {createEditorState, Editor} from 'medium-draft';
import 'isomorphic-fetch';
import 'medium-draft/lib/index.css';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import mediumDraftExporter from 'medium-draft/lib/exporter';
import {addToState} from '../../../PubSub/pub-sub'

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default props => {
    const classes = useStyles();
    let [editorState, updateEditorState] = useState(createEditorState());
    //let [editorState, updateEditorState] = useState(createEditorState(data));// with content
    const saveBtn = () => {
        const renderedHTML = mediumDraftExporter(editorState.getCurrentContent());
        addToState("rows", {
            renderedHTML: renderedHTML,
            title: "Test",
            description:"This is a long description. It is meant to show what someone might put to give an overview of what they did.",
            user: "Timothy",
            up_votes: 0,
            down_votes: 0,
            topic:"",
            id:0
        });
        console.log(renderedHTML.toString());
        console.log("saveBtn was clicked")
    };

    const renderSaveBtn = (
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={saveBtn}>
            <SaveAltIcon/>
        </Fab>
    );

    const onChange = (editorState) => {
        updateEditorState(editorState);
    };

    const refsEditor = React.createRef();

    const componentDidMount = () => {
        refsEditor.current.focus();
    };



    return (
        <div>
            <Editor ref={refsEditor}
                    editorState={editorState}
                    onChange={onChange}
                    sideButtons={props.sideButtons}>
            </Editor>
            {renderSaveBtn}
        </div>

    );
}

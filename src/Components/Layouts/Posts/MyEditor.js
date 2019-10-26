import React, {useState, useEffect} from 'react';

import {ImageSideButton, Block, addNewBlock, createEditorState, Editor} from 'medium-draft';
import 'isomorphic-fetch';
import 'medium-draft/lib/index.css';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import mediumDraftExporter from 'medium-draft/lib/exporter';

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

    const renderSaveBtn = (
        <Fab color="primary" aria-label="add" className={classes.fab}>
            <SaveAltIcon/>
        </Fab>
    );

    let [editorState, updateEditorState] = useState(createEditorState());
    //let [editorState, updateEditorState] = useState(createEditorState(data));// with content

    const onChange = (editorState) => {
        updateEditorState(editorState);
    };

    const refsEditor = React.createRef();

    const componentDidMount = () => {
        refsEditor.current.focus();
    };

    const saveBtn = () => {
        const renderedHTML = mediumDraftExporter(editorState.getCurrentContent());

        console.log(renderedHTML.toString());
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
import React from 'react';
import {
    ImageSideButton,
    Block,
    addNewBlock,
    createEditorState,
    Editor,
} from 'medium-draft';
import 'isomorphic-fetch';
import 'medium-draft/lib/index.css';


// Now pass this component instead of default prop to Editor example above.
class MyEditor extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            editorState: createEditorState(), // for empty content
        };

        /*
        this.state = {
          editorState: createEditorState(data), // with content
        };
        */

        this.onChange = (editorState) => {
            this.setState({ editorState });
        };

        this.refsEditor = React.createRef()

    }

    componentDidMount() {
        this.refsEditor.current.focus();
    }

    render() {
        const { editorState } = this.state;
        return (
            <Editor
                ref={this.refsEditor}
                editorState={editorState}
                onChange={this.onChange}
                sideButtons={this.sideButtons}
            />
        );
    }
}
export default MyEditor;

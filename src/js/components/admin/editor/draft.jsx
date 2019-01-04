import React from 'react';
import { Editor, EditorState, RichUtils, BLOCK_TYPE } from 'draft-js';

const styleEditor = {
    background: 'white',
    width: '80%',
    height: '1000px',
    borderRadius: '3px'
}
class RichEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            // return 'handled';
            console.log('handled');
        } else {
            console.log('not-handled');

        }
        // return 'not-handled';
    }
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }
    render() {
        return (
            <div >
                <div className="toolbar">
                    <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                    <button onClick={this._onItalicClick.bind(this)}>Italic</button>
                </div>
                <div style={styleEditor}>
                    <Editor
                        editorState={this.state.editorState} onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                </div>

            </div>
        );
    }
}

export default RichEditor;
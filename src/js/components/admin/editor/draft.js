import React from 'react';
import './../../../../../node_modules/draft-js/dist/Draft.css';
import './../../../../../node_modules/draftail/dist/draftail.css';
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from './../../../../../node_modules/draftail/dist/draftail.cjs';

import { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    const initial = JSON.parse(sessionStorage.getItem("draftail:content"));
    const onSave = (content) => {
      // console.log("saving", content)
      sessionStorage.setItem("draftail:content", JSON.stringify(content))
    };
    return (
      <div onClick={this.focusEditor}>
        <DraftailEditor
          rawContentState={initial || null}
          onSave={onSave}
          blockTypes={[
            { type: BLOCK_TYPE.HEADER_ONE },{ type: BLOCK_TYPE.HEADER_TWO },{ type: BLOCK_TYPE.HEADER_THREE }, 
            { type: BLOCK_TYPE.HEADER_FOUR },{ type: BLOCK_TYPE.HEADER_FIVE },{ type: BLOCK_TYPE.HEADER_SIX },
            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM }, {type : BLOCK_TYPE.BLOCKQUOTE}, { type: BLOCK_TYPE.ORDERED_LIST_ITEM },
            { type: BLOCK_TYPE.UNSTYLED }
          ]}
          inlineStyles={[
            { type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }, { type: INLINE_STYLE.KEYBOARD },
            { type: INLINE_STYLE.QUOTATION }, { type: INLINE_STYLE.UNDERLINE }
          ]}
        />
      </div>
    );
  }
}

const styles = {
  editor: {
    border: '1px solid gray',
    minHeight: '6em',
    background: 'white'
  }
};

export default MyEditor;
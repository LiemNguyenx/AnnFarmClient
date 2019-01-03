import React from 'react';
import './../../../../../node_modules/draft-js/dist/Draft.css';
import './../../../../../node_modules/draftail/dist/draftail.css'

import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "./../../../../../node_modules/draftail/dist/draftail.cjs"

const initial = JSON.parse(sessionStorage.getItem("draftail:content"))

const onSave = (content) => {
  console.log("saving", content)
  sessionStorage.setItem("draftail:content", JSON.stringify(content))
}

class MyEditor extends React.Component {
  render() {
    return (
      <DraftailEditor
        rawContentState={initial || null}
        onSave={onSave}

        inlineStyles={[
          { type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }, {type: INLINE_STYLE.UNDERLINE},
          { type: INLINE_STYLE.DELETE }, { type: INLINE_STYLE.INSERT }, { type: INLINE_STYLE.MARK },
          { type: INLINE_STYLE.KEYBOARD }, { type: INLINE_STYLE.QUOTATION }, { type: INLINE_STYLE.SAMPLE },
          { type: INLINE_STYLE.SMALL }, { type: INLINE_STYLE.STRIKETHROUGH }, { type: INLINE_STYLE.SUBSCRIPT },
        ]}
        blockTypes={[
          { type: BLOCK_TYPE.HEADER_ONE }, { type: BLOCK_TYPE.HEADER_TWO }, { type: BLOCK_TYPE.HEADER_THREE },
          { type: BLOCK_TYPE.HEADER_FOUR }, { type: BLOCK_TYPE.HEADER_FIVE }, { type: BLOCK_TYPE.HEADER_SIX },
          { type: BLOCK_TYPE.UNORDERED_LIST_ITEM }, { type: BLOCK_TYPE.BLOCKQUOTE },
          { type: BLOCK_TYPE.ORDERED_LIST_ITEM }, { type: BLOCK_TYPE.UNSTYLED }
        ]}
      />
    );
  }
}

export default MyEditor;
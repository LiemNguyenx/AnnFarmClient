import React from 'react';
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import ImageSource from './image-source.jsx'
import ImageBlock from './image-block.jsx'
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from "draftail"

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
          { type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }, { type: INLINE_STYLE.UNDERLINE },
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
        entityTypes={[
          // { type: ENTITY_TYPE.LINK },
          {
            type: ENTITY_TYPE.IMAGE,
            description: 'Image',
            icon: [
              "M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z",
              "M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z",
              "M896 832h-768v-128l224-384 256 320h64l224-192z",
            ],
            source: ImageSource,
            block: ImageBlock,
          }
        ]}
      />
    );
  }
}

export default MyEditor;
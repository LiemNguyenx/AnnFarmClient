import { Editor, EditorState, RichUtils } from 'draft-js';

const INLINE = {
    BOLD
}
const BOLD = (style) => {

}

function _onInlineStyleClick(style) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
}
const INLINE_STYLE = {
    BOLD: 'BOLD'
}
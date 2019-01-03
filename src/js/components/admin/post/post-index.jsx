import React, {Component} from 'react'
import MyEditor from './../editor/draft.jsx'

class PostIndex extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MyEditor />
        );
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../users/List.jsx'
import ConnectedForm from '../users/Form.jsx'

const mapStateToProps = state => {
   return { users: state.users }
}

class App extends Component {
   render() {
      return (
         <div className="container">
            <div>
               <div>
                  <List />
               </div><br/><br/>
               <div>
                  <ConnectedForm />
               </div>
            </div>
         </div>
      );
   }
}

export default connect(mapStateToProps)(App);
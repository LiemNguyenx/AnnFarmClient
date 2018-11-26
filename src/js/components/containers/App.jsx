import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return { users: state.users }
}
class App extends Component{
   constructor(users){
      super(users);
   }
   render(){
      return(
         <div>
            {
               this.props.users.map(
                  (e,index) => (
                     <div key={index}>
                        ID: {e}
                     </div>
                  )
               )
            }
         </div>
      );
   }
}
// const App = ({ users }) => (
//    <div>
//       Id: {users[0]}
//       Pass: {users[0]}
//    </div>
// )
export default connect(mapStateToProps)(App);
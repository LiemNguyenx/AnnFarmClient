import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../users/Login.jsx'
import Form from '../users/Form.jsx'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import  PrivateRoute  from './../PrivateRoute.jsx';


const mapStateToProps = state => {
   return state 
}

class App extends Component {
   render() {
      return (
         <div className="container">
            <div>
               {/* <PrivateRoute exact path="/" component={Form} /> */}
               <Route path='/login' component={Login} />
            </div>
         </div>
      );
   }
}

export default withRouter(connect(mapStateToProps)(App));

// const Index = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;

// const App = () => (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about/">About</Link>
//           </li>
//           <li>
//             <Link to="/users/">Users</Link>
//           </li>
//         </ul>
//       </nav>

//       <Route path="/" exact component={About} />
//       <Route path="/about/" component={Index} />
//       <Route path="/users/" component={Users} />
//     </div>

// );
// export default App;
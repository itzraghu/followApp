import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Loader from "./components/loader";
import Login from "./components/login";
import SignUp from "./components/signup";
import Admin from "./components/Admin";
import AdminRoutes from "./AdminRoutes";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    return (
      <Router>
      <Loader display="none" />

      <Route exact path='/' exact component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/admin" component={Admin} />


      <AdminRoutes />
      
      </Router>
      );
    }
  }

  export default App;

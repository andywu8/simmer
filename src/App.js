import './App.css';
import React from 'react';
import Routes from './Routes';
import { Link } from "react-router-dom";
import logo from './images/logo.svg';
import { preloadScript } from 'opentok-react';
import userProfile from './images/user_profile.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <>
      <div className="App">
      <div className="navbar">
        <div className="link-container">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/convos">Kitchen Convos</Link>
          <Link className="link" to="/addrecipe">Add Recipe</Link>
          <Link className="link" to="/recipe">Find a Recipe</Link>
          <Link className="link" to="/saved">Saved Recipes</Link>
          <Link className="link" to="/search">Search</Link>
        </div>
        <Link className="link profile-link" to="/profile"><img src={userProfile} alt="User Profile" className="user-profile-img"/></Link>
        <img className="simmer" src={logo} alt="Simmer"/>
      </div>
      <Routes 
        apiKey={this.props.apiKey}
        sessionId={this.props.sessionId}
        token={this.props.token}/>
    </div>
    </>
  );
    }
}

export default preloadScript(App);
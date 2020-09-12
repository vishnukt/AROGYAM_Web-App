import React, { Component } from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import map from './map'
import manage_users from "./manage_users"
import piechart from "./piechart"
import barchart from "./barchart"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './firebase'
 
class App extends Component {
  state = { isSignedIn: false }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => true
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <HashRouter>
          <div>
            <h1>AROGYAM</h1>
            <ul className="header">
              <li><NavLink to="/map">Map</NavLink></li>
              <li><NavLink to="/barchart">Bar Chart</NavLink></li>
              <li><NavLink to="/piechart">Pie Chart</NavLink></li>
              <li><NavLink to="/manage_users">Manage Users</NavLink></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>Welcome {firebase.auth().currentUser.displayName}</li>
              <img alt="profile picture" height="25px" width="25px" src={firebase.auth().currentUser.photoURL}/>
              <li></li>
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            </ul>
          </div>
          <div className="content">
              <Route path="/map" component={map}/>
              <Route path="/barchart" component={barchart}/>
              <Route path="/piechart" component={piechart}/>
              <Route path="/manage_users" component={manage_users}/>
            </div>
        </HashRouter>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}/>
        )}
      </div>
    );
  }
}
 
export default App;
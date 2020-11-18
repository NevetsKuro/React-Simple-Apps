import React from 'react';
import ReactDOM from 'react-dom';
import MainBody from './MainBody';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/popper.min.js';
import 'react-bootstrap/dist/react-bootstrap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Router, Route } from 'react-router';
// import { createBrowserHistory } from 'history';
import history from "./history";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { firebaseApp } from './firebase';
import { Login, Logout } from './components/MyComponent';
// import Logout from './components/MyComponent';
import { logUser } from './actions';
import { combineReducers } from 'redux';
import reminders from './reducers';
import { logReducer, completeGoals, goals } from './reducers';

const rootReducer = combineReducers({
  completeGoals,
  goals,
  reminders,
  logReducer
});

const store = createStore(rootReducer);
console.log(store.getState());

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log('The user is logged in', user);
    store.dispatch(logUser(email));
    Login();// createBrowserHistory.push('/React-Simple-Apps/app')
  } else {
    console.log('The user has logged out', user);
    Logout();
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <Route path="/React-Simple-Apps/app" component={MainBody} />
      <Route path="/React-Simple-Apps/signin" component={SignIn} />
      <Route path="/React-Simple-Apps/signup" component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
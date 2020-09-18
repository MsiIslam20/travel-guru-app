import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PlaceDetails from './components/Places/PlaceDetails';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import HeaderBlack from './components/Header/HeaderBlack';
import SignUp from './components/Login/SignUp';
import SearchPage from './components/SearchPage/SearchPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
          </Route>
          <Route path="/login">
            <HeaderBlack />
            <Login />
          </Route>
          <Route path="/signup">
            <HeaderBlack />
            <SignUp />
          </Route>
          <PrivateRoute path="/search/:id">
            <HeaderBlack />
            <SearchPage />
          </PrivateRoute>
          <Route path="/places/:id">
            <Header></Header>
            <PlaceDetails></PlaceDetails>
          </Route>        
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;

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
import SignUp from './components/Login/SignUp';
import SearchPage from './components/SearchPage/SearchPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/search/:id">
            <SearchPage />
          </PrivateRoute>
          <Route path="/places/:id">
            <PlaceDetails></PlaceDetails>
          </Route>        
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;

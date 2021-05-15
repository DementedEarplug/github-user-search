import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Search Github users
  const searchUsers = async (text) => {
    if (text !== "") {
      setLoading(true);

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data.items);
      setLoading(false);
    }
  };

  //Fetch a single Github User
  const getUserProfile = async (userLogin) => {
    setLoading(true);
    if (userLogin !== "") {
      const res = await axios.get(
        `https://api.github.com/users/${userLogin}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUser(res.data)
      setLoading(false)
    }
  };

  //Fetch a github user's latest 5 repos
  const getUserRepos = async (userLogin) => {
    setLoading(true);
    if (userLogin !== "") {
      const res = await axios.get(
        `https://api.github.com/users/${userLogin}/repos?&direction=desc&sort=updated&per_page=5&direction=desc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setRepos(res.data)
      setLoading(false)
    }
  };

  const clearSearch = async (text) => {
    setUsers([])
    setLoading(false)
  };

  const showAlert = (message, type) => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert}></Alert>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearSearch={clearSearch}
                    showClear={users.length > 0}
                    setAlert={showAlert}
                  />
                  <Users
                    users={users}
                    loading={loading}
                  />
                </Fragment>
              )}
            ></Route>
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getUser={getUserProfile}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

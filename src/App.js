import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

// Context imports
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                {/* Make sure 404/not found page is at the end */}
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

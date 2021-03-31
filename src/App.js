import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // Life cicle method that runs when component mounts.
  // this is where you make your api rquets
  async componentDidMount() {
    this.setState({ loading: false });
    // const res = await axios.get(
    //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    // );
    // this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text) => {
    if (text !== "") {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
    }
  };

  clearSearch = async (text) => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearSearch={this.clearSearch}
                      showClear={this.state.users.length > 0}
                      setAlert={this.setAlert}
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

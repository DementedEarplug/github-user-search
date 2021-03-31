import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
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

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearSearch={this.clearSearch}
            showClear={this.state.users.length > 0}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;

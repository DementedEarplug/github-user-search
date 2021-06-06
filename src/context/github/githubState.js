import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

let githubCliendId;
let githubCLientSecret;

if(process.env.NODE_ENV !=='production')
{
  githubCLientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
  githubCliendId = process.env.REACT_APP_GITHUB_CLIENT_ID
} else {
  githubCLientSecret = process.env.GITHUB_CLIENT_SECRET
  githubCliendId = process.env.GITHUB_CLIENT_ID
}

// This is where the apps actions will live.
// Initial state goes here as well
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Include all the actions
  // Search Github users
  const searchUsers = async (text) => {
    if (text !== "") {
      setLoading();

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubCliendId}&client_secret=${githubCLientSecret}`
      );

      dispatch({ type: SEARCH_USERS, payload: res.data.items });
    }
  };

  // Get User
  //Fetch a single Github User
  const getUserProfile = async (userLogin) => {
    setLoading();
    if (userLogin !== "") {
      const res = await axios.get(
        `https://api.github.com/users/${userLogin}?client_id=${githubCliendId}&client_secret=${githubCLientSecret}`
      );

      dispatch({ type: GET_USER, payload: res.data });
    }
  };

  //Fetch a github user's latest 5 repos
  const getUserRepos = async (userLogin) => {
    setLoading();
    if (userLogin !== "") {
      const res = await axios.get(
        `https://api.github.com/users/${userLogin}/repos?&direction=desc&sort=updated&per_page=5&direction=desc&client_id=${githubCliendId}&client_secret=${githubCLientSecret}`
      );
      
      dispatch({type: GET_REPOS, payload: res.data})
    }
  };

  // Clear users
  const clearSearch = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Return the provider.
  // Pass in to value anything that you want to be available in the entire app.
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearSearch,
        getUserProfile,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

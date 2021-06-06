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
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({type: SEARCH_USERS, payload: res.data.items})
    }
  };

  // Get Repo

  // Clear users

  // Set Loading
  const setLoading = () => dispatch({type: SET_LOADING})

  // Return the provider.
  // Pass in to value anything that you want to be available in the entire app.
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repo,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

import React, { useContext } from "react";
import UserItem from "./UserItem";
import Loading from "../layout/Loading";
import PropTypes from "prop-types";

import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const {loading, users} = githubContext
  if (loading)
    return (
      <Loading />
    );
  else
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem
            key={user.id}
            login={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
          />
        ))}
      </div>
    );
};

//Styling for component
const userStyle = {
  display: " grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;

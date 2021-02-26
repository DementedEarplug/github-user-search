import React from "react";
import UserItem from "./UserItem";
import Loading from "../layout/Loading";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
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

Users.propType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

//Styling for component
const userStyle = {
  display: " grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;

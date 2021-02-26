import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {

  render() {
    const { users } = this.props;
    return (
      <div style={userStyle} >
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
  }
}

//Styling for component
const userStyle = {
  display: ' grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Users;

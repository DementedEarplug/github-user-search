import React, { Component } from "react";
import Loading from "../layout/Loading";

class User extends Component {
  componentDidMount() {
    //* This uses the URL param :login from UserItem and calls the function passed down as a prop passing :login as an argument.
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      // avatar_url,
      // bio,
      // blog,
      login,
      // html_url,
      // followers,
      // public_repos,
      // public_gists,
      // hireable
    } = this.props.user;

    return(this.props.loading ? <Loading /> : <div>{login}</div>);
  }
}

export default User;

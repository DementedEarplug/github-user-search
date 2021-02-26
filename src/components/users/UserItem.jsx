import React, { Component } from "react";

export class UserItem extends Component {
  // //Adding state
  // state = {
  //   id: 1,
  //   login: "mojombo",
  //   avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo",
  // };



  render() {
    //De-structure this.state
    // const { login, avatar_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img
          src={this.props.avatar}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{this.props.login}</h3>
        <div>
          <a href={this.props.url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;

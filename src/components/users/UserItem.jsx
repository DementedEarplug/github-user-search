import React from "react";
import PropTypes from 'prop-types'


const UserItem = (props) => {
  return (
    <div className='card text-center'>
      <img
        src={props.avatar}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{props.login}</h3>
      <div>
        <a href={props.url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.PropTypes = {
  avatar: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default UserItem;

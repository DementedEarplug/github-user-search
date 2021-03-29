import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
  };

  //* This way of writing the "onChange" method allows to use the same method for different input
  //* files by taking advantage of the name property of each field and using it as the key.
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-block btn-dark'
          />
        </form>
        <button
          className='btn btn-light btn-block '
          onClick={this.props.clearSearch}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Search;

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

//context import
import GithubContext from '../../context/github/githubContext'

const Search = ({ setAlert, clearSearch, showClear }) => {
  const githubContext =  useContext(GithubContext)
  
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value );

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(" Please enter a user to search for.", "light");
    } else {
      githubContext.searchUsers(text)
      setText("");
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-block btn-dark'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block ' onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;

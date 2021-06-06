import React, { useState, useContext } from "react";

//context import
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext =  useContext(GithubContext)
  const alertContext =  useContext(AlertContext)

  const {searchUsers, clearSearch, users} = githubContext
  const {setAlert} = alertContext
  
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value );

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(" Please enter a user to search for.", "light");
    } else {
      searchUsers(text)
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
      {(users.length>0) && (
        <button className='btn btn-light btn-block ' onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

// This file decides what will happen to the apps state based on an action.

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
  
    default:
      return state
  }
}

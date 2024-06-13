import { combineReducers } from 'redux';
import {SET_USER,
SET_STATUS ,
SET_PRIVACY,
REMOVE_USER ,
SET_BLOGS ,
SET_GAMES ,
SET_STORE,
SET_BLOGS_PAGE ,
SET_GAMES_PAGE ,
SET_STORE_PAGE } from "../types";
// action types



const initialState = {
  username: null,
  curr_token: null,
  protected_token: null,
  friend_list: [],
  isOnline: false,
  status: {},
  achievments: [],
  site_cache: {
      blogs: {
          data: [],
          currentPage: 1,
          totalPages: 1
      },
      games: {
          data: [],
          currentPage: 1,
          totalPages: 1
      },
      store: {
          data: [],
          currentPage: 1,
          totalPages: 1
      }
  }
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload.username,
        curr_token: action.payload.token,
        protected_token: action.payload.protected_token,
        isOnline: action.payload.isOnline,
        status: action.payload.status,
        achievments: action.payload.achievments,
        friend_list: action.payload.friend_list
      };
    
    case SET_STATUS:
      return {
        ...state,
        status: action.payload.status
      };
    
    case SET_PRIVACY:
      return {
        ...state,
        isOnline: action.payload.isOnline
      };

    case REMOVE_USER:
      return {
        ...state,
        username: null,
        curr_token: null,
        protected_token: null,
        isOnline: false,
        status: {},
        achievments: [],
        friend_list: []
      };
    
    case SET_BLOGS:
      return {
        ...state,
        site_cache: {
          ...state.site_cache,
          blogs: {
            ...state.site_cache.blogs,
            data: action.payload.blogs,
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages
          }
        }
      };
    
    case SET_GAMES:
      return {
        ...state,
        site_cache: {
          ...state.site_cache,
          games: {
            ...state.site_cache.games,
            data: action.payload.games,
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages
          }
        }
      };
    
    case SET_STORE:
      return {
        ...state,
        site_cache: {
          ...state.site_cache,
          store: {
            ...state.site_cache.store,
            data: action.payload.store,
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages
          }
        }
      };

    case SET_BLOGS_PAGE:
      return {
        ...state,
        site_cache: {
          ...state.site_cache,
          blogs: {
            ...state.site_cache.blogs,
            currentPage: action.payload.currentPage
          }
        }
      };
    
    case SET_GAMES_PAGE:
      return {
        ...state,
        site_cache: {
          ...state.site_cache,
          games: {
            ...state.site_cache.games,
            currentPage: action.payload.currentPage
          }
        }
      };

    case SET_STORE_PAGE:
      return {
        ...state,
        site_cache: {
          ...state.site_cache,
          store: {
            ...state.site_cache.store,
            currentPage: action.payload.currentPage
          }
        }
      };

    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer,
});


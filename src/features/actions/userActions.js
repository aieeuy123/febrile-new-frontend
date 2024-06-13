// export const setData = (data) => {
//     return {
//       type: 'SET_DATA',
//       payload: data,
//     };
//   };
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


export const setUser = (payload) => ({ type: SET_USER, payload });
export const setStatus = (payload) => ({ type: SET_STATUS, payload });
export const setPrivacy = (payload) => ({ type: SET_PRIVACY, payload });
export const removeUser = () => ({ type: REMOVE_USER });
export const setBlogs = (payload) => ({ type: SET_BLOGS, payload });
export const setGames = (payload) => ({ type: SET_GAMES, payload });
export const setStore = (payload) => ({ type: SET_STORE, payload });
export const setBlogsPage = (payload) => ({ type: SET_BLOGS_PAGE, payload });
export const setGamesPage = (payload) => ({ type: SET_GAMES_PAGE, payload });
export const setStorePage = (payload) => ({ type: SET_STORE_PAGE, payload });
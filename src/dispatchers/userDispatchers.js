import axios from "axios";
import { setUser } from "../features/actions/userActions";

// operation
// email
// password 


// export const fetchData = () => {
//     return async (dispatch) => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//       const data = await response.json();
//       dispatch(setData(data));
//     };
//   };


export function postLogin(email,password){

    // username: action.payload.username,
    //curr_token: action.payload.token,
    //protected_token: action.payload.protected_token,
    //isOnline: action.payload.isOnline,
    //status: action.payload.status,
    //achievments: action.payload.achievments,
    //friend_list: action.payload.friend_list

    
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3000/api/v2/auth/login");
        const data = await response.json();
        dispatch(setUser(data));
    }

}
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
// import { Provider } from "react-redux";
import cark from "./public/logo.gif"

import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import img2 from "./public/yarasaBolum2.png";
import HomePage from "./pages/HomePage";
import GamePage from './pages/GamePage';
import LoginPage from "./pages/LoginPage";
import StoreMainPage from "./pages/StoreMainPage";
// import { UseSelector } from "react-redux"; eğer protected route eklenirse

function GelistirmeAsamasi(){
  return (<div className="flex items-center justify-center w-screen h-screen" style={{backgroundImage:{img2},backgroundSize:"contain"}}>
    <div className="fixed text-2xl font-semibold top-10 left-20"><Link className="flex items-center space-x-2 text-2xl" to="/"><span class="material-symbols-outlined text-2xl">arrow_back</span><span className="text-2xl">Home</span></Link></div>
    <div className="text-center">
        <img className="inline-block w-10" src={cark} alt="..."/>
        <h1 className="text-2xl font-semibold text-black">404 | We working now ....</h1>
    </div>
  </div>);
}


const router = createBrowserRouter([
  {path:"/",element:<HomePage/>},
  {path:"/store",element:<StoreMainPage/>},
  {path:"/store/games/:gameID",element:<GamePage/>},
  {path:"/store/nft/:nftID",element:<GamePage/>},
  {path:"/login",element:<LoginPage/>},
  {path:"*",element:<GelistirmeAsamasi/>}

]);


export default function App() {
  return (<RouterProvider router={router}/>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> */}
      <App  />
    {/* </PersistGate>
  </Provider> */}
  </React.StrictMode>
);



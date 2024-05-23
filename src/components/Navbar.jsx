import { Link } from "react-router-dom";
import { useState } from "react";
import '../pages/Home.css';

import logo from '../public/logo.gif';
import React from 'react';


export default function Navbar({isBlack}){

     const [mIsOpen,mSetStatus] = useState(false);

     
     return (

          <>
          {!isBlack?
          
          <nav className="flex items-center justify-between px-5 pt-2 md:px-16">
          <div className="flex items-center w-3/4 space-x-3 md:w-1/4">
               <div className="flex items-center justify-center space-x-3 me-1">
                    <img src={logo}alt="logo-febrile-games" className="w-10"/>
                    <h1 className="w-full text-xl font-bold text-black md:text-xl "><Link to='/'>Febrile Games</Link></h1>
                    <span className="hidden text-3xl text-black md:inline">|</span>
               </div>
               <div className="items-center hidden w-2/4 space-x-8 xl:space-x-5 md:flex xl:ps-0 ps-10">
                    <Link className="text-lg font-semibold text-black" to='/'>Home</Link>
                    <Link className="text-lg font-semibold text-black" to='/games'>Games</Link>
                    <Link className="text-lg font-semibold text-black" to='/store'>Store</Link>
               </div>
          </div>
          <div className="items-center justify-end hidden w-1/4 p-4 md:block xl:justify-center"><span className="hidden xl:block"><input className="content-center block w-full p-3 text-black rounded-lg shadow-xl shadow-slate-950 main_i_white " type="text" placeholder="Search..."/></span></div>
          <div className="flex justify-end w-1/4 space-x-5">
               <span className="p-2 text-3xl text-black transition-all xl:hidden material-symbols-outlined main_i_white rounded-xl hover:bg-gray-600">search</span>
               <button className="items-center hidden p-2 font-semibold text-center text-black transition-all shadow-xl shadow-slate-950 main_i_white rounded-xl md:flex hover:bg-gray-600"><Link to="/account"><span class="material-symbols-outlined hidden p-1 md:w-9 md:block ">account_circle</span></Link></button>
               <button className="hidden p-2 transition-all shadow-xl shadow-slate-950 main_i_white rounded-xl md:block hover:bg-gray-600"><Link to="/cart"><span class="material-symbols-outlined md:block hidden text-3xl text-black ">shopping_cart</span></Link></button> 
               <button onClick={()=>{mSetStatus(!mIsOpen)}} className="p-2 transition-all main_i_white rounded-xl hover:bg-gray-600"><span class="material-symbols-outlined text-3xl text-black">menu</span></button>
          </div>
     </nav>:
     <nav className="flex items-center justify-between px-5 pt-2 md:px-16">
     <div className="flex items-center w-3/4 space-x-3 md:w-1/4">
          <div className="flex items-center justify-center space-x-3 me-1">
               <img src={logo}alt="logo-febrile-games" className="w-10"/>
               <h1 className="w-full text-xl font-bold text-white md:text-xl "><Link to='/'>Febrile Games</Link></h1>
               <span className="hidden text-3xl text-white md:inline">|</span>
          </div>
          <div className="items-center hidden w-2/4 space-x-8 xl:space-x-5 md:flex xl:ps-0 ps-10">
               <Link className="text-lg font-semibold text-gray-100" to='/'>Home</Link>
               <Link className="text-lg font-semibold text-gray-100" to='/games'>Games</Link>
               <Link className="text-lg font-semibold text-gray-100" to='/store'>Store</Link>
          </div>
     </div>
     <div className="items-center justify-end hidden w-1/4 p-4 md:block xl:justify-center"><span className="hidden xl:block"><input className="content-center block w-full p-3 text-black rounded-lg main_s " type="text" placeholder="Search..."/></span></div>
     <div className="flex justify-end w-1/4 space-x-5">
          <span className="p-2 text-3xl text-white transition-all xl:hidden material-symbols-outlined main rounded-xl hover:bg-gray-600">search</span>
          <button className="items-center hidden p-2 font-semibold text-center text-white transition-all main rounded-xl md:flex hover:bg-gray-600"><Link to="/account"><span class="material-symbols-outlined hidden p-1 md:w-9 md:block ">account_circle</span></Link></button>
          <button className="hidden p-2 transition-all main rounded-xl md:block hover:bg-gray-600"><Link to="/cart"><span class="material-symbols-outlined md:block hidden text-3xl text-white ">shopping_cart</span></Link></button> 
          <button onClick={()=>{mSetStatus(!mIsOpen)}} className="p-2 transition-all main rounded-xl hover:bg-gray-600"><span class="material-symbols-outlined text-3xl text-white">menu</span></button>
     </div>
</nav>
     
     
     }
         
          
          {/* menu sidebar */}
          {<div style={{opacity:(mIsOpen?1:0),transition:"opacity 0.5s ease-in-out",visibility:(mIsOpen? "visible":"hidden")}} className="absolute z-30 justify-end w-5/6 transition-all shadow-xl right-10 top-10 md:right-10 min-h-32 shadow-zinc-950 bg-zinc-950 sm:w-96 rounded-2xl sidebar">
               <button onClick={()=>{mSetStatus(!mIsOpen)}} className="h-12 p-2 m-2 transition-all bg-gray-900 rounded-xl hover:bg-gray-600"><span class="material-symbols-outlined text-3xl text-white">close</span></button>


               <div className="flex items-center justify-center flex-1 w-full h-full text-center" style={{transition:"opacity 0.5s ease-in-out"}}>
                   
                    <span className="block ">
                         <div className="flex justify-center">
                              
                              <img className="block w-1/5" src={logo} alt="asd" />    
                              
                         </div>
                         <h2 className="my-2 text-2xl font-semibold text-gray-200">FebrileGames.com</h2>
                         <p className="my-2 text-lg font-semibold text-gray-500">Login or Signup for more Features</p>
                         
                    <button className="px-2 py-1 mx-2 my-8 text-xl font-bold text-black transition-all bg-neutral-200 rounded-xl hover:bg-gray-800 hover:text-white"><Link to='/login' >Login</Link></button>  
                    <button className="px-2 py-1 mx-2 my-8 text-xl font-bold text-black transition-all bg-neutral-200 rounded-xl hover:bg-gray-800 hover:text-white"><Link to='/signup' >Signup</Link></button>  
                           
                    </span>
                    
               </div>



          </div>}
          
          </>
     );
}
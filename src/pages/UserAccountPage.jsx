// import Navbar from "../components/Navbar";
import "./ua.css"
import { Link } from "react-router-dom";
import { useState } from "react";











export default function UserAccountPage(){


    const [fl_open, setOpen] = useState(true);

    const fl_list = [{name:"emre123",profile_image:"https://wallpapers.com/images/hd/xbox-profile-pictures-sbtwrkuecwu0q8yv.jpg",isOnline:false,dtime:"10s"},{name:"emre123",profile_image:"https://wallpapers.com/images/hd/xbox-profile-pictures-sbtwrkuecwu0q8yv.jpg",isOnline:true,dtime:"10s"},{name:"emre123",profile_image:"https://wallpapers.com/images/hd/xbox-profile-pictures-sbtwrkuecwu0q8yv.jpg",isOnline:false,dtime:"10s"},{name:"emre123",profile_image:"https://wallpapers.com/images/hd/xbox-profile-pictures-sbtwrkuecwu0q8yv.jpg",isOnline:true,dtime:"10s"},{name:"emre123",profile_image:"https://wallpapers.com/images/hd/xbox-profile-pictures-sbtwrkuecwu0q8yv.jpg",isOnline:true,dtime:"10s"},{name:"emre123",profile_image:"https://wallpapers.com/images/hd/xbox-profile-pictures-sbtwrkuecwu0q8yv.jpg",isOnline:true,dtime:"10s"}];

    return (
    <div className="min-h-screen main___ max-w-screen page1" >
    
        {/* <Navbar isBlack={false}/>    */}
        <div className="absolute z-20 flex w-full p-10 bg-none">
            <Link to="/"><span className="text-3xl text-white material-symbols-outlined bg-none">arrow_back</span></Link>
        </div>
        <div className="flex items-start justify-center w-full p-10 ">
            <span className="w-2/3 p-10 shadow-2xl rounded-xl user_profile_main_div">
                
                <div className="grid-item3 ">
                    
                    <span className="flex space-x-10">
                        <div className="w-32 h-32 bg-white rounded-full">
                            <img className="w-32 h-32 bg-white rounded-full" src="https://img.freepik.com/premium-vector/logo-kid-gamer_573604-730.jpg" alt="" />
                        </div>
                        
                        <span>
                            <h1 className="mt-4 text-2xl font-semibold text-white">KILLBOYY33</h1>
                            <p className="text-sm text-green-600">Online</p>
                            <p className="flex items-center space-x-1 text-sm text-white"><span className="">Add Accounts</span><span className="text-md material-symbols-outlined bg-none">add_circle</span></p>
                        </span>
                        
                    </span>
                    
                    <span className="flex justify-center">
                        <div className="">
                            <button className="block px-20 py-2 my-1 font-normal text-center text-white transition-all bg-gray-800 text-md rounded-xl hover:bg-gray-700 ">Settings</button>
                            <button className="block px-12 py-2 my-1 font-normal text-center text-white transition-all bg-gray-800 text-md rounded-xl hover:bg-gray-700">Customize Profile</button>
                        </div>
                        
                    </span>
                </div>
                <div className="h-screen grid-item3">
                    <div className="p-10">
                        <h1 className="text-2xl font-semibold text-gray-200">Played Games</h1>
                        <div className="w-full mt-10"> 
                            <div className="bg-black grid-item4 rounded-xl">
                                <span>
                                    <img className="rounded-s-xl" src="https://febrilegamesfrontend.onrender.com/static/media/game_candle.7cfbda0001f9cf5e6d8a.png" alt="candle_logo" />
                                </span>
                                <span className="p-5 ">
                                    <h1 className="text-2xl text-white h-1/2">Candle: The First Spark</h1>
                                    <div className="flex items-end h-1/2">
                                        <span className="w-full h-full ">
                                            <p className="text-white text-md">Time Played</p>
                                            <span className="flex items-center justify-end h-4 p-1 mt-1 text-lg text-black bg-gray-200 w-96">%100</span>
                                        </span>
                                    </div>
                                </span>
                                <span className="flex items-center justify-center text-3xl text-white transition-all bg-gray-600 border-gray-600 hover:bg-gray-700 rounded-e-xl bg-none"><Link to="/"><span className="material-symbols-outlined">arrow_forward</span></Link> </span>
                            </div>
                            <div className="mt-5 bg-black grid-item4 rounded-xl">
                                <span>
                                    <img className="rounded-s-xl" src="https://th.bing.com/th/id/OIG3.DVYVOY0dl5yvwTZb92Rf?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="candle_logo" />
                                </span>
                                <span className="p-5 ">
                                    <h1 className="text-2xl text-white h-1/2">Orange Rush: 1</h1>
                                    <div className="flex items-end h-1/2">
                                        <span className="w-full h-full ">
                                            <p className="text-white text-md">Time Played</p>
                                            <span className="flex items-center justify-end w-40 h-4 p-1 mt-1 text-lg text-black bg-gray-200">%40</span>
                                        </span>
                                    </div>
                                </span>
                                <span className="flex items-center justify-center text-3xl text-white transition-all bg-gray-600 border-gray-600 hover:bg-gray-700 rounded-e-xl bg-none"><Link to="/"><span className="material-symbols-outlined">arrow_forward</span></Link> </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <h1 className="text-2xl font-semibold text-gray-200">Achievments</h1>
                        <div className="w-full h-16 mt-10 grid-item5">
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                        </div>
                        <div className="w-full h-16 mt-2 grid-item5">
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                        </div>
                        <div className="flex items-center justify-end w-full mt-2">
                            <span className="text-white">See All</span>
                        </div>  
                        {/* <h1 className="mt-20 text-2xl font-semibold text-gray-200">Friends</h1>
                        <div className="w-full h-16 mt-10 grid-item5">
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                        </div>
                        
                        <div className="w-full h-16 mt-2 grid-item5">
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                            <span className="bg-white rounded-xl"></span>
                        </div>
                        <div className="flex items-center justify-end w-full mt-2">
                            <span className="text-white">See All</span>
                        </div>   */}
                    </div>
                </div>
                       
                
            </span>
            
        </div>  
        {/* fixed bottom-0 block w-1/6 py-1 text-center text-white bg-blue-800 rounded-t-lg right-40 */}
        <div onClick={()=>{setOpen(!fl_open)}} className={fl_open? " w-1/6 py-1 z-20 f_card  text-white transition-all rounded-t-lg  h-88":"   flex justify-center   w-1/6 py-1 z-20  text-white user_profile_main_div f_card rounded-t-lg  hover:bg-gray-700  transition-all"}>
            <h3 className="py-2 text-lg font-semibold text-center grid-item2">
                <span className="flex items-center text-md">Friends</span>
                <span className="flex items-center text-sm">
                    +1 notifications
                </span>
                <span className="flex items-center material-symbols-outlined">{fl_open? "keyboard_arrow_down": "keyboard_arrow_up"}</span>
                
            </h3>
            <span className="grid row-auto gap-10 px-1 justify-content-evenly">
                {fl_open?  fl_list.map((friend,key)=>{

                    if (key === 4){
                        return (<Link to="/friends" className="w-full text-center ">See All</Link>);
                        
                    }
                    if (key >4){
                        return (null);
                    }

                    return (<span className="w-full py-1 transition-all rounded-md user_profile_main_div grid-item hover:bg-gray-700" key={key}>
                        <div className="flex items-center space-x-2"> <span className="flex items-center space-x-2"><span>{<img className="w-8 h-8 rounded-full" src={friend.profile_image} alt="profile_img"/>}</span> <span>{friend.name}</span></span> {friend.isOnline? <span className="block w-3 h-3 bg-green-600 rounded-full"></span>: <span className="block w-3 h-3 bg-red-600 rounded-full"></span>}</div>
                        <Link to={`/friends/${friend.name}`}><div className="text-center material-symbols-outlined">arrow_forward</div></Link>
                       
                    </span>);
                }): null }
            </span>
        </div>
        
    </div>);
};

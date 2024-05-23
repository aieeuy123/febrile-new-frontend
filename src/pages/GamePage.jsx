import Navbar from "../components/Navbar";
import './Home.css';
import { Link } from "react-router-dom";
import { useState,useRef } from "react";
import candle_trailer from '../public/bf_trailer.mp4';
import Collections from "../components/gamePage/collectionComponent";
import GameStatics from "../components/gamePage/gameStaticsComponent";
import GameDescription from "../components/gamePage/gameDescription";
import RatingStatics from "../components/gamePage/gameRatings";
import GameComments from "../components/gamePage/gameComments";
// import {GameTitle} from "../components/gamePage/gameTitle";
import logo from '../public/logo.gif';
import RelaseDate from "../components/gamePage/gameRelaseDate";
import { useScroll,useMotionValueEvent} from "framer-motion";

export default function GamePage(){
  
    const [videoStatus,setVideoStatus] = useState(false);
    const videoRef = useRef(null);
  
    
    
    
    const navRef = useRef(null);
    const navbarRef = useRef(null);
    const titleRef = useRef(null);
    const titleRef2 = useRef(null);
    
    // const mobileBuyButtonRef = useRef(null);




    function handlePlaying(){
        if (videoStatus){
            videoRef.current.pause();
            setVideoStatus(false);
        }
        else{
            videoRef.current.play();
            setVideoStatus(true);

        }
    }

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY,"change", (latest) => {
        console.log("Page scroll: ", latest)
        if (latest>15){
            navbarRef.current.className = "fixed top-0 left-0 z-30 block w-screen pb-2 bg-neutral-900"

        }
        if (latest<15){
            navbarRef.current.className = "fixed top-0 left-0 z-30 block w-screen bg-transparent"

        }
        if (latest> 300){
            navbarRef.current.className = "hidden"
            navRef.current.style.position = "fixed";
            navRef.current.style.top = "0";
            titleRef.current.className = "hidden"
            titleRef2.current.className = "flex items-center justify-between w-full";
            navRef.current.style.left = "0";
            navRef.current.className = "z-20 w-screen p-5 mt-0 text-2xl text-white md:z-20 ps-20 bg-neutral-900 text-start";

        }
        if (latest < 300){
            
            navRef.current.style.position = "relative";
            titleRef.current.className = "z-10 block text-3xl font-semibold text-white"
            titleRef2.current.className = "hidden";
           
            navRef.current.className = "z-10 block text-3xl font-semibold text-white shadow-xl ";

        }
    });
    return (<>
    {/* <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> */}
            
                
                <div className="hidden h-screen lg:block mm">
                    <div className="hidden transition-all shadow-2xl md:block mm" > 
                        <video src={candle_trailer} type={"video/mp4"} ref={videoRef}  loop={true} muted={true} className="absolute md:-top-40 md:-z-30 md:mt-0 " />
                        <div className="min-h-screen min-w-screen mm">
                            <div className="z-50 top-2" id="top" ref={navbarRef}>
                                <Navbar  isBlack={true}/>
                                
                            </div>
                            
                            <div className="hidden w-full h-screen p-20 main_content_game_page md:block -top-10 ">
                                <div className="">
                                    <span className="z-10 flex items-center mt-16 space-x-3 top-2"> 
                                    <div ref={navRef} className="flex items-center">
                                        <h1 ref={titleRef} className="z-10 block text-3xl font-semibold text-white">Candle: Find Your Spark Within</h1>
                                        <span ref={titleRef2} className="hidden">
                                                <div className="flex items-center w-2/3 space-x-2">
                                                    <img src={logo}alt="logo-febrile-games" className="w-5 h-5"/>
                                                    <h1 className="z-10 block text-2xl font-semibold text-white">Candle: Find Your Spark Within</h1>
                                                    <Link ><span class="material-symbols-outlined rounded-full bg-neutral-700">arrow_upward</span></Link>
                                                </div>
                                                <div className="flex justify-end w-1/3 me-10">
                                                    <button className="flex items-center p-1 text-xl font-semibold text-white transition-all bg-red-600 rounded-lg hover:shadow-xl hover:bg-red-800">Play Now<span class="material-symbols-outlined">shopping_bag</span></button>
                                                </div>
                                        </span>
                                    </div>   
                                        
                                        <button className="flex items-center h-10 text-white rounded-full" onClick={()=>{handlePlaying()}}>{videoStatus? <span class="material-symbols-outlined">pause_circle</span>:<span class="material-symbols-outlined">play_circle</span>}</button>
                                
                                        
                                    </span>
                                    <span >
                                        <RelaseDate/>
                                    </span>
                                    
                                    
                                {/* ratings,description */}
                                </div>
                                <div className="inline-block w-full mt-56">
                                    <div className="flex justify-end space-x-10">
                                            <Collections/>
                                            <GameStatics/>
                                            
                                    </div>
                                </div>

                                <div className="flex justify-center w-full mt-10 rounded-lg shadow-xl bg-neutral-950" >
                                    <GameDescription/>
                                    
                                </div>
                                
                                <div className="flex items-center justify-center w-full mt-10 space-x-10" >
                                    <RatingStatics/>
                                    
                                        <GameComments asd={true}/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="block w-full lg:hidden bg-neutral-950" style={{height:"270vh"}}>
                    <div className="sticky top-0 z-40">
                    <Navbar isBlack={true}></Navbar>
                    </div>
                        <div className="my-2">

                                <video src={candle_trailer} type={"video/mp4"} ref={videoRef}  loop={true} muted={true} className="shadow-2xl" />
                                <div className="flex p-4 space-x-2">
                                    <div className="block">
                                        <span className="flex my-2 space-x-2">
                                            <h1 className="block text-xl font-semibold text-white md:text-2xl">Candle: Find Your Spark Within</h1> 
                                            <button className="flex items-center text-white rounded-full " onClick={()=>{handlePlaying()}}>{videoStatus? <span class="material-symbols-outlined">pause_circle</span>:<span class="material-symbols-outlined">play_circle</span>}</button>
                                        </span>
                                        
                                            <RelaseDate/>
                                   
                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full bg-neutral-950 ">
                                        <GameDescription fontSize={true}></GameDescription>
                                </div>
                                <div>
                                    <Collections isMobile={true}/>
                                </div>
                                
                                <div className="p-3">
                                    <h1 className="text-lg font-semibold text-white">Statics</h1>
                                    <div className="py-4 m-3">
                                        <GameStatics/>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <RatingStatics/>
                                </div>
                                <div className="my-4">
                                    
                                    <GameComments/>
                                   
                                </div>
                                <div className="flex justify-center w-full">
                                    <button className="flex items-center px-3 py-4 my-5 text-xl font-semibold text-white transition-all bg-red-600 rounded-lg hover:shadow-xl hover:bg-red-800">Play Now<span class="material-symbols-outlined">shopping_bag</span></button>
                                </div>
                            <div>

                        </div>
                    </div>
                </div>
                </>
            );
};
import "./Home.css";
// import logo from '../public/logo.gif';
import Navbar from "../components/Navbar";
import StoreCarousel from '../components/StoreCarousel';
import MenuStore from '../components/MenuStore';
// import { useScroll,useMotionValueEvent} from "framer-motion";
import { useState} from 'react';
// import im2 from "../public/logogorsel.jpeg";
// import { Link } from 'react-router-dom'; 
import img from "../public/OutroSS.png";

export default function StoreMainPage(){
    const tabList = [{id:"candle",type:"games",img:img}]
    const [currentTabId,setTab] = useState(0);
        
    return (<div className="">
    
    <div className="transition-all shadow-2xl max-w-screen-3xl" style={{backgroundImage:`url("${tabList[currentTabId]? tabList[currentTabId].img : setTab(0) && tabList[currentTabId].img }")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
    <div className="min-h-screen main_ min-w-screen">
    <Navbar  isBlack={true}></Navbar>    
         <div className='sticky z-10 pt-2 md:pb-20 md:m-0'>
              <MenuStore></MenuStore>
               <div className="w-full md:ps-16 md:mt-20">
                    <h1 className="p-4 text-3xl font-semibold text-white md:p-0">Games</h1>
               </div>
         </div>
         
         <div className="flex justify-between transition-all md:ms-12">
              <StoreCarousel currentTab={currentTabId} setTab={setTab} tabList={tabList} />
         </div>


    </div>

 
 </div>
 
</div>);
}

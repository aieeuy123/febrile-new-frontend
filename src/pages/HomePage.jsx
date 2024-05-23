import './Home.css';
// import logo from '../public/logo.gif';
import Navbar from "../components/Navbar";
// import StoreCarousel from '../components/StoreCarousel';
// import MenuStore from '../components/MenuStore';
// import { useScroll,useMotionValueEvent} from "framer-motion";
import ScrollAnimationComponent from '../components/ScrollAnimationComponent';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const slides = [
     
    { icon: <img src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' alt='logo_tech' className='w-10 h-10 ' />},
    { icon: <img src='https://static-00.iconduck.com/assets.00/unity-icon-2048x2048-pcu6t1xp.png' alt='logo_tech' className='w-10 h-10 ' />},
    { icon: <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/939px-Blender_logo_no_text.svg.png' alt='logo_tech' className='w-10 h-10 ' />},
    { icon: <img src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' alt='logo_tech' className='w-10 h-10 ' />},
    { icon: <img src=' https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png' alt='logo_tech' className='w-20 h-10 ' />},
   

];



const SliderDesign2 = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full py-12 mx-auto overflow-hidden bg-white" style={{ width: "100%" }}>

            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 45,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full font-bold">
                            {slide.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};








export default function HomePage(){

     return (
    <>
    <div className=''>
     <ScrollAnimationComponent><Navbar isBlack={false}/></ScrollAnimationComponent>
    </div>
    <div className='grid w-full mb-52'>
          <div className='inline-block mt-32 text-center md:mt-52 '>
               {/* <span className='flex items-center justify-center space-x-3 text-black'><img src={logo}alt="logo-febrile-games" className="w-8 md:w-10"/><h1 className='text-lg font-bold md:text-2xl'>Febrile Games</h1></span> */}
               <ScrollAnimationComponent><h1 className='mx-2 text-3xl font-bold md:text-4xl md:mx-0' >Play Fun Games & Buy Unity Assets</h1></ScrollAnimationComponent>
               <div className='block text-center'>
                    <ScrollAnimationComponent>
                         <p className='inline-block w-3/4 mt-5 font-semibold text-gray-950 md:mx-0 md:w-2/3'>Play Candle or Orange Rush with friends or alone. Are you a developer? Go <Link className='text-blue-500'>Unity Assets Store</Link> now</p>
                    </ScrollAnimationComponent>
               </div>
               
               <div className='flex justify-center w-full mt-10 md:mb-10 md:mt-24 '>
                    <span className='flex justify-center w-full space-x-4'>
                         <ScrollAnimationComponent>
                              <Link to="/store"><button className='px-10 py-2 text-lg font-medium text-gray-100 bg-red-600 rounded-xl'>Play Now</button></Link>
                         </ScrollAnimationComponent>
                    </span>
               </div>
               <div className='flex justify-center mt-1'> 
               <ScrollAnimationComponent><img src="https://cdn.discordapp.com/attachments/1218189321580843068/1234958790541967481/RunningOrange.png?ex=664ef8c0&is=664da740&hm=5e0369d853e6b96480a473c31d016ab0c76ee7426afddb1d5556f1d1324c8ee7&" className='w-64' alt="logo_orange_rush_game" /></ScrollAnimationComponent>
                    
               </div>
               <div className='mt-32 md:hidden'>
                    <ScrollAnimationComponent>
                         <span class="material-symbols-outlined">keyboard_arrow_down</span>
                    </ScrollAnimationComponent>
               </div>

          </div>
          
    </div>


    <div>
          <ScrollAnimationComponent className={"md:px-20 "}>
               <div>

                    <ScrollAnimationComponent><h1 className='my-3 text-3xl font-semibold text-center md:text-left'>Who Are We?</h1></ScrollAnimationComponent>

                    <div className='w-full text-center md:text-left md:p-10'>
                         <p className='w-full px-5'>At Febrile Games, we believe in the power of innovation, collaboration, and integrity. Established in 2022, our journey began with a simple yet ambitious goal: to create games that make a real difference in the world of entertainment. Our mission is to create engaging and immersive gaming experiences that bring joy and excitement to players worldwide. We are dedicated to pushing the boundaries of game development, ensuring that we stay ahead of the curve and deliver exceptional value to our players.</p>
                    </div>
               
               </div>
          </ScrollAnimationComponent>
    </div>
    
    <div>
    <ScrollAnimationComponent className={"md:px-20"}>
               <div>

                    <ScrollAnimationComponent><h1 className='my-3 text-3xl font-semibold text-center md:text-left'>Our Vision</h1></ScrollAnimationComponent>

                    <div className='w-full text-center md:text-left md:p-10'>
                         <p className='w-full'>Looking ahead, we aim to continue our growth and expand our reach, while staying true to our core values. Our vision is to be a leading game studio, recognized for our innovation, player satisfaction, and positive impact on the gaming community. We also aim to expand our team and develop our country by bringing together people who are interested in technology and software in our city and school.</p>
                     
                    </div>
               
               </div>
          </ScrollAnimationComponent>
    </div>
    <div>
          <ScrollAnimationComponent className={"md:px-20 my-20"}>
               <div>

                    <ScrollAnimationComponent><h1 className='my-3 text-3xl font-semibold text-center md:text-left'>Technologies We Use</h1></ScrollAnimationComponent>

                    <SliderDesign2></SliderDesign2>
               
               </div>
          </ScrollAnimationComponent>
    </div>
    
    {/* <div>
     
    </div> */}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
     );


}
import { Link } from "react-router-dom";


export default function ItemCarousel({id,img,type}){
     // "https://i.pinimg.com/originals/e9/ef/7a/e9ef7a90f739e742038cc65e6a87dc91.gif" -->>> test image
     return (
          <>
               <div className="hidden md:block">
                    <Link to={`${type}/${id}/`} className="block w-96 rounded-2xl image_">
               
                         <div className="w-full h-full">
                              <h1 className="absolute bottom-0 p-2 py-10 text-lg font-semibold text-white shadow-lg">Candle | The First Spark</h1>
                              <button className="absolute bottom-0 p-2 my-2 text-xl font-semibold text-gray-200 ps-2">Learn More</button>
                              

                              <img className="transition-all h-80 w-96 rounded-xl " src={img} alt="asd" style={{backgroundPosition:"center"}}/>
                         </div>
                    
                    </Link>
               </div>
               <div className="block md:hidden">
                    <Link to={`${type}/${id}/`} className="block rounded-2xl image_" style={{height:"36vh",width:"90vw"}}>
               
                         <div className="w-full h-full">
                               <h1 className="absolute p-1 text-lg font-medium text-gray-200 shadow-lg bottom-2 ">Candle | The First Spark</h1>
                             
                              <img className="w-full h-full transition-all rounded-xl " src={img} alt="" />
                         </div>
                    
                    </Link>
               </div>
          </>
     );   
}
import { Link } from "react-router-dom";


export default function Collections({isMobile=false}){
    return (    <span className={`p-3 block ${isMobile? "w-1/5": "w-screen"}`} >

                    <div>

                        {isMobile? <h1 className="text-lg font-semibold text-white">Collections</h1>: <h1 className="text-3xl font-semibold text-white">Collections</h1>}

                    </div>

                    <div className="flex items-center justify-start m-5">

                        <div  className="flex justify-center -space-x-1">
                            <span className="relative flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full "></span>

                            <span className="relative flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full -left-3"></span>

                            <span className="relative flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full -left-6"></span>

                            <span className="relative flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full -left-9"></span>

                        </div>

                        <div className="relative flex justify-start -left-6">

                            <span className="w-10 text-lg font-semibold text-gray-300">+20</span>

                            <Link to='/candle/collections' className="self-end w-20 text-lg font-bold text-gray-300">See more</Link>

                        </div>
                                   
                    </div>
                                    
                </span>);
}
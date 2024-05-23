import { Link } from "react-router-dom";

import { Carousel } from '@trendyol-js/react-carousel';

export default function GameComments({asd = false}){
       
    return (
    <div className={`block p-5 lg:w-3/4 bg-neutral-950 ${asd? "shadow-xl rounded-lg":""}`}>
            <h1 className="text-2xl font-semibold text-white">Comments</h1>
            <div className="w-full lg:block">
                <div className="w-full my-5">
               <Carousel show={1.1} slide={1} swiping={true} infinite={true} className="">
                     
                    <div className="w-2/3 p-4 mx-1 text-white bg-neutral-900 rounded-xl">
                            
                            <div className="flex justify-between">
                                <span className="block w-10 h-10 p-1 my-2 bg-black rounded-full">pp</span>

                                <div className="flex items-center space-x-1">

                                    <div>
                                        3,0
                                    </div>

                                    <div>
                                        <span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                        <span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                        <span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                    </div>

                                </div>
                            </div>
                            
                            <h3 className="font-semibold text-md">This is so good</h3>
                            <hr />
                            <p className="p-2">Lorem ipsum dolor sit amet. </p>

                    </div>
                    <div className="w-2/3 p-4 mx-1 text-white bg-neutral-900 rounded-xl">
                            
                            <div className="flex justify-between">
                                <span className="block w-10 h-10 p-1 my-2 bg-black rounded-full">pp</span>

                                <div className="flex items-center space-x-1">

                                    <div>
                                        3,0
                                    </div>

                                    <div>
                                        <span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                        <span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                        <span class="material-symbols-outlined text-sm text-yellow-400">star</span>
                                    </div>

                                </div>
                            </div>
                            
                            <h3 className="font-semibold text-md">This is so good</h3>
                            <hr />
                            <p className="p-2">Lorem ipsum dolor sit amet. </p>

                    </div>
                     
               </Carousel>
               
          </div>

            </div>

            <div className="w-full text-end">
                <Link className="block m-5 text-lg text-gray-200" to="/comments/all">See more</Link>
            </div>
            
    </div>);

}
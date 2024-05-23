
import { Carousel } from '@trendyol-js/react-carousel';

export default function MenuStore(){
     return (
          <>
          
          <div className="hidden w-full md:inline-block md:my-1 md:ps-16 md:mt-16">
               <Carousel show={12} slide={1} swiping={true} infinite={true}>
                    
                    <button className="w-1/2 py-2 font-semibold text-white transition-all sm:w-5/6 bg-slate-400 rounded-xl hover:bg-slate-500">Games</button>
                    <button className="w-1/2 py-2 font-semibold text-white transition-all sm:w-5/6 bg-slate-400 rounded-xl active:bg-slate-500 hover:bg-slate-500">News</button>
                    <button className="w-1/2 py-2 font-semibold text-white transition-all sm:w-5/6 bg-slate-400 rounded-xl active:bg-slate-500 hover:bg-slate-500">Blogs</button>
                    <button className="w-1/2 py-2 font-semibold text-white transition-all sm:w-5/6 bg-slate-400 rounded-xl active:bg-slate-500 hover:bg-slate-500">Market</button>
               </Carousel>
          </div>
         <div className="my-4 ps-4 md:hidden">
               <Carousel show={5} slide={1} swiping={true} infinite={true} className='block w-screen my-4 ps-4 md:hidden'>
                   
                    <button className="block p-4 px-4 font-semibold text-white transition-all rounded-xl hover:bg-slate-400">Games</button>
                    <button className="block p-4 px-4 font-semibold text-white transition-all rounded-xl hover:bg-slate-400">News</button>
                    <button className="block p-4 px-4 font-semibold text-white transition-all rounded-xl hover:bg-slate-400">Blogs</button>
                    <button className="block p-4 px-4 font-semibold text-white transition-all rounded-xl hover:bg-slate-400">Market</button>
               </Carousel>
          </div>
        
          </>
     );
}
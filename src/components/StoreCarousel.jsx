import { Carousel } from '@trendyol-js/react-carousel';
import ItemCarousel from "../components/CarouselItem";


export default function StoreCarousel({currentTab,setTab,tabList}){


     return (<>
      <div style={{width:"99%",height:'70vh'}} className="hidden mx-auto transition-all md:block rounded-3xl bg-opacity-40">
               <Carousel className='transition-all ' show={3.2} slide={1} pageCount={2} autoSwipe={true} swiping={true} swipeOn={4} 
               onLeftArrowClick={()=>{
                    console.log(currentTab);
                  
                    setTab(currentTab-1)
                    
               }} onRightArrowClick={()=>{
                    console.log(currentTab)
                          
                   
                      setTab(currentTab+1)
                    
                      if (currentTab === 3){
                         setTab(0)
                      }
                    
               }}  leftArrow={<button className="h-full p-2 mx-3 text-transparent transition-all hover:bg-slate-400 hover:opacity-20 hover:text-white rounded-xl btn_arrow_left"><span class="material-symbols-outlined">arrow_back_ios</span></button>} rightArrow={<button className="h-full p-2 mx-3 text-transparent transition-all hover:bg-slate-400 hover:opacity-20 hover:text-white rounded-xl btn_arrow_right"><span class="material-symbols-outlined">arrow_forward_ios</span></button>}>
                   {/* otomatik olarak gelecek apiden */}
                   {
                    tabList.map((tab)=>{
                         return ( <ItemCarousel  key={tab.id} id={tab.id} type={tab.type} img={tab.img}/>);
                    })
                   }
               </Carousel>
          </div>
          <div style={{width:"98%",height:'36vh'}} className="flex justify-center my-4 md:hidden rounded-3xl bg-opacity-40">
               <Carousel className='ps-4' swiping={true} show={1}>
                         {/* otomatik olarak gelecek apiden */}
                         {
                              tabList.map((tab)=>{
                                   return ( <ItemCarousel key={tab.id} id={tab.id} type={tab.type} img={tab.img}/>);
                              })
                         }
               </Carousel>
          </div> </>);
}
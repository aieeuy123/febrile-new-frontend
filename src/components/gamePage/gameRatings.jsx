import { Progress } from 'rsuite';
import { Link } from 'react-router-dom';
export default function RatingStatics(props = {}){
    return (<div className="p-3 lg:p-5 lg:rounded-lg lg:shadow-xl lg:w-2/5 lg:h-80 text-start bg-neutral-950 ">
                                    <h1 className="text-2xl font-semibold text-white">Rating and review</h1>
                                    <div className="m-5">
                                        <span className="flex items-center space-x-3">

                                            <span className="flex items-center font-bold text-white">5<span class="material-symbols-outlined text-sm">star</span></span>

                                            <span className="block w-full">
                                            <Progress.Line percent={props.gameObject.rating_statics_five_star} status="active" showInfo={false} strokeColor="yellow" strokeWidth={10}/>
                                            </span>

                                        </span>
                                        <span className="flex items-center space-x-3">

                                            <span className="flex items-center font-bold text-white">4<span class="material-symbols-outlined text-sm">star</span></span>

                                            <span className="block w-full">
                                            <Progress.Line percent={props.gameObject.rating_statics_four_star} status="active" showInfo={false} strokeColor="yellow" strokeWidth={10}/>
                                            </span>

                                        </span>
                                        <span className="flex items-center space-x-3">

                                            <span className="flex items-center font-bold text-white">3<span class="material-symbols-outlined text-sm">star</span></span>

                                            <span className="block w-full">
                                            <Progress.Line percent={props.gameObject.rating_statics_three_star} status="active" showInfo={false} strokeColor="yellow" strokeWidth={10}/>
                                            </span>

                                        </span>
                                        <span className="flex items-center space-x-3">

                                            <span className="flex items-center font-bold text-white">2<span class="material-symbols-outlined text-sm">star</span></span>

                                            <span className="block w-full">
                                            <Progress.Line percent={props.gameObject.rating_statics_two_star} status="active" showInfo={false} strokeColor="yellow" strokeWidth={10}/>
                                            </span>

                                        </span>
                                        <span className="flex items-center space-x-3">

                                            <span className="flex items-center font-bold text-white">1<span class="material-symbols-outlined text-sm">star</span></span>

                                            <span className="block w-full">
                                            <Progress.Line percent={props.gameObject.rating_statics_one_star} status="active" showInfo={false} strokeColor="yellow" strokeWidth={10}/>
                                            </span>

                                        </span>
                                    </div>
                                    <div className="w-full text-end">
                                         <Link className="block m-5 text-lg text-gray-200" to={`/games/${props.gameObject.title}/rating-details`}>See more</Link>
                                    </div>
                                </div>);
}
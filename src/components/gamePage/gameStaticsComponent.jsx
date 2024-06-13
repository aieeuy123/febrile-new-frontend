export default function GameStatics(props = {}){

   
    return (
        <>
            <span className="w-1/6">
                <h1 className="text-3xl text-white">{props.gameObject.online_prediction}</h1>
                <h1 className="flex items-center text-sm text-gray-300"><span class="material-symbols-outlined text-green-600">online_prediction</span>Active Players</h1>
            </span>
            <span className="w-1/6">
                <h1 className="text-3xl text-white">{props.gameObject.ratings}</h1>
                <h1 className="text-sm text-gray-300">Ratings</h1>
            </span>
            <span className="w-1/6">
                <h1 className="text-3xl text-white">{props.gameObject.num_of_downloads}</h1>
                <h1 className="text-sm text-gray-300">number of downloads</h1>
            </span>
            
        </>
    );
}
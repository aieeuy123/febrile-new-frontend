export default function GameDescription({fontSize}){
    return (
        <div className={`p-4 text-start w-full`}>
            {fontSize? <h1 className="text-lg font-semibold text-white">Description</h1>: <h1 className="text-2xl font-semibold text-white">Description</h1>}
            <p className={`py-4 text-white text-md ${fontSize? "text-sm":"text-md"} `}>Find yourself in a child's imagination universe with impressive story and puzzle mechanics.⭐🌟⭐ Step into a mysterious world and use your mind to discover the secrets of the "Kandil". Solve Puzzles, collect items and go with the flow as you progress through this fascinating story. 🕯 We suggest you to connect febrileGames account either you can play offline too. See you again, on our other games...</p>
        </div>
    );
}
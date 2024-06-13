export default function RelaseDate(props = {}){ 
    return (<h1 className="text-white">Release Date: {props.gameObject.game_release_date}</h1>);
}

// api ile async lazy load bağlantı kurulacak achievment ve state reedux thunk yapılcak

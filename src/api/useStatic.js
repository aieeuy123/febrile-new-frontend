import axios from 'axios';



const URL = "https://febrilegamesbackend-1.onrender.com/";




export async function getGames(){

     // -title
     // -description (_react understands this content of this website and renders it)
     // -download_count
     // -view_count
     // -comments (include rate, description, like_count, dislike_count,reply_comments)
     // -download links
     // -intro video and photos links
     // -create time
     // -cover_img

     const response = await axios.get(`${URL}/api/v2/static/games/`,{responseType:'document'});
     console.log(response.data);
   

     switch (response.status) {

          case 200:
               
               return response.data;

          case 404:

               
               return response.statusText;

               
          default:
               
     };

     
     
};

getGames();

// export async function getNews(){};
// export async function getBlogs(){};
// export async function postLogin(){};

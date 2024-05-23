import logo from '../public/logo.gif';
import './LoginPage.css';
import { Link } from 'react-router-dom';
export default function LoginPage(){

    return (
    // <div className='flex items-center justify-center w-screen h-screen shadow-2xl ' style={{backgroundPosition:"center",backgroundImage:"url('https://cdn.discordapp.com/attachments/1218189321580843068/1233492581984370748/orange-heroes-bg.png?ex=662df3bc&is=662ca23c&hm=43d6c2289329e1502f7c71ba9fb209a3697adf11741d083de2701d5b8d397a97&')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
    //     <div className='w-4/5 bg-white shadow-2xl md:w-2/5 h-3/5 md:block rounded-2xl'>
    //         asdasdasd
    //     </div>
    
    // </div>
    <div className='flex items-center justify-start w-screen h-screen shadow-2xl' style={{backgroundPosition:"center",backgroundImage:"url('https://th.bing.com/th/id/OIG3.DVYVOY0dl5yvwTZb92Rf?w=1024&h=1024&rs=1&pid=ImgDetMain')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
    <div className="w-full h-screen text-center bg-white lg:w-3/12 md:w-2/6 sidebar_">
        <div className='flex items-center m-5'>
            <Link to="/" className='flex items-center space-x-2 text-xl font-semibold text-white transition-all hover:text-black'>
            <span className='material-symbols-outlined'>arrow_back</span> Home
            </Link>
        </div>
        <div className='flex justify-center'>
            <img className='w-16 h-16 mt-16 shadow-xl rounded-xl' src={logo} alt="" />
            
        </div>
       <div className='flex justify-center mt-20 '>
                <h1 className='text-2xl font-bold text-white'>Login with Febrile Account</h1>
        </div>
             
        <div className='w-full my-10 space-y-4 text-center '>

            <input type="text" className='w-5/6 px-4 py-2 rounded-lg input_' placeholder='username' />
            <input type="password" className='w-5/6 px-4 py-2 rounded-lg input_ ' placeholder='password' />
            
            
            <button className='w-5/6 p-2 font-semibold text-white transition-all rounded-xl bg-gray-950 hover:bg-gray-500'>Login</button>
            <div className='flex justify-center space-x-3'>
                <button className='p-2 font-semibold text-white transition-all bg-white rounded-xl hover:bg-gray-950'>
                    <img className='w-10 h-10' src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-internet-icon-vector-png-image_9183287.png" alt="" />
                </button>
                <button className='p-2 font-semibold text-white transition-all bg-white rounded-xl hover:bg-gray-950'>
                    <img className='w-10 h-10' src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png" alt="" />
                </button>
                <button className='p-2 font-semibold text-white transition-all bg-white rounded-xl hover:bg-gray-950'>
                    <img src="https://www.logo.wine/a/logo/Xbox_(app)/Xbox_(app)-Logo.wine.svg" className='w-10 h-10' alt="" />
                </button>
                <button className='p-2 font-semibold text-white transition-all bg-white rounded-xl hover:bg-gray-950'>
                    <img className='w-10 h-10' src="https://iconape.com/wp-content/files/qd/17570/svg/cib-apple-logo-icon-png-svg.png" alt="" />
                </button>
                
            </div>

            <Link className='block my-16 text-black transition-all hover:text-white' to="/reset-password">Forgot my password <span className='underline'>Reset Password</span></Link>

            <div className='fixed md:bottom-10 md:left-10 justify-center flex w-full md:justify-start   '>
                <Link className='text-blue-200 transition-all hover:text-black' to="/signup">Haven't already account? <span className='underline'>Signup now</span></Link>
            </div>
       
        </div>

        
    </div>
    </div>
);
}
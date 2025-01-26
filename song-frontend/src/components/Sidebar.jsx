import { useNavigate } from 'react-router-dom';
import { assets } from './../assets/frontend-assets/assets';
import { Link } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="w-full pt-20 lg:w-1/4 h-full p-4 flex flex-col gap-4 text-black">
            <div className="bg-white h-[15%] rounded-lg flex flex-col justify-around">
                <div 
                    onClick={() => navigate("/")} 
                    className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-200 rounded-md transition duration-200 ease-in-out"
                >
                    <img 
                        className="w-6 filter invert grayscale " 
                        src={assets.home_icon} 
                        alt="home icon" 
                    />
                    <p className="font-bold text-lg">Home</p>
                </div>
                <div className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-200 rounded-md transition duration-200 ease-in-out">
                    <img 
                        className="w-6 filter invert grayscale " 
                        src={assets.search_icon} 
                        alt="search icon" 
                    />
                    <p className="font-bold text-lg">Search</p>
                </div>
                <div className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-200 rounded-md transition duration-200 ease-in-out">
                    <Link to="/admin" className="flex items-center gap-4">
                        
                        <button className="font-bold text-lg">Dashboard</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

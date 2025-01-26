import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend-assets/assets';
import { Link } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-between items-center bg-white p-4 shadow-md">
            <div className="text-2xl font-bold">
            <Link to="/" className="text-black">
              Jamal's Music
            </Link>
          </div>
            <div className="flex items-center gap-2">
                <img
                    onClick={() => navigate(-1)}
                    className="w-8 p-2 rounded-2xl cursor-pointer filter invert grayscale hover:opacity-80 transition-all"
                    src={assets.arrow_left}
                    alt="arrow_left"
                />
                <img
                    onClick={() => navigate(1)}
                    className="w-8 p-2 rounded-2xl cursor-pointer filter invert grayscale hover:opacity-80 transition-all"
                    src={assets.arrow_right}
                    alt="arrow_right"
                />
            </div>
        </div>
    );
}

export default Navbar;

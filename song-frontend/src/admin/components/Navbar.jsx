import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full bg-white py-4 px-8 shadow-md border-b border-gray-200">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-xl font-bold text-gray-800">
                    <Link to="/admin" className="hover:text-blue-500 transition-colors duration-200">
                        Admin Panel
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/admin"
                        className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200"
                    >
                        Dashboard
                    </Link>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

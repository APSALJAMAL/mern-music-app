import { assets } from './../assets/admin-assets/assets';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="min-h-screen bg-gray-100 px-5 py-10 sm:w-64">
            {/* Logo Section */}
            <div className="mb-10 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Jamal's Music</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
                <NavLink
                    to="/admin/add-song"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 bg-white rounded-lg hover:bg-gray-200"
                >
                    <img src={assets.add_song} className="w-5" alt="Add Song" />
                    <p className="hidden sm:block font-medium">Add Song</p>
                </NavLink>
                <NavLink
                    to="/admin/list-song"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 bg-white rounded-lg hover:bg-gray-200"
                >
                    <img src={assets.song_icon} className="w-5" alt="List Song" />
                    <p className="hidden sm:block font-medium">List Song</p>
                </NavLink>
                <NavLink
                    to="/admin/add-album"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 bg-white rounded-lg hover:bg-gray-200"
                >
                    <img src={assets.add_album} className="w-5" alt="Add Album" />
                    <p className="hidden sm:block font-medium">Add Album</p>
                </NavLink>
                <NavLink
                    to="/admin/list-album"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 bg-white rounded-lg hover:bg-gray-200"
                >
                    <img src={assets.album_icon} className="w-5" alt="List Album" />
                    <p className="hidden sm:block font-medium">List Album</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;

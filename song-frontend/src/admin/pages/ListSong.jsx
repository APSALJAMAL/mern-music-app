import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { url } from '../AdminLayout';

function ListSong() {
    const [data, setData] = useState([]);

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);

            if (response.data.success) {
                setData(response.data.songs);
            }
        } catch (error) {
            console.log('error', error);
            toast.error("Song List Error");
        }
    };

    const removeSong = async (id) => {
        try {
            const response = await axios.delete(`${url}/api/song/remove/${id}`);

            if (response.data.success) {
                toast.success(response.data.message);
                await fetchSongs();
            }
        } catch (error) {
            console.log('error', error);
            toast.error("Song Remove Error");
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className="px-4 py-6">
            <h2 className="text-xl font-semibold mb-4">All Songs List</h2>
            <hr className="mb-6" />
            <div className="overflow-x-auto">
                <div className="hidden sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center justify-items-center gap-4 p-4 border-b border-gray-300 bg-gray-100 text-sm text-gray-700 font-medium">
                    <span>Image</span>
                    <span>Name</span>
                    <span>Album</span>
                    <span>Duration</span>
                    <span>Action</span>
                </div>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center justify-items-center gap-4 p-4 border-b border-gray-300 text-sm text-gray-700">
                            <img className="w-12 h-12 object-cover rounded" src={item.image} alt={item.name} />
                            <p className="truncate">{item.name}</p>
                            <p className="truncate">{item.album}</p>
                            <p className="truncate">{item.duration}</p>
                            <button
                                className="font-bold text-red-500 hover:text-red-700 transition-colors duration-200"
                                onClick={() => removeSong(item._id)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListSong;

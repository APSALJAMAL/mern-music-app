import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { assets } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useContext, useEffect, useState } from 'react';

const DisplayAlbum = ({ album }) => {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState("");
    const { playWithId, albumsData, songsData, track, play, pause, playStatus } = useContext(PlayerContext);
    const [hoveredSongId, setHoveredSongId] = useState(null); // Hover state

    useEffect(() => {
        albumsData.map((item) => {
            if (item._id === id) {
                setAlbumData(item);
            }
        });
    }, [albumsData, id]);

    const handleMouseEnter = (songId) => {
        setHoveredSongId(songId);
    };

    const handleMouseLeave = () => {
        setHoveredSongId(null);
    };

    return albumData ? (
        <div className=""> {/* Set the background color to white */}
            <Navbar />
            <div className="mt-10 px-6 flex gap-8 flex-col md:flex-row md:items-end">
                <img className='w-60 h-60 rounded-xl shadow-lg' src={albumData.image} alt="" />
                <div className="flex flex-col gap-3">
                    <p className="text-black text-sm font-bold">Playlist</p>
                    <h2 className='text-5xl font-bold mb-2 md:text-7xl'>{albumData.name}</h2>
                    <h4 className="text-black text-lg font-bold">{albumData.desc}</h4>
                    <p className='flex items-center'>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-[0.5fr_2fr_2fr_0.5fr] mt-10 mb-4 pl-2 text-black">
                <p>#<b className='mr-4'>Title</b></p>
                <p className='  text-black font-bold'>Name</p>
                <p className=' text-center text-black font-bold'>Date Added</p>
                <p className=' text-center text-black font-bold'>Duration</p>

            </div>
            <hr className="border-t-2 border-gray-600" />
            
            {songsData.filter((item) => item.album === album.name).map((item, index) => (
                <div
                    key={index}
                    onClick={() => hoveredSongId === item._id && playStatus ? pause() : playWithId(item._id)}
                    className="grid grid-cols-3 sm:grid-cols-[0.5fr_2fr_2fr_0.5fr] gap-2 p-3 items-center text-black hover:bg-[#ffffff26] cursor-pointer rounded-md transition duration-200 ease-in-out"
                    onMouseEnter={() => handleMouseEnter(item._id)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='flex items-center w-10'>
                        {track._id === item._id && playStatus ? 
                            <img className={hoveredSongId === item._id ? "m-auto w-5 mr-4" : 'object-contain m-auto mr-4 w-5 h-5'} src={hoveredSongId === item._id ? assets.pause_icon : assets.music_gif} alt="gif" />
                            : hoveredSongId === item._id ? 
                                <img className='m-auto w-4 mr-4' onClick={play} src={assets.play_icon} alt="gif" />
                                : <b className='mr-4 text-black'>{index + 1}</b>
                        }

                        <img className='inline-block w-10 mr-5 rounded-md' src={item.image} alt="album" />
                    </div>
                    <p className='text-[15px] font-bold text-black px-5'>{item.name}</p>
                    <p className='text-[15px] hidden sm:block text-black'>{item.updatedAt}</p> {/* Corrected here */}
                    <p className='text-[15px] text-center font-bold text-black'>{item.duration}</p>
                </div>
            ))}
        </div>
    ) : null
}

export default DisplayAlbum;

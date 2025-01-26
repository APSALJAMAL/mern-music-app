import { useContext } from "react"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongsItem from "./SongsItem"
import { PlayerContext } from './../context/PlayerContext';

function DisplayHome() {
    const { songsData, albumsData } = useContext(PlayerContext)
    return (
        <>
            <Navbar />
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <h1 className="my-5 font-bold text-2xl">Top Albums</h1>
                    <div className="flex overflow-auto space-x-4">
                        {albumsData.map((item, index) => (
                            <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className="my-5 font-bold text-2xl">Top Songs</h1>
                    <div className="flex overflow-auto space-x-4">
                        {songsData.map((item, index) => (
                            <SongsItem key={index} image={item.image} name={item.name} desc={item.desc} id={item._id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayHome

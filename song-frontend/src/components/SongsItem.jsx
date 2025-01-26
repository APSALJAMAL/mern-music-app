import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function SongsItem({ image, name, desc, id }) {
    const { playWithId } = useContext(PlayerContext);
    return (
        <div key={id} onClick={() => playWithId(id)} className="min-w-[180px] p-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] transition-all">
            <img className="w-60 h-60 object-cover rounded-lg border-2 border-black" src={image} alt="album img" />
            <p className="font-bold text-black mt-2 mb-1 text-lg">{name}</p>
            <p className="text-black text-sm font-bold">{desc}</p>
        </div>
    );
}

export default SongsItem;

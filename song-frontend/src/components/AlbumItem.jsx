import { useNavigate } from "react-router-dom";

function AlbumItem({ image, name, desc, id }) {
    const navigate = useNavigate();
    return (
        <div key={id} onClick={() => navigate(`/album/${id}`)} className="min-w-[180px] p-3 rounded-lg cursor-pointer hover:bg-[#ffffff26] transition-all">
            <img className="w-60 h-60 object-cover rounded-lg border-2 border-black" src={image} alt="album img" />
            <p className="text-black  font-bold mt-2 mb-1 text-lg">{name}</p>
            <p className="text-black text-sm font-bold">{desc}</p>
        </div>
    );
}

export default AlbumItem;

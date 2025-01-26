import { assets } from "../assets/admin-assets/assets"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from "../AdminLayout";
import { toast } from "react-toastify";

function AddSong() {

    const [image, setImage] = useState(false);
    const [song, setSong] = useState(false);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [album, setAlbum] = useState("none");
    const [loading, setLoading] = useState(false);
    const [albumData, setAlbumData] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('image', image);
            formData.append('audio', song);
            formData.append('album', album);

            const response = await axios.post(`${url}/api/song/add`, formData);

            if (response.data.success) {
                toast.success("Song Added");
                setName("");
                setDesc("");
                setAlbum("none");
                setImage(false);
                setSong(false);
            } else {
                toast.error("Something went wrong.");
            }

        } catch (error) {
            console.log('error', error)
            toast.error("Song Add Error");
        }
        setLoading(false);
    }

    const loadAlbumData = async () => {
        try {

            const response = await axios.get(`${url}/api/album/list`);

            if (response.data.success) {
                setAlbumData(response.data.albums)
            }

        } catch (error) {
            console.log('error', error)
            toast.error("loadAlbumData Error");
        }
    }

    useEffect(() => {
        loadAlbumData();
    }, [])

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin">

            </div>
        </div>
    ) : (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center gap-8 text-gray-600 w-full max-w-lg mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <div className="flex flex-col gap-4 items-center">
                    <p>Upload Song</p>
                    <input onChange={(e) => setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
                    <label htmlFor="song">
                        <img src={song ? assets.upload_added : assets.upload_song} className="w-24 cursor-pointer" alt="upload_song" />
                    </label>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <p>Upload Image</p>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="w-24 cursor-pointer" alt="upload_area" />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full max-w-lg">
                <p>Song Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-full" placeholder="Type Here" required />
            </div>

            <div className="flex flex-col gap-2.5 w-full max-w-lg">
                <p>Song Description</p>
                <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-full" placeholder="Type Here" required />
            </div>

            <div className="flex flex-col gap-2.5 w-full max-w-lg">
                <p>Album</p>
                <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-full">
                    <option value="none">None</option>
                    {albumData.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className="text-base bg-black text-white py-2.5 px-14 cursor-pointer mt-6 w-full sm:w-auto">Add</button>

        </form>
    )
}

export default AddSong;
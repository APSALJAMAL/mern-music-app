import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";

function Display() {
    const { albumsData } = useContext(PlayerContext);
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";

    // Find the album's background color, safely access bgColour with optional chaining
    const album = isAlbum && albumsData.length > 0 ? albumsData.find((album) => album._id === albumId) : null;
    const bgColor = album?.bgColour || "bg-white";  // Fallback to "bg-white" if no album is found

    // Dynamically apply background color on album page
    useEffect(() => {
        if (isAlbum && displayRef.current) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#ffffff)`;
        } else if (displayRef.current) {
            displayRef.current.style.background = "white";
        }
    }, [isAlbum, bgColor]);

    return (
        <div
            ref={displayRef}
            className={`min-h-screen min-w-full rounded-lg ${bgColor} text-black shadow-lg lg:w-3/4 lg:ml-0 flex flex-col`}
        >
            {albumsData.length > 0 ? (
                <Routes>
                    <Route path="/" element={<DisplayHome />} />
                    <Route path="/album/:id" element={<DisplayAlbum album={album} />} />
                </Routes>
            ) : null}
        </div>
    );
}

export default Display;

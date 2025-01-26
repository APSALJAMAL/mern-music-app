import { useContext, useState } from 'react';
import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { PlayerContext } from './context/PlayerContext';

export const UserLayout = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility

  return (
    <div className="h-screen bg-white flex flex-col">
      {songsData.length !== 0 ? (
        <>
          <div className="flex flex-grow">
            {/* Sidebar takes fixed width on larger screens, hidden on smaller screens */}
            <div className="hidden md:block px-5">
              <Sidebar />
            </div>
            <div className="flex-grow">
              <Display />
            </div>
            {/* Sidebar toggle button for mobile */}
            <button
              className="md:hidden absolute top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-full"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          </div>
          {/* Sidebar for mobile */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20 transform ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden transition-transform duration-300`}
          >
            <Sidebar />
          </div>
          {/* Player is fixed at the bottom */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <Player />
          </div>
        </>
      ) : null}
      <audio ref={audioRef} src={track ? track.file : ""} preload="none"></audio>
    </div>
  );
};



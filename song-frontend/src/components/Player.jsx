import { useContext } from 'react';
import { assets } from './../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function Player() {
    const { track, seekBar, seekBg, play, pause, playStatus, time, nextSong, previusSong,
        seekSong, toggleLoop, isLooping, isShuffle, toggleShuffle, volume, handleVolumeChange,
        isMuted, toggleMute } = useContext(PlayerContext);

    return track ? (
        <div className="h-[10%] bg-white flex justify-between items-center text-black px-4 py-2 shadow-md">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12 h-12 " src={track.image} alt="song img" />
                <div>
                    <p className="font-semibold text-lg">{track.name}</p>
                    <p className="text-sm text-gray-500">{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img
                        onClick={toggleShuffle}
                        className={`w-4 cursor-pointer ${!isShuffle ? "opacity-40" : ""} filter invert grayscale`}
                        src={assets.shuffle_icon}
                        alt="shuffle_icon"
                    />
                    <img
                        onClick={previusSong}
                        className="w-4 cursor-pointer filter invert grayscale"
                        src={assets.prev_icon}
                        alt="prev_icon"
                    />
                    {!playStatus ? (
                        <img
                            onClick={play}
                            className="w-4 cursor-pointer filter invert grayscale"
                            src={assets.play_icon}
                            alt="play_icon"
                        />
                    ) : (
                        <img
                            onClick={pause}
                            className="w-4 cursor-pointer filter invert grayscale"
                            src={assets.pause_icon}
                            alt="pause_icon"
                        />
                    )}
                    <img
                        onClick={nextSong}
                        className="w-4 cursor-pointer filter invert grayscale"
                        src={assets.next_icon}
                        alt="next_icon"
                    />
                    <img
                        onClick={toggleLoop}
                        className={`w-4 cursor-pointer ${isLooping ? "" : "opacity-40"} filter invert grayscale`}
                        src={assets.loop_icon}
                        alt="loop_icon"
                    />
                </div>

                <div className="flex items-center gap-5 mt-2">
                    <p className="text-sm">{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div
                        ref={seekBg}
                        onClick={seekSong}
                        className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer h-1"
                    >
                        <hr
                            ref={seekBar}
                            className="h-1 border-none w-0 bg-green-800 rounded-full"
                        />
                    </div>
                    <p className="text-sm">{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className="w-4 filter invert grayscale" src={assets.plays_icon} alt="plays_icon" />
                <img className="w-4 filter invert grayscale" src={assets.mic_icon} alt="mic_icon" />
                <img className="w-4 filter invert grayscale" src={assets.queue_icon} alt="queue_icon" />
                <img className="w-4 filter invert grayscale" src={assets.speaker_icon} alt="speaker_icon" />
                <img
                    onClick={toggleMute}
                    className="w-4 cursor-pointer filter invert grayscale"
                    src={!isMuted && volume !== 0 ? assets.volume_icon : assets.mute_icon}
                    alt="volume_icon"
                />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="bg-gray-300 appearance-auto h-1 w-20 opacity-70 hover:opacity-100 rounded-lg"
                />
                <img className="w-4 filter invert grayscale" src={assets.mini_player_icon} alt="mini_player_icon" />
                <img className="w-4 filter invert grayscale" src={assets.zoom_icon} alt="zoom_icon" />
            </div>
        </div>
    ) : null;
}

export default Player;

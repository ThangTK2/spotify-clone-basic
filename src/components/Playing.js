import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

const Playing = () =>{
    const {song, handleSetSong} = useContext(Songs)
    const handleNext = () =>{
        handleSetSong(song + 1)
    }
    const handlePre = () =>{
        handleSetSong(song - 1)
    }
    return(
        <AudioPlayer className='player-music' src={song.url} showSkipControls={true} showJumpControls={false} 
        onClickNext={handleNext}
        onClickPrevious={handlePre}
        />
    )
}
export default Playing;


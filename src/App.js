import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
import Playing from './components/Playing';
import { useState } from 'react';

function App() {
  const[song, setSong] = useState(DataSongs[1])

  const handleSetSong = (id) =>{
    const song = DataSongs.find(element => element.id === id)
    setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>  {/**các thằng con đều sử dụng được thằng DataSongs */}
        <Navbar/>
        <div className='grid grid-cols-3 bg-[#535353] h-screen-navbar-player overflow-hidden'>
          {/* span1 */}
          <DetailSong/>
          {/* span2 */}
          <ListSongs/>
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;

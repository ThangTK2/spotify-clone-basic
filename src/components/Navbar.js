import React from 'react';
import { BsSpotify } from "react-icons/bs";

const Navbar = () =>{
    return(
        <div className='flex h-16 py-5 bg-pink-400 text-white justify-center leading-5 text-2xl'>
            <BsSpotify className='mr-2'/>TK2 Spotify
        </div>
    )
}

export default Navbar;
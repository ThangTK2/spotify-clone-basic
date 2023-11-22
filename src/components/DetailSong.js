import React from 'react';

const DetailSong = () =>{
    return(
        <div className='col-span-1 p-3'>
            <h2 className='text-pink-400 font-bold'>Now playing</h2>
            <div className='w-[240px] m-auto mt-10'>
                <img className='w-full' src="https://i.ytimg.com/vi/pzQ2d16B9Z8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkMayBYMFWII0bijxfODYTFkYJHA" alt="" />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[70px] rounded-full' src="https://i.ytimg.com/vi/pzQ2d16B9Z8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkMayBYMFWII0bijxfODYTFkYJHA" alt="" />
                <span className='text-xl text-white'>TK2 Lofi</span>
            </div>
        </div>
    )
}

export default DetailSong;
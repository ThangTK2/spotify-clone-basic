import React, { useContext, useEffect, useState } from 'react';
import { FiDownload } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { Songs } from '../Context';

const ListSongs = () =>{
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    // console.log(DataSongs);
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) =>{
        setIdSong(idSong)
        handleSetSong(idSong)
    }   
    useEffect(()=>{
        setIdSong(song.id)
    }, [song])
    return(
        <div className='col-span-2 overflow-y-scroll'>  {/**overflow-y-scroll: thanh trượt theo trục y */}
            <table className='table-auto w-full'>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Tiêu đề</th>
                        <th className='w-[10%]'>Tác giả</th>
                        <th className='w-[5%]'><BiTime/></th>
                        <th className='w-[5%]'><FiDownload/></th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((item, index) => (
                        <tr key={index} className={`h-12 text-white hover:bg-pink-400 hover:font-bold 
                        ${idSong === item.id && 'text-pink-950 bg-pink-600 font-bold'}`}
                        onClick={() => handlePlaySong(item.id)}>
                            <td className='text-center'>{index + 1}</td>
                            <td>{item.name}</td>
                            <td className='text-center'>{item.author}</td>
                            <td className='text-left'></td>
                            <td className='text-left'><a href="{item.url}"><FiDownload/></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListSongs;
import React,{useState, useEffect} from 'react'
import AlbumsService from '../services/AlbumsService.js';

const Uso = () => {

    const [albums, setAlbums] = useState({});
    const albumsService = new AlbumsService();

    const obtenerAlbums =()=>{
        albumsService.obtenerAlbums().then(data => setAlbums(data));
    }
    useEffect(() => {
        obtenerAlbums();
    },[]);
    console.log("albums",albums);
    
    return (
        <div>
            <h1>Albums: </h1>
            <h3> User id: {(albums[0] === undefined ? ' ' : albums[0].userId)}</h3>
                <h3> id: {(albums[0] === undefined ? ' ' : albums[0].id)}</h3>
                <h3> Title id: {(albums[0] === undefined ? ' ' : albums[0].title)}</h3>

                <h3> User id: {(albums[1] === undefined ? ' ' : albums[1].userId)}</h3>
                <h3> id: {(albums[1] === undefined ? ' ' : albums[1].id)}</h3>
                <h3> Title id: {(albums[1] === undefined ? ' ' : albums[1].title)}</h3>
        </div>
    )
}

export default Uso;


import axios from 'axios';

export default class AlbumsService{

    obtenerAlbums(){
        return axios.get("https://jsonplaceholder.typicode.com/albums").then(response => response.data).catch(error => {console.error(error.response.request.statusText)});
    }
}
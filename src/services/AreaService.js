import axios from 'axios';

export default class AreaService{

    getAllAreas(){
        return axios.get("http://localhost:8989/API/getAllAreas").then(response => response.data).catch(error => {console.error(error)});
    }
}
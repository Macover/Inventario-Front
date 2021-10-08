import axios from 'axios';

export default class RolService{

    getAllRols(){
        return axios.get("http://localhost:8989/API/getAllRols").then(response => response.data).catch(error => {console.error(error)});
    }
}
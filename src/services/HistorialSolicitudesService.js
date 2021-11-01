import axios from 'axios';

export default class HistorialSolicitudesService{

    getAllHistorialSolicitudes(){
        return axios.get("http://localhost:8989/API/getAllSolicitudesA").then(response => response.data).catch(error => {console.error(error)});
    }
}
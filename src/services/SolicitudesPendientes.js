import axios from 'axios';

export default class SolicitudesPendientes{

    getAllSolicitudesPendientes(){
        return axios.post("http://localhost:8989/API/selectByStatusSolicitudUObjeto?idEstatus=1").then(response => response.data).catch(error => {console.error(error)});
    }
}
import axios from 'axios';

export default class ReporteUsuarioService{

    getAllReporteUsuario(){
        return axios.get("http://localhost:8989/API/getAllReportsU").then(response => response.data).catch(error => {console.error(error)});
    }
}
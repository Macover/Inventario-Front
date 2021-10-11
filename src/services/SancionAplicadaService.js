import axios from 'axios';

export default class SancionAplicadaService{

    getAllSancionAplicada(){
        return axios.get("http://localhost:8989/API/getAllSancionAplicada").then(response => response.data).catch(error => {console.error(error)});
    }
}
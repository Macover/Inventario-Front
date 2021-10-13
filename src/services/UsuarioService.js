import axios from 'axios';

export default class UsuariosService{

    getAllUsuarios(){
        return axios.get("http://localhost:8989/API/getAllUsers").then(response => response.data).catch(error => {console.error(error)});
    }
}
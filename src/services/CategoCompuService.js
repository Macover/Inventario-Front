import axios from 'axios';

export default class CategoCompuService{

    getAllCategoriasCompu(){
        return axios.post("http://localhost:8989/API/selectByIdCategoria?idCategoria=2").then(response => response.data).catch(error => {console.error(error)});
    }
}
import axios from 'axios';

export default class CategoriaItemService{

    getAllCategoriaItems(){
        return axios.get("http://localhost:8989/API/getAllCategotiaIt").then(response => response.data).catch(error => {console.error(error)});
    }
}
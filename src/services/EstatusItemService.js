import axios from 'axios';

export default class EstatusItemService{

    getAllEstatusItems(){
        return axios.get("http://localhost:8989/API/getAllEstatusItem").then(response => response.data).catch(error => {console.error(error)});
    }
}
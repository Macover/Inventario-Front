import axios from 'axios';

export default class ItemService{

    getAllItems(){
        return axios.get("http://localhost:8989/API/getAllItem").then(response => response.data).catch(error => {console.error(error)});
    }
    setItem(item){
        return axios.post("http://localhost:8989/API/insertItemObjeto",item)
    }
}

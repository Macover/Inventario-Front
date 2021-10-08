import axios from 'axios';

export default class CovidService{

    obtenerData(){
        return axios.get("https://api.covidtracking.com/v1/us/current.json").then(response => response.data).catch(error => {console.error(error)});
    }
}
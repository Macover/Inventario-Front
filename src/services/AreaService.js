import axios from 'axios';

export default class AreaService {

    getAllAreas() {
        return axios.get("http://localhost:8989/API/getAllAreas")
        .then(response => response.data)
        .catch(error => { console.error(error) });
    }
    insertArea(areaObjeto) {
        console.log("insertarArea", areaObjeto);
        return axios.post("http://localhost:8989/API/insertAreaObjeto", areaObjeto)
                .then(function (response) {
                  console.log(response.headers);
                })
                .catch(function (error) {
                  console.log(error);
                });
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8989/API/insertAreaObjeto',
        //     data: areaObjeto
        // }).then(response => response.data).catch(error => { console.error(error) });
    }
}
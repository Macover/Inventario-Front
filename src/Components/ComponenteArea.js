import React,{useState, useEffect} from 'react'
import AreaService from '../services/AreaService'

const GetAreas = () =>{
    const [areas, setAreas] = useState({});
    const areaService = new AreaService();

    const getAllAreas = () =>{
        areaService.getAllAreas().then(data => setAreas(data));
    }
    useEffect(() => {
        getAllAreas();
    },[]);
    console.log("areas",areas);

    const validaAreas = () =>{
        if (Object.entries(areas).length === 0){
            return(
                <tr>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                </tr> 
            )
        }else{
            return(
                areas.map(area => (
                    <tr key={area.idArea}>
                        <th>{(area.idArea === undefined ? ' ' : area.idArea)}</th>
                        <th>{(area.nombreArea === undefined ? ' ' : area.nombreArea)}</th>
                    </tr>               
                ))
            )
        }
    }

    return (
        <div>
            <h1>Areas:</h1>
            <table>
                <tr>
                    <th>Id Area </th>
                    <th>Nombre Area</th>
                </tr>      
                {validaAreas()}  
            </table>
        </div>
    )

}

export default GetAreas;
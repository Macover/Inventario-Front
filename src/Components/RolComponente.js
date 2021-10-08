import React,{useState, useEffect} from 'react'
import RolService from '../services/RolService'

const GetRols = () =>{
    const [rols, setRols] = useState({});
    const rolService = new RolService();

    const getAllRols = () =>{
        rolService.getAllRols().then(data => setRols(data));
    }
    useEffect(() => {
        getAllRols();
    },[]);
    console.log("rols",rols);

    const validaRols = () =>{
        if (Object.entries(rols).length === 0){
            return(
                <tr>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                </tr> 
            )
        }else{
            return(
                rols.map(rol => (
                    <tr key={rol.idRol}>
                        <th>{(rol.idRol === undefined ? ' ' : rol.idRol)}</th>
                        <th>{(rol.nombreRol === undefined ? ' ' : rol.nombreRol)}</th>
                    </tr>               
                ))
            )
        }
    }

    return (
        <div>
            <h1>Roles:</h1>
            <table>
                <tr>
                    <th>Numero ID</th>
                    <th>Nombre rol</th>
                </tr>
                {validaRols()}
            </table>
        </div>
    )

}

export default GetRols;
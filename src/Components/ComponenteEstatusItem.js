import React,{useState, useEffect} from 'react'
import EstatusItemService from '../services/EstatusItemService';

const GetEstatusItems = () =>{
    const [estatusItems, setEstatusItems] = useState({});
    const estatusItemService = new EstatusItemService();

    const getAllEstatusItems = () =>{
        estatusItemService.getAllEstatusItems().then(data => setEstatusItems(data));
    }
    useEffect(() => {
        getAllEstatusItems();
    },[]);
    console.log("Estatus item",estatusItems);

    const validaCategoriaItem = () =>{
        if (Object.entries(estatusItems).length === 0){
            return(
                <tr>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                </tr> 
            )
        }else{
            return(
                estatusItems.map(estatusItem => (
                    <tr key={estatusItem.idEstatus}>
                        <th>{(estatusItem.idEstatus === undefined ? ' ' : estatusItem.idEstatus)}</th>
                        <th>{(estatusItem.estado === undefined ? ' ' : estatusItem.estado)}</th>
                    </tr>               
                ))
            )
        }
    }

    return (
        <div>
            <h1>Estatus Items:</h1>
            <table>
                <tr>
                    <th>Numero ID</th>
                    <th>Estado</th>
                </tr>
                {validaCategoriaItem()}
            </table>
        </div>
    )

}

export default GetEstatusItems;
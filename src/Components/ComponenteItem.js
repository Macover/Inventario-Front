import React,{useState, useEffect} from 'react'
import ItemService from '../services/ItemService';

const GetItems = () =>{
    const [items, setItems] = useState({});
    const itemService = new ItemService();

    const getAllItems = () =>{
        itemService.getAllItems().then(data => setItems(data));
    }
    useEffect(() => {
        getAllItems();
    },[]);
    console.log("items",items);

    const validaComponenteItem = () =>{
        if (Object.entries(items).length === 0){
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
                items.map(item => (
                    <tr key={item.idItem}>
                        <th>{(item.idItem === undefined ? ' ' : item.idItem)}</th>
                        <th>{(item.numSerie === undefined ? ' ' : item.numSerie)}</th>
                        <th>{(item.nombreItem === undefined ? ' ' : item.nombreItem)}</th>
                        <th>{(item.descripcion === undefined ? ' ' : item.descripcion)}</th>
                    </tr>               
                ))
            )
        }
    }

    return (
        <div>
            <h1>Items: </h1>
            <table>
                <tr>
                    <th>Numero ID</th>
                    <th>No. Serie</th>
                    <th>Nombre Item</th>
                    <th>Decripcion</th>
                </tr>
                {validaComponenteItem()}
            </table>
        </div>
    )

}

export default GetItems;
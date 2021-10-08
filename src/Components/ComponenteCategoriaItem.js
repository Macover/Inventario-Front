import React,{useState, useEffect} from 'react'
import CategoriaItemService from '../services/CategoriaItemService';

const GetCategoriaItems = () =>{
    const [categoriasItems, setCategoriasItem] = useState({});
    const categoriasItemsService = new CategoriaItemService();

    const getAllCategoriaItems = () =>{
        categoriasItemsService.getAllCategoriaItems().then(data => setCategoriasItem(data));
    }
    useEffect(() => {
        getAllCategoriaItems();
    },[]);
    console.log("Categoria Items",categoriasItems);

    return (
        <div>
            <h1>Categorias Items:</h1>
            <table>
                <tr>
                    <th>Numero ID</th>
                    <th>Nombre categoria</th>
                    <th>descripcion</th>
                </tr>
                {categoriasItems.map(categoriaItem => (
                    <tr key={categoriaItem.idCategoria}>
                        <th>{(categoriaItem.idCategoria === undefined ? ' ' : categoriaItem.idCategoria)}</th>
                        <th>{(categoriaItem.nombreCategoria === undefined ? ' ' : categoriaItem.nombreCategoria)}</th>
                        <th>{(categoriaItem.descripcion === undefined ? ' ' : categoriaItem.descripcion)}</th>
                    </tr>               
                ))}
            </table>
        </div>
    )

}

export default GetCategoriaItems;
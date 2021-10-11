import React,{useState, useEffect} from 'react'
import SancionAplicadaService from '../services/SancionAplicadaService';

const GetSancionAplicada = () =>{
    const [sancionesAplicadas, setSancionesAplicadas] = useState({});
    const sancionAplicadaService = new SancionAplicadaService();

    const getAllSancionesAplicadas = () =>{
        sancionAplicadaService.getAllSancionAplicada().then(data => setSancionesAplicadas(data));
    }
    useEffect(() => {
        getAllSancionesAplicadas();
    },[]);
    console.log("Sancion aplicada gruop",sancionesAplicadas);

    const validaSancionAplicada = () =>{
        if (Object.entries(sancionesAplicadas).length === 0){
            return(
                <tr>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
                </tr> 
            )
        }else{
            return(
                sancionesAplicadas.map(sancionAplicada => (
                    <tr key={sancionAplicada.idSanUsuApli}>
                        <th>{(sancionAplicada.idSanUsuApli === undefined ? ' ' : sancionAplicada.idSanUsuApli)}</th>
                        <th>{(sancionAplicada.idSancionUsuario.idSancionUsu === undefined ? ' ' : sancionAplicada.idSancionUsuario.idSancionUsu)}</th>
                        <th>{(sancionAplicada.idUsuario.idUsuario === undefined ? ' ' : sancionAplicada.idUsuario.idUsuario)}</th>
                        <th>{(sancionAplicada.idItem.idItem === undefined ? ' ' : sancionAplicada.idItem.idItem)}</th>
                        <th>{(sancionAplicada.motivoOperador === undefined ? ' ' : sancionAplicada.motivoOperador)}</th>
                        <th>{(sancionAplicada.fechaLimite === undefined ? ' ' : sancionAplicada.fechaLimite)}</th>
                    </tr>               
                ))
            )
        }
    }

    return (
        <div>
            <h1>Sanciones Aplicadas</h1>
            <table>
                <tr>
                    <th>Numero ID</th>
                    <th>ID Sancion Usuario</th>
                    <th>ID Usuario</th>
                    <th>ID Item</th>
                    <th>Motivo Operador</th>
                    <th>Fecha limite</th>
                </tr>
                {validaSancionAplicada()}
            </table>
        </div>
    )

}

export default GetSancionAplicada;
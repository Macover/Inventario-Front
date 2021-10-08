import React,{useState, useEffect} from 'react'
import UsuariosService from '../services/UsuariosService.js'

const GetUsuarios = () =>{
    const [usuarios, setUsuarios] = useState({});
    const usuarioService = new UsuariosService();

    const getAllUsuarios = () =>{
        usuarioService.getAllUsuarios().then(data => setUsuarios(data));
    }
    useEffect(() => {
        getAllUsuarios();
    },[]);

    console.log("usuarios",usuarios);

    const validaUsuarios = () =>{
        if (Object.entries(usuarios).length === 0){
            return(
                <tr>
                    <th>Sin datos</th>
                    <th>Sin datos</th>
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
                usuarios.map(usuario => (
                    
                    <tr key={usuario.idUsuario}>
                        <th>{(usuario.idUsuario === undefined ? ' ' : usuario.idUsuario)}</th>
                        <th>{(usuario.matricula === undefined ? ' ' : usuario.matricula)}</th>
                        <th>{(usuario.primerNombre === undefined ? ' ' : usuario.primerNombre)}</th>
                        <th>{(usuario.segundoNombre === undefined ? ' ' : usuario.segundoNombre)}</th>
                        <th>{(usuario.apellidoP === undefined ? ' ' : usuario.apellidoP)}</th>
                        <th>{(usuario.apellidoM === undefined ? ' ' : usuario.apellidoM)}</th>
                        <th>{(usuario.correo === undefined ? ' ' : usuario.correo)}</th>
                        <th>{(usuario.numTelefono === undefined ? ' ' : usuario.numTelefono)}</th>
                    </tr>               
                ))
            )
        }
    }
   
    return (
        <div>
            <h1>Usuarios:</h1>
            <table>
                <tr>
                    <th>ID Usuario</th>
                    <th>Matricula</th>
                    <th>1er nom</th>
                    <th>2nd nom</th>
                    <th>1er ap</th>
                    <th>2nd ap</th>
                    <th>correo</th>
                    <th>No.Telefono</th>
                </tr>
                {validaUsuarios()}
            </table>
        </div>
    )

}

export default GetUsuarios;
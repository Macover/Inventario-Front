import React, { useState, useEffect } from 'react'
import UsuariosService from '../../services/UsuarioService.js'
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Button,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaPlus
} from "react-icons/fa";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import TablesRowUsuario from "components/Tables/TablesRowUsuario.js";


function GetUsuariosTable() {
  const textColor = useColorModeValue("gray.700", "white");

  const [usuarios, setUsuarios] = useState({});
  const usuarioService = new UsuariosService();

  const getAllUsuarios = () => {
    usuarioService.getAllUsuarios().then(data => setUsuarios(data));
  }
  useEffect(() => {
    getAllUsuarios();
  }, []);

  console.log("usuarios", usuarios);

  const validaUsuarios = () => {
    if (Object.entries(usuarios).length === 0) {
      return (
        <TablesRowUsuario
          primerNombre="sin datos"
          segundoNombre="sin datos"
        />
      )
    } else {
      return(
        usuarios.map(usuario => (
          <TablesRowUsuario
            idUsuario = {usuario.idUsuario}
            idArea = {usuario.idArea.idArea}
            rol = {usuario.idRol.nombreRol}
            primerNombre= {usuario.primerNombre}
            segundoNombre= {usuario.segundoNombre}
            apellidoP = {usuario.apellidoP}
            apellidoM = {usuario.apellidoM}
            matricula = {usuario.matricula}
            numTelefono = {usuario.numTelefono}
            correo = {usuario.correo}
          />
        ))
      )
    }
  }

  const clickBoton = () =>{
    console.log("le diste click al boton")
  }

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>

      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">      
          <Flex justify="space-between" align="center" mb="1rem" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold">          
              Tabla de Usuarios
            </Text>
            
            <Button
              onClick={clickBoton}
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xn"
              p="8px 32px"
            >
              <FaPlus/>  Agregar nuevo Usuario
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">Id Usuario</Th>
                <Th color="gray.400">Id Area</Th>
                <Th color="gray.400">Rol</Th>
                <Th color="gray.400">Primer Nombre</Th>
                <Th color="gray.400">Segundo Nombre</Th>
                <Th color="gray.400">Apellido Paterno</Th>
                <Th color="gray.400">Apellido Materno</Th>
                <Th color="gray.400">Matricula</Th>
                <Th color="gray.400">Numero Telefono</Th>
                <Th color="gray.400">correo</Th>
                <Th color="gray.400"> </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {validaUsuarios()}
            </Tbody>
          </Table>
          
        </CardBody>
      </Card>
    </Flex>
  );
}

export default GetUsuariosTable;

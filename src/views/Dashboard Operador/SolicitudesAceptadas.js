import React, { useState, useEffect } from 'react';
import SolicitudUsuario from '../../services/SolicitudesUsuario.js';

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,  
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import TablesRowSolicitudUsuarioAceptadas from 'components/Tables/TablesRowSolicitudUsuarioAceptadas.js';

import { SearchBarCustom } from 'components/Navbars/SearchBar/SearchBarCustom';


function SolicitudesAceptadasC() {
  const textColor = useColorModeValue("gray.700", "white");
  
  const [solicitudesAceptadasE, setSolicitudesAceptadasE] = useState({});
  const solicitudesAceptadas = new SolicitudUsuario();

  const getAllSolicitudesAceptadas = () =>{
    solicitudesAceptadas.getAllSolicitudesAceptadas().then(data => setSolicitudesAceptadasE(data));
  }

  useEffect(()=>{
    getAllSolicitudesAceptadas();
  },[]);

  console.log("solicitudesAceptadas", solicitudesAceptadasE);

  const validaSolicitudAceptada = () => {
    if (Object.entries(solicitudesAceptadasE).length === 0) {
      return (
        <TablesRowSolicitudUsuarioAceptadas
        numeroIteracion="sin datos"          
        />
      )
    } else {
      return(
        solicitudesAceptadasE.map((solicitudAceptada, index) => (
          <TablesRowSolicitudUsuarioAceptadas
            nombreCompleto = {solicitudAceptada.idUsuario.primerNombre + " " +
               solicitudAceptada.idUsuario.segundoNombre + " " +
               solicitudAceptada.idUsuario.apellidoP + " " +
               solicitudAceptada.idUsuario.apellidoM}                    
            numeroIteracion = {index + 1}
            primerNombre = {solicitudAceptada.idUsuario.primerNombre}
            segundoNombre = {solicitudAceptada.idUsuario.segundoNombre}
            primerApellido = {solicitudAceptada.idUsuario.apellidoP}
            segundoApellido = {solicitudAceptada.idUsuario.apellidoM}
            nombreArea = {solicitudAceptada.idUsuario.idArea.nombreArea}
            matricula = {solicitudAceptada.idUsuario.matricula}
            NoSerie = {solicitudAceptada.idItem.numSerie}
            nombreItem = {solicitudAceptada.idItem.nombreItem}
            categoria = {solicitudAceptada.idItem.idCategoria.nombreCategoria}
            fechaRegistro = {solicitudAceptada.created_at}
            fechaInicio = {solicitudAceptada.fechaInicio}
            fechaFinal = {solicitudAceptada.fechaFinal}
            motivo = {solicitudAceptada.motivo}
          />
        ))
      )
    }
  }


  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>

      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">      
          <Flex justify="space-between" align="center" mb="1rem" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold">          
              Solicitudes Aceptadas
            </Text>           
            <SearchBarCustom/>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.500">Numero</Th>
                <Th color="gray.400">Primer nombre</Th>
                <Th color="gray.400">Segundo nombre</Th>
                <Th color="gray.400">Primer apellido</Th>
                <Th color="gray.400">Segundo apellido</Th>
                <Th color="gray.400">Nombre area</Th>
                <Th color="gray.400">matricula</Th>
                <Th color="gray.400">No. Serie</Th>
                <Th color="gray.400">Nombre item</Th>
                <Th color="gray.400">Categoria</Th>
                <Th color="gray.400">Fecha registro</Th>
                <Th color="gray.400">Fecha Inicio</Th>
                <Th color="gray.400">Fecha Final</Th>
                <Th color="gray.400" textAlign="center">Motivo</Th>
                <Th color="gray.400" textAlign="center">Accion</Th>                
              </Tr>
            </Thead>
            <Tbody>
              {validaSolicitudAceptada()}
            </Tbody>
          </Table>          
        </CardBody>
      </Card>
    </Flex>
  );
}

export default SolicitudesAceptadasC;
import React, { useState, useEffect } from 'react';
import SolicitudesPendientes from '../../services/SolicitudesPendientes.js';

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

import TablesRowSolicitudUsuarioPendiente from 'components/Tables/TablesRowSolicitudUsuarioPendiente.js';

import { SearchBarCustom } from 'components/Navbars/SearchBar/SearchBarCustom';


function SolicitudesPendientesC() {
  const textColor = useColorModeValue("gray.700", "white");
  
  const [solicitudesPendientesE, setSolicitudesPendientesE] = useState({});
  const solicitudesPendientes = new SolicitudesPendientes();

  const getAllSolicitudesPendientes = () =>{
    solicitudesPendientes.getAllSolicitudesPendientes().then(data => setSolicitudesPendientesE(data));
  }

  useEffect(()=>{
    getAllSolicitudesPendientes();
  },[]);

  console.log("solicitudesPendientes", solicitudesPendientesE);

  const validaSolicitudPendiente = () => {
    if (Object.entries(solicitudesPendientesE).length === 0) {
      return (
        <TablesRowSolicitudUsuarioPendiente
        numeroIteracion="sin datos"          
        />
      )
    } else {
      return(
        solicitudesPendientesE.map((solicitudePendiente, index) => (
          <TablesRowSolicitudUsuarioPendiente    
            nombreCompleto = {solicitudePendiente.idUsuario.primerNombre + 
              solicitudePendiente.idUsuario.segundoNombre + 
              solicitudePendiente.idUsuario.primerApellido + 
              solicitudePendiente.idUsuario.segundoApellido}                    
            numeroIteracion = {index + 1}
            primerNombre = {solicitudePendiente.idUsuario.primerNombre}
            segundoNombre = {solicitudePendiente.idUsuario.segundoNombre}
            primerApellido = {solicitudePendiente.idUsuario.apellidoP}
            segundoApellido = {solicitudePendiente.idUsuario.apellidoM}
            nombreArea = {solicitudePendiente.idUsuario.idArea.nombreArea}
            matricula = {solicitudePendiente.idUsuario.matricula}
            NoSerie = {solicitudePendiente.idItem.numSerie}
            nombreItem = {solicitudePendiente.idItem.nombreItem}
            categoria = {solicitudePendiente.idItem.idCategoria.nombreCategoria}
            fechaRegistro = {solicitudePendiente.created_at}
            fechaInicio = {solicitudePendiente.fechaInicio}
            fechaFinal = {solicitudePendiente.fechaFinal}
            motivo = {solicitudePendiente.motivo}
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
              Solicitudes Pendientes
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
                <Th color="gray.400" textAlign="center">Ver</Th>                
              </Tr>
            </Thead>
            <Tbody>
              {validaSolicitudPendiente()}
            </Tbody>
          </Table>          
        </CardBody>
      </Card>
    </Flex>
  );
}

export default SolicitudesPendientesC;
import React, { useState, useEffect } from 'react';
import HistorialSolicitudesService from '../../services/HistorialSolicitudesService.js';

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

import TablesRowSolicitudUsuario from 'components/Tables/TablesRowSolicitudUsuario.js';

import { SearchBarCustom } from 'components/Navbars/SearchBar/SearchBarCustom';

function HistorialSolicitudesUsuario() {
  const textColor = useColorModeValue("gray.700", "white");

  const [historialSolicitudes, setHistorialS] = useState({});
  const historialSolicitudesService = new HistorialSolicitudesService();

  const getAllHistorialSolicitudes = () =>{
      historialSolicitudesService.getAllHistorialSolicitudes().then(data => setHistorialS(data));
  }

  useEffect(()=>{
    getAllHistorialSolicitudes();
  },[]);

  console.log("historialSolicitudes", historialSolicitudes);

  const validaHistorial = () => {
    if (Object.entries(historialSolicitudes).length === 0) {
      return (
        <TablesRowSolicitudUsuario
        numeroSolicitud="sin datos"          
        />
      )
    } else {
      return(
        historialSolicitudes.map(historialSolicitud => (
          <TablesRowSolicitudUsuario
            numeroSolicitud = "1"
            nombreItem = {historialSolicitud.idItem.nombreItem}
            nombreSolicitante = {historialSolicitud.idUsuario.primerNombre}
            descripcion = {historialSolicitud.descripcion}
            fechaInicio = {historialSolicitud.fechaIngresada}
            fechaRetiro = {historialSolicitud.fechaRetiro}
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
              Historial Solicitudes
            </Text>           
            <SearchBarCustom/>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">numero solicitud</Th>
                <Th color="gray.400">Nombre Item</Th>
                <Th color="gray.400">Nombre solicitante</Th>
                <Th color="gray.400">Descripcion</Th>
                <Th color="gray.400">Fecha Ingresada</Th>
                <Th color="gray.400">Fecha retiro</Th>
                <Th textAlign="center" color="gray.400">Accion</Th>                
              </Tr>
            </Thead>
            <Tbody>
              {validaHistorial()}
            </Tbody>
          </Table>          
        </CardBody>
      </Card>
    </Flex>
  );
}

export default HistorialSolicitudesUsuario;


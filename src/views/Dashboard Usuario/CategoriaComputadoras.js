import React, { useState, useEffect } from 'react'
import CategoCompuService from 'services/CategoCompuService.js';
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
import TablesRowComputadoras from 'components/Tables/TablesRowComputadoras';

import { SearchBarCustom } from 'components/Navbars/SearchBar/SearchBarCustom';




function CategoriaComputadoras() {
  const textColor = useColorModeValue("gray.700", "white");

  const [computadoras, setComputadoras] = useState({});
  const categoCompuService = new CategoCompuService();

  const getAllComputadoras = () => {    
    categoCompuService.getAllCategoriasCompu().then(data => setComputadoras(data));
  }
  useEffect(() => {
    getAllComputadoras();
  }, []);

  console.log("computadoras", computadoras);

  const validaComputadoras = () => {
    if (Object.entries(computadoras).length === 0) {
      return (
        <TablesRowComputadoras
          numSerie="sin datos"          
        />
      )
    } else {
      return(
        computadoras.map(computadora => (
          <TablesRowComputadoras
            idEstatus = {1}
            folioSolicitud = {"dfsdf12"}
            idUsuario = {1}
            idItem = {computadora.idItem}
            numSerie = {computadora.numSerie} 
            nombreItem = {computadora.nombreItem}
            nombreCategoria = {computadora.idCategoria.nombreCategoria}
            descripcion = {computadora.descripcion}
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
              Selecciona un Modelo
            </Text>           
            <SearchBarCustom/>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">No.Serie</Th>
                <Th color="gray.400">Nombre Item</Th>
                <Th color="gray.400">Categoria</Th>
                <Th color="gray.400">Descripcion</Th>
                <Th textAlign="center" color="gray.400">Accion</Th>                
              </Tr>
            </Thead>
            <Tbody>
              {validaComputadoras()}
            </Tbody>
          </Table>          
        </CardBody>
      </Card>
    </Flex>
  );
}

export default CategoriaComputadoras;


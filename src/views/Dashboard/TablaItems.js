import React, { useState, useEffect } from 'react'
import ItemService from '../../services/ItemService.js';
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Button,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";

import {
  FaPlus
} from "react-icons/fa";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import TablesRowItems from 'components/Tables/TablesRowItems.js';

function GetItemsTable() {

  const textColor = useColorModeValue("gray.700", "white");

  const [items, setItems] = useState({});
  const itemService = new ItemService();

  const getAllItems = () => {
    itemService.getAllItems().then(data => setItems(data));
  }
  useEffect(() => {
    getAllItems();
  }, []);
  console.log("items", items);

  const validaDatos = () => {
    if (Object.entries(items).length === 0) {
      return (
        <TablesRowItems
          idItem="sin datos"
          idCategoria="sin datos"
        />
      )
    } else {
      return (
        items.map(item => (
          <TablesRowItems
            idItem={item.idItem}
            idCategoria={item.idCategoria.idCategoria}
            numSerie={item.numSerie}
            nombreItem={item.nombreItem}
            descripcion={item.descripcion}
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
              
              Tabla de Items
            </Text>
            
            <Button
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xn"
              p="8px 32px"
            >
              <FaPlus/>  Agregar nuevo Item
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">Id Item</Th>
                <Th color="gray.400">Id Categoria</Th>
                <Th color="gray.400">Numero de serie</Th>
                <Th color="gray.400">Nombre del item</Th>
                <Th color="gray.400">descripcion</Th>
                <Th color="gray.400"> </Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {validaDatos()}
            </Tbody>
          </Table>
        </CardBody>
      </Card>

    </Flex>
  );
}

export default GetItemsTable;

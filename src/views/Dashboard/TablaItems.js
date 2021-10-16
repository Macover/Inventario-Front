import React, { useState, useEffect } from 'react'
import ItemService from '../../services/ItemService.js';
import CategoriaItemService from '../../services/CategoriaItemService.js';
import { Dropdown } from 'primereact/dropdown';
import ReactDOM from "react-dom";


import { useForm } from "react-hook-form";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Button,
  Th,
  Thead,
  Select,
  Tr,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";
import {
  FaPlus
} from "react-icons/fa";

//Modal imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"

import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input"



// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import TablesRowItems from 'components/Tables/TablesRowItems.js';


function GetItemsTable() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const textColor = useColorModeValue("gray.700", "white");

  const [selectedItem, setSelectedItem] = useState(null);

  const [items, setItems] = useState({});
  const itemService = new ItemService();

  const getAllItems = () => {
    itemService.getAllItems().then(data => setItems(data));
  }
  // useEffect(() => {

  // }, []);

  console.log("items", items);

  useEffect(() => {
    getAllItems();
    getAllCategoriaItems();
  }, []);

  const [categoriasItems, setCategoriasItem] = useState({});
  const categoriasItemsService = new CategoriaItemService();

  const getAllCategoriaItems = () => {
    categoriasItemsService.getAllCategoriaItems().then(data => setCategoriasItem(data));
  }


  console.log("Categoria Items", categoriasItems);

  const validaCategoriaItem = () => {
    if (Object.entries(categoriasItems).length === 0) {
      return (
        <option>Sin datos</option>
      )
    } else {
      return (
        categoriasItems.map(categoriaItem => (
          <option>{categoriaItem.nombreCategoria}</option>
        ))
      )
    }
  }

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
              onClick={onOpen}
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xn"
              p="8px 32px"
            ><FaPlus />  Agregar nuevo Item
            </Button>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalContent>
                  <ModalHeader>Agregar un nuevo item</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Nombre del item</FormLabel>
                      <Input
                      {...register("firstName")}
                      ref={initialRef}                     
                      focusBorderColor="teal.300" 
                      placeholder="Nombre del item" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Numero de serie</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children="NO." />
                        <Input
                        
                        focusBorderColor="teal.300"  
                        type="tel" 
                        placeholder="Serie" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="country">
                      <FormLabel>Selecciona una categoria</FormLabel>
                      <Select
                      focusBorderColor="teal.300" 
                      placeholder="Seleccion categoria">
                        {validaCategoriaItem()}
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Descripcion</FormLabel>
                      <Input
                      
                      focusBorderColor="teal.300"
                      placeholder="Descripcion del item" />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      type="submit"
                      colorScheme="teal"
                      borderColor="teal.300"
                      color="teal.300"
                      variant="ghost"
                      mr={3}>
                      Agregar
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                  </ModalFooter>
                </ModalContent>
              </form>
            </Modal>
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

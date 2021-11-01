import React, { useState, useEffect } from 'react'
import ItemService from '../../services/ItemService.js';
import CategoriaItemService from '../../services/CategoriaItemService.js';

import {
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"


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

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  const setItem = (item) => {
    itemService.getAllItems().then(data => setItems(data));
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const textColor = useColorModeValue("gray.700", "white");

  const [items, setItems] = useState({});
  const itemService = new ItemService();

  const getAllItems = () => {
    itemService.getAllItems().then(data => setItems(data));
  }


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
          <option defaultValue={categoriaItem.idCategoria} {...register("idCategoria")}>
            {categoriaItem.nombreCategoria}
          </option>
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
              onClick={() => {
                onOpen();
                reset();
              }}
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
                        type="hidden"
                        focusBorderColor="teal.300"
                      />
                      <input placeholder="Nombre del item" className="chakra-input css-1sp0hs5" {...register("nombreItem", { required: true })} />
                      {errors.nombreItem?.type === 'required' &&
                        <Alert borderRadius="10px" margin="10px 0px" status="warning">
                          <AlertIcon />
                          <AlertTitle>El nombre del item es requerido</AlertTitle>
                        </Alert>
                      }
                    </FormControl>
                    <FormControl>
                      <FormLabel>Numero de serie</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children="NO." />
                        <input placeholder="serie" className="chakra-input css-1sp0hs5" {...register("numSerie", { required: true })}/>                                                
                      </InputGroup>
                      {errors.numSerie?.type === 'required' &&
                          <Alert borderRadius="10px" margin="10px 0px" status="warning">
                            <AlertIcon />
                            <AlertTitle>El numero de serie es requerido</AlertTitle>
                          </Alert>
                        }
                    </FormControl>
                    <FormControl id="country">
                      <FormLabel>Selecciona una categoria</FormLabel>
                      <Select
                        hidden="true"
                        focusBorderColor="teal.300"
                      ></Select>
                      <select
                        class="chakra-select css-iwbr4y">
                        <option>Selecciona una categoria</option>
                        {validaCategoriaItem()}
                      </select>                      
                    </FormControl>
                    <FormControl>
                      <FormLabel>Descripcion</FormLabel>
                      <input placeholder="Descripcion del item" className="chakra-input css-1sp0hs5" {...register("descripcion", { required: true })}/>
                      {errors.descripcion?.type === 'required' &&
                          <Alert borderRadius="10px" margin="10px 0px" status="warning">
                            <AlertIcon />
                            <AlertTitle>La descripcion es requerida</AlertTitle>
                          </Alert>
                        }
                      <input type="hidden" value="2021-07-11" {...register("createdAt")} />                      
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

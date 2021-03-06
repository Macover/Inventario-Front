import React, { useState, useEffect } from 'react'
import AreaService from '../../services/AreaService.js';
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
  import { Input } from "@chakra-ui/input"

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { useForm } from "react-hook-form";

import TablesRowAreas from 'components/Tables/TablesRowAreas';

import {
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"

function GetAreasAreas() {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (areaObjeto) => {
    console.log(areaObjeto);
    areaService.insertArea(areaObjeto).then(data => setAreaObejto(data));
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const textColor = useColorModeValue("gray.700", "white");

  const [areas, setAreas] = useState({});
  const areaService = new AreaService();

  const getAllAreas = () => {
    areaService.getAllAreas().then(data => setAreas(data));
  }

  const [areaObjeto, setAreaObejto] = useState({});
  
  const insertArea = (areaObjeto) =>{
    areaService.insertArea(areaObjeto).then(data => setAreaObejto(data));
  }

  useEffect(() => {
    getAllAreas();
    onSubmit();    
  }, []);
  // console.log("areas", areas);

  const validaDatos = () => {
    if (Object.entries(areas).length === 0) {
      return (
        <TablesRowAreas
          idArea="sin datos"
          nombreArea="sin datos"
        />
      )
    } else {
      return (
        areas.map(area => (
          <TablesRowAreas
            idArea={area.idArea}
            nombreArea={area.nombreArea}
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

              Tabla de Areas
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
            ><FaPlus />  Agregar una nueva Area
            </Button>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
              isCentered              
            >
              <ModalOverlay />
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalContent>
                  <ModalHeader>Agregar una nueva Area</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Nombre de la area</FormLabel>
                      <Input
                      type="hidden"
                      ref={initialRef}
                      focusBorderColor="teal.300" 
                      />
                      <input 
                      ref={initialRef}
                      className="chakra-input css-1sp0hs5"
                      placeholder="Ingrese un area. Ej. Administraci??n"
                      {...register("nombreArea", { required: true })} />
                      {errors.nombreArea?.type === 'required' &&
                        <Alert borderRadius="10px" margin="10px 0px" status="warning">
                          <AlertIcon />
                          <AlertTitle>Necesita poner un area</AlertTitle>
                        </Alert>
                      }
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <input type="hidden" value="2021-07-11" {...register("created_at")}/>
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
                <Th textAlign="center" color="gray.400">Id Area</Th>
                <Th color="gray.400">Nombre area</Th>
                <Th textAlign="center" color="gray.400">Accion</Th>            
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

export default GetAreasAreas;

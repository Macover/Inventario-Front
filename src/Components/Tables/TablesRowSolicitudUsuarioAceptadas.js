import React, { useState } from "react";



import {
  Button,
  Flex,
  Td,
  Text,  
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

import { Textarea } from "@chakra-ui/textarea";

import { WarningTwoIcon } from "@chakra-ui/icons";



import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, InputGroup } from "@chakra-ui/input"
import { useForm } from "react-hook-form";

import {
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"

import { InfoIcon } from "@chakra-ui/icons";


import { useDisclosure } from "@chakra-ui/hooks"

import { MdCheckCircle, MdClose, MdWarning } from "react-icons/md";




function TablesRowSolicitudUsuarioAceptadas(props) {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {    
    console.log("data", data);
    reset();
  }
  const { isOpen, onOpen, onClose } = useDisclosure()  
  const { 
    isOpen: isOpenMotivoModal, 
    onOpen: onOpenMotivoModal, 
    onClose: onCloseMotivoModal 
  } = useDisclosure()

  const initialRef = React.useRef()

  const {
    nombreCompleto,
    numeroIteracion,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    nombreArea,
    matricula,
    NoSerie,
    nombreItem,
    categoria,
    fechaRegistro,
    fechaInicio,
    fechaFinal,
    motivo
  } = props;

  const textColor = useColorModeValue("gray.700", "white");  

  return (

    <Tr>

      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex justifyContent="center" align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {numeroIteracion}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {primerNombre}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {segundoNombre}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {primerApellido}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {segundoApellido}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {nombreArea}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {matricula}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {NoSerie}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {nombreItem}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {categoria}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {fechaRegistro === null ? 'Sin registro' : fechaRegistro}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {fechaInicio}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {fechaFinal}
        </Text>
      </Td>
      <Td>
        <Button
          leftIcon={<InfoIcon />}
          colorScheme="teal"
          borderColor="teal.300"
          color="teal.300"
          variant="ghost"
          fontSize="xn"
          onClick={onOpenMotivoModal}
        >
          VER
        </Button>
        
        <Modal          
          isOpen={isOpenMotivoModal}
          onClose={onCloseMotivoModal}
          closeOnOverlayClick={false}
          isCentered
          initialFocusRef={initialRef}
          motionPreset="scale"
        >
          <ModalOverlay />          
          <ModalContent>
            <ModalHeader>
              <Text>Motivo por: <Text color="teal.400" as="em">{nombreCompleto}</Text></Text>
              <Text>Item solititado: <Text color="teal.400" as="em">{nombreItem}</Text></Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Text fontWeight="bold" mb="1rem">Motivo: </Text>
              <Text color="teal.400" fontWeight="bold" mb="1rem" >
                {motivo}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                colorScheme="teal"
                borderColor="teal.400"
                color="teal.400"
                variant="ghost"
                ref={initialRef}
                onClick={onCloseMotivoModal}
                mr={3}>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Td>
      <Td>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "10px" }}
        >
          <Button
            leftIcon={<MdWarning />}
            colorScheme="yellow"
            borderColor="yellow.400"
            color="yellow.400"
            variant="ghost"
            fontSize="xn"
            onClick={onOpen}
          >
            SANCIONAR
          </Button>

          <Modal            
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            isCentered
            motionPreset="scale"
          >
            <ModalOverlay />
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalContent>
                <ModalHeader>Item solicitado: <Text color="teal.400" as="em">{nombreItem}</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <Input
                      type="hidden"
                      focusBorderColor="teal.300"
                    />
                  </FormControl>
                  <FormLabel>Item solicitado por: <Text fontWeight="bold" as="em" color={textColor}>{primerNombre}</Text></FormLabel>
                  <FormLabel>Matricula: <Text fontWeight="bold" as="em" color={textColor}>{matricula}</Text></FormLabel>
                  <FormLabel>Area: <Text fontWeight="bold" as="em" color={textColor}>{nombreArea}</Text></FormLabel>
                  <FormLabel>Numero de serie: <Text fontWeight="bold" as="em" color={textColor}>{NoSerie}</Text></FormLabel>
                  <FormLabel>Categoria: <Text fontWeight="bold" as="em" color={textColor}>{NoSerie}</Text></FormLabel>                  
                  <FormLabel>Fecha registro: <Text fontWeight="bold" as="em" color={textColor}>{fechaRegistro}</Text></FormLabel>
                  <FormLabel>Fecha inicio: <Text fontWeight="bold" as="em" color={textColor}>{fechaInicio}</Text></FormLabel>
                  <FormLabel>Fecha final <Text fontWeight="bold" as="em" color={textColor}>{fechaFinal}</Text></FormLabel>
                  <FormControl>
                    <FormLabel>Motivo</FormLabel>
                    <Input
                      hidden="true"
                      h="300"
                      focusBorderColor="teal.300"
                    />
                    <Textarea
                      hidden="true"
                      h="300"
                      focusBorderColor="teal.300"
                      resize="none"
                    />
                    <textarea placeholder="Coloca la situacion por la cual desea reportar este articulo" className="chakra-textarea css-10sfhr3" {...register("motivo", { required: true })} />
                    {errors.motivo?.type === 'required' &&
                      <Alert borderRadius="10px" margin="10px 0px" status="warning">
                        <AlertIcon />
                        <AlertTitle>Necesita colocar el motivo de la sancion</AlertTitle>
                      </Alert>
                    }

                    {/* datos temporales */}
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button                    
                    type="submit"                                        
                    leftIcon={<MdWarning />}
            colorScheme="yellow"
            borderColor="yellow.400"
            color="yellow.400"
            variant="ghost"
            fontSize="xn"
                    mr={3}>
                    Sancionar
                  </Button>
                  <Button                   
                  variant="ghost"
                  onClick={onClose}
                  >
                    Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>

        </Flex>
      </Td>
    </Tr >
  );
}

export default TablesRowSolicitudUsuarioAceptadas;

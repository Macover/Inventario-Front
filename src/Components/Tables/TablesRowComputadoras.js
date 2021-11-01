import React from "react";

import {
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import { InfoIcon,CalendarIcon } from "@chakra-ui/icons";

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
import { Input, InputGroup } from "@chakra-ui/input"
import { useForm } from "react-hook-form";

import {
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"

function TablesRowComputadoras(props) {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log("solicitudUsuario", data);
    reset();
  }
  const { isOpen, onOpen, onClose } = useDisclosure()    

  const {
    idEstatus,
    idItem,
    idUsuario,
    folioSolicitud,
    numSerie,
    nombreItem,
    nombreCategoria,
    descripcion
  } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "140px" }} pl="0px">
        <Flex justifyContent="center" align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {numSerie}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {nombreItem}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {nombreCategoria}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {descripcion}
        </Text>
      </Td>
      <Td>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            leftIcon={<CalendarIcon />}
            colorScheme="teal"
            borderColor="teal.300"
            color="teal.300"
            variant="ghost"
            fontSize="xn"
            onClick={onOpen}
          >
            Solicitar Item
          </Button>
          
          <Modal              
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalContent>
                  <ModalHeader>Solicitar <Text color="teal.400" as="em">{nombreItem}</Text>...</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>                      
                      <Input
                        type="hidden"
                        focusBorderColor="teal.300"
                      />
                      <FormLabel>¿Para cuando lo necesita?</FormLabel>
                      <Input
                      hidden = "true"
                      focusBorderColor="teal.300" 
                      type="date"></Input>

                      <input type="date" className="chakra-input css-1sp0hs5" {...register("fechaInicio", { required: true })} />
                      {errors.fechaInicio?.type === 'required' &&
                        <Alert borderRadius="10px" margin="10px 0px" status="warning">
                          <AlertIcon />
                          <AlertTitle>Necesita colocar una una fecha de cuando lo necesita</AlertTitle>
                        </Alert>
                      }
                    </FormControl>
                    <FormControl>
                      <FormLabel>¿Cuando lo piensa regresar?</FormLabel>
                      <InputGroup>                        
                        <input type="date" className="chakra-input css-1sp0hs5" {...register("fechaFinal", { required: true })}/>                                                
                      </InputGroup>
                      {errors.fechaFinal?.type === 'required' &&
                          <Alert borderRadius="10px" margin="10px 0px" status="warning">
                            <AlertIcon />
                            <AlertTitle>Necesita colocar una una fecha de cuando lo piensa regresar</AlertTitle>
                          </Alert>
                        }
                    </FormControl>                    
                    <FormControl>
                      <FormLabel>Motivo</FormLabel>
                      <input placeholder="Escriba un motivo del cual necesita el item" className="chakra-input css-1sp0hs5" {...register("motivo", { required: true })}/>
                      {errors.motivo?.type === 'required' &&
                          <Alert borderRadius="10px" margin="10px 0px" status="warning">
                            <AlertIcon />
                            <AlertTitle>Necesita colocar un motivo</AlertTitle>
                          </Alert>
                        }

                        {/* datos temporales */}
                      <input type="hidden" value={idEstatus} {...register("idEstatus")}/>
                      <input type="hidden" value={folioSolicitud} {...register("folioSolicitud")}/>
                      <input type="hidden" value={idUsuario} {...register("idUsuario")}/>
                      <input type="hidden" value={idItem} {...register("idItem")}/>
                      <input type="hidden" value="2021-07-11" {...register("created_at")}/>
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
                      Solicitar
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                  </ModalFooter>
                </ModalContent>
              </form>
            </Modal>

            <Button
            leftIcon={<InfoIcon />}
            colorScheme="blue"
            borderColor="blue.300"
            color="blue.300"
            variant="ghost"
            fontSize="xn"            
          >
            Acerca del item
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default TablesRowComputadoras;

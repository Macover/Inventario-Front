import React, { useState } from "react";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { useRef } from "react";

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

import { WarningTwoIcon } from "@chakra-ui/icons";

import { Textarea } from "@chakra-ui/textarea";

import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, InputGroup } from "@chakra-ui/input"
import { useForm } from "react-hook-form";

import {
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"


import { useDisclosure } from "@chakra-ui/hooks"



function TablesRowSolicitudUsuario(props) {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {

    console.log("reporte_usuario", data);
    console.log("imagen: ", selectedFile);
    reset();
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  //input file
  const chooseOptions = { label: 'Elegir', icon: 'pi pi-fw pi-plus' };

  // const [img, setImg] = useState({
  //   img: ""
  // })
  // const handleChange = (event) =>{
  //   setImg((prevProps) => ({
  //     ...prevProps,
  //     [event.target.name]: event.target.value,
  //   }))
  // }

  const onUpload = () =>{
    console.log("se cargo el archivo");    
  }

  const onBasicUpload = ({files}) => {
    console.log("ah entrado");
    const [file] = files;
    setSelectedFile(file);
    
  }

  const [selectedFile, setSelectedFile] = useState(null);



  const botonSubirArchivo = {
    fontFamily: 'calibri',
    border: '1px dashed #BBB',
    backgroundColor: '#DDD',
    overFlow: 'hidden'
  }

  const {
    numeroSolicitud,
    nombreItem,
    nombreSolicitante,
    descripcion,
    fechaInicio,
    fechaRetiro,
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
              {numeroSolicitud}
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
            {nombreSolicitante}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {descripcion}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {fechaInicio}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {fechaRetiro}
        </Text>
      </Td>
      <Td>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            leftIcon={<WarningTwoIcon />}
            colorScheme="yellow"
            borderColor="yellow.400"
            color="yellow.400"
            variant="ghost"
            fontSize="xn"
            onClick={onOpen}
          >
            Realizar reporte
          </Button>

          <Modal
            isOpen={isOpen}
            onClose={onClose}

          >
            <ModalOverlay />
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalContent>
                <ModalHeader>Relizar reporte de <Text color="teal.400" as="em">{nombreItem}</Text></ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <Input
                      type="hidden"
                      focusBorderColor="teal.300"
                    />
                    <FormLabel>Asunto</FormLabel>
                    <Input
                      hidden="true"
                      focusBorderColor="teal.300"
                      type="text"
                    ></Input>

                    <input type="text" className="chakra-input css-1sp0hs5" {...register("asunto", { required: true })} />
                    {errors.motivo?.type === 'required' &&
                      <Alert borderRadius="10px" margin="10px 0px" status="warning">
                        <AlertIcon />
                        <AlertTitle>Necesita colocar un asunto</AlertTitle>
                      </Alert>
                    }
                  </FormControl>
                  <FormControl>
                    <FormLabel>Adjuntar archivo</FormLabel>
                    <InputGroup>                        
                        {/* <FileUpload 
                        mode="basic" 
                        maxFileSize="10000" 
                        chooseOptions={chooseOptions} 
                        accept="image/*" 
                        name="demo[]"
                        url="./upload"
                        onFileSelectSuccess={(file) => setSelectedFile(file.name)}
                        onFileSelectError={({ error }) => alert(error)}
                        {...register("urlImg", { required: true })}
                        /> */}                
                    <FileUpload 
                    mode="basic" 
                    auto
                    customUpload = {true}
                    name="archivo"                     
                    accept=".jpg" 
                    chooseOptions={chooseOptions}
                    maxFileSize={1000000}                    
                    onUpload = {onUpload()}
                    uploadHandler={onBasicUpload}                   
                    />
                    <input type="hidden" defaultValue={selectedFile} {...register("img")}/>
                    {/* <input 
                        type="file" 
                        style={botonSubirArchivo} 
                        accept="image/*"
                        onChange={(e) => setSelectedFile(e.target.[0])}/> */}
                    {/* // {...register("urlImg", { required: true })} */}
                  </InputGroup>
                  {errors.urlImg?.type === 'required' &&
                    <Alert borderRadius="10px" margin="10px 0px" status="warning">
                      <AlertIcon />
                      <AlertTitle>Necesita colocar una imagen</AlertTitle>
                    </Alert>
                  }
                </FormControl>
                <FormControl>
                  <FormLabel>Situacion</FormLabel>
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
                      <AlertTitle>Necesita colocar la situacion del reporte</AlertTitle>
                    </Alert>
                  }

                  {/* datos temporales */}
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  colorScheme="teal"
                  borderColor="teal.400"
                  color="teal.400"
                  variant="ghost"
                  mr={3}>
                  Realizar Reporte
                </Button>
                <Button variant="ghost" onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>

      </Flex>
    </Td>
    </Tr >
  );
}

export default TablesRowSolicitudUsuario;

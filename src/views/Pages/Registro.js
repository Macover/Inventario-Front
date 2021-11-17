import AreaService from "../../services/AreaService.js"
import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

import {
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"


// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { maxSafeInteger } from "@chakra-ui/utils";

function Registro() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const bgColor = useColorModeValue("white", "gray.700");

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("insertUsuarioObjeto",data);    
  }

  const areaService = new AreaService();
  const [areasTrabajos, setAreasTrabajos] = useState({});

  const getAllAreasTrabajo = () => {
    areaService.getAllAreas().then(data => setAreasTrabajos(data));
  }

  useEffect(() => {
    getAllAreasTrabajo();
  }, []);

  // console.log("areasTrabajo", areasTrabajos);

  const validaAreasTrabajo = () => {
    if (Object.entries(areasTrabajos).length === 0) {
      return (
        <option>Sin datos</option>
      )
    } else {
      return (
        areasTrabajos.map(areaTrabajo => (
          <option value={parseInt(areaTrabajo.idArea)} {...register("idArea")}>
            {areaTrabajo.nombreArea}
          </option>                    
        ))
      )
    }
  }

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Registro
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Registro para el sistema de control del mobiliario empresarial.
        </Text>
      </Flex>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="center" justifyContent="center" >
          <Flex
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <FormControl>
              <Input
                focusBorderColor="teal.300"
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                mb="24px"
                size="lg"
                type="hidden"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Primer nombre
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese unicamente su primer nombre"
                {...register("primerNombre",
                  { required: true })} />
              {errors.primerNombre?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su primer nombre</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Segundo nombre
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese unicamente su segundo nombre"
                {...register("segundoNombre",
                  { required: true })} />
              {errors.segundoNombre?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su segundo nombre</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Primer apellido
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese unicamente su primer apellido"
                {...register("apellidoP",
                  { required: true })} />
              {errors.apellidoP?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su primer apellido</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Segundo apellido
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese unicamente su segundo apellido"
                {...register("apellidoM",
                  { required: true })} />
              {errors.apellidoM?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su segundo apellido</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Area de trabajo
              </FormLabel>
              <Select>                
                {validaAreasTrabajo()}
              </Select>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Matricula
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese su matricula"
                {...register("matricula",
                  { required: true })} />
              {errors.matricula?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su matricula</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Numero de telefono
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese su numero de telefono"
                {...register("numTelefono",
                  { required: true })} />
              {errors.numTelefono?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su numero de telefono</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Correo electronico
              </FormLabel>
              <input
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese su correo electronico"
                {...register("correo",
                  { required: true })} />
              {errors.correo?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita ingresar su correo</AlertTitle>
                </Alert>
              }
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Contraseña
              </FormLabel>
              <Input
                focusBorderColor="teal.300"
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="hidden"
                placeholder="Ingrese su contraseña"
                mb="24px"
                size="lg"
              />              
              <input
                type="password"
                className="chakra-input css-1xk2i4m"
                placeholder="Ingrese su contraseña"
                {...register("contrasenia",
                  { required: true })} />
              {errors.contrasenia?.type === 'required' &&
                <Alert borderRadius="10px" margin="10px 0px" status="warning">
                  <AlertIcon />
                  <AlertTitle>Necesita colocar una contraseña</AlertTitle>
                </Alert>
              }
              {/* inputs hidden */}
              <input type="hidden" value="2021-07-11" {...register("createdAt")} />
              <input type="hidden" value={1} {...register("idRol")} />            
              <Button
                type="submit"
                bg="teal.300"
                fontSize="10px"
                color="white"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
              >
                REGISTRARSE
              </Button>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Si usted ya tiene una cuenta en el sistema, ingrese
                <Link
                  color={titleColor}
                  as="span"
                  ms="5px"
                  href="#"
                  fontWeight="bold"
                >
                  aquí.
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </form>

    </Flex>
  );
}

export default Registro;

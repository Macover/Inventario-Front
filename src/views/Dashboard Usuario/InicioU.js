import React from 'react'
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

import { FaLaptop } from 'react-icons/fa';
import { RiProjector2Fill } from 'react-icons/ri';

import { IconButton } from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from "@chakra-ui/react"
import { Box } from '@chakra-ui/layout';

import { Link } from "@chakra-ui/react"
import { Link as ReachLink } from "@reach/router"

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function InicioU() {

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
        <CardHeader p="12px 5px" mb="12px">
          <Text fontSize="3xl" color={textColor} fontWeight="bold">
            Categorias
          </Text>
        </CardHeader>
        <CardBody p="0px 5px" minHeight="400px">
          <Grid 
          minWidth="100%" 
          templateColumns="repeat(2, minmax(150px,180px))" 
          templateRows= "repeat(2, minmax(150px,180px))"
          // autoRows = "75px"
          // autoFlow = "75px"
          justifyContent = "center"
          rowGap = "45px"
          gap = {20}
          >                       
            <Box w="100%" h="100%">           
            <Link
              as={ReachLink} 
              to="/#/admin/Computadoras"
              isExternal
              w="100%"            
              h="100%"
              href="#"
              color="teal.300"
              me="30px"              
              fontSize="xl"
              _hover={{ color: "teal.300" }}
            >            
            <FaLaptop style={
              {'fontSize': '175px',
                'color' : '#2C7A7B'
              }
              }/>
            </Link>
            <Text w = "100%" textAlign = "center" margin="10px 0px">Computadoras</Text>
            </Box>
            <Box w="100%" h="100%">
            <Link
              w="100%"            
              h="100%"
              href="#"
              color="teal.300"
              me="30px"
              fontSize="xl"
              _hover={{ color: "teal.300" }}
            >
              <i className="pi pi-briefcase" style={{'fontSize': '175px', 'color' : '#2C7A7B'}}></i>
            </Link>
            <Text w = "100%" textAlign = "center" margin="10px 0px">Equipos de oficina</Text>
            </Box>
            <Box w="100%" h="100%">
            <Link
              w="100%"            
              h="100%"
              href="#"
              color="teal.300"
              me="30px"
              fontSize="xl"
              _hover={{ color: "teal.300" }}
            >
              <i className="pi pi-desktop" style={{'fontSize': '175px', 'color' : '#2C7A7B'}}></i>
            </Link>
            <Text w = "100%" textAlign = "center" margin="10px 0px">Monitores</Text>
            </Box>
            <Box w="100%" h="100%">
            <Link
              w="100%"            
              h="100%"
              href="#"
              color="teal.300"
              me="30px"
              fontSize="xl"
              _hover={{ color: "teal.300" }}
            >
              <RiProjector2Fill style={{'fontSize': '175px','color' : '#2C7A7B'}}/>
            </Link>
            <Text w = "100%" textAlign = "center" margin="10px 0px">Cañones</Text>
            </Box>           
            
          </Grid>
        </CardBody>
      </Card>
    </Flex>


  );
}

export default InicioU;

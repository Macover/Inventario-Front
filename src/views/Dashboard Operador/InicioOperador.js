import React from 'react'
// Chakra imports
import {
  Flex,  
  Text,
  useColorModeValue,  
} from "@chakra-ui/react";

import { Grid, Box } from '@chakra-ui/layout';

import { FaLaptop } from 'react-icons/fa';


import { Link } from "@chakra-ui/react"
import { Link as ReachLink } from "@reach/router"

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function InicioOperador() {

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
        <CardHeader p="12px 5px" mb="12px">
          <Text fontSize="3xl" color={textColor} fontWeight="bold">
            OPERADOR
          </Text>
        </CardHeader>
        <CardBody p="0px 5px" minHeight="400px">
          

          
        </CardBody>
      </Card>
    </Flex>


  );
}

export default InicioOperador;

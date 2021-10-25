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

import { Link } from 'react-router-dom';

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

function CategoriaComputadoras() {

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
        <CardHeader p="12px 5px" mb="12px">
          <Text fontSize="3xl" color={textColor} fontWeight="bold">
            Computadoras
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
            {/* Box body        */}
            fdgd
          </Grid>
        </CardBody>
      </Card>
    </Flex>


  );
}

export default CategoriaComputadoras;

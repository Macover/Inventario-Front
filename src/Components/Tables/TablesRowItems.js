import React from "react";

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Icon,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


function TablesRowItems(props) {
  const {
    idItem,
    idCategoria,
    numSerie,
    nombreItem,
    descripcion
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

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
              {idItem}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {idCategoria}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {numSerie}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {nombreItem}
        </Text>
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
            p="0px"
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="red.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                ELIMINAR
              </Text>
            </Flex>
          </Button>
          <Button p="0px" bg="transparent">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDITAR
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default TablesRowItems;

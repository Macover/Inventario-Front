import React from "react";

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function TablesRowUsuario(props) {
  const {
    idUsuario, 
    idArea, 
    rol, 
    primerNombre, 
    segundoNombre,
    apellidoP,
    apellidoM,
    matricula,
    numTelefono,
    correo
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
              {idUsuario}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {idArea}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {rol}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {primerNombre}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {segundoNombre}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {apellidoP}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {apellidoM}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {matricula}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {numTelefono}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {correo}
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

export default TablesRowUsuario;

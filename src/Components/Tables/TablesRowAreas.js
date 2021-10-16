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
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input"


function TablesRowAreas(props) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()

  const { isOpenD, onOpenD, onCloseD } = useDisclosure()
  const initialRefD = React.useRef()

  const {
    idArea,
    nombreArea
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {idArea}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="bold">
            {nombreArea}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            onClick={onOpenD}
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
          <Modal
            initialFocusRef={initialRefD}
            isOpen={isOpenD}
            onClose={onCloseD}
          >
            <ModalOverlay />
            <form>
              <ModalContent>
                <ModalHeader>Advertencia</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  seguro
                </ModalBody>
                <ModalFooter>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    borderColor="teal.300"
                    color="teal.300"
                    variant="ghost"
                    mr={3}>
                    Eliminar
                  </Button>
                  <Button variant="ghost" onClick={onCloseD}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>



          <Button
            onClick={onOpen}
            p="0px"
            bg="transparent">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDITAR
              </Text>
            </Flex>
          </Button>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <form>
              <ModalContent>
                <ModalHeader>Editar area</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Nombre de la area</FormLabel>
                    <Input
                      ref={initialRef}
                      focusBorderColor="teal.300"
                      value={nombreArea}
                    />
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
                    Editar
                  </Button>
                  <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </Flex>
      </Td>
    </Tr>
  );
}

export default TablesRowAreas;

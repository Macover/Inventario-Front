/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Elaborado por: "}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.creative-tim.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Rodríguez Herrera Isaí "}
        </Link>
        &
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.simmmple.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl" ? "سيممبل " : " González Luna Julia Yamile"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " for a better web ❤️"}
      </Text>      
    </Flex>
  );
}

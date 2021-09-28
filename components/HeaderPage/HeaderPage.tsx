import { Button, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useRouter } from "next/router";
import { FaArrowAltCircleLeft, FaPlus } from "react-icons/fa";
const HeaderPage: FC<{ title: string; backButton: boolean }> = ({
  title,
  backButton,
}) => {
  const route = useRouter();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      h="10"
      m="2"
    >
      <Button
        onClick={() => route.replace("/projects")}
        visibility={backButton ? "visible" : "hidden"}
      >
        <FaArrowAltCircleLeft size={35} />
      </Button>

      <Text
        fontSize={{ base: "xl", lg: "3xl" }}
        fontWeight="bold"
        fontFamily="cursive"
      >
        {title}
      </Text>

      <Button
        visibility={backButton ? "hidden" : "visible"}
        m="1"
        bg="red"
        onClick={() => route.replace("projects/form")}
      >
        <FaPlus size={20} />
        Add project
      </Button>
    </Flex>
  );
};

export default HeaderPage;

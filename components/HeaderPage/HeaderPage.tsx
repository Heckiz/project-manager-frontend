import { Button, Flex, Text } from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/router";
import { ImArrowLeft, ImPlus, ImSearch } from "react-icons/im";
const HeaderPage: FC<{
  title: string;
  backButton: boolean;
  search: boolean | null;
  setSearch: Dispatch<SetStateAction<boolean>> | null;
}> = ({ title, backButton, search, setSearch }) => {
  const route = useRouter();
  return (
    <Flex
      overflow="hidden"
      position="fixed"
      borderBottom="2px solid gray"
      justifyContent="space-around"
      alignItems="center"
      bg="white"
      w={{ base: "90vw", lg: "50vw" }}
      h="16"
      top="0"
      zIndex="4"
    >
      {backButton ? (
        <Button onClick={() => route.replace("/projects")}>
          <ImArrowLeft size={24} />
        </Button>
      ) : (
        <Button
          bg="teal.200"
          bottom={search ? -100 : 0}
          transition="all 1s"
          onClick={() => {
            if (setSearch !== null) {
              setSearch(!search);
              console.log(search);
            }
          }}
        >
          <ImSearch size={16} />
        </Button>
      )}
      <Text
        fontSize={{ base: "xl", lg: "3xl" }}
        fontWeight="bold"
        fontFamily="cursive"
      >
        {title}
      </Text>

      <Button
        visibility={backButton ? "hidden" : "visible"}
        m="2"
        fontSize="xs"
        bg="red.400"
        onClick={() => route.replace("projects/form")}
      >
        <ImPlus />
        <Text display={{ base: "none", lg: "block" }}>Add proyect</Text>
      </Button>
    </Flex>
  );
};

export default HeaderPage;

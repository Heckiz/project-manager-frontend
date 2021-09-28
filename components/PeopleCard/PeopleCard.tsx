import { Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const PeopleCard: FC<{ name: string; picture: string }> = ({
  name,
  picture,
}) => {
  return (
    <Flex alignItems="center"  >
      <Image
        h="8vh"
        borderRadius="100%"
        alt="image"
        src={`${process.env.API_URL}${picture}`}
      />
      <Text mx="2" fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
};

export default PeopleCard;

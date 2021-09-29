import { Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const PeopleCard: FC<{ name: string; picture: string }> = ({
  name,
  picture,
}) => {
  return (
    <Flex alignItems="center">
      <Image
        h="6vh"
        borderRadius="100%"
        alt="image"
        src={`https://i.pinimg.com/originals/e1/3e/32/e13e326952e46bbb76955c5dec72d168.jpg`} /// test image
      />
      <Text mx="2" fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
};

export default PeopleCard;

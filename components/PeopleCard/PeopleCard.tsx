import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";

const PeopleCard: FC<{ name: string; picture: string }> = ({
  name,
  picture,
}) => {
  return (
    <Flex alignItems="center">
      <Box overflow="hidden" borderRadius="100%" h={14} w={14}>
        <Image width="100%" height="100%" layout="responsive"
        alt="image" src={picture} />
      </Box>
      <Text mx="2" fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
};

export default PeopleCard;

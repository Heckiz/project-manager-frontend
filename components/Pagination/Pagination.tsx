import { Flex, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/button";
const Pagination: FC<{ page: number; limit: number; totalProjects: number }> =
  ({ page, limit, totalProjects }) => {
    console.log(page, limit);
    return (
      <Flex justifyContent="space-around" alignItems="center">
        <Link href={`/projects?page=${page - 1}&limit=${limit}`} passHref>
          <Button visibility={page == 1 ? "hidden" : "visible"}>Prev</Button>
        </Link>

        <Text borderBottom="2px solid gray">
          {page}
        </Text>

        <Link href={`/projects?page=${page + 1}&limit=${limit}`} passHref>
          <Button visibility={page*limit > totalProjects ? "hidden" : "visible"}>Next</Button>
        </Link>
      </Flex>
    );
  };

export default Pagination;

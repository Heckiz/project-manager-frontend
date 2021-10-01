import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Text,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Project } from "../../interfaces/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { getProjects } from "../../services/api";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import { ChangeEvent, useState } from "react";
import { ImSearch, ImCross } from "react-icons/im";

const Home: NextPage<{ data: Project[] }> = ({ data }) => {
  const [proyects, setProyects] = useState<Project[]>(data);
  const [search, setSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const data = await getProjects(event.target.value);
    setProyects(data);
  };
  
  return (
    <Box>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="List Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPage
        search={search}
        setSearch={setSearch}
        backButton={false}
        title="My Projects"
      />

      <Flex justifyContent="center">
        <InputGroup
          bg="teal.100"
          zIndex="3"
          w={{ base: "70%", lg: "45%" }}
          top={!search ? -100 : 0}
          transition="all 1s"
          mt="20"
          position="fixed"
        >
          <InputLeftElement pointerEvents="none">
            <ImSearch />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search Project"
            onChange={handleSearch}
            value={inputValue}
          />
          <InputRightElement>
            <Button
              size="sm"
              mx="2"
              onClick={() => {
                setSearch(!search);
                setInputValue("");
              }}
            >
              <ImCross />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Box mt={search ? 32 : 24} transition="all 1s">
        {proyects.map((project: Project, index: number) => (
          <Box key={index} my="2">
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>

      {proyects.length === 0 && (
        <Text textAlign="center">No results found!</Text>
      )}
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProjects("");
  return {
    props: {
      data,
    },
  };
};

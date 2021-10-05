import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Project } from "../../interfaces/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { getProjects } from "../../services/api";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home: NextPage<{ data: Project[] }> = ({ data }) => {
  const [projects, setProjects] = useState<Project[]>(data);
  const [search, setSearch] = useState<boolean>(false);

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
        <SearchBar
          search={search}
          setSearch={setSearch}
          setProjects={setProjects}
        />
      </Flex>

      <Box mt={search ? 32 : 24} transition="all 0.5s">
        {projects.map((project: Project, index: number) => (
          <Box key={index} my="2">
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>

      <Box>
        {projects.length === 0 && (
          <Text textAlign="center">No results found!</Text>
        )}
      </Box>
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);
  const data = await getProjects("");
  return {
    props: {
      data,
    },
  };
};

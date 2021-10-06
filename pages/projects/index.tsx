import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Project } from "../../interfaces/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { getProjects, getProjectCount } from "../../services/api";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";

const Home: NextPage<{
  data: Project[];
  page: number;
  limit: number;
  totalProjects: number;
}> = ({ data, page, limit, totalProjects }) => {
  const [projects, setProjects] = useState<Project[]>(data);
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    setProjects(data);
  }, [data, search]);
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

        <Pagination page={page} limit={limit} totalProjects={totalProjects} />
    </Box>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = !query.page ? 1 : +query.page;

  const limit = !query.limit ? 3 : +query.limit;
  const start = page == 1 ? 0 : (page - 1) * limit;

  const data = await getProjects(String(start), String(limit));
  const totalProjects = await getProjectCount();

  return {
    props: {
      data,
      page,
      limit,
      totalProjects,
    },
  };
};

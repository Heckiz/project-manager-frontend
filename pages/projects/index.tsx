import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box,  Text } from "@chakra-ui/react";
import { Project } from "../../interfaces/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { getProjects } from "../../services/api";
import HeaderPage from "../../components/HeaderPage/HeaderPage";

const Home: NextPage<any> = ({ data }) => {
  return (
    <Box>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="List Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPage backButton={false} title="My Projects" />
      {data.map((project: Project, index: number) => (
        <Box key={index}>
          <ProjectCard project={project} />
        </Box>
      ))}
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProjects();
  return {
    props: {
      data,
    },
  };
};

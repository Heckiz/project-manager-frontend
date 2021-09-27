import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { projects } from "../db";
import { Box, Flex } from "@chakra-ui/react";
import { Project } from "../interfaces/projects";
import ProjectCard from "../src/components/ProyectCard/ProjectCard";

const Home: NextPage = ({ data }) => {
  return (
    <Box>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="List Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  return {
    props: {
      data: projects,
    },
  };
};

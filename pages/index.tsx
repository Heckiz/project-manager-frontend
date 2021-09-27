import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Project } from "../interfaces/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Link from "next/link";
import { getProjects } from "../services/api";

const Home: NextPage<any> = ({ data }) => {
  return (
    <Box>
      <Link href="/projects/form">
        <a>create project</a>
      </Link>
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
  const data = await getProjects()
  return {
    props: {
      data,
    },
  };
};

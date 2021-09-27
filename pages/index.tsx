import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Project } from "../interfaces/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import axios from "axios";

const Home: NextPage<any> = ({ data }) => {
  console.log(data);
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
  const { data } = await axios.get("http://localhost:1337/projects");
  return {
    props: {
      data,
    },
  };
};

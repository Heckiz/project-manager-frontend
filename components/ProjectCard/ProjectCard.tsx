import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { Project } from "../../interfaces/projects";
import { deleteProject } from "../../services/api";
import Link from "next/link";
import moment from "moment";
import PeopleCard from "../PeopleCard/PeopleCard";
import { useRouter } from "next/router";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const router = useRouter();
  return (
    <Flex
      py="5"
      px="2"
      border="2px solid black"
      borderRadius="10"
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
        <Text px="3" fontSize="2xl">
          {project.name}
        </Text>
        <Text fontSize="small" px="3" as="samp" borderBottom="2px solid black">
          Creation date: {moment(project.created_at).format("l")}
        </Text>
        <Flex p="3" pb="0">
          <PeopleCard
            name={project.project_manager.name}
            picture={project.project_manager.picture.url}
          />
        </Flex>
      </Flex>

      <Menu key={project.id}>
        <MenuButton as={Button}>
          <FiMoreVertical size={30} />
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={async () =>
              (await deleteProject(project.id)) && router.reload()
            }
          >
            <Flex
              alignItems="center"
              justifyContent="space-around"
              w="100%"
              as="samp"
            >
              <AiFillDelete size={20} />
              <Text>Delete Project</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Link
              href={{
                pathname: "/projects/form",
                query: {
                  id: project.id,
                },
              }}
              passHref={true}
            >
              <Flex
                alignItems="center"
                justifyContent="space-around"
                w="100%"
                as="samp"
              >
                {" "}
                <AiFillEdit size={20} />
                <Text>Edit Project</Text>
              </Flex>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProjectCard;

import {
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
import { Project } from "../../interfaces/projects";
import { deleteProject } from "../../services/api";
import Link from "next/link";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <Flex p="5" m="5" border="2px solid black" justifyContent="space-between">
      <Flex flexDirection="column">
        <Text m="0" fontSize="8xl">
          {project.name}
        </Text>
        <Text m="0" fontSize="small">
          {project.created_at}
        </Text>
        <Text m="0" fontSize="xl">
          {project.project_manager.name}
        </Text>
      </Flex>

      <Menu>
        <MenuButton as={Button}>...</MenuButton>
        <MenuList>
          <MenuItem onClick={async () => await deleteProject(project.id)}>
            <AiFillDelete /> Delete
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
              <AiFillEdit />
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProjectCard;

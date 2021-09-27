import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Project } from "../../../interfaces/projects";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <Flex p="5" m="5" border="2px solid black" justifyContent="space-between">
      <Flex flexDirection="column">
        <Text m="0" fontSize="8xl">
          {project.name}
        </Text>
        <Text m="0" fontSize="small">
          created 24/07/01
        </Text>
        <Text m="0" fontSize="xl">
          {project.project_manager}proyect manager
        </Text>
      </Flex>

      <Menu>
        <MenuButton>...</MenuButton>
        <MenuList>
          <MenuItem>
            <AiFillDelete /> Delete
          </MenuItem>
          <MenuItem>
            <AiFillEdit /> Edit
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProjectCard;

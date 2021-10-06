import { Button } from "@chakra-ui/button";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { ImCross, ImSearch } from "react-icons/im";
import { Project } from "../../interfaces/projects";
import { getProjectsByName } from "../../services/api";

const SearchBar: FC<{
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
  setProjects: Dispatch<SetStateAction<Project[]>>;
}> = ({ search, setSearch, setProjects }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const data = await getProjectsByName(event.target.value);
    setProjects(data);
  };

  return (
    <InputGroup
      w={{ base: "70%", lg: "40%" }}
      bg="teal.100"
      zIndex="3"
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
  );
};

export default SearchBar;

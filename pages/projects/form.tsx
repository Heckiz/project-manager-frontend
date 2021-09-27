import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { createProject, getPeople, getPeopleId } from "../../services/api";
import { GetStaticProps, NextPage } from "next";
import { People, Project } from "../../interfaces/projects";

const Form: NextPage<any> = ({ data }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values: Project) {
    const projectManager = await getPeopleId(String(values.project_manager));
    const assignedTo = await getPeopleId(String(values.assigned_to));

    values.project_manager = projectManager;
    values.assigned_to = assignedTo;

    try {
      await createProject(values);
    } catch (error) {
      console.log(error);
    }
    
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*  */}

      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Project Name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "This is required",
          })}
        />
        <FormErrorMessage color="red" fontSize="small">
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      {/*  */}

      <FormControl isInvalid={errors.description}>
        <FormLabel htmlFor="name">Description</FormLabel>
        <Input
          id="description"
          placeholder="description"
          {...register("description", {
            required: "This is required",
          })}
        />
        <FormErrorMessage color="red" fontSize="small">
          {errors.description && errors.description.message}
        </FormErrorMessage>
      </FormControl>

      {/*  */}

      <FormControl isInvalid={errors.project_manager}>
        <FormLabel>Project Manager</FormLabel>
        <Select
          placeholder="Select project manager"
          {...register("project_manager", {
            required: "This is required",
          })}
        >
          {data.map((pm: People, indexPM: number) => (
            <option value={pm.id} key={indexPM}>
              {pm.name}
            </option>
          ))}
        </Select>
        <FormErrorMessage color="red" fontSize="small">
          {errors.project_manager && errors.project_manager.message}
        </FormErrorMessage>
      </FormControl>

      {/*  */}


      <FormControl isInvalid={errors.assigned_to}>
        <FormLabel>Assigned To</FormLabel>
        <Select
          placeholder="Select assigned to"
          {...register("assigned_to", {
            required: "This is required",
          })}
        >
          {data.map((assigned_to: People, indexAssignedTo: number) => (
            <option value={assigned_to.id} key={indexAssignedTo}>
              {assigned_to.name}
            </option>
          ))}
        </Select>
        <FormErrorMessage color="red" fontSize="small">
          {errors.assigned_to && errors.assigned_to.message}
        </FormErrorMessage>
      </FormControl>

      {/*  */}


      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPeople();
  return {
    props: {
      data,
    },
  };
};

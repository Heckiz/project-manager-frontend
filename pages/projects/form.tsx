import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import {
  createProject,
  getPeople,
  getPeopleId,
  getProjectId,
  updatedProject,
} from "../../services/api";
import { GetStaticProps, NextPage } from "next";
import { People, Project } from "../../interfaces/projects";
import { useRouter } from "next/router";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import CustomInput from "../../components/CustomInput/CustomInput";

const Form: NextPage<{ data: People[] }> = ({ data }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  const [editable, setEditable] = useState<boolean>(false);

  const router = useRouter();
  (async function verifyEditable() {
    if (router.query.id) {
      const data = await getProjectId(String(router.query.id));
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("project_manager", data.project_manager.id);
      setValue("assigned_to", data.assigned_to.id);
      setEditable(true);
    }
  })();

  async function onSubmit(values: Project) {
    const projectManager = await getPeopleId(String(values.project_manager));
    const assignedTo = await getPeopleId(String(values.assigned_to));

    values.project_manager = projectManager;
    values.assigned_to = assignedTo;
    console.log(values);
    try {
      router.query.id
        ? await updatedProject(values, String(router.query.id))
        : await createProject(values);
      router.push("/projects");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex flexDirection="column" textAlign="center">
      <HeaderPage
        search={null}
        setSearch={null}
        backButton={true}
        title={editable ? "Edit project" : "Add project"}
      />
      <Box p="6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            data={data}
            register={register}
            errors={errors}
            title="Project Name"
            name="name"
            type="input"
          />
          <CustomInput
            data={data}
            register={register}
            errors={errors}
            title="Description"
            name="description"
            type="input"
          />
          <CustomInput
            data={data}
            register={register}
            errors={errors}
            title="Project Manager"
            name="project_manager"
            type="select"
          />
          <CustomInput
            data={data}
            register={register}
            errors={errors}
            title="Assigned To"
            name="assigned_to"
            type="select"
          />
          <FormControl display="flex" alignItems="center">
            <FormLabel fontWeight="bold" fontSize="xl" htmlFor="status">
              Status
            </FormLabel>
            <Switch id="status" />
          </FormControl>

          <Button
            textTransform="uppercase"
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            {editable ? "Save Changes" : "Create Project"}
          </Button>
        </form>
      </Box>
    </Flex>
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

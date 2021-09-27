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
import { FormValues } from "../../interfaces/forms";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting},
  } = useForm();

  function onSubmit(values: FormValues) {
    console.log(values);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
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

      <FormControl isInvalid={errors.project_manager}>
        <FormLabel>Project Manager</FormLabel>
        <Select
          placeholder="Select project manager"
          {...register("project_manager", {
            required: "This is required",
          })}
        >
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <FormErrorMessage color="red" fontSize="small">
          {errors.project_manager && errors.project_manager.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.assigned_to}>
        <FormLabel>Project Manager</FormLabel>
        <Select
          placeholder="Assigned to"
          {...register("assigned_to", {
            required: "This is required",
          })}
        >
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <FormErrorMessage color="red" fontSize="small">
          {errors.assigned_to && errors.assigned_to.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;

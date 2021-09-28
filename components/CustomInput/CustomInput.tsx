import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { FC } from "react";
import {
  FieldErrors,
  FieldValues,
  FormState,
  UseFormRegister,
} from "react-hook-form";
import { People } from "../../interfaces/projects";

const CustomInput: FC<{
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  data: People[];
  title: string;
  name: string;
  type: "select" | "input";
}> = ({ register, errors, data, title, name, type }) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel fontWeight="bold" fontSize="xl" htmlFor={`${name}`}>{title}</FormLabel>
      {type === "select" && (
        <Select
          placeholder={`${name}`}
          {...register(`${name}`, {
            required: "This is required",
          })}
        >
          {data.map((list: People, index: number) => (
            <option value={list.id} key={index}>
              {list.name}
            </option>
          ))}
        </Select>
      )}

      {type === "input" && (
        <Input
          id={`${name}`}
          placeholder={`${name}`}
          {...register(`${name}`, {
            required: "This is required",
          })}
        />
      )}
      <FormErrorMessage color="red" fontSize="small">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;

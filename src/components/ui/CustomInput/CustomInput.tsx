import { Label, TextInput } from "flowbite-react";
import { FieldError } from "react-hook-form";

interface CustomInputProps {
  labelName: string;
  register: any;
  rules?: object;
  error?: FieldError | undefined;
  name: string;
  type?: string;
  placeholder?: string;
}
const CustomInput = ({
  name,
  labelName,
  type = "text",
  placeholder,
  register,
  error,
  ...rest
}:CustomInputProps) => {
  return (
    <>
      <Label htmlFor={name} value={labelName} className="mb-2 block" />
      <TextInput
        id={name}
        name={name}
        type={type}
        {...rest}
        {...register(name)}
        placeholder={placeholder}
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </>
  );
};

export default CustomInput;

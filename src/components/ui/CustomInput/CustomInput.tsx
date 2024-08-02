import { Label, TextInput } from "flowbite-react";

interface CustomInputProps {
  labelName: string;
  errors?: any;
  register: any;
  rules?: object;
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
  ...rest
}:CustomInputProps) => {
  return (
    <>
      <Label htmlFor={name} value={labelName} className="mb-2 block" />
      <TextInput
        {...register("username", { required: true })}
        id={name}
        name={name}
        type={type}
        {...rest}
        {...register(name)}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;

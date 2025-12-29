import { Controller, useController } from "react-hook-form";
import { type ITextInputProps } from "./input.contract";
// Text(text, url, number, tel, ), Email, Password, Dropdown, File, Button , Radio, Checkbox

export const TextInput = ({name, type, placeholder, className, control, errMsg}: Readonly<ITextInputProps>) => {
  const {field} = useController({
    name: name, 
    control: control,
    defaultValue: "",
  })

  return (
    <>
      <input
        type={type}
        id={name}
        // onChange={(e) => {

        // }}
        {...field}
        placeholder={placeholder}
        className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
      />
      <span className="text-red-600 text-sm italic">{errMsg ?? ""}</span>
    </>
  );
}

export const TextInputController = ({ name, type, placeholder, className, control, errMsg, }: Readonly<ITextInputProps>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field}) => {
          return (
            <>
              <input
                type={type}
                // name={name}
                id={name}
                {...field}
                placeholder={placeholder}
                className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
              />
              <span className="text-red-600 text-sm italic">
                {errMsg ?? ""}
              </span>
            </>
          );
        }}
      ></Controller>
    </>
  );
};
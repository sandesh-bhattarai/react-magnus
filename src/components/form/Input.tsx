import { type ITextInputProps } from "./input.contract";
// Text(text, url, number, tel, ), Email, Password, Dropdown, File, Button , Radio, Checkbox

export const TextInput = ({name, type, placeholder, className}: Readonly<ITextInputProps>) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
      />
    </>
  );
}
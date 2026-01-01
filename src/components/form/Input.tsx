import { Controller, useController } from "react-hook-form";
import { type ISelectInputProps, type ISingleSelectOption, type ITextInputProps } from "./input.contract";
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

export const SelectInputController = ({ name, options, className, control, errMsg, }: Readonly<ISelectInputProps>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field}) => {
          return (
            <>
              <select
                id={name}
                {...field}
                className={`w-full border p-2 rounded-md border-gray-700 ${className}`}>
                  <option value="">--Select Any One --</option>
                  {
                    options && options.map((item:ISingleSelectOption) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))
                  }
              </select>
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


export const FileUploadInput = ({name,className,control,errMsg}: Readonly<ITextInputProps>) => {
  const { field } = useController({
    name: name,
    control: control,
    defaultValue: "",
  });

  return (
    <>
      <input
        type={'file'}
        onChange={(e) => {
          // {"0": {}},// {"0": File, "1": File}
          // BE multiple => [File,File, File]
          const files = e.target.files;
          // {"0": {}}.values => [File]
          field.onChange(Object.values(files).pop())
        }}
        id={name}
        // {...field}
        className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
      />
      <span className="text-red-600 text-sm italic">{errMsg ?? ""}</span>
    </>
  );
};
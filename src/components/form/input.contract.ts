export const InputType= {
  EMAIL: "email",
  TEXT: "text",
  URL: "url",
  NUMBER: "number",
  DATE: "date",
  PASSWORD: "password"
}


export interface ITextInputProps {
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  // eslint-disable-next-line
  control: any,
  errMsg?: string | null
}
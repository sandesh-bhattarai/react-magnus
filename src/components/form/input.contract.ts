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
  type?: string;
  placeholder?: string;
  className?: string;
  // eslint-disable-next-line
  control: any,
  errMsg?: string | null
}
export interface ISingleSelectOption {
  label: string;
  value: string;
}
export interface ISelectInputProps {
  name: string;
  options: Array<ISingleSelectOption>,
  className?: string;
  // eslint-disable-next-line
  control: any;
  errMsg?: string | null;
}

export interface ITextAreaProps {
  name: string;
  placeholder?: string;
  className?: string;
  // eslint-disable-next-line
  control: any;
  errMsg?: string | null;
  rows?: number
}
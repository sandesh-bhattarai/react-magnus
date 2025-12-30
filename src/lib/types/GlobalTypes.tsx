import { type Dispatch, type SetStateAction } from "react";

export interface IPageData {
  title: string;
  message: string;
  button: { text: string; url: string };
}

export interface IOutletContext {
  setPageData: Dispatch<SetStateAction<IPageData>>;
}

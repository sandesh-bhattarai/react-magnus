import { Controller, useController } from "react-hook-form";
import {
  type ISelectInputProps,
  type ISingleSelectOption,
  type ITextAreaProps,
  type ITextInputProps,
} from "./input.contract";
// Text(text, url, number, tel, ), Email, Password, Dropdown, File, Button , Radio, Checkbox

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Italic,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  PictureEditing,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

export const TextInput = ({
  name,
  type,
  placeholder,
  className,
  control,
  errMsg,
}: Readonly<ITextInputProps>) => {
  const { field } = useController({
    name: name,
    control: control,
    defaultValue: "",
  });

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
};

export const TextInputController = ({
  name,
  type,
  placeholder,
  className,
  control,
  errMsg,
}: Readonly<ITextInputProps>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
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

export const TextAreaController = ({
  name,
  placeholder,
  className,
  control,
  errMsg,
  rows = 5,
}: Readonly<ITextAreaProps>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              <textarea
                id={name}
                {...field}
                placeholder={placeholder}
                rows={rows}
                className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
              ></textarea>
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

export const SelectInputController = ({
  name,
  options,
  className,
  control,
  errMsg,
}: Readonly<ISelectInputProps>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              <select
                id={name}
                {...field}
                className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
              >
                <option value="">--Select Any One --</option>
                {options &&
                  options.map((item: ISingleSelectOption) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
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

export const FileUploadInput = ({
  name,
  className,
  control,
  errMsg,
}: Readonly<ITextInputProps>) => {
  const { field } = useController({
    name: name,
    control: control,
    defaultValue: "",
  });

  return (
    <>
      <input
        type={"file"}
        onChange={(e) => {
          // {"0": {}},// {"0": File, "1": File}
          // BE multiple => [File,File, File]
          const files = e.target.files;
          // {"0": {}}.values => [File]
          field.onChange(Object.values(files).pop());
        }}
        id={name}
        // {...field}
        className={`w-full border p-2 rounded-md border-gray-700 ${className}`}
      />
      <span className="text-red-600 text-sm italic">{errMsg ?? ""}</span>
    </>
  );
};

export const HtmlTextEditor = ({
  name,
  control,
  errMsg,
}: Readonly<ITextAreaProps>) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        onChange={(e, editor) => {
          field.onChange(editor.getData());
        }}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "height",
              "200px",
              editor.editing.view.document.getRoot()!
            );
          });
        }}
        config={{
          licenseKey: "GPL",
          plugins: [
            Bold,
            Essentials,
            Heading,
            Image,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Mention,
            Paragraph,
            PasteFromOffice,
            PictureEditing,
            Table,
            TableColumnResize,
            TableToolbar,
            TextTransformation,
          ],
          toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "link",
            "insertTable",
            "mediaEmbed",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "outdent",
            "indent",
          ],
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
            ],
          },
          image: {
            resizeOptions: [
              {
                name: "resizeImage:original",
                label: "Default image width",
                value: null,
              },
              {
                name: "resizeImage:50",
                label: "50% page width",
                value: "50",
              },
              {
                name: "resizeImage:75",
                label: "75% page width",
                value: "75",
              },
            ],
            toolbar: [
              "imageTextAlternative",
              "toggleImageCaption",
              "|",
              "imageStyle:inline",
              "imageStyle:wrapText",
              "imageStyle:breakText",
              "|",
              "resizeImage",
            ],
          },
          link: {
            addTargetToExternalLinks: true,
            defaultProtocol: "https://",
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
          initialData: "",
        }}
      />
      <span className="text-red-600 text-sm italic">{errMsg ?? ""}</span>
    </>
  );
};

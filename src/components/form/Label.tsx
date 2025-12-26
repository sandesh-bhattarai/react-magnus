// react props => readonly =>  
export const FormLabel = (props: Readonly<{htmlFor: string, labelText?: string}>) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="w-1/3 text-lg font-semibold">
        {props.labelText}
      </label>
    </>
  );
}
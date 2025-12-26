import { type ReactNode } from "react";
import { Link, NavLink } from "react-router";

export const LinkText = () => {
  return <>Register Here</>;
}

export const LinkComponent = ({children, url}: Readonly<{children: ReactNode, url: string}>) => {
  return (
    <>
      <NavLink
        to={url}
        className={`text-teal-100 italic underline text-xl underline-offset-4 hover:text-teal-300`}
      > 
        {children}
      </NavLink>
    </>
  );
}

export const ButtonLinkComponent = () => {
  return (<>
    <Link to="/" className="bg-teal-500 p-2 w-full text-white rounded-md">
      <LinkText />
    </Link>
  </>)
}
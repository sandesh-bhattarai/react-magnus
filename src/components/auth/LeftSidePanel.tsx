import logo from "../../assets/images/logo.png";
import { type IPageData } from "../../lib/types/GlobalTypes";
import { LinkComponent } from "../ui/Link";

interface IPageHeadingProps {
  pageTitle: string;
  className?: string
}

export const PageHeading = ({ pageTitle, className }: Readonly<IPageHeadingProps>) => {
  return <h1 className={`${className} text-4xl text-white font-semibold`}>{pageTitle}</h1>;
};

export default function LeftSidePanel({pageData}: Readonly<{pageData: IPageData}>) {
  return (
    <>
      <div className="hidden md:block md:w-1/3 bg-teal-800">
        <div className="flex flex-col w-full h-screen items-center justify-center gap-5">
          <div className="size-25">
            <img src={logo} alt="" className="rounded-full" />
          </div>

          <PageHeading pageTitle={pageData.title} />

          <div className="flex flex-col gap-10 w-125 mx-auto items-center text-white">
            <p className="text-xl text-center">{pageData.message}</p>

            <div className="flex gap-3">
              <LinkComponent url={pageData.button.url}>
                {pageData.button.text}
              </LinkComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

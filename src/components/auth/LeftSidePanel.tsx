import logo from "../../assets/images/logo.png";
import { LinkComponent } from "../ui/Link";

interface IPageHeadingProps {
  pageTitle: string;
}

export const PageHeading = ({ pageTitle }: Readonly<IPageHeadingProps>) => {
  return <h1 className="text-4xl text-white font-semibold">
    {pageTitle}
  </h1>;
};

export default function LeftSidePanel({pageTitle}: Readonly<IPageHeadingProps>) {

  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              atque nostrum molestias ut necessitatibus, quis, expedita a
              numquam ullam sint officiis! Expedita nesciunt debitis totam nisi
              nam. Dicta, inventore sint!`;
  return (
    <>
      <div className="hidden md:block md:w-1/3 bg-teal-800">
        <div className="flex flex-col w-full h-screen items-center justify-center gap-5">
          <div className="size-25">
            <img src={logo} alt="" className="rounded-full" />
          </div>

          <PageHeading pageTitle={pageTitle} />

          <div className="flex flex-col gap-10 w-125 mx-auto items-center text-white">
            <p className="text-xl text-center">{content}</p>

            <div className="flex gap-3">
              <LinkComponent url="/">
                <i></i> Login
              </LinkComponent>
              or
              <LinkComponent url="/register">
                <i></i> Register
              </LinkComponent>
              or
              <LinkComponent url="/forget-password">
                Forgot Password
              </LinkComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

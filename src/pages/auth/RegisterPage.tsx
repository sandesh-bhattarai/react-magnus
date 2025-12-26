import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidepanel from "../../components/auth/RightSidePanel";

export default function RegisterPage() {
  return (
    <>
      <div className="flex w-full h-screen">
        <LeftSidePanel pageTitle={"Register page"} />

        <RightSidepanel />
      </div>
    </>
  );
}
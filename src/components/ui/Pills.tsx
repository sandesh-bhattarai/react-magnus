export const StatusPills = ({status}: Readonly<{status: string}>) => {
  return (
    <>
      <span
        className={`w-50 ${
          status === "active"
            ? "bg-teal-100 text-teal-800"
            : "bg-red-100 tex-red-800"
        } p-3 px-5 rounded-full`}
      >
        {status === 'active' ? "Published" : "Un-Published"}
      </span>
    </>
  );
}
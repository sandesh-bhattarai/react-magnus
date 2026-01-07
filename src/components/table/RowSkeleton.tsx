export default function RowSkeleton({rows, cols}: Readonly<{rows: number, cols: number}>) {
  return (
    <>
      {[...Array(rows)].map((_, ind: number) => (
        <tr key={ind}>
          {[...Array(cols)].map((_, colInd: number) => (
            <td key={colInd} className="p-4 border border-gray-400">
              <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
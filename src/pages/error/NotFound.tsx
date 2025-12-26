export default function NotFound() {
  return (<>
  <div className="flex flex-col items-center justify-center h-screen bg-red-50 rounded-xl shadow-lg p-8">
    <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-red-500 mb-2">Page Not Found</h2>
    <p className="text-red-400 mb-6 text-center max-w-md">
      Oops! The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition shadow-md"
    >
      Go Home
    </a>
  </div>
  </>)
}
import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <>
      <header className="h-20 bg-gray-900 text-white flex items-center justify-center">
        user header
      </header>
      <main className="flex">
        <aside className="flex bg-gray-800 w-1/4 h-screen items-center justify-center">
          sidebar
        </aside>
        <section className="bg-gray-200 w-3/4">
          <Outlet />
        </section>
      </main>
      <footer className="h-20 bg-gray-900 text-white flex items-center justify-center">
        footer
      </footer>
    </>
  );
}
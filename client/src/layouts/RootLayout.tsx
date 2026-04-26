import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white px-4 py-3">
        <h1 className="text-xl font-semibold">Durchchecker</h1>
      </header>
      <main className="container mx-auto flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 bg-white px-4 py-3 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Durchchecker
      </footer>
    </div>
  )
}

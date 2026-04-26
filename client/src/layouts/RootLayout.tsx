import { Outlet } from 'react-router-dom'
import logoHorizontal from '../assets/logo.svg'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white px-4 py-3">
        <img src={logoHorizontal} alt="Durchchecker" className="h-8" />
      </header>
      <main className="container mx-auto flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 bg-white px-4 py-3 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} durchchecker
      </footer>
    </div>
  )
}

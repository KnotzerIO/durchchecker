import { Outlet } from 'react-router-dom'
import logoHorizontal from '../assets/logo-full.svg'
import Button from '../components/Button'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logoHorizontal} alt="Durchchecker" className="h-8" />
          <Button variant="secondary" to="/check">
            Check starten
          </Button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 bg-white px-4 py-3 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} durchchecker
      </footer>
    </div>
  )
}

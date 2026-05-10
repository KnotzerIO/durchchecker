import { Link, Outlet } from 'react-router-dom'
import logoHorizontal from '../assets/logo-full.svg'
import Button from '../components/Button'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 sm:py-3 flex justify-between items-center">
          <Link to="/">
            <img src={logoHorizontal} alt="Durchchecker" className="h-7 sm:h-8" />
          </Link>
          <Button variant="secondary" to="/check">
            <span className="hidden sm:inline">Check starten</span>
            <span className="sm:hidden">Start</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-700 bg-slate-800 text-slate-400">
        <div className="container mx-auto px-4 py-6">
             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <img
              src={logoHorizontal}
              alt="Durchchecker"
              className="h-6 brightness-0 invert opacity-70"
            />
            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://github.com/KnotzerIO/durchchecker"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <Link to="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-4 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} durchchecker <br />
            Ein Studentenprojekt der FH Campus Wien
          </div>
        </div>
      </footer>
    </div>
  )
}

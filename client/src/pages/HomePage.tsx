import { Euro, Zap } from 'lucide-react'
import Button from '../components/Button'

export default function HomePage() {
  return (
    <section className="bg-[linear-gradient(95deg,#739aa8_0%,#7fadbb_19%,#aac9d7_63%,#7fa5b5_100%)] py-16 md:py-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider">
                KI gestützter Versicherungscheck
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welche <span className="bg-orange-500 px-1 xs:px-1.5 lg:px-2">Versicherung</span>{' '}
              brauchst du wirklich?
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              In wenigen Minuten findest du heraus, welche Versicherungen zu deinem Leben passen.
              Keine Anmeldung, keine E-Mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button to="/check" size="lg">
                Jetzt Check starten
              </Button>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="flex gap-2">
                <Zap className="w-5 h-5 text-orange-500" /> Ergebnis in wenigen Minuten
              </span>
              <span className="flex gap-2">
                <Euro className="w-5 h-5 text-blue-500" /> 100% kostenlos
              </span>
            </div>
          </div>
          <div className="hidden lg:block text-black">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md ml-auto">
              <div className="flex gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-orange-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Ergebnis</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-green-500/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-sm text-foreground">Haushaltsversicherung</p>
                      <p className="text-xs text-green-500">Optimal gedeckt</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                    OK
                  </span>
                </div>
                <div className="flex items-center justify-between bg-red-500/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        Private Haftpflicht­versicherung
                      </p>
                      <p className="text-xs text-red-500">Lücke erkannt</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-red-500/20 text-red-500 px-2 py-1 rounded-md uppercase">
                    Dringlich
                  </span>
                </div>
                <div className="flex items-center justify-between bg-orange-500/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-sm text-foreground">
                        Private Krankenversicherung
                      </p>
                      <p className="text-xs text-orange-500">Lücke erkannt</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-orange-500/20 text-orange-500 px-2 py-1 rounded-md uppercase">
                    Empfohlen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Add more sections  */}
    </section>
  )
}

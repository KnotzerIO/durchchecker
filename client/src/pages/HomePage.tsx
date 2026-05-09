import { Clock, Euro, Lock, ShieldCheck, Zap } from 'lucide-react'
import Button from '../components/Button'

export default function HomePage() {
  return (
    <>
      <section className="bg-[linear-gradient(95deg,#739aa8_0%,#7fadbb_19%,#aac9d7_63%,#7fa5b5_100%)] py-10 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-2">
                <span className="text-xs font-semibold tracking-wider">KI-Versicherungscheck</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welche <span className="bg-orange-500 px-1 xs:px-1.5 lg:px-2">Versicherung</span>{' '}
                brauchst du wirklich?
              </h1>

              <p className="text-lg text-white/90 mb-8 max-w-lg">
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
                  <Zap className="w-5 h-5 text-orange-500" /> Schnell & Einfach
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
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                  Ergebnis
                </p>
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
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Warum <span className="text-orange-500">durchchecker</span>?
            </h2>
            <p className="mt-4 text-slate-600">
              Wir kombinieren modernste Technologie mit tiefem Marktverständnis, um Versicherungen
              endlich transparent und zugänglich zu machen.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center mb-5 h-12 w-12 rounded-3xl bg-slate-100 text-slate-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kein Versicherungs-Chinesisch</h3>
              <p className="text-slate-600">
                Wir erklären dir in normaler Sprache, welche Versicherungen für deine Situation Sinn
                machen – und welche nicht.
              </p>
            </div>

            <div className="rounded-[2rem] border border-orange-400 bg-orange-500 p-6 shadow-xl text-white">
              <div className="inline-flex items-center justify-center mb-5 h-12 w-12 rounded-3xl bg-white/20 text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Ehrlich & unabhängig</h3>
              <p className="text-sm leading-7 text-orange-100/95">
                Wir verkaufen dir nichts. Dieses Tool ist ein Uni-Projekt – wir wollen dir einfach
                helfen, den Durchblick zu bekommen.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center mb-5 h-12 w-12 rounded-3xl bg-slate-100 text-slate-700">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Schnell & digital</h3>
              <p className="text-slate-600">
                In unter 5 Minuten bekommst du eine erste Einschätzung. Kein Papierkram, kein
                Telefonat, kein Termin.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center mb-5 h-12 w-12 rounded-3xl bg-slate-100 text-slate-700">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deine Daten bleiben bei dir</h3>
              <p className="text-slate-600">
                Wir speichern keine persönlichen Daten und geben nichts an Dritte weiter.
                Versprochen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

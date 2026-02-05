import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Wrench, Hammer, TreePine, PaintBucket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weitere Leistungen | Zimmerei Stark',
  description: 'Alle handwerklichen Leistungen rund um den Holzbau. Vom Sägewerk über Zimmererarbeiten bis zum Treppenbau.',
}

const leistungen = [
  { name: 'Sägewerk', href: '/leistungen/weitere/saegewerk', beschreibung: 'Eigenes Holz sägen und verarbeiten' },
  { name: 'Lohnabbund', href: '/leistungen/weitere/lohnabbund', beschreibung: 'CNC-Abbund für Zimmerer' },
  { name: 'Zimmererarbeiten', href: '/leistungen/weitere/zimmererarbeiten', beschreibung: 'Klassisches Zimmererhandwerk' },
  { name: 'Dachstuhl', href: '/leistungen/weitere/dachstuhl', beschreibung: 'Dachkonstruktionen aller Art' },
  { name: 'Innen- & Dachausbau', href: '/leistungen/weitere/innen-dachausbau', beschreibung: 'Wohnraum unter dem Dach' },
  { name: 'Maurerarbeiten', href: '/leistungen/weitere/maurerarbeiten', beschreibung: 'Fundamente und Mauerwerk' },
  { name: 'Maler- & Putzarbeiten', href: '/leistungen/weitere/maler-putzarbeiten', beschreibung: 'Oberflächen und Anstriche' },
  { name: 'Schreinerarbeiten', href: '/leistungen/weitere/schreinerarbeiten', beschreibung: 'Feine Holzarbeiten vom Fachmann' },
  { name: 'Treppenbau', href: '/leistungen/weitere/treppenbau', beschreibung: 'Treppen nach Maß' },
  { name: 'Böden', href: '/leistungen/weitere/boeden', beschreibung: 'Parkett, Dielen, Laminat' },
  { name: 'Innentüren', href: '/leistungen/weitere/innentüren', beschreibung: 'Türen für jeden Stil' },
  { name: 'Fenster, Haustüren & Sonnenschutz', href: '/leistungen/weitere/fenster-haustüren-sonnenschutz', beschreibung: 'Die Verbindung nach außen' },
  { name: 'Außenanlagen', href: '/leistungen/weitere/aussenanlagen', beschreibung: 'Terrassen, Carports, Zäune' },
]

export default function WeitereLeistungenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/weitere-leistungen-hero.jpg"
          alt="Weitere Leistungen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Weitere Leistungen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Alles aus einer Hand
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Als Komplettanbieter bieten wir weit mehr als Holzbau. Von unserem 
              eigenen Sägewerk über klassische Zimmererarbeiten bis hin zu Maurer, 
              Maler und Schreiner – bei uns bekommen Sie alles aus einer Hand.
            </p>

            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { icon: TreePine, label: 'Sägewerk' },
                { icon: Hammer, label: 'Zimmerei' },
                { icon: Wrench, label: 'Ausbau' },
                { icon: PaintBucket, label: 'Oberflächen' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <item.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-medium text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((leistung, index) => (
              <Link
                key={index}
                href={leistung.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-600 transition-colors">
                  {leistung.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{leistung.beschreibung}</p>
                <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-amber-50 border-l-4 border-amber-600 p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Warum alles aus einer Hand?</h3>
            <p className="text-amber-700">
              Ein Ansprechpartner, nahtlose Koordination, keine Schnittstellenprobleme. 
              Wir übernehmen die Verantwortung für Ihr gesamtes Projekt – von der 
              Planung bis zur Schlüsselübergabe.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Projekt anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Alle Leistungen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

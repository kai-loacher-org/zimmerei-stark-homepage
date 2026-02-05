import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Download, FileText, Home, ChefHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Broschüren & Downloads | Zimmerei Stark',
  description: 'Laden Sie unsere Broschüren und Informationsmaterial herunter. KomplettHausbau, ModulBau, Küchen und mehr.',
}

const downloads = [
  {
    titel: 'Unternehmensbroschüre',
    beschreibung: 'Alles über Zimmerei Stark – Geschichte, Leistungen, Philosophie',
    icon: FileText,
    datei: '/downloads/stark-unternehmensbroschüre.pdf',
    seiten: 24
  },
  {
    titel: 'KomplettHausbau Katalog',
    beschreibung: 'Typenhäuser, Aktionshäuser und individuelle Planung',
    icon: Home,
    datei: '/downloads/stark-kompletthausbau.pdf',
    seiten: 48
  },
  {
    titel: 'ModulBau Prospekt',
    beschreibung: 'Modulares Bauen für Wohnen, Gewerbe und Kommune',
    icon: Home,
    datei: '/downloads/stark-modulbau.pdf',
    seiten: 32
  },
  {
    titel: 'Küchen & Einrichtung',
    beschreibung: 'Maßgefertigte Küchen und Möbel aus unserer Schreinerei',
    icon: ChefHat,
    datei: '/downloads/stark-kuechen.pdf',
    seiten: 36
  },
  {
    titel: 'Technische Daten',
    beschreibung: 'Wandaufbauten, U-Werte, Konstruktionsdetails',
    icon: FileText,
    datei: '/downloads/stark-technische-daten.pdf',
    seiten: 16
  }
]

export default function BroschuerenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/images/downloads-hero.jpg"
          alt="Downloads"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Broschüren & Downloads</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Informationen zum Mitnehmen
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-12">
            Laden Sie unsere Broschüren und Kataloge herunter, um sich in Ruhe 
            über unsere Leistungen zu informieren. Bei Fragen stehen wir Ihnen 
            gerne zur Verfügung.
          </p>

          <div className="space-y-4">
            {downloads.map((download, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <download.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{download.titel}</h3>
                  <p className="text-gray-600 text-sm">{download.beschreibung}</p>
                  <p className="text-gray-400 text-xs mt-1">PDF, {download.seiten} Seiten</p>
                </div>
                <Link
                  href={download.datei}
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Gedruckte Broschüren</h3>
            <p className="text-gray-600">
              Unsere Broschüren senden wir Ihnen auf Wunsch auch gerne per Post zu. 
              Nutzen Sie dafür unser{' '}
              <Link href="/kontakt" className="text-amber-600 hover:underline">
                Kontaktformular
              </Link>
              {' '}oder rufen Sie uns an.
            </p>
          </div>

          <div className="mt-8 bg-amber-50 border-l-4 border-amber-600 p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Individuelle Informationen</h3>
            <p className="text-amber-700">
              Sie haben ein konkretes Projekt? Gerne erstellen wir Ihnen 
              maßgeschneiderte Informationen zu Ihrem Vorhaben.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

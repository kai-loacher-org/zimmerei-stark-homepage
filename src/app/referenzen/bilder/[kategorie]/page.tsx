import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

const kategorien: Record<string, { title: string; description: string; bilder: string[] }> = {
  'kompletthausbau': {
    title: 'KomplettHausbau',
    description: 'Einfamilien- und Mehrfamilienhäuser in Holzbauweise',
    bilder: ['haus-1.jpg', 'haus-2.jpg', 'haus-3.jpg', 'haus-4.jpg', 'haus-5.jpg', 'haus-6.jpg', 'haus-7.jpg', 'haus-8.jpg']
  },
  'modulbau': {
    title: 'ModulBau',
    description: 'Modulare Gebäude für Wohnen, Gewerbe und öffentliche Nutzung',
    bilder: ['modul-1.jpg', 'modul-2.jpg', 'modul-3.jpg', 'modul-4.jpg', 'modul-5.jpg', 'modul-6.jpg']
  },
  'objektbau': {
    title: 'ObjektBau',
    description: 'Gewerbliche und landwirtschaftliche Holzbauten',
    bilder: ['objekt-1.jpg', 'objekt-2.jpg', 'objekt-3.jpg', 'objekt-4.jpg', 'objekt-5.jpg', 'objekt-6.jpg']
  },
  'kueche-einrichtung': {
    title: 'Küche & Einrichtung',
    description: 'Maßgefertigte Küchen und Möbel',
    bilder: ['kueche-1.jpg', 'kueche-2.jpg', 'kueche-3.jpg', 'kueche-4.jpg', 'kueche-5.jpg', 'kueche-6.jpg']
  },
  'mobile-wagen': {
    title: 'Mobile Wagen',
    description: 'Schäferwagen, Waldkindergartenwagen und mehr',
    bilder: ['wagen-1.jpg', 'wagen-2.jpg', 'wagen-3.jpg', 'wagen-4.jpg']
  },
  'aussenanlagen': {
    title: 'Außenanlagen',
    description: 'Terrassen, Carports, Pergolen und Zäune',
    bilder: ['aussen-1.jpg', 'aussen-2.jpg', 'aussen-3.jpg', 'aussen-4.jpg', 'aussen-5.jpg', 'aussen-6.jpg']
  },
  'wellness': {
    title: 'Wellness',
    description: 'Saunen, Schwimmbäder und Spa-Bereiche',
    bilder: ['wellness-1.jpg', 'wellness-2.jpg', 'wellness-3.jpg', 'wellness-4.jpg']
  },
  'weitere': {
    title: 'Weitere Leistungen',
    description: 'Treppen, Böden, Dachstühle und mehr',
    bilder: ['weitere-1.jpg', 'weitere-2.jpg', 'weitere-3.jpg', 'weitere-4.jpg', 'weitere-5.jpg', 'weitere-6.jpg']
  }
}

export function generateStaticParams() {
  return Object.keys(kategorien).map((kategorie) => ({ kategorie }))
}

export function generateMetadata({ params }: { params: { kategorie: string } }): Metadata {
  const kategorie = kategorien[params.kategorie]
  if (!kategorie) return { title: 'Nicht gefunden' }
  return {
    title: `${kategorie.title} | Bilder | Referenzen | Zimmerei Stark`,
    description: kategorie.description,
  }
}

export default function BilderKategoriePage({ params }: { params: { kategorie: string } }) {
  const kategorie = kategorien[params.kategorie]
  
  if (!kategorie) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src={`/images/referenzen/${params.kategorie}-hero.jpg`}
          alt={kategorie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{kategorie.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {kategorie.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/referenzen/bilder"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {kategorie.bilder.map((bild, index) => (
              <div 
                key={index}
                className="aspect-square relative rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/images/referenzen/${params.kategorie}/${bild}`}
                  alt={`${kategorie.title} Bild ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>

          {/* Placeholder info */}
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 text-center">
              Weitere Bilder auf Anfrage. Besuchen Sie auch unsere 
              <Link href="/ueber-uns/ausstellungen" className="text-amber-600 hover:underline mx-1">
                Ausstellungen
              </Link>
              für einen persönlichen Eindruck.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

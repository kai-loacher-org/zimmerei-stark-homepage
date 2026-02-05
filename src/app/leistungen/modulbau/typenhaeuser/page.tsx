import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Maximize, Zap, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Typenhäuser ModulBau | Zimmerei Stark',
  description: 'Modulare Typenhäuser für schnelles Bauen. Bewährte Konzepte in vorgefertigter Holzmodulbauweise.',
}

const modulTypen = [
  {
    name: 'Modul S',
    wohnflaeche: '60-80 m²',
    module: '2-3 Module',
    beschreibung: 'Kompaktes Wohnen für Singles, Paare oder als Einliegerwohnung',
    ideal: ['Starterhaus', 'Einliegerwohnung', 'Ferienhaus', 'Büro']
  },
  {
    name: 'Modul M',
    wohnflaeche: '90-120 m²',
    module: '3-4 Module',
    beschreibung: 'Das clevere Familienhaus mit optimiertem Grundriss',
    ideal: ['Kleine Familien', 'Paare mit Platzbedarf', 'Home-Office', 'Gästehaus']
  },
  {
    name: 'Modul L',
    wohnflaeche: '130-160 m²',
    module: '4-6 Module',
    beschreibung: 'Großzügiges Wohnen für die ganze Familie',
    ideal: ['Familien', 'Mehrgenerationen', 'Repräsentatives Wohnen']
  },
  {
    name: 'Modul XL',
    wohnflaeche: '170-220 m²',
    module: '6-8 Module',
    beschreibung: 'Premium-Wohnen ohne Kompromisse',
    ideal: ['Große Familien', 'Luxus-Anspruch', 'Kombiniert Wohnen & Arbeiten']
  }
]

export default function TypenhaeuserModulbauPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/modulbau-typen-hero.jpg"
          alt="ModulBau Typenhäuser"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Typenhäuser ModulBau</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Schnell einziehen in Ihr neues Zuhause
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Unsere Modul-Typenhäuser verbinden die Vorteile des Modulbaus mit 
              erprobten Hauskonzepten. Wählen Sie Ihre Größe, passen Sie Details an, 
              und beziehen Sie Ihr neues Zuhause in Rekordzeit.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: '3-4 Monate', sub: 'bis Einzug' },
                { icon: Euro, label: 'Festpreis', sub: 'garantiert' },
                { icon: Home, label: 'Schlüsselfertig', sub: 'inklusive' },
                { icon: Maximize, label: 'Anpassbar', sub: 'nach Wunsch' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <item.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Modulhaus-Typen</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {modulTypen.map((typ, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 relative flex items-center justify-center">
                  <div className="text-center">
                    <Home className="w-16 h-16 text-amber-600 mx-auto mb-2" />
                    <span className="text-amber-800 font-medium">{typ.module}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{typ.name}</h3>
                    <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      {typ.wohnflaeche}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{typ.beschreibung}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Ideal für:</p>
                    <div className="flex flex-wrap gap-1">
                      {typ.ideal.map((item, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-xl mb-12">
            <h3 className="text-xl font-semibold mb-4">Individualisierung möglich</h3>
            <p className="text-gray-300 mb-4">
              Die Typenhäuser sind Ausgangspunkte. Innerhalb des Modulsystems sind 
              viele Anpassungen möglich:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Grundrissänderungen',
                'Fassadengestaltung',
                'Dachformen',
                'Fenstergrößen',
                'Ausstattungspakete',
                'Smart-Home',
                'Carport/Garage',
                'Terrasse/Balkon',
                'Photovoltaik'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Beratung vereinbaren
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/modulbau/prozessdarstellung"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              So funktioniert ModulBau
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

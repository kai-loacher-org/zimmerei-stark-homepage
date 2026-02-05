import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Maximize, Layout, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Typenhäuser | KomplettHausbau | Zimmerei Stark',
  description: 'Bewährte Haustypen als Basis für Ihr Traumhaus. Erprobte Grundrisse mit individuellen Anpassungsmöglichkeiten.',
}

const haustypen = [
  {
    name: 'Typ Klassik',
    wohnflaeche: '120-150 m²',
    beschreibung: 'Das zeitlose Einfamilienhaus mit durchdachtem Grundriss',
    merkmale: ['Satteldach', 'Vollgeschoss + Dachgeschoss', 'Ideal für Familien']
  },
  {
    name: 'Typ Modern',
    wohnflaeche: '130-170 m²',
    beschreibung: 'Klare Linien und offene Räume für modernes Wohnen',
    merkmale: ['Flach-/Pultdach', 'Große Fensterflächen', 'Offener Grundriss']
  },
  {
    name: 'Typ Kompakt',
    wohnflaeche: '90-120 m²',
    beschreibung: 'Effizient und clever – maximaler Wohnwert auf kleiner Fläche',
    merkmale: ['Optimierte Grundrisse', 'Ideal für kleine Grundstücke', 'Energieeffizient']
  },
  {
    name: 'Typ Landhaus',
    wohnflaeche: '140-180 m²',
    beschreibung: 'Gemütlichkeit und Charme im traditionellen Stil',
    merkmale: ['Klassische Architektur', 'Großzügige Räume', 'Holzfassade optional']
  }
]

export default function TypenhaeuserPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Typenhäuser"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Typenhäuser</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bewährte Konzepte, individuell angepasst
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-xl text-gray-600 mb-8">
              Unsere Typenhäuser sind mehr als Standardhäuser – sie sind erprobte, 
              optimierte Hauskonzepte, die als Basis für Ihr individuelles Traumhaus 
              dienen. Profitieren Sie von durchdachten Grundrissen und planbaren Kosten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 not-prose mb-16">
            {[
              {
                icon: Layout,
                title: 'Erprobte Grundrisse',
                description: 'Vielfach gebaute und optimierte Raumaufteilungen für maximalen Wohnkomfort'
              },
              {
                icon: Maximize,
                title: 'Flexible Anpassung',
                description: 'Grundrisse können an Ihre Wünsche und Ihr Grundstück angepasst werden'
              },
              {
                icon: Home,
                title: 'Planungssicherheit',
                description: 'Kalkulierbare Kosten durch vordefinierte Leistungsumfänge'
              },
              {
                icon: Zap,
                title: 'Schnelle Umsetzung',
                description: 'Kürzere Planungsphase durch vorhandene Konstruktionsdetails'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Haustypen</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {haustypen.map((typ, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Home className="w-16 h-16" />
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
                  <ul className="space-y-1">
                    {typ.merkmale.map((merkmal, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        {merkmal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 max-w-3xl">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Typenhaus ≠ Einschränkung</h3>
            <p className="text-amber-700">
              Unsere Typenhäuser sind Ausgangspunkte, keine Grenzen. Über 80% unserer 
              Bauherren modifizieren ihren gewählten Typ – sei es bei der Raumaufteilung, 
              der Fassadengestaltung oder der Ausstattung. Wir helfen Ihnen, Ihr 
              persönliches Traumhaus zu verwirklichen.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Katalog anfordern
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/ueber-uns/ausstellungen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Musterhäuser besichtigen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

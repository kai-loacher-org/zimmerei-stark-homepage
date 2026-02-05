import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, MapPin, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Immobilienprojekte | Zimmerei Stark',
  description: 'Aktuelle Immobilienprojekte der Stark Immo GmbH. Wohnquartiere in Gunzenhausen und Wassertrüdingen.',
}

const projekte = [
  {
    name: 'GrünQuartier Gunzenhausen',
    href: '/leistungen/immobilienprojekte/gruenquartier-gunzenhausen',
    ort: 'Gunzenhausen',
    status: 'In Planung',
    beschreibung: 'Modernes Wohnquartier mit nachhaltigen Holzhäusern'
  },
  {
    name: 'GrünQuartier Wassertrüdingen',
    href: '/leistungen/immobilienprojekte/gruenquartier-wassertuedingen',
    ort: 'Wassertrüdingen',
    status: 'In Planung',
    beschreibung: 'Naturnahes Wohnen im Herzen der Kleinstadt'
  }
]

export default function ImmobilienprojektePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/immobilien-hero.jpg" alt="Immobilienprojekte" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Immobilienprojekte</h1>
          <p className="text-xl md:text-2xl">Wohnquartiere von Stark Immo</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-12">
            Die Stark Immo GmbH entwickelt nachhaltige Wohnquartiere in der Region. 
            Unsere Projekte verbinden modernen Holzbau mit durchdachter Quartiersplanung – 
            für lebenswertes Wohnen mit Zukunft.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Building2, title: 'Planung', desc: 'Von der Idee zum Quartier' },
              { icon: Home, title: 'Holzbau', desc: 'Nachhaltige Bauweise' },
              { icon: MapPin, title: 'Regional', desc: 'In Ihrer Nähe' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Aktuelle Projekte</h2>

          <div className="space-y-6">
            {projekte.map((projekt, index) => (
              <Link
                key={index}
                href={projekt.href}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-amber-600 transition-colors">
                      {projekt.name}
                    </h3>
                    <p className="text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" /> {projekt.ort}
                    </p>
                    <p className="text-gray-600 mt-2">{projekt.beschreibung}</p>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {projekt.status}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium mt-4">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-amber-50 border-l-4 border-amber-600 p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Interesse an einem Grundstück?</h3>
            <p className="text-amber-700">
              Lassen Sie sich unverbindlich über unsere aktuellen Projekte informieren. 
              Wir nehmen Sie gerne in unseren Interessentenverteiler auf.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

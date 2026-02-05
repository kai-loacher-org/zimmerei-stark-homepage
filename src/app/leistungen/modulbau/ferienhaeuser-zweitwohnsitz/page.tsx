import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TreePine, Sun, Key, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ferienhäuser & Zweitwohnsitz | ModulBau | Zimmerei Stark',
  description: 'Modulare Ferienhäuser und Zweitwohnsitze. Ihr Rückzugsort in der Natur – schnell gebaut, nachhaltig und wertig.',
}

export default function FerienhaeuserPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Ferienhaus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ferienhäuser & Zweitwohnsitz</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ihr Platz zum Durchatmen
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Ein Ort nur für Sie – zum Entspannen, Kraft tanken oder als 
              Wochenendrefugium. Unsere modularen Ferienhäuser bieten höchsten 
              Komfort und fügen sich harmonisch in die Landschaft ein.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: TreePine,
                  title: 'Naturnah',
                  description: 'Holzbauten fügen sich perfekt in jede Landschaft ein'
                },
                {
                  icon: Sun,
                  title: 'Sofort nutzbar',
                  description: 'Schlüsselfertig in wenigen Wochen – mehr Zeit zum Genießen'
                },
                {
                  icon: Key,
                  title: 'Vollausgestattet',
                  description: 'Küche, Bad, Terrasse – alles inklusive'
                },
                {
                  icon: Euro,
                  title: 'Wertstabil',
                  description: 'Hochwertige Immobilie mit Vermietungspotenzial'
                }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <item.icon className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ferienhaus-Konzepte</h2>
            
            <div className="space-y-6 not-prose mb-8">
              {[
                {
                  name: 'Tiny Cabin',
                  groesse: '25-40 m²',
                  beschreibung: 'Kompakt und clever – für Auszeiten zu zweit',
                  ausstattung: 'Wohnen/Schlafen, Küchenzeile, Duschbad, Terrasse'
                },
                {
                  name: 'Weekend House',
                  groesse: '50-80 m²',
                  beschreibung: 'Das klassische Wochenendhaus für die Familie',
                  ausstattung: '2 Schlafzimmer, Wohnküche, Bad, überdachte Terrasse'
                },
                {
                  name: 'Lake House',
                  groesse: '80-120 m²',
                  beschreibung: 'Großzügig wohnen am Wasser oder in den Bergen',
                  ausstattung: '3 Schlafzimmer, 2 Bäder, Sauna optional, große Terrasse'
                }
              ].map((typ, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{typ.name}</h3>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      {typ.groesse}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{typ.beschreibung}</p>
                  <p className="text-sm text-gray-500">{typ.ausstattung}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Vermietung als Einnahmequelle</h3>
              <p className="text-gray-300 mb-4">
                Ein Ferienhaus muss nicht nur Kosten verursachen. Mit professioneller 
                Vermietung refinanziert sich die Investition – und Sie haben trotzdem 
                Ihren Rückzugsort, wann immer Sie möchten.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Hochwertige Ausstattung für gute Bewertungen</li>
                <li>• Robuste Materialien für Dauereinsatz</li>
                <li>• Pflegeleichte Oberflächen</li>
                <li>• Smart-Home für Fernverwaltung</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Standort & Genehmigung</h2>
            
            <p>
              Die Genehmigungssituation für Ferienhäuser variiert stark je nach 
              Lage und Kommune. Wir prüfen die Möglichkeiten für Ihr Grundstück:
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>Baugebiet:</strong> In der Regel unproblematisch</li>
              <li>• <strong>Außenbereich:</strong> Oft nur mit Landwirtschaft möglich</li>
              <li>• <strong>Campingplatz:</strong> Mobilheime als Alternative</li>
              <li>• <strong>Ferienpark:</strong> Spezielle Regelungen je nach Betreiber</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Mobilheime & Tiny Houses</h3>
              <p className="text-amber-700">
                Für Standorte ohne Baugenehmigung bieten wir auch mobile Lösungen 
                an – NaturWagen, Tiny Houses auf Rädern oder Mobilheime.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Beratung anfordern
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/naturwagen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              NaturWagen entdecken
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

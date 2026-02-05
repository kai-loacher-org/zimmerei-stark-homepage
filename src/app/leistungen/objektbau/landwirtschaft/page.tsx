import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Warehouse, Tractor, Beef, Wheat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Landwirtschaft | ObjektBau | Zimmerei Stark',
  description: 'Landwirtschaftliche Gebäude in Holzbauweise. Stallungen, Maschinenhallen, Lagerhallen – funktional und tierwohlgerecht.',
}

export default function ObjektbauLandwirtschaftPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/objektbau-landwirtschaft-hero.jpg"
          alt="Landwirtschaftsbau"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ObjektBau Landwirtschaft</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bauen für die Zukunft der Landwirtschaft
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Holz ist der ursprüngliche Baustoff der Landwirtschaft – und heute 
              aktueller denn je. Wir planen und bauen moderne landwirtschaftliche 
              Gebäude, die Tierwohl, Arbeitseffizienz und Wirtschaftlichkeit 
              vereinen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Beef,
                  title: 'Stallungen',
                  description: 'Rinder-, Schweine-, Geflügelställe – tierwohlgerecht und modern'
                },
                {
                  icon: Warehouse,
                  title: 'Maschinenhallen',
                  description: 'Große Spannweiten für Landmaschinen, Werkstatt und Lager'
                },
                {
                  icon: Wheat,
                  title: 'Lagerhallen',
                  description: 'Getreide, Stroh, Heu – optimale Lagerbedingungen'
                },
                {
                  icon: Tractor,
                  title: 'Betriebsgebäude',
                  description: 'Hofläden, Verarbeitungsräume, Sozialgebäude'
                }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <item.icon className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Holz im Stallbau</h2>
            
            <p>
              Holz reguliert Feuchtigkeit und schafft ein gesundes Stallklima. 
              Die natürliche Atmungsaktivität reduziert Ammoniakbelastung und 
              fördert die Tiergesundheit.
            </p>

            <ul className="space-y-2 my-6">
              <li>✓ <strong>Besseres Stallklima</strong> – weniger Atemwegserkrankungen</li>
              <li>✓ <strong>Feuchtigkeitsregulierung</strong> – keine Kondensatprobleme</li>
              <li>✓ <strong>Geringere Ammoniakwerte</strong> – Holz bindet Schadstoffe</li>
              <li>✓ <strong>Angenehme Temperaturen</strong> – kühl im Sommer, mild im Winter</li>
              <li>✓ <strong>Langlebig</strong> – bei richtigem konstruktiven Holzschutz</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Große Hallen – effizient geplant</h3>
              <p className="text-gray-300 mb-4">
                Moderne landwirtschaftliche Betriebe brauchen Platz. Mit 
                Brettschichtholz-Tragwerken realisieren wir stützenfreie Hallen 
                mit Spannweiten von über 25 Metern.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <div className="text-2xl font-bold text-green-400">30m+</div>
                  <div className="text-sm text-gray-400">Spannweite möglich</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">6m+</div>
                  <div className="text-sm text-gray-400">Traufhöhe</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">∞</div>
                  <div className="text-sm text-gray-400">Länge flexibel</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fördermittel nutzen</h2>
            
            <p>
              Landwirtschaftliche Investitionen werden umfangreich gefördert. 
              Wir unterstützen Sie bei der Planung und Antragstellung:
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>AFP</strong> – bis zu 40% Zuschuss für bauliche Investitionen</li>
              <li>• <strong>Tierwohl-Prämie</strong> – für tierwohlgerechte Stallkonzepte</li>
              <li>• <strong>Diversifizierung</strong> – für Hofläden und Direktvermarktung</li>
              <li>• <strong>EEG</strong> – für PV-Anlagen auf Dachflächen</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Erfahrung zählt</h3>
              <p className="text-amber-700">
                Seit über 100 Jahren bauen wir für die Landwirtschaft. Wir kennen 
                die Anforderungen, die Förderlandschaft und die Besonderheiten 
                des Bauens im Außenbereich.
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
              href="/referenzen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

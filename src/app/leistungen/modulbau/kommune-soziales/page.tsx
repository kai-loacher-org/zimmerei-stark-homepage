import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, School, Building, Heart, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kommune & Soziales | ModulBau | Zimmerei Stark',
  description: 'Modulbauten für Kommunen und soziale Einrichtungen. Kindergärten, Schulen, Unterkünfte schnell und wirtschaftlich realisiert.',
}

export default function KommuneSozialesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/modulbau-kommune-hero.jpg"
          alt="ModulBau Kommune"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kommune & Soziales</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Schnelle Lösungen für öffentliche Aufgaben
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Kommunen stehen vor großen Herausforderungen: Kindergartenplätze, 
              Schulräume, Unterkünfte – der Bedarf ist groß, die Zeit knapp. 
              Modulbau bietet schnelle, wirtschaftliche und nachhaltige Lösungen 
              für den öffentlichen Sektor.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: School,
                  title: 'Bildungseinrichtungen',
                  description: 'Kindergärten, Schulerweiterungen, Mensen und Fachräume'
                },
                {
                  icon: Building,
                  title: 'Verwaltungsgebäude',
                  description: 'Rathauserweiterungen, Bürgerbüros, Servicezentren'
                },
                {
                  icon: Heart,
                  title: 'Soziale Einrichtungen',
                  description: 'Seniorentreffs, Jugendclubs, Beratungsstellen'
                },
                {
                  icon: Users,
                  title: 'Unterkünfte',
                  description: 'Wohnheime, Flüchtlingsunterkünfte, Personalwohnungen'
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vorteile für Kommunen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Schnelle Realisierung</strong> – Bedarfe zeitnah decken</li>
              <li>✓ <strong>Planbare Kosten</strong> – Festpreisgarantie für den Haushalt</li>
              <li>✓ <strong>Förderfähig</strong> – alle KfW-Standards erreichbar</li>
              <li>✓ <strong>Nachhaltig</strong> – Vorbildfunktion der öffentlichen Hand</li>
              <li>✓ <strong>Flexibel</strong> – erweiterbar oder rückbaubar</li>
              <li>✓ <strong>Vergabekonform</strong> – Erfahrung mit öffentlichen Ausschreibungen</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Kindergarten in 4 Monaten</h3>
              <p className="text-gray-300 mb-4">
                Während der Rechtsanspruch auf Kinderbetreuung drängt, können wir 
                einen vollständig ausgestatteten Kindergarten in rund 4 Monaten 
                realisieren – inklusive Planung und Genehmigung.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <div className="text-2xl font-bold text-amber-400">4 Monate</div>
                  <div className="text-sm text-gray-400">Gesamtbauzeit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">50-100</div>
                  <div className="text-sm text-gray-400">Betreuungsplätze</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">KfW 40</div>
                  <div className="text-sm text-gray-400">Effizienzstandard</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Referenzen im öffentlichen Bereich</h2>
            
            <p>
              Wir haben bereits zahlreiche Projekte für Kommunen, Landkreise und 
              soziale Träger realisiert. Von der kleinen Kindertagesstätte bis 
              zum mehrgeschossigen Schulgebäude – wir kennen die Anforderungen 
              des öffentlichen Sektors.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Öffentliche Ausschreibungen</h3>
              <p className="text-amber-700">
                Wir sind erfahren in der Bearbeitung öffentlicher Ausschreibungen 
                und unterstützen Kommunen bereits in der Planungsphase mit 
                Machbarkeitsstudien und Kostenabschätzungen.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Projekt anfragen
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

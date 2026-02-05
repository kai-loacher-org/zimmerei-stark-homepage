import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Thermometer, TreePine, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sauna | Küche & Einrichtung | Zimmerei Stark',
  description: 'Sauna nach Maß. Individuelle Saunaplanung und -bau für Ihr Zuhause.',
}

export default function SaunaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Sauna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sauna im Innenbereich</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Wellness für Körper und Seele
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Eine eigene Sauna ist purer Luxus – und mit uns überraschend 
              erschwinglich. Wir bauen Ihre Sauna nach Maß, passgenau in 
              jeden Raum, vom Keller bis zum Bad.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Thermometer,
                  title: 'Finnische Sauna',
                  description: '80-100°C, der Klassiker'
                },
                {
                  icon: Sparkles,
                  title: 'Biosauna',
                  description: '50-60°C, sanftere Wärme'
                },
                {
                  icon: TreePine,
                  title: 'Infrarotkabine',
                  description: 'Tiefenwärme ohne hohe Temperaturen'
                }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg text-center border border-amber-200">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Saunatypen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Elementsauna</strong> – schneller Aufbau, passgenaue Fertigung</li>
              <li>✓ <strong>Massivholzsauna</strong> – rustikale Optik, natürliche Klimaregulierung</li>
              <li>✓ <strong>Design-Sauna</strong> – Glas, Licht, moderne Architektur</li>
              <li>✓ <strong>Außensauna</strong> – freistehend im Garten</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hölzer für die Sauna</h2>
            
            <p>
              Wir verwenden nur saunaerprobte Hölzer:
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>Nordische Fichte</strong> – der Klassiker, harzarm</li>
              <li>• <strong>Hemlock</strong> – astarm, gleichmäßig</li>
              <li>• <strong>Espe/Aspe</strong> – sehr harzfrei, für Bänke</li>
              <li>• <strong>Thermoholz</strong> – dunkel, elegant, formstabil</li>
              <li>• <strong>Zeder</strong> – aromatisch, rötlich</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Komplett ausgestattet</h3>
              <p className="text-gray-300 mb-4">
                Unsere Saunen kommen mit allem, was Sie brauchen:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Saunaofen (Holz oder Elektro)</li>
                <li>• Ergonomische Liegen</li>
                <li>• Beleuchtung (dimmbar)</li>
                <li>• Hygrometer und Thermometer</li>
                <li>• Aufgusseimer und Kelle</li>
                <li>• Lüftungssystem</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Platzbedarf</h2>
            
            <p>
              Eine Sauna braucht weniger Platz als Sie denken. Selbst auf 4 m² 
              lässt sich eine gemütliche 2-Personen-Sauna realisieren.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 not-prose my-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-600">4 m²</div>
                <div className="text-sm text-gray-500">ab 2 Personen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-600">6 m²</div>
                <div className="text-sm text-gray-500">ab 4 Personen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-600">8+ m²</div>
                <div className="text-sm text-gray-500">mit Vorraum</div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Planung vor Ort</h3>
              <p className="text-amber-700">
                Wir kommen zu Ihnen, nehmen Maß und beraten Sie zu den 
                Möglichkeiten – kostenlos und unverbindlich.
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
              href="/leistungen/kueche-einrichtung"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

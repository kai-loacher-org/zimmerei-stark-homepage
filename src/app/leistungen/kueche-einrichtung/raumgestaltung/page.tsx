import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Palette, Layers, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Raumgestaltung & Planung | Küche & Einrichtung | Zimmerei Stark',
  description: 'Professionelle Innenarchitektur und Raumplanung. 3D-Visualisierung für Ihr Einrichtungsprojekt.',
}

export default function RaumgestaltungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/raumgestaltung-hero.jpg"
          alt="Raumgestaltung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Raumgestaltung & Planung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Von der Idee zum perfekten Raum
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Gute Einrichtung beginnt mit guter Planung. Unsere Innenarchitekten 
              entwickeln Raumkonzepte, die funktional und ästhetisch überzeugen – 
              mit modernster 3D-Visualisierung sehen Sie das Ergebnis schon vor 
              dem ersten Handgriff.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Eye,
                  title: '3D-Planung',
                  description: 'Fotorealistische Visualisierungen'
                },
                {
                  icon: Palette,
                  title: 'Farbkonzepte',
                  description: 'Stimmige Farb- und Materialwelten'
                },
                {
                  icon: Layers,
                  title: 'Koordination',
                  description: 'Alle Gewerke aus einer Hand'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Planungsleistungen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Raumanalyse</strong> – Aufmaß und Bestandsaufnahme vor Ort</li>
              <li>✓ <strong>Konzeptentwicklung</strong> – Grundriss und Raumaufteilung</li>
              <li>✓ <strong>Materialberatung</strong> – Holzarten, Oberflächen, Stoffe</li>
              <li>✓ <strong>Farbgestaltung</strong> – Wandfarben, Böden, Textilien</li>
              <li>✓ <strong>3D-Visualisierung</strong> – fotorealistisch durchwanderbar</li>
              <li>✓ <strong>Ausführungsplanung</strong> – detailliert für die Fertigung</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">3D-Planung erleben</h3>
              <p className="text-gray-300 mb-4">
                Mit unserer Software planen wir Ihre Räume in 3D und erstellen 
                fotorealistische Renderings:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Virtuelle Rundgänge durch Ihre Räume</li>
                <li>• Tageslichtsimulation zu verschiedenen Zeiten</li>
                <li>• Materialvarianten auf Knopfdruck</li>
                <li>• Maßstabsgetreue Darstellung</li>
                <li>• Export für VR-Brillen möglich</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Der Planungsprozess</h2>
            
            <ol className="space-y-4 not-prose mb-8">
              {[
                'Erstgespräch – Wir lernen Ihre Wünsche kennen',
                'Aufmaß – Präzise Vermessung vor Ort',
                'Konzept – Erste Entwürfe und Varianten',
                'Präsentation – 3D-Visualisierung zum Erleben',
                'Feinplanung – Detaillierung und Materialfestlegung',
                'Ausführung – Fertigung und Montage'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Komplettservice</h3>
              <p className="text-amber-700">
                Auf Wunsch koordinieren wir auch Maler, Bodenleger und Elektriker – 
                Sie haben einen Ansprechpartner für alles.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Planungsgespräch vereinbaren
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

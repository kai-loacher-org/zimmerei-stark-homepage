import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Calculator, FileCheck, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Statik | Beratung & Planung | Zimmerei Stark',
  description: 'Professionelle Tragwerksplanung und statische Berechnungen für sicheren Holzbau. Zertifizierte Statiker für Ihr Bauprojekt.',
}

export default function StatikPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/statik-hero.jpg"
          alt="Statische Berechnung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Statik</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Sicherheit durch Präzision
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Die Statik ist das Rückgrat jedes Bauwerks. Unsere erfahrenen 
              Tragwerksplaner sorgen mit präzisen Berechnungen dafür, dass Ihr 
              Holzgebäude allen Anforderungen standhält – sicher, wirtschaftlich 
              und normgerecht.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Statik-Leistungen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Calculator,
                  title: 'Tragwerksplanung',
                  description: 'Berechnung aller tragenden Bauteile nach aktuellen Normen und Vorschriften'
                },
                {
                  icon: Shield,
                  title: 'Standsicherheitsnachweis',
                  description: 'Erstellung aller erforderlichen Nachweise für die Baugenehmigung'
                },
                {
                  icon: FileCheck,
                  title: 'Wärmeschutznachweis',
                  description: 'Energetische Berechnungen nach GEG für optimale Dämmwerte'
                },
                {
                  icon: Building2,
                  title: 'Schallschutznachweis',
                  description: 'Akustische Berechnungen für Komfort und Wohlbefinden'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Holzbau-Expertise</h2>
            
            <p>
              Holz ist ein besonderer Baustoff, der spezifisches Know-how erfordert. 
              Unsere Statiker sind auf den Holzbau spezialisiert und kennen die 
              Eigenschaften des Materials genau:
            </p>

            <ul className="space-y-2 my-6">
              <li>✓ Bemessung von Holzkonstruktionen nach EC5</li>
              <li>✓ Optimierung von Querschnitten und Verbindungen</li>
              <li>✓ Brandschutzplanung für Holzbauten</li>
              <li>✓ Hybridbauweise Holz/Beton/Stahl</li>
              <li>✓ Abbundplanung und CNC-Daten</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Moderne Werkzeuge</h3>
              <p className="text-gray-300 mb-4">
                Wir arbeiten mit modernster Software für präzise Berechnungen und 
                anschauliche 3D-Modelle. So können Sie Ihr Tragwerk schon vor dem 
                Bau visualisieren.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• CAD-gestützte Tragwerksplanung</li>
                <li>• FEM-Berechnungen für komplexe Strukturen</li>
                <li>• BIM-Integration für nahtlose Zusammenarbeit</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Statik anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/beratung-planung"
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

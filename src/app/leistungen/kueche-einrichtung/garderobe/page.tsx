import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, DoorOpen, Shirt, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Garderobe | Küche & Einrichtung | Zimmerei Stark',
  description: 'Maßgefertigte Garderoben und Einbauschränke. Optimal für jeden Flur, jede Diele.',
}

export default function GarderobePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Garderobe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Garderobe</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Der erste Eindruck zählt
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Der Eingangsbereich ist die Visitenkarte Ihres Zuhauses. Eine 
              maßgefertigte Garderobe schafft Ordnung und macht den Empfang 
              zu einem einladenden Erlebnis – für Sie und Ihre Gäste.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: DoorOpen,
                  title: 'Einladend',
                  description: 'Stilvoller Empfang für Gäste'
                },
                {
                  icon: Shirt,
                  title: 'Ordnung',
                  description: 'Platz für Jacken, Schuhe, Taschen'
                },
                {
                  icon: Package,
                  title: 'Stauraum',
                  description: 'Versteckter Platz für Alles'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Garderobenlösungen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Einbauschränke</strong> – nutzen jede Nische optimal</li>
              <li>✓ <strong>Garderobenelemente</strong> – freistehend oder wandhängend</li>
              <li>✓ <strong>Schuhschränke</strong> – mit Kippladen oder Auszügen</li>
              <li>✓ <strong>Sitzbänke</strong> – zum bequemen Schuhe anziehen</li>
              <li>✓ <strong>Spiegelelemente</strong> – für den letzten Check</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Clevere Details</h2>
            
            <ul className="space-y-2 my-6">
              <li>• Integrierte Beleuchtung mit Bewegungsmelder</li>
              <li>• Ausziehbare Kleiderstangen</li>
              <li>• Schirmständer und Taschenhalter</li>
              <li>• Handschuhfächer und Schlüsselablage</li>
              <li>• Platz für Paketannahme</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Für jeden Flur</h3>
              <p className="text-gray-300 mb-4">
                Ob schmaler Schlauch oder großzügige Diele – wir finden die 
                perfekte Lösung:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• <strong>Schmaler Flur:</strong> Wandpaneele, Klapphaken, schmale Schränke</li>
                <li>• <strong>Breiter Flur:</strong> Begehbare Garderobe, Raumteiler</li>
                <li>• <strong>Diele:</strong> Repräsentative Anlage mit Sitzbank</li>
                <li>• <strong>Nische:</strong> Passgenaue Einbauten</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Aufmaß vor Ort</h3>
              <p className="text-amber-700">
                Wir kommen zu Ihnen, nehmen Maß und planen Ihre Garderobe 
                passgenau. Mit 3D-Visualisierung sehen Sie das Ergebnis 
                schon vor der Fertigung.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Aufmaß vereinbaren
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

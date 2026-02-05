import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sofa, Building2, Ruler, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Objekteinrichtungen | ObjektBau | Zimmerei Stark',
  description: 'Maßgefertigte Einrichtungen für Gewerbe und öffentliche Gebäude. Empfangstheken, Möbel, Innenausbau.',
}

export default function ObjekteinrichtungenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/objektbau-einrichtung-hero.jpg"
          alt="Objekteinrichtung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Objekteinrichtungen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Individuelle Lösungen für besondere Räume
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Die Einrichtung macht den Raum. Unsere Schreinerei fertigt 
              maßgeschneiderte Möbel und Einbauten für Gewerbe, Gastronomie 
              und öffentliche Gebäude – passgenau, funktional und ästhetisch.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Building2,
                  title: 'Empfangsbereiche',
                  description: 'Theken, Wartemöbel, Garderoben – der erste Eindruck zählt'
                },
                {
                  icon: Sofa,
                  title: 'Büroeinrichtung',
                  description: 'Schreibtische, Regalsysteme, Konferenztische nach Maß'
                },
                {
                  icon: Ruler,
                  title: 'Ladenbau',
                  description: 'Verkaufstheken, Regale, Präsentationsmöbel'
                },
                {
                  icon: Lightbulb,
                  title: 'Sonderlösungen',
                  description: 'Akustikwände, Raumteiler, integrierte Technik'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Branchen & Einsatzbereiche</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Gastronomie</strong> – Theken, Tische, Bestuhlung, Buffetmöbel</li>
              <li>✓ <strong>Hotels</strong> – Rezeption, Lobby, Zimmerausstattung</li>
              <li>✓ <strong>Einzelhandel</strong> – Ladeneinrichtung, Schaufenster, Kassen</li>
              <li>✓ <strong>Büros</strong> – Empfang, Besprechungsräume, Arbeitsplätze</li>
              <li>✓ <strong>Arztpraxen</strong> – Empfang, Wartebereiche, Behandlungsräume</li>
              <li>✓ <strong>Öffentliche Gebäude</strong> – Schulen, Bibliotheken, Museen</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Von der Idee zur Einrichtung</h3>
              <p className="text-gray-300 mb-4">
                Wir begleiten Sie durch den gesamten Prozess:
              </p>
              <ol className="text-gray-400 space-y-2">
                <li>1. Aufmaß und Bestandsaufnahme vor Ort</li>
                <li>2. Entwurf und 3D-Visualisierung</li>
                <li>3. Materialauswahl und Bemusterung</li>
                <li>4. Fertigung in unserer Werkstatt</li>
                <li>5. Lieferung und Montage</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Materialien & Qualität</h2>
            
            <p>
              Wir verarbeiten hochwertige Materialien für langlebige und 
              ästhetische Ergebnisse:
            </p>

            <ul className="space-y-2 my-6">
              <li>• Massivholz aus nachhaltiger Forstwirtschaft</li>
              <li>• Hochwertige Holzwerkstoffe und Furniere</li>
              <li>• Mineralwerkstoffe (Corian, Silestone)</li>
              <li>• Naturstein und Keramik</li>
              <li>• Metall- und Glaselemente</li>
              <li>• Integrierte LED-Beleuchtung</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Alles aus einer Hand</h3>
              <p className="text-amber-700">
                Als integrierter Holzbaubetrieb mit eigener Schreinerei bieten 
                wir Bau und Einrichtung aus einer Hand – für optimale Abstimmung 
                und kurze Wege.
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
              href="/leistungen/kueche-einrichtung"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Private Einrichtung
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

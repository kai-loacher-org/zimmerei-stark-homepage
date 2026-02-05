import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Tractor, Home, Building2, Warehouse } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Landwirtschaft | ModulBau | Zimmerei Stark',
  description: 'Modulbauten für die Landwirtschaft. Wohnhäuser, Betriebsgebäude und Stallungen in schneller Holzmodulbauweise.',
}

export default function LandwirtschaftPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/modulbau-landwirtschaft-hero.jpg"
          alt="ModulBau Landwirtschaft"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Landwirtschaft</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Modernes Bauen für den Agrarbereich
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Die Landwirtschaft wandelt sich – und mit ihr die Anforderungen 
              an Gebäude. Ob Wohnhaus für die Hofnachfolge, moderner Stall oder 
              Lagergebäude: Mit Modulbau realisieren Sie Ihre Projekte schnell 
              und wirtschaftlich.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Home,
                  title: 'Wohnhäuser',
                  description: 'Hofnachfolge, Altenteiler oder Mitarbeiterwohnungen auf dem Hof'
                },
                {
                  icon: Building2,
                  title: 'Betriebsgebäude',
                  description: 'Büros, Sozialräume, Verkaufsräume für Direktvermarkter'
                },
                {
                  icon: Warehouse,
                  title: 'Lager & Hallen',
                  description: 'Maschinenhallen, Lagerhallen, Kühlräume'
                },
                {
                  icon: Tractor,
                  title: 'Stallungen',
                  description: 'Tierwohlgerechte Ställe in moderner Holzbauweise'
                }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <item.icon className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vorteile für Landwirte</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Kurze Bauzeit</strong> – minimal Störung des Hofbetriebs</li>
              <li>✓ <strong>Planbare Kosten</strong> – wichtig für AFP-Förderung</li>
              <li>✓ <strong>Nachhaltig</strong> – Holz aus regionaler Forstwirtschaft</li>
              <li>✓ <strong>Natürliches Klima</strong> – ideal für Tier und Mensch</li>
              <li>✓ <strong>Erweiterbar</strong> – wachsen Sie mit Ihrem Betrieb</li>
              <li>✓ <strong>Privilegiert</strong> – oft vereinfachte Genehmigung im Außenbereich</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Holz – der ideale Baustoff für die Landwirtschaft</h3>
              <p className="text-gray-300 mb-4">
                Holzgebäude bieten ein natürliches Klima, das sich positiv auf 
                Tiergesundheit und Wohlbefinden auswirkt. Die feuchtigkeitsregulierende 
                Wirkung von Holz schafft optimale Bedingungen.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Atmungsaktive Bauweise ohne Kondensat</li>
                <li>• Geringere Ammoniakbelastung in Ställen</li>
                <li>• Angenehmes Arbeitsklima für Mitarbeiter</li>
                <li>• Lange Lebensdauer bei richtigem konstruktiven Holzschutz</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fördermöglichkeiten</h2>
            
            <p>
              Landwirtschaftliche Bauvorhaben können über verschiedene Programme 
              gefördert werden. Wir unterstützen Sie bei der Planung und Antragstellung.
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>AFP</strong> – Agrarinvestitionsförderungsprogramm</li>
              <li>• <strong>EIF</strong> – Einzelbetriebliche Investitionsförderung</li>
              <li>• <strong>Diversifizierung</strong> – für Direktvermarktung, Hofläden</li>
              <li>• <strong>Tierwohl</strong> – für tierwohlgerechte Stallbauten</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Bauen im Außenbereich</h3>
              <p className="text-amber-700">
                Als landwirtschaftlicher Betrieb genießen Sie Privilegierung nach 
                §35 BauGB. Wir kennen die Anforderungen und begleiten Sie durch 
                das Genehmigungsverfahren.
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
              href="/leistungen/objektbau"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ObjektBau Landwirtschaft
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

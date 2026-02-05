import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Users, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mehrfamilienhäuser | KomplettHausbau | Zimmerei Stark',
  description: 'Mehrfamilienhäuser in Holzbauweise für Investoren und Baugemeinschaften. Nachhaltig, wirtschaftlich, schnell.',
}

export default function MehrfamilienhaeuserPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Mehrfamilienhaus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mehrfamilienhäuser</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Wohnraum schaffen – nachhaltig und effizient
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Der Holzbau hat längst die Einfamilienhausgröße verlassen. Wir realisieren 
              Mehrfamilienhäuser mit bis zu 5 Geschossen – wirtschaftlich, nachhaltig 
              und in Rekordzeit dank modularer Vorfertigung.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Clock,
                  title: 'Kurze Bauzeit',
                  description: 'Bis zu 70% schneller als konventionelle Bauweise durch Vorfertigung'
                },
                {
                  icon: TrendingUp,
                  title: 'Wirtschaftlich',
                  description: 'Geringere Finanzierungskosten und frühere Mieteinnahmen'
                },
                {
                  icon: Building2,
                  title: 'Bis zu 5 Geschosse',
                  description: 'Holzbau erfüllt alle brandschutztechnischen Anforderungen'
                },
                {
                  icon: Users,
                  title: 'Attraktiv für Mieter',
                  description: 'Gesundes Wohnklima und nachhaltige Bauweise als Vermietungsargument'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Für Investoren & Baugruppen</h2>
            
            <p>
              Ob als Kapitalanlage, für eine Baugemeinschaft oder als kommunales 
              Wohnbauprojekt – Mehrfamilienhäuser in Holzbauweise bieten überzeugende 
              Vorteile für alle Beteiligten.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Ihre Vorteile als Investor:</h3>
            
            <ul className="space-y-2 my-6">
              <li>✓ Schnelle Fertigstellung = frühe Mieteinnahmen</li>
              <li>✓ Attraktive KfW-Förderung für energieeffizientes Bauen</li>
              <li>✓ Nachhaltigkeitszertifikate als Vermietungsplus</li>
              <li>✓ Geringere Betriebskosten durch hohe Energieeffizienz</li>
              <li>✓ Wertstabile Immobilie durch Qualitätsbauweise</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Brandschutz im Holzbau</h3>
              <p className="text-gray-300 mb-4">
                Moderne Holzbauten erfüllen die höchsten Brandschutzanforderungen. 
                Durch gekapselte Bauweisen und brandschutztechnische Bekleidungen 
                erreichen wir die Gebäudeklasse 4 und 5.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Feuerbeständige Bauteile (F90)</li>
                <li>• Installationsschächte in Trockenbau</li>
                <li>• Geprüfte Detaillösungen</li>
                <li>• Abgestimmte Brandschutzkonzepte</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wohnungsgrößen & Grundrisse</h2>
            
            <p>
              Wir planen flexible Grundrisse, die verschiedene Wohnungsgrößen ermöglichen – 
              vom kompakten Apartment bis zur großzügigen Familienwohnung. Die Aufteilung 
              kann an den lokalen Bedarf und Ihre Zielgruppe angepasst werden.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Referenzprojekte</h3>
              <p className="text-amber-700">
                Besichtigen Sie unsere realisierten Mehrfamilienhäuser. Wir zeigen 
                Ihnen gerne, was im Holzbau möglich ist – von der Bauphase bis zum 
                fertigen Gebäude.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Projektanfrage stellen
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

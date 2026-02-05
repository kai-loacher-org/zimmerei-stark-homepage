import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Factory, Truck, Building, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prozessdarstellung | ModulBau | Zimmerei Stark',
  description: 'So funktioniert ModulBau bei Stark. Von der Planung über die Fertigung bis zur Montage – alles aus einer Hand.',
}

const prozessSchritte = [
  {
    nummer: 1,
    titel: 'Beratung & Planung',
    beschreibung: 'Gemeinsam entwickeln wir Ihr Raumkonzept. Wir analysieren Ihre Anforderungen und planen die optimale Modullösung.',
    dauer: '2-4 Wochen',
    details: ['Bedarfsanalyse', 'Grundrissplanung', 'Visualisierung', 'Kostenkalkulation']
  },
  {
    nummer: 2,
    titel: 'Genehmigung',
    beschreibung: 'Wir erstellen alle notwendigen Unterlagen und begleiten Sie durch das Genehmigungsverfahren.',
    dauer: '4-12 Wochen',
    details: ['Bauantrag', 'Statiknachweis', 'Energieausweis', 'Behördengänge']
  },
  {
    nummer: 3,
    titel: 'Fertigung im Werk',
    beschreibung: 'In unserer modernen Produktionshalle entstehen Ihre Module – wetterunabhängig, präzise und qualitätskontrolliert.',
    dauer: '4-8 Wochen',
    details: ['CNC-Abbund', 'Vormontage Wände', 'Installation Technik', 'Qualitätsprüfung']
  },
  {
    nummer: 4,
    titel: 'Transport',
    beschreibung: 'Die fertigen Module werden schonend auf Ihr Grundstück transportiert – mit Spezialtransportern und erfahrenen Fahrern.',
    dauer: '1 Tag',
    details: ['Routenplanung', 'Genehmigungen', 'Spezialtransport', 'Kranstellung']
  },
  {
    nummer: 5,
    titel: 'Montage vor Ort',
    beschreibung: 'In wenigen Tagen werden die Module aufgestellt, verbunden und das Gebäude wetterfest geschlossen.',
    dauer: '2-5 Tage',
    details: ['Kranmontage', 'Modulverbindung', 'Dachmontage', 'Wetterschutz']
  },
  {
    nummer: 6,
    titel: 'Fertigstellung',
    beschreibung: 'Letzte Arbeiten vor Ort: Anschlüsse, Feinarbeiten und finale Qualitätskontrolle bis zur Schlüsselübergabe.',
    dauer: '2-4 Wochen',
    details: ['Hausanschlüsse', 'Bodenbeläge', 'Malerarbeiten', 'Abnahme']
  }
]

export default function ProzessdarstellungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="ModulBau Prozess"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Prozessdarstellung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Von der Idee zum fertigen Gebäude
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-xl text-gray-600">
              ModulBau bedeutet Effizienz ohne Kompromisse bei der Qualität. 
              Während auf Ihrem Grundstück das Fundament vorbereitet wird, 
              entstehen in unserer Werkshalle bereits die Module für Ihr Gebäude. 
              Das Ergebnis: deutlich kürzere Bauzeiten bei gleichbleibend hoher Qualität.
            </p>
          </div>

          {/* Prozess-Timeline */}
          <div className="space-y-8">
            {prozessSchritte.map((schritt, index) => (
              <div key={schritt.nummer} className="relative">
                {index < prozessSchritte.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-amber-200" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                    {schritt.nummer}
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h3 className="text-xl font-bold">{schritt.titel}</h3>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {schritt.dauer}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{schritt.beschreibung}</p>
                    <div className="flex flex-wrap gap-2">
                      {schritt.details.map((detail, i) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vorteile */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Factory,
                title: 'Wetterunabhängig',
                description: 'Fertigung in der Halle – kein Baustopp durch Regen oder Frost'
              },
              {
                icon: CheckCircle,
                title: 'Qualitätskontrolle',
                description: 'Jeder Arbeitsschritt wird unter optimalen Bedingungen geprüft'
              },
              {
                icon: Truck,
                title: '70% schneller',
                description: 'Parallele Arbeiten verkürzen die Gesamtbauzeit erheblich'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Projekt anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/modulbau"
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

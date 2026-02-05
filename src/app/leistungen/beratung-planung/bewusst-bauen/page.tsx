import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Sun, Recycle, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bewusst Bauen | Beratung & Planung | Zimmerei Stark',
  description: 'Nachhaltiges Bauen mit Holz. Ökologische Baustoffe, Energieeffizienz und gesundes Wohnen für Generationen.',
}

export default function BewusstBauenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/bewusst-bauen-hero.jpg"
          alt="Bewusst Bauen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bewusst Bauen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Nachhaltig. Gesund. Zukunftsfähig.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Bewusst bauen bedeutet, Verantwortung zu übernehmen – für die Umwelt, 
              für die Gesundheit der Bewohner und für kommende Generationen. Als 
              Holzbauunternehmen ist Nachhaltigkeit Teil unserer DNA.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Prinzipien</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Leaf,
                  title: 'Ökologische Baustoffe',
                  description: 'Holz aus nachhaltiger Forstwirtschaft, natürliche Dämmstoffe und schadstofffreie Materialien'
                },
                {
                  icon: Sun,
                  title: 'Energieeffizienz',
                  description: 'Optimale Dämmung, Passivhausstandard möglich, erneuerbare Energien integriert'
                },
                {
                  icon: Recycle,
                  title: 'Kreislaufwirtschaft',
                  description: 'Ressourcenschonende Produktion, recycelbare Materialien, minimaler Abfall'
                },
                {
                  icon: Heart,
                  title: 'Gesundes Wohnen',
                  description: 'Wohngesunde Materialien, optimales Raumklima, keine Schadstoffe'
                }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <item.icon className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Holz – der Baustoff der Zukunft</h2>
            
            <p>
              Holz ist der einzige Baustoff, der CO₂ speichert statt es freizusetzen. 
              Ein durchschnittliches Holzhaus bindet etwa 40 Tonnen Kohlendioxid – 
              so viel wie ein Auto in 25 Jahren ausstößt.
            </p>

            <div className="bg-green-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Fakten zum Holzbau</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">40t</div>
                  <div className="text-sm text-green-200">CO₂-Speicherung pro Haus</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-green-200">Nachwachsender Rohstoff</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">&lt;1s</div>
                  <div className="text-sm text-green-200">Nachwuchszeit (DE)</div>
                </div>
              </div>
              <p className="text-green-200 text-sm mt-4 text-center">
                In deutschen Wäldern wächst jede Sekunde 1m³ Holz nach
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Zertifizierungen & Standards</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ PEFC-zertifiziertes Holz aus nachhaltiger Waldwirtschaft</li>
              <li>✓ KfW-Effizienzhäuser (40, 40 Plus, 55)</li>
              <li>✓ Passivhaus-zertifizierte Bauweise möglich</li>
              <li>✓ Sentinel Haus Institut – geprüft auf Wohngesundheit</li>
              <li>✓ natureplus-zertifizierte Baustoffe</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Beratung zu Fördermitteln</h3>
              <p className="text-amber-700">
                Nachhaltiges Bauen wird gefördert. Wir beraten Sie zu KfW-Krediten, 
                BAFA-Zuschüssen und regionalen Förderprogrammen für energieeffizientes 
                Bauen und Sanieren.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Nachhaltig bauen
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

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Monitor, BookOpen, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Arbeiten & Büro | Küche & Einrichtung | Zimmerei Stark',
  description: 'Home-Office und Büromöbel nach Maß. Schreibtische, Regale und Arbeitsplätze individuell gefertigt.',
}

export default function ArbeitenBueroPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Home Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Arbeiten & Büro</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Produktiv arbeiten, Zuhause
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Home-Office ist gekommen, um zu bleiben. Ein maßgefertigter 
              Arbeitsplatz macht das Arbeiten von Zuhause produktiver und 
              angenehmer – egal ob in der Ecke des Wohnzimmers oder im 
              eigenen Arbeitszimmer.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Monitor,
                  title: 'Schreibtische',
                  description: 'In jeder Größe, mit Kabelmanagement'
                },
                {
                  icon: BookOpen,
                  title: 'Regale',
                  description: 'Für Bücher, Ordner und Deko'
                },
                {
                  icon: Lightbulb,
                  title: 'Beleuchtung',
                  description: 'Integriert für optimales Licht'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Home-Office-Lösungen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Schrankbüro</strong> – Arbeitsplatz hinter Türen, zum Wegschließen</li>
              <li>✓ <strong>Wandbüro</strong> – Klapptisch mit Stauraum, platzsparend</li>
              <li>✓ <strong>Arbeitsnische</strong> – passgenau in jeden Winkel</li>
              <li>✓ <strong>Arbeitszimmer</strong> – komplett eingerichtet</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Schreibtische</h2>
            
            <p>
              Vom schmalen Sekretär bis zum großzügigen Chefschreibtisch – 
              wir fertigen den Tisch, der zu Ihrer Arbeit passt.
            </p>

            <ul className="space-y-2 my-6">
              <li>• Freistehende Schreibtische</li>
              <li>• Eck- und Winkeltische</li>
              <li>• Tische mit Containern und Auszügen</li>
              <li>• Höhenverstellbare Lösungen</li>
              <li>• Stehpulte und Stehtische</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Kabelmanagement inklusive</h3>
              <p className="text-gray-300 mb-4">
                Ein aufgeräumter Arbeitsplatz braucht durchdachtes Kabelmanagement:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Kabeldurchlässe und Kabelkanäle</li>
                <li>• Integrierte Steckdosenleisten</li>
                <li>• USB-Ladestationen</li>
                <li>• Kabelwannen unter der Platte</li>
                <li>• Wireless-Charging-Flächen</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Ergonomie beachten</h3>
              <p className="text-amber-700">
                Wir beraten Sie zu ergonomischen Maßen und empfehlen passende 
                Bürostühle von unseren Partnern.
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

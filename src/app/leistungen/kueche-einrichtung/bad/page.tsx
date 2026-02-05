import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Droplets, Bath, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bad | Küche & Einrichtung | Zimmerei Stark',
  description: 'Badmöbel nach Maß. Waschtische, Spiegelschränke und Badeinrichtung individuell gefertigt.',
}

export default function BadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Badezimmer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bad</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Wellness für jeden Tag
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Das moderne Badezimmer ist mehr als ein Funktionsraum – es ist 
              eine private Wellness-Oase. Mit maßgefertigten Badmöbeln nutzen 
              Sie jeden Zentimeter optimal und schaffen ein Bad, das zu Ihnen passt.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Droplets,
                  title: 'Waschtische',
                  description: 'Einzel- oder Doppelwaschtische nach Maß'
                },
                {
                  icon: Sparkles,
                  title: 'Spiegelschränke',
                  description: 'Mit integrierter Beleuchtung und Stauraum'
                },
                {
                  icon: Bath,
                  title: 'Badmöbel',
                  description: 'Hochschränke, Regale, Kommoden'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Waschtischlösungen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Einbauwaschtisch</strong> – klassisch und bewährt</li>
              <li>✓ <strong>Aufsatzwaschtisch</strong> – modern auf Konsole oder Platte</li>
              <li>✓ <strong>Doppelwaschtisch</strong> – für mehr Platz am Morgen</li>
              <li>✓ <strong>Konsolenplatten</strong> – wandhängend oder freistehend</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Materialien fürs Bad</h2>
            
            <p>
              Holz im Bad? Absolut! Mit der richtigen Verarbeitung ist Holz 
              auch im Feuchtraum langlebig und schafft eine warme Atmosphäre.
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>Massivholz:</strong> Eiche, Teak (ölbehandelt)</li>
              <li>• <strong>Waschtischplatten:</strong> Naturstein, Keramik, Mineralwerkstoff</li>
              <li>• <strong>Fronten:</strong> Lack oder beschichtete Oberflächen</li>
              <li>• <strong>Griffe:</strong> Edelstahl, grifflos</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Spiegelschränke mit Licht</h3>
              <p className="text-gray-300 mb-4">
                Unsere Spiegelschränke sind mehr als Stauraum:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Integrierte LED-Beleuchtung (dimmbar)</li>
                <li>• Steckdose und USB im Schrank</li>
                <li>• Beheizbare Spiegelfläche</li>
                <li>• Softclose-Scharniere</li>
                <li>• Individuelle Facheinteilung</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Komplettbad aus einer Hand</h3>
              <p className="text-amber-700">
                Wir koordinieren auch Sanitär, Fliesen und Elektrik – auf 
                Wunsch planen und realisieren wir Ihr komplettes Bad.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Badplanung anfordern
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

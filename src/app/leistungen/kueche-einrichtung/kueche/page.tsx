import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChefHat, Sparkles, Ruler, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Küche | Küche & Einrichtung | Zimmerei Stark',
  description: 'Maßgefertigte Küchen vom Schreiner. Individuell geplant, hochwertig gefertigt, perfekt eingebaut.',
}

export default function KuechePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Küche"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Küche</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Das Herz Ihres Zuhauses
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Eine Küche vom Schreiner ist keine Küche von der Stange. Wir planen 
              und fertigen Ihre Traumküche millimetergenau – perfekt angepasst an 
              Ihren Raum, Ihren Stil und Ihre Art zu kochen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Ruler,
                  title: 'Maßanfertigung',
                  description: 'Jede Küche wird individuell für Ihren Raum geplant und gefertigt'
                },
                {
                  icon: ChefHat,
                  title: 'Funktional',
                  description: 'Ergonomische Planung für optimale Arbeitsabläufe'
                },
                {
                  icon: Sparkles,
                  title: 'Hochwertig',
                  description: 'Beste Materialien und Markengeräte für lange Freude'
                },
                {
                  icon: Lightbulb,
                  title: 'Durchdacht',
                  description: 'Clevere Details und integrierte Beleuchtung'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Küchenstile</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Modern</strong> – grifflos, glatte Fronten, klare Linien</li>
              <li>✓ <strong>Klassisch</strong> – Rahmentüren, zeitlose Eleganz</li>
              <li>✓ <strong>Landhaus</strong> – natürliche Materialien, gemütlich</li>
              <li>✓ <strong>Industrial</strong> – Holz trifft Metall und Beton</li>
              <li>✓ <strong>Purismus</strong> – reduziert auf das Wesentliche</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Materialien</h2>
            
            <p>
              Wir verarbeiten nur ausgewählte Materialien für langlebige Qualität:
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>Korpus:</strong> Hochwertige Holzwerkstoffe, Massivholz</li>
              <li>• <strong>Fronten:</strong> Massivholz, Furnier, Lack, Glas, Keramik</li>
              <li>• <strong>Arbeitsplatten:</strong> Naturstein, Keramik, Massivholz, Mineralwerkstoff</li>
              <li>• <strong>Griffe:</strong> Edelstahl, Messing, Leder, grifflos</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Markengeräte inklusive</h3>
              <p className="text-gray-300 mb-4">
                Wir sind Partner führender Gerätehersteller und beraten Sie bei 
                der Auswahl der perfekten Ausstattung:
              </p>
              <div className="flex flex-wrap gap-4 text-gray-400">
                <span>Miele</span>
                <span>•</span>
                <span>Gaggenau</span>
                <span>•</span>
                <span>Bora</span>
                <span>•</span>
                <span>Siemens</span>
                <span>•</span>
                <span>Liebherr</span>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Besuchen Sie unsere Ausstellung</h3>
              <p className="text-amber-700">
                In unserer Ausstellung in Auhausen erleben Sie verschiedene 
                Küchenstile live. Vereinbaren Sie einen Beratungstermin!
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Beratungstermin vereinbaren
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/ueber-uns/ausstellungen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Zur Ausstellung
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

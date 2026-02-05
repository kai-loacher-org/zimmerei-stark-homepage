import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Ruler, Home, FileText, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Planung | Beratung & Planung | Zimmerei Stark',
  description: 'Professionelle Bauplanung und Architektur für Ihr Holzbauprojekt. Von der ersten Idee bis zum fertigen Bauplan.',
}

export default function PlanungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Bauplanung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Planung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ihre Vision, unsere Expertise
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Eine gute Planung ist das Fundament jedes erfolgreichen Bauprojekts. 
              Unser erfahrenes Planungsteam begleitet Sie von der ersten Idee bis 
              zur Baureife und sorgt dafür, dass Ihre Wünsche optimal umgesetzt werden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Planungsleistungen</h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Home,
                  title: 'Entwurfsplanung',
                  description: 'Entwicklung Ihres individuellen Gebäudekonzepts nach Ihren Wünschen und Anforderungen'
                },
                {
                  icon: FileText,
                  title: 'Genehmigungsplanung',
                  description: 'Erstellung aller Unterlagen für den Bauantrag und Begleitung im Genehmigungsverfahren'
                },
                {
                  icon: Ruler,
                  title: 'Ausführungsplanung',
                  description: 'Detaillierte Werkplanung für die präzise Umsetzung auf der Baustelle'
                },
                {
                  icon: CheckCircle,
                  title: 'Baubegleitung',
                  description: 'Kontinuierliche Überwachung und Qualitätskontrolle während der Bauphase'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Der Planungsprozess</h2>
            
            <ol className="space-y-4 not-prose mb-12">
              {[
                'Erstgespräch und Bedarfsanalyse',
                'Grundlagenermittlung und Standortanalyse',
                'Vorentwurf mit ersten Visualisierungen',
                'Entwurfsplanung mit detaillierten Grundrissen',
                'Genehmigungsplanung und Bauantrag',
                'Ausführungsplanung und Detailzeichnungen',
                'Baubegleitung bis zur Fertigstellung'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Alles aus einer Hand</h3>
              <p className="text-amber-700">
                Als Komplettanbieter übernehmen wir nicht nur die Planung, sondern auch 
                die gesamte Bauausführung. Das bedeutet für Sie: Ein Ansprechpartner, 
                nahtlose Abstimmung und optimale Ergebnisse.
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

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Euro, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aktionshaus FormStark | KomplettHausbau | Zimmerei Stark',
  description: 'Das FormStark Aktionshaus - Qualität zum Festpreis. Ihr schlüsselfertiges Holzhaus zu attraktiven Konditionen.',
}

export default function AktionshausPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/aktionshaus-hero.jpg"
          alt="FormStark Aktionshaus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Aktionshaus FormStark</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Qualität zum Festpreis
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Unser FormStark Aktionshaus vereint bewährte Qualität mit attraktiven 
              Konditionen. Ein durchdachtes Hauskonzept, das keine Wünsche offen lässt – 
              zum garantierten Festpreis.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Euro,
                  title: 'Festpreisgarantie',
                  description: 'Keine versteckten Kosten, keine Überraschungen – Sie wissen von Anfang an, was Ihr Haus kostet'
                },
                {
                  icon: Clock,
                  title: 'Kurze Bauzeit',
                  description: 'Dank Vorfertigung im Werk steht Ihr Haus in wenigen Wochen wetterfest'
                },
                {
                  icon: Star,
                  title: 'Volle Ausstattung',
                  description: 'Schlüsselfertig mit hochwertiger Standardausstattung inklusive'
                },
                {
                  icon: CheckCircle,
                  title: 'Bewährt & erprobt',
                  description: 'Vielfach gebautes Konzept mit optimiertem Grundriss'
                }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Das FormStark Konzept</h2>
            
            <p>
              FormStark ist die Antwort auf den Wunsch nach einem hochwertigen 
              Holzhaus zum fairen Preis. Durch die Standardisierung bestimmter 
              Elemente können wir Ihnen Spitzenqualität zu optimierten Kosten bieten.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Im Preis enthalten:</h3>
            
            <ul className="space-y-2 my-6">
              <li>✓ Komplette Gebäudehülle in Holzrahmenbauweise</li>
              <li>✓ KfW-55-Standard (Upgrade auf KfW-40 möglich)</li>
              <li>✓ Dreifach verglaste Fenster</li>
              <li>✓ Haustür mit Sicherheitsausstattung</li>
              <li>✓ Komplette Elektroinstallation</li>
              <li>✓ Sanitärinstallation mit Markenarmaturen</li>
              <li>✓ Fußbodenheizung im gesamten Haus</li>
              <li>✓ Bodenbeläge und Innentüren</li>
              <li>✓ Malerarbeiten</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Individualisierung möglich</h3>
              <p className="text-gray-300 mb-4">
                Auch beim Aktionshaus haben Sie Spielraum für persönliche Wünsche. 
                Gegen Aufpreis sind viele Anpassungen möglich:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Grundrissänderungen (im Rahmen der Statik)</li>
                <li>• Gehobene Ausstattungspakete</li>
                <li>• Carport oder Garage</li>
                <li>• Smart-Home-Vorbereitung</li>
                <li>• Photovoltaikanlage</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Aktuelle Angebote</h3>
              <p className="text-amber-700">
                Besuchen Sie unsere Ausstellung oder fordern Sie unseren aktuellen 
                FormStark-Prospekt an. Wir informieren Sie gerne über die aktuellen 
                Aktionshäuser und Sonderkonditionen.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Prospekt anfordern
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/ueber-uns/ausstellungen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Musterhaus besichtigen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

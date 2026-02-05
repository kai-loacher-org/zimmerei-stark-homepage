import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Landmark, History, Shield, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Altbausanierung & Denkmalschutz | KomplettHausbau | Zimmerei Stark',
  description: 'Behutsame Sanierung historischer Gebäude. Denkmalgerechte Restaurierung mit traditionellem Handwerk und moderner Technik.',
}

export default function AltbausanierungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/altbau-hero.jpg"
          alt="Altbausanierung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Altbausanierung & Denkmalschutz</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Geschichte bewahren, Zukunft gestalten
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Historische Gebäude erzählen Geschichten. Wir hören zu – und sanieren 
              behutsam, denkmalgerecht und mit dem Respekt, den diese Bauwerke verdienen. 
              Traditionelles Zimmererhandwerk trifft auf moderne Technik.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Landmark,
                  title: 'Denkmalgerecht',
                  description: 'Sanierung in Abstimmung mit der Denkmalbehörde unter Wahrung des Originalcharakters'
                },
                {
                  icon: History,
                  title: 'Traditionelles Handwerk',
                  description: 'Historische Techniken wie Zapfenverbindungen und Holznagel-Konstruktionen'
                },
                {
                  icon: Wrench,
                  title: 'Moderne Ergänzung',
                  description: 'Behutsame Integration moderner Haustechnik in historische Substanz'
                },
                {
                  icon: Shield,
                  title: 'Substanzerhalt',
                  description: 'Maximaler Erhalt der Originalsubstanz durch gezielte Einzelmaßnahmen'
                }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <item.icon className="w-10 h-10 text-amber-700 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Leistungen im Denkmalbereich</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Fachwerkssanierung</strong> – Auswechslung geschädigter Hölzer, Gefacheausmauerung</li>
              <li>✓ <strong>Dachstuhlsanierung</strong> – Reparatur und Verstärkung historischer Tragwerke</li>
              <li>✓ <strong>Holzschutz</strong> – Bekämpfung und Prävention von Schädlingsbefall</li>
              <li>✓ <strong>Deckensanierung</strong> – Erhalt und Ertüchtigung alter Holzbalkendecken</li>
              <li>✓ <strong>Restaurierung</strong> – Wiederherstellung historischer Details und Ornamente</li>
              <li>✓ <strong>Energetische Verbesserung</strong> – denkmalverträgliche Dämmmaßnahmen</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Über 100 Jahre Erfahrung</h3>
              <p className="text-gray-300 mb-4">
                Seit 1920 führen wir das Zimmererhandwerk in Familientradition. 
                Diese Erfahrung ist bei der Arbeit an historischen Gebäuden 
                unbezahlbar – wir kennen die alten Techniken und wissen, wie 
                unsere Vorfahren gebaut haben.
              </p>
              <p className="text-gray-400 text-sm">
                Viele unserer Mitarbeiter haben zusätzliche Qualifikationen im 
                Bereich Denkmalpflege und Restaurierung.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Der Sanierungsablauf</h2>
            
            <ol className="space-y-4 not-prose mb-8">
              {[
                'Bestandsaufnahme und Schadensanalyse',
                'Abstimmung mit der Denkmalbehörde',
                'Sanierungskonzept und Maßnahmenplan',
                'Angebotserstellung und Fördermittelberatung',
                'Behutsame Durchführung der Arbeiten',
                'Dokumentation aller Maßnahmen',
                'Abnahme mit der Denkmalpflege'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Fördermöglichkeiten</h3>
              <p className="text-amber-700">
                Für denkmalgeschützte Gebäude gibt es spezielle Förderprogramme und 
                steuerliche Vorteile. Wir beraten Sie zu den Möglichkeiten und 
                unterstützen bei der Beantragung.
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

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, RefreshCw, Thermometer, Home, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modernisierung | KomplettHausbau | Zimmerei Stark',
  description: 'Modernisierung und Aufstockung bestehender Gebäude. Mehr Wohnraum, bessere Energieeffizienz, neuer Komfort.',
}

export default function ModernisierungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/modernisierung-hero.jpg"
          alt="Modernisierung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Modernisierung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Neues Leben für Ihr Zuhause
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Ihr Haus hat Potenzial, das nur darauf wartet, entfaltet zu werden. 
              Ob energetische Sanierung, Aufstockung für mehr Wohnraum oder komplette 
              Neugestaltung – wir modernisieren Ihr Gebäude nachhaltig und effizient.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Thermometer,
                  title: 'Energetische Sanierung',
                  description: 'Neue Dämmung, moderne Fenster, effiziente Heizung – bis zu 80% Energieeinsparung'
                },
                {
                  icon: Home,
                  title: 'Aufstockung',
                  description: 'Mehr Wohnraum schaffen durch Aufstockung in leichter Holzbauweise'
                },
                {
                  icon: RefreshCw,
                  title: 'Grundrissänderung',
                  description: 'Anpassung an moderne Wohnbedürfnisse durch Umbau und Neustrukturierung'
                },
                {
                  icon: Sparkles,
                  title: 'Fassadensanierung',
                  description: 'Neue Optik und besserer Schutz mit vorgehängter Holzfassade'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Aufstockung in Holzbauweise</h2>
            
            <p>
              Holz ist der ideale Baustoff für Aufstockungen: leicht, tragfähig und 
              schnell montiert. Oft kann die vorhandene Bausubstanz ohne zusätzliche 
              Verstärkung ein weiteres Geschoss in Holzbauweise tragen.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Vorteile der Holz-Aufstockung:</h3>
            
            <ul className="space-y-2 my-6">
              <li>✓ Geringes Eigengewicht – oft keine Fundamentverstärkung nötig</li>
              <li>✓ Schnelle Montage – minimale Belastung für Bewohner</li>
              <li>✓ Trockene Bauweise – keine Trocknungszeiten</li>
              <li>✓ Hoher Vorfertigungsgrad – präzise und wetterunabhängig</li>
              <li>✓ Sofort bezugsfertig nach Montage</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Energetische Modernisierung</h3>
              <p className="text-gray-300 mb-4">
                Mit einer umfassenden energetischen Sanierung erreichen auch ältere 
                Gebäude KfW-Effizienzhaus-Standards und profitieren von attraktiven 
                Fördermitteln.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <div className="text-2xl font-bold text-amber-400">bis 80%</div>
                  <div className="text-sm text-gray-400">Energieeinsparung</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">bis 45%</div>
                  <div className="text-sm text-gray-400">Förderung möglich</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">15+ Jahre</div>
                  <div className="text-sm text-gray-400">Wertsteigerung</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unser Modernisierungs-Prozess</h2>
            
            <ol className="space-y-4 not-prose mb-8">
              {[
                'Bestandsaufnahme und Analyse',
                'Beratung zu Möglichkeiten und Fördermitteln',
                'Entwurf und Kostenplanung',
                'Genehmigungsplanung (falls erforderlich)',
                'Ausführungsplanung und Vorfertigung',
                'Durchführung mit minimaler Beeinträchtigung',
                'Qualitätskontrolle und Übergabe'
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
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Fördermittel nutzen</h3>
              <p className="text-amber-700">
                Für energetische Sanierungen gibt es attraktive Förderprogramme von 
                KfW und BAFA. Wir beraten Sie zu den Möglichkeiten und unterstützen 
                bei der Antragstellung.
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
              href="/leistungen/kompletthausbau"
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

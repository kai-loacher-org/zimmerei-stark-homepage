import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PlusCircle, Home, ArrowUpCircle, Maximize } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anbau & Erweiterung | ModulBau | Zimmerei Stark',
  description: 'Mehr Platz durch modulare Anbauten und Erweiterungen. Schnell, sauber und mit minimaler Beeinträchtigung.',
}

export default function AnbauErweiterungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Anbau & Erweiterung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Anbau & Erweiterung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Mehr Raum, ohne umzuziehen
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Die Familie wächst, das Home-Office braucht Platz, die Eltern ziehen 
              ein – es gibt viele Gründe für mehr Wohnraum. Mit einem modularen 
              Anbau schaffen Sie schnell neue Räume, ohne die gewohnte Umgebung 
              aufzugeben.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: PlusCircle,
                  title: 'Seitlicher Anbau',
                  description: 'Erweitern Sie Ihr Haus zur Seite – für Wohnraum, Büro oder Einliegerwohnung'
                },
                {
                  icon: ArrowUpCircle,
                  title: 'Aufstockung',
                  description: 'Nutzen Sie die Fläche nach oben – oft ohne Fundamenterweiterung möglich'
                },
                {
                  icon: Home,
                  title: 'Wintergarten',
                  description: 'Lichtdurchfluteter Übergang zwischen Haus und Garten'
                },
                {
                  icon: Maximize,
                  title: 'Raummodul',
                  description: 'Freistehend oder angedockt – flexibel einsetzbar für jeden Zweck'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typische Anwendungen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Kinderzimmer</strong> – wenn die Familie wächst</li>
              <li>✓ <strong>Home-Office</strong> – Arbeiten von Zuhause, aber getrennt</li>
              <li>✓ <strong>Einliegerwohnung</strong> – für Angehörige oder zur Vermietung</li>
              <li>✓ <strong>Praxis/Büro</strong> – Arbeiten, wo man lebt</li>
              <li>✓ <strong>Wellnessbereich</strong> – Sauna, Pool, Fitnessraum</li>
              <li>✓ <strong>Gästebereich</strong> – Besuch komfortabel unterbringen</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Warum Modulbau für Anbauten?</h3>
              <p className="text-gray-300 mb-4">
                Bei Anbauten ist die Baustellensituation oft eng. Modulbau minimiert 
                die Störung für Sie und Ihre Nachbarn:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Kurze Montagezeit</strong> – oft nur 1-2 Tage vor Ort</li>
                <li>• <strong>Kein Baudreck</strong> – Fertigung findet im Werk statt</li>
                <li>• <strong>Weiter wohnen</strong> – minimale Beeinträchtigung</li>
                <li>• <strong>Trockene Bauweise</strong> – sofort nutzbar</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Genehmigung und Vorschriften</h2>
            
            <p>
              Anbauten sind meist genehmigungspflichtig. Wir prüfen die Möglichkeiten 
              auf Ihrem Grundstück und übernehmen die Planung und Antragstellung. 
              Dabei beachten wir:
            </p>

            <ul className="space-y-2 my-6">
              <li>• Bebauungsplan und Baulinien</li>
              <li>• Abstandsflächen zum Nachbarn</li>
              <li>• Grundflächenzahl (GRZ)</li>
              <li>• Gestaltungssatzungen</li>
              <li>• Denkmalschutz (falls relevant)</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Kostenloser Erstcheck</h3>
              <p className="text-amber-700">
                Senden Sie uns Fotos und Grundriss Ihres Hauses. Wir prüfen 
                unverbindlich die Machbarkeit und Möglichkeiten für Ihren Anbau.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Erstcheck anfordern
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

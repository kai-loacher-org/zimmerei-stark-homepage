import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Wrench, Building2, RefreshCw, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Objektsanierung | ObjektBau | Zimmerei Stark',
  description: 'Sanierung gewerblicher und landwirtschaftlicher Gebäude. Dachsanierung, energetische Modernisierung, Umbau.',
}

export default function ObjektsanierungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Objektsanierung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Objektsanierung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bestand erhalten und aufwerten
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Nicht jedes Gebäude muss neu gebaut werden. Oft ist eine gezielte 
              Sanierung wirtschaftlicher und nachhaltiger. Wir analysieren den 
              Bestand und entwickeln maßgeschneiderte Sanierungskonzepte.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Building2,
                  title: 'Dachsanierung',
                  description: 'Neue Eindeckung, Dämmung, Tragwerkverstärkung oder kompletter Dachstuhlneubau'
                },
                {
                  icon: RefreshCw,
                  title: 'Energetische Sanierung',
                  description: 'Fassadendämmung, Fensteraustausch, Heizungsmodernisierung'
                },
                {
                  icon: Wrench,
                  title: 'Umnutzung',
                  description: 'Scheunen zu Wohnraum, Hallen zu Büros, neue Nutzungskonzepte'
                },
                {
                  icon: Shield,
                  title: 'Tragwerkssanierung',
                  description: 'Verstärkung, Auswechslung, statische Ertüchtigung'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typische Sanierungsmaßnahmen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Dachsanierung</strong> – Eindeckung, Dämmung, Lichtkuppeln, PV-Vorbereitung</li>
              <li>✓ <strong>Fassadensanierung</strong> – Dämmung, Verkleidung, Fenster</li>
              <li>✓ <strong>Hallensanierung</strong> – Tore, Böden, Beleuchtung, Brandschutz</li>
              <li>✓ <strong>Stallsanierung</strong> – Lüftung, Entmistung, Tierwohl-Umbau</li>
              <li>✓ <strong>Umnutzung</strong> – Brandschutz, Statik, Raumaufteilung</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Sanieren während des Betriebs</h3>
              <p className="text-gray-300 mb-4">
                In vielen Fällen muss der Betrieb weiterlaufen. Wir planen 
                Sanierungen so, dass die Beeinträchtigung minimal bleibt:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Abschnittsweise Durchführung</li>
                <li>• Arbeiten außerhalb der Betriebszeiten</li>
                <li>• Provisorische Absicherungen</li>
                <li>• Enge Abstimmung mit dem Betrieb</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Bestandsaufnahme</h2>
            
            <p>
              Jede Sanierung beginnt mit einer gründlichen Analyse des Bestands. 
              Wir prüfen:
            </p>

            <ol className="space-y-2 my-6">
              <li>1. Tragfähigkeit und Zustand der Konstruktion</li>
              <li>2. Schädlingsbefall und Holzschäden</li>
              <li>3. Energetischer Zustand</li>
              <li>4. Brandschutztechnische Situation</li>
              <li>5. Nutzungsmöglichkeiten und Auflagen</li>
            </ol>

            <p>
              Auf dieser Basis entwickeln wir ein Sanierungskonzept, das technisch 
              sinnvoll und wirtschaftlich vertretbar ist.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Fördermöglichkeiten</h3>
              <p className="text-amber-700">
                Energetische Sanierungen werden umfangreich gefördert. Wir beraten 
                Sie zu KfW-Krediten, BAFA-Zuschüssen und Landesförderprogrammen.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Bestandsaufnahme anfordern
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/objektbau"
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

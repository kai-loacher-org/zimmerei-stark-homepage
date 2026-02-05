import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Users, Ruler } from 'lucide-react'

export const metadata: Metadata = {
  title: '2inEins Musterhaus | Musterhäuser | Zimmerei Stark',
  description: 'Das 2inEins Musterhaus: Zwei Wohneinheiten unter einem Dach. Perfekt für Mehrgenerationen-Wohnen.',
}

export default function ZweiInEinsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/2ineins-hero.jpg" alt="2inEins Musterhaus" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Musterhaus 2inEins</h1>
          <p className="text-xl md:text-2xl">Zwei Generationen, ein Zuhause</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Das 2inEins ist mehr als ein Musterhaus – es ist ein Konzept für 
            modernes Zusammenleben. Zwei eigenständige Wohneinheiten unter 
            einem Dach bieten Nähe bei gleichzeitiger Privatsphäre.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Home, title: '2 Wohneinheiten', desc: '140 + 60 m² Wohnfläche' },
              { icon: Users, title: 'Mehrgenerationen', desc: 'Ideal für Familie & Eltern' },
              { icon: Ruler, title: 'Grundstück', desc: 'Ab 500 m² realisierbar' }
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-lg text-center border border-amber-200">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Das Konzept</h2>
          <p>
            Das 2inEins verbindet eine große Hauptwohnung mit einer kompakten 
            Einliegerwohnung. Beide Einheiten haben eigene Eingänge und sind 
            vollständig autark – und doch nur Sekunden voneinander entfernt.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Hauptwohnung (ca. 140 m²):</h3>
          <ul className="space-y-1">
            <li>• Offener Wohn-/Essbereich mit Küche</li>
            <li>• 4 Schlafzimmer</li>
            <li>• 2 Bäder</li>
            <li>• Hauswirtschaftsraum</li>
            <li>• Terrasse</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Einliegerwohnung (ca. 60 m²):</h3>
          <ul className="space-y-1">
            <li>• Wohn-/Schlafbereich</li>
            <li>• Separate Küche oder Küchenzeile</li>
            <li>• Eigenes Bad</li>
            <li>• Eigener Eingang</li>
            <li>• Kleine Terrasse</li>
          </ul>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Flexible Nutzung</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Mehrgenerationen:</strong> Eltern nebenan, aber eigenständig</li>
              <li>• <strong>Vermietung:</strong> Mieteinnahmen zur Finanzierung</li>
              <li>• <strong>Home-Office:</strong> Separates Büro am Haus</li>
              <li>• <strong>Gäste:</strong> Komfortables Apartment für Besucher</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Besichtigung</h3>
            <p className="text-amber-700">
              Das 2inEins steht in unserer Ausstellung in Auhausen zur 
              Besichtigung bereit. Vereinbaren Sie einen Termin!
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Termin vereinbaren <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ueber-uns/musterhaeuser" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Alle Musterhäuser
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

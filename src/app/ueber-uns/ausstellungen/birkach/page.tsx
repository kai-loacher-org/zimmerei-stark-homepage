import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ausstellung Birkach | Über uns | Zimmerei Stark',
  description: 'Besuchen Sie unseren zweiten Standort in Birkach bei Nürnberg.',
}

export default function AusstellungBirkachPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/ausstellung-birkach-hero.jpg" alt="Ausstellung Birkach" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ausstellung Birkach</h1>
          <p className="text-xl md:text-2xl flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6" /> Nähe Nürnberg
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Unser Standort in Birkach bei Nürnberg bringt unsere Ausstellung 
            näher an den Großraum Nürnberg-Fürth-Erlangen. Hier präsentieren 
            wir ausgewählte Beispiele unserer Arbeit.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: MapPin, title: 'Adresse', desc: 'Auf Anfrage' },
              { icon: Clock, title: 'Öffnungszeiten', desc: 'Nach Vereinbarung' },
              { icon: Phone, title: 'Telefon', desc: '09832 / 6829-0' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Schwerpunkte</h2>
          <ul className="space-y-2">
            <li>✓ Beratung und Erstgespräche</li>
            <li>✓ Musterküchen und Einrichtung</li>
            <li>✓ Material- und Oberflächenmuster</li>
            <li>✓ Planungsgespräche vor Ort</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Hauptausstellung</h3>
            <p className="text-amber-700">
              Für die vollständige Ausstellung mit Musterhäusern empfehlen wir 
              einen Besuch in unserer Hauptausstellung in Auhausen.
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Termin vereinbaren <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ueber-uns/ausstellungen/auhausen" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Ausstellung Auhausen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

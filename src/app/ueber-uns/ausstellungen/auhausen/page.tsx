import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ausstellung Auhausen | Über uns | Zimmerei Stark',
  description: 'Besuchen Sie unsere Hauptausstellung in Auhausen. Musterhäuser, Küchen, Einrichtung live erleben.',
}

export default function AusstellungAuhausenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Ausstellung Auhausen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ausstellung Auhausen</h1>
          <p className="text-xl md:text-2xl flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6" /> Unser Hauptstandort
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Unsere Hauptausstellung in Auhausen zeigt die ganze Bandbreite 
            unseres Schaffens: Musterhäuser, Küchen, Möbel und Einrichtung. 
            Erleben Sie Holzbau mit allen Sinnen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: MapPin, title: 'Adresse', desc: 'Industriestraße 1, 91729 Auhausen' },
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

          <h2 className="text-2xl font-bold mt-12 mb-6">Was Sie erwartet</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Musterhäuser</strong> – begehbar und voll ausgestattet</li>
            <li>✓ <strong>Küchenausstellung</strong> – verschiedene Stile und Markengeräte</li>
            <li>✓ <strong>Möbelbeispiele</strong> – Einbauschränke, Bäder, Treppen</li>
            <li>✓ <strong>Materialien</strong> – Holzarten, Oberflächen, Beschläge</li>
            <li>✓ <strong>Beratung</strong> – persönlich durch unsere Fachberater</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Anfahrt</h2>
          <p>
            Auhausen liegt verkehrsgünstig an der B466 zwischen Oettingen und 
            Wassertrüdingen. Von der A7 (Ausfahrt Dinkelsbühl/Fichtenau) erreichen 
            Sie uns in ca. 25 Minuten.
          </p>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Parkplätze</h3>
            <p className="text-gray-300">
              Ausreichend kostenlose Parkplätze stehen direkt vor der Ausstellung 
              zur Verfügung.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Termin vereinbaren</h3>
            <p className="text-amber-700">
              Um Ihnen eine persönliche Beratung zu garantieren, bitten wir um 
              vorherige Terminvereinbarung.
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Termin vereinbaren <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ueber-uns/ausstellungen" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Alle Standorte
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

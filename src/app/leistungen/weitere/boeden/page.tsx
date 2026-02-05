import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Layers, Home, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Böden | Weitere Leistungen | Zimmerei Stark',
  description: 'Bodenbeläge für jeden Anspruch. Parkett, Massivholzdielen, Designbeläge – verlegt vom Fachmann.',
}

export default function BoedenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Böden" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Böden</h1>
          <p className="text-xl md:text-2xl">Grund für gutes Wohnen</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Der Boden trägt jeden Raum – optisch und buchstäblich. Wir verlegen 
            alle Arten von Bodenbelägen und beraten Sie bei der Auswahl des 
            perfekten Materials für Ihren Lebensraum.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Layers, title: 'Vielfalt', desc: 'Holz, Vinyl, Fliesen...' },
              { icon: Home, title: 'Fachverlegung', desc: 'Sauber und schnell' },
              { icon: Sparkles, title: 'Finish', desc: 'Ölen, Versiegeln, Polieren' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Bodenbeläge</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Massivholzdielen</strong> – Charakter und Wärme</li>
            <li>✓ <strong>Parkett</strong> – klassisch oder modern verlegt</li>
            <li>✓ <strong>Landhausdielen</strong> – großformatig und edel</li>
            <li>✓ <strong>Laminat</strong> – pflegeleicht und robust</li>
            <li>✓ <strong>Designbeläge/Vinyl</strong> – vielseitig und strapazierfähig</li>
            <li>✓ <strong>Kork</strong> – warm und gelenkschonend</li>
          </ul>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Renovierung</h3>
            <p className="text-gray-300">
              Alte Holzböden müssen nicht raus. Wir schleifen und behandeln 
              vorhandene Dielen und Parkett neu – für frischen Glanz.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Beratung anfordern <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

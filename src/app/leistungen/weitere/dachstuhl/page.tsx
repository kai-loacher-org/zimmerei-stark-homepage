import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Layers, Ruler } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dachstuhl | Weitere Leistungen | Zimmerei Stark',
  description: 'Dachstühle für Neubau und Sanierung. Vom Satteldach bis zur freien Dachform – präzise gefertigt.',
}

export default function DachstuhlPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/dachstuhl-hero.jpg" alt="Dachstuhl" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dachstuhl</h1>
          <p className="text-xl md:text-2xl">Die Krone des Hauses</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Der Dachstuhl trägt nicht nur die Eindeckung – er prägt den Charakter 
            des Hauses. Wir fertigen Dachkonstruktionen für jeden Stil und jede 
            Anforderung, vom klassischen Sparrendach bis zur freien Dachform.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Home, title: 'Alle Dachformen', desc: 'Sattel, Walm, Pult, Flach' },
              { icon: Layers, title: 'Sichtdachstuhl', desc: 'Holz als Gestaltungselement' },
              { icon: Ruler, title: 'CNC-Präzision', desc: 'Millimetergenau gefertigt' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Dachformen</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Satteldach</strong> – der Klassiker</li>
            <li>✓ <strong>Walmdach</strong> – elegant von allen Seiten</li>
            <li>✓ <strong>Pultdach</strong> – modern und platzsparend</li>
            <li>✓ <strong>Flachdach</strong> – mit Holzunterkonstruktion</li>
            <li>✓ <strong>Mansarddach</strong> – maximaler Wohnraum</li>
            <li>✓ <strong>Freie Formen</strong> – gebogen und geschwungen</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Sichtdachstühle</h2>
          <p>
            Sichtbare Holzkonstruktionen verleihen Räumen Charakter. Wir fertigen 
            Sichtdachstühle mit besonders sorgfältiger Holzauswahl und Oberflächenbehandlung.
          </p>

          <div className="mt-12 flex gap-4">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Anfrage stellen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

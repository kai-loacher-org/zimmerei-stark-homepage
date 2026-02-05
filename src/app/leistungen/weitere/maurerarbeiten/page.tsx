import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building, Layers, Square } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maurerarbeiten | Weitere Leistungen | Zimmerei Stark',
  description: 'Fundamente, Mauerwerk und Betonarbeiten. Solide Basis für Ihren Holzbau.',
}

export default function MauerarbeitenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/maurerarbeiten-hero.jpg" alt="Maurerarbeiten" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Maurerarbeiten</h1>
          <p className="text-xl md:text-2xl">Solide Grundlagen</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Auch Holzbauten brauchen ein solides Fundament. Unsere Maurer fertigen 
            Keller, Bodenplatten und Sockel – abgestimmt auf Ihren Holzbau, aus 
            einer Hand.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Layers, title: 'Fundamente', desc: 'Bodenplatten und Streifenfundamente' },
              { icon: Building, title: 'Keller', desc: 'WU-Beton oder gemauert' },
              { icon: Square, title: 'Mauerwerk', desc: 'Sockel und Stützwände' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Leistungen</h2>
          <ul className="space-y-2">
            <li>✓ Bodenplatten mit Dämmung</li>
            <li>✓ Streifenfundamente</li>
            <li>✓ Keller in WU-Beton oder Mauerwerk</li>
            <li>✓ Sockel und Stützmauern</li>
            <li>✓ Garagen und Nebengebäude</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Nahtlose Abstimmung</h3>
            <p className="text-amber-700">
              Weil wir beides machen – Maurer- und Zimmererarbeiten – passen alle 
              Anschlüsse perfekt zusammen. Keine Koordinationsprobleme, ein 
              Ansprechpartner.
            </p>
          </div>

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

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TreePine, Ruler, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sägewerk | Weitere Leistungen | Zimmerei Stark',
  description: 'Eigenes Sägewerk für individuelle Holzzuschnitte. Lohnschnitt, Sondermaße und Altholzbearbeitung.',
}

export default function SaegewerkPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/saegewerk-hero.jpg" alt="Sägewerk" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sägewerk</h1>
          <p className="text-xl md:text-2xl">Vom Stamm zum Balken</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Unser eigenes Sägewerk ermöglicht maximale Flexibilität bei Holzmaßen 
            und -qualitäten. Ob Sonderformate, Altholzbearbeitung oder Ihr eigenes 
            Holz – wir sägen, was Sie brauchen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: TreePine, title: 'Lohnschnitt', desc: 'Ihr Holz, unser Sägewerk' },
              { icon: Ruler, title: 'Sondermaße', desc: 'Jedes Format möglich' },
              { icon: Truck, title: 'Lieferung', desc: 'Direkt zu Ihnen' }
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
            <li>✓ Einschnitt von Rundholz bis 12m Länge</li>
            <li>✓ Kantholz, Bohlen, Bretter in Wunschmaßen</li>
            <li>✓ Altholzaufbereitung und Nachsägen</li>
            <li>✓ Kammertrocknung auf Wunsch</li>
            <li>✓ Hobelware und Profilholz</li>
          </ul>

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

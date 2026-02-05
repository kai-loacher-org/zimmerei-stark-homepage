import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, DoorOpen, Palette, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Innentüren | Weitere Leistungen | Zimmerei Stark',
  description: 'Innentüren für jeden Stil. Von der Standardtür bis zur maßgefertigten Sonderlösung.',
}

export default function InnentürenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/innentüren-hero.jpg" alt="Innentüren" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Innentüren</h1>
          <p className="text-xl md:text-2xl">Stil für jeden Raum</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Innentüren prägen das Erscheinungsbild Ihres Zuhauses. Wir liefern 
            und montieren Türen aller Art – von der praktischen Standardtür bis 
            zur repräsentativen Sonderlösung.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: DoorOpen, title: 'Vielfalt', desc: 'Für jeden Stil etwas' },
              { icon: Palette, title: 'Design', desc: 'Dekore, Farben, Glas' },
              { icon: Wrench, title: 'Montage', desc: 'Inklusive Zarge' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Türarten</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Röhrenspantüren</strong> – wirtschaftlich und funktional</li>
            <li>✓ <strong>Weißlacktüren</strong> – klassisch zeitlos</li>
            <li>✓ <strong>Echtholzfurnier</strong> – natürlich und edel</li>
            <li>✓ <strong>Massivholztüren</strong> – wertig und langlebig</li>
            <li>✓ <strong>Glastüren</strong> – lichtdurchlässig und modern</li>
            <li>✓ <strong>Schiebetüren</strong> – platzsparend und elegant</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Sonderlösungen</h2>
          <ul className="space-y-2">
            <li>• Überhohe Türen (bis Deckenhöhe)</li>
            <li>• Schallschutztüren</li>
            <li>• Brandschutztüren</li>
            <li>• Raumhohe Türen ohne Zarge</li>
            <li>• Türen mit integrierten Seitenelementen</li>
          </ul>

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

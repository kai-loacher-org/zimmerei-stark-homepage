import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Ruler, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Treppenbau | Weitere Leistungen | Zimmerei Stark',
  description: 'Treppen nach Maß in Holz, Stahl oder Kombination. Vom klassischen Stil bis zur modernen Skulptur.',
}

export default function TreppenbauPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Treppenbau" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Treppenbau</h1>
          <p className="text-xl md:text-2xl">Verbindung mit Stil</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Eine Treppe ist mehr als Funktion – sie ist Skulptur, Blickfang und 
            Handwerkskunst. Wir fertigen Treppen, die zu Ihrem Haus passen, in 
            Massivholz oder als Stahl-Holz-Kombination.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: ArrowUpRight, title: 'Alle Formen', desc: 'Gerade, gewendelt, frei' },
              { icon: Ruler, title: 'Maßarbeit', desc: 'Passt in jeden Raum' },
              { icon: Shield, title: 'Sicherheit', desc: 'Normgerechte Ausführung' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Treppenarten</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Wangentreppen</strong> – klassisch und bewährt</li>
            <li>✓ <strong>Faltwerktreppen</strong> – elegant und minimalistisch</li>
            <li>✓ <strong>Bolzentreppen</strong> – schwebend und leicht</li>
            <li>✓ <strong>Spindeltreppen</strong> – platzsparend und dekorativ</li>
            <li>✓ <strong>Podesttreppen</strong> – großzügig und repräsentativ</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Materialien</h2>
          <ul className="space-y-2">
            <li>• Massivholz: Eiche, Buche, Esche, Nussbaum</li>
            <li>• Stahl-Holz-Kombinationen</li>
            <li>• Glas-Elemente (Brüstungen, Stufen)</li>
            <li>• Edelstahl-Geländer</li>
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

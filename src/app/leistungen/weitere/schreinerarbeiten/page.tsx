import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Ruler, Sparkles, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schreinerarbeiten | Weitere Leistungen | Zimmerei Stark',
  description: 'Feine Holzarbeiten von unserer Schreinerei. Möbel, Einbauten, Treppen nach Maß.',
}

export default function SchreinerarbeitenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Schreinerarbeiten" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Schreinerarbeiten</h1>
          <p className="text-xl md:text-2xl">Feines Handwerk</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Unsere hauseigene Schreinerei fertigt alles, was feine Holzarbeit 
            verlangt: von Einbaumöbeln über Innentüren bis zu individuellen 
            Treppen. Maßarbeit in höchster Qualität.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Ruler, title: 'Maßarbeit', desc: 'Millimetergenau gefertigt' },
              { icon: Sparkles, title: 'Qualität', desc: 'Handwerkliche Perfektion' },
              { icon: Wrench, title: 'CNC & Hand', desc: 'Moderne Technik + Handwerk' }
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
            <li>✓ Einbaumöbel und Einbauschränke</li>
            <li>✓ Küchen und Badmöbel</li>
            <li>✓ Innentüren und Zargen</li>
            <li>✓ Treppen und Geländer</li>
            <li>✓ Wandverkleidungen und Paneele</li>
            <li>✓ Empfangstheken und Objektmöbel</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Ausstellung besuchen</h3>
            <p className="text-amber-700">
              In unserer Ausstellung sehen Sie Beispiele unserer Schreinerarbeit. 
              Vereinbaren Sie einen Termin für eine persönliche Beratung.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Beratung anfordern <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/leistungen/kueche-einrichtung" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Küche & Einrichtung
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

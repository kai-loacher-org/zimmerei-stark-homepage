import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PaintBucket, Palette, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maler- & Putzarbeiten | Weitere Leistungen | Zimmerei Stark',
  description: 'Malerarbeiten, Putz und Fassaden. Der perfekte Abschluss für Ihr Bauvorhaben.',
}

export default function MalerPutzarbeitenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Malerarbeiten" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Maler- & Putzarbeiten</h1>
          <p className="text-xl md:text-2xl">Der letzte Schliff</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Farbe und Putz geben Ihrem Bau das finale Finish. Unsere Maler kümmern 
            sich um Innenräume und Fassaden – damit Sie sich um nichts mehr kümmern 
            müssen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: PaintBucket, title: 'Malerarbeiten', desc: 'Innenräume und Fassaden' },
              { icon: Sparkles, title: 'Putzarbeiten', desc: 'Innenputz und Außenputz' },
              { icon: Palette, title: 'Farbberatung', desc: 'Harmonische Konzepte' }
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
            <li>✓ Innenwandanstriche und Tapezierarbeiten</li>
            <li>✓ Deckenanstriche und Spachteltechniken</li>
            <li>✓ Fassadenanstriche und Fassadensanierung</li>
            <li>✓ Innenputz (Gips, Lehm, Kalk)</li>
            <li>✓ Außenputz und WDVS</li>
            <li>✓ Holzanstriche und Lasuren</li>
          </ul>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Natürliche Anstriche</h3>
            <p className="text-gray-300">
              Passend zu unserem Holzbau bieten wir natürliche Farben und Putze: 
              Kalkfarben, Lehmputze, lösemittelfreie Lacke für ein gesundes Raumklima.
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

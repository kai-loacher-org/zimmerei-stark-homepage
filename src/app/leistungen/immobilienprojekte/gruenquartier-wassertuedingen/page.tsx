import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Home, Leaf, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GrünQuartier Wassertrüdingen | Immobilienprojekte | Zimmerei Stark',
  description: 'Naturnahes Wohnquartier in Wassertrüdingen. Holzhäuser im Grünen, im Herzen der Kleinstadt.',
}

export default function GruenquartierWassertruedingenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="GrünQuartier Wassertrüdingen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">GrünQuartier Wassertrüdingen</h1>
          <p className="text-xl md:text-2xl flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6" /> Wassertrüdingen
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="not-prose mb-8">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Status: In Planung
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            In Wassertrüdingen, der Stadt der Gärten, entsteht ein Wohnquartier, 
            das den Charakter der Kleinstadt aufgreift: naturnah, familiär und 
            in Holzbauweise, die zur Geschichte passt.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Home, title: '10-15 Einheiten', desc: 'Familienfreundliche Häuser' },
              { icon: Leaf, title: 'Holzbau', desc: 'Passend zur Stadt der Gärten' },
              { icon: TreePine, title: 'Naturnah', desc: 'Grün vor der Haustür' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <item.icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Das Konzept</h2>
          <ul className="space-y-2">
            <li>✓ Kompakte Einfamilien- und Reihenhäuser</li>
            <li>✓ Moderne Holzarchitektur mit regionalem Bezug</li>
            <li>✓ Energieeffizient nach KfW-40-Standard</li>
            <li>✓ Gemeinschaftsgärten und Streuobstwiese</li>
            <li>✓ Autoarmes Quartier mit Stellplätzen am Rand</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Lage</h2>
          <p>
            Wassertrüdingen ist bekannt als "Stadt der Gärten" und liegt 
            landschaftlich reizvoll zwischen Wörnitz und Hesselberg. Die 
            Kleinstadt bietet alle Einrichtungen des täglichen Bedarfs bei 
            gleichzeitig ländlicher Ruhe.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Interesse?</h3>
            <p className="text-amber-700">
              Lassen Sie sich unverbindlich vormerken. Wir informieren Sie, 
              sobald der Vertrieb startet.
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Interesse bekunden <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/leistungen/immobilienprojekte" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Alle Projekte
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

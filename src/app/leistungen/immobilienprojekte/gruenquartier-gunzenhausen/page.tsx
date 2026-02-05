import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Home, Leaf, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GrünQuartier Gunzenhausen | Immobilienprojekte | Zimmerei Stark',
  description: 'Nachhaltiges Wohnquartier in Gunzenhausen. Moderne Holzhäuser in naturnaher Umgebung.',
}

export default function GruenquartierGunzenhausenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="GrünQuartier Gunzenhausen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">GrünQuartier Gunzenhausen</h1>
          <p className="text-xl md:text-2xl flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6" /> Gunzenhausen
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
            Am Stadtrand von Gunzenhausen entsteht ein modernes Wohnquartier, 
            das nachhaltiges Bauen mit hoher Lebensqualität verbindet. Hier 
            realisieren wir unsere Vision von zukunftsfähigem Wohnen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Home, title: '15-20 Einheiten', desc: 'EFH und Doppelhäuser' },
              { icon: Leaf, title: 'Holzbau', desc: 'Nachhaltig und CO₂-neutral' },
              { icon: Users, title: 'Gemeinschaft', desc: 'Nachbarschaftliches Wohnen' }
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
            <li>✓ Einfamilien- und Doppelhäuser in Holzbauweise</li>
            <li>✓ KfW-40-Standard mit Photovoltaik</li>
            <li>✓ Durchdachte Quartiersplanung mit Grünflächen</li>
            <li>✓ Gemeinschaftliche Bereiche und Spielplätze</li>
            <li>✓ Gute Anbindung an Stadt und Altmühlsee</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Lage</h2>
          <p>
            Das GrünQuartier liegt im Süden von Gunzenhausen, nahe der Natur 
            und doch in wenigen Minuten in der Innenstadt. Der Altmühlsee mit 
            seinen Freizeitmöglichkeiten ist nur wenige Kilometer entfernt.
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

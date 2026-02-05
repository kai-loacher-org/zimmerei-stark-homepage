import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Award, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'STARKer Arbeitgeber | Karriere | Zimmerei Stark',
  description: 'Arbeiten bei Zimmerei Stark. Familienunternehmen mit Tradition, moderne Ausstattung und echte Perspektiven.',
}

export default function ArbeitgeberPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Karriere bei Stark" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">STARKer Arbeitgeber</h1>
          <p className="text-xl md:text-2xl">Mehr als nur ein Job</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Bei uns arbeiten Sie nicht für irgendjemanden – Sie arbeiten mit uns. 
            Als Familienunternehmen in vierter Generation wissen wir: Der Erfolg 
            kommt von den Menschen, die ihn möglich machen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
            {[
              { icon: Heart, title: 'Familiär', desc: 'Flache Hierarchien, offene Türen, echtes Miteinander' },
              { icon: Users, title: 'Teamgeist', desc: 'Zusammenarbeit statt Ellenbogen' },
              { icon: Award, title: 'Qualität', desc: 'Stolz auf gute Arbeit, Raum für Handwerk' },
              { icon: TrendingUp, title: 'Perspektive', desc: 'Weiterbildung, Aufstieg, Entwicklung' }
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Was wir bieten</h2>
          <ul className="space-y-2">
            <li>✓ Unbefristete Arbeitsverträge</li>
            <li>✓ Leistungsgerechte Vergütung</li>
            <li>✓ 30 Tage Urlaub</li>
            <li>✓ Betriebliche Altersvorsorge</li>
            <li>✓ Moderne Werkzeuge und Maschinen</li>
            <li>✓ Regelmäßige Weiterbildungen</li>
            <li>✓ Firmenfeiern und Teamevents</li>
            <li>✓ Kostenlose Getränke und Obst</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Moderne Ausstattung</h2>
          <p>
            Wir investieren kontinuierlich in modernste Technik: CNC-Abbundanlage, 
            digitale Planung, ergonomische Arbeitsplätze. Gutes Werkzeug macht 
            gute Arbeit – und macht Spaß.
          </p>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Über 100 Jahre Erfahrung</h3>
            <p className="text-gray-300">
              Seit 1920 führen wir das Zimmererhandwerk in Familientradition. 
              Diese Erfahrung geben wir weiter – an unsere Auszubildenden, 
              unsere Mitarbeiter und die nächste Generation.
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/karriere/jobs" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Stellenangebote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/karriere/bewerbung" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Online bewerben
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

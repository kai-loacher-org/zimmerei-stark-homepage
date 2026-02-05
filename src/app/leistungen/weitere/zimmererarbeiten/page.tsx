import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Hammer, Home, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zimmererarbeiten | Weitere Leistungen | Zimmerei Stark',
  description: 'Klassisches Zimmererhandwerk für alle Holzkonstruktionen. Dachstühle, Carports, Pergolen und mehr.',
}

export default function ZimmererarbeitenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Zimmererarbeiten" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zimmererarbeiten</h1>
          <p className="text-xl md:text-2xl">Tradition trifft Technik</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Seit über 100 Jahren fertigen wir Holzkonstruktionen mit Leidenschaft 
            und Präzision. Vom einfachen Carport bis zum komplexen Hallentragwerk – 
            Zimmererarbeit ist unsere Kernkompetenz.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Hammer, title: 'Handwerk', desc: 'Über 100 Jahre Erfahrung' },
              { icon: Home, title: 'Vielfältig', desc: 'Jedes Projekt ist möglich' },
              { icon: Shield, title: 'Qualität', desc: 'Meisterbetrieb' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Unsere Zimmererleistungen</h2>
          <ul className="space-y-2">
            <li>✓ Dachstühle und Dachkonstruktionen</li>
            <li>✓ Carports und Garagen</li>
            <li>✓ Pergolen und Terrassenüberdachungen</li>
            <li>✓ Balkone und Vordächer</li>
            <li>✓ Holzrahmenbau und Fachwerk</li>
            <li>✓ Abbund und Aufrichtung</li>
            <li>✓ Reparatur und Sanierung</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Auch für Kollegen</h3>
            <p className="text-amber-700">
              Wir unterstützen andere Handwerksbetriebe bei Engpässen – 
              vom Einzelauftrag bis zur temporären Kapazitätserweiterung.
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

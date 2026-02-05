import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Thermometer, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Innen- & Dachausbau | Weitere Leistungen | Zimmerei Stark',
  description: 'Dachgeschossausbau und Trockenbau. Mehr Wohnraum unter dem Dach, fachgerecht gedämmt.',
}

export default function InnenDachausbauPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/dachausbau-hero.jpg" alt="Dachausbau" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Innen- & Dachausbau</h1>
          <p className="text-xl md:text-2xl">Wohnraum unter dem Dach</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Das Dachgeschoss bietet Potenzial für zusätzlichen Wohnraum. Wir 
            übernehmen den kompletten Ausbau – von der Dämmung über die Beplankung 
            bis zum fertigen Raum.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Thermometer, title: 'Dämmung', desc: 'Sommerlicher + winterlicher Schutz' },
              { icon: Layers, title: 'Trockenbau', desc: 'Wände und Decken' },
              { icon: Home, title: 'Wohnraum', desc: 'Schlüsselfertig bezugsbereit' }
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
            <li>✓ Zwischensparrendämmung und Untersparrendämmung</li>
            <li>✓ Dampfbremse und Luftdichtung</li>
            <li>✓ Gipskarton- und Holzwerkstoffbekleidung</li>
            <li>✓ Dachflächenfenster und Gauben</li>
            <li>✓ Leichtbauwände für Raumaufteilung</li>
            <li>✓ Einbauschränke in Dachschrägen</li>
          </ul>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Energetische Sanierung</h3>
            <p className="text-gray-300">
              Dachgeschosse sind oft energetische Schwachstellen. Mit moderner 
              Dämmung und luftdichter Ausführung senken wir Ihren Energieverbrauch 
              und steigern den Wohnkomfort.
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

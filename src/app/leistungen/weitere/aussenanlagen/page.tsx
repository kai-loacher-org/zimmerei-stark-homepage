import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TreePine, Car, Fence } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Außenanlagen | Weitere Leistungen | Zimmerei Stark',
  description: 'Holzkonstruktionen für den Außenbereich. Terrassen, Carports, Pergolen, Zäune nach Maß.',
}

export default function AussenanlagenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/aussenanlagen-hero.jpg" alt="Außenanlagen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Außenanlagen</h1>
          <p className="text-xl md:text-2xl">Leben im Freien</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Der Außenbereich verlängert Ihren Wohnraum nach draußen. Wir fertigen 
            Terrassen, Carports und alle Holzkonstruktionen für Ihren Garten – 
            individuell geplant und wetterbeständig gebaut.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: TreePine, title: 'Terrassen', desc: 'Holzdecks und Überdachungen' },
              { icon: Car, title: 'Carports', desc: 'Einzeln oder in Reihe' },
              { icon: Fence, title: 'Zäune', desc: 'Sichtschutz und Einfriedung' }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <item.icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Außenanlagen</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Terrassendecks</strong> – Holz, Thermoholz, WPC</li>
            <li>✓ <strong>Terrassenüberdachungen</strong> – Holz mit Glas oder Polycarbonat</li>
            <li>✓ <strong>Pergolen</strong> – freistehend oder angebaut</li>
            <li>✓ <strong>Carports</strong> – Einzel-, Doppel-, Reihencarports</li>
            <li>✓ <strong>Geräteschuppen</strong> – in Holzrahmenbauweise</li>
            <li>✓ <strong>Zäune und Sichtschutz</strong> – Holz, Rhombus, modern</li>
            <li>✓ <strong>Mülltonnenboxen</strong> – praktisch und ansehnlich</li>
          </ul>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Wetterfeste Hölzer</h3>
            <p className="text-gray-300">
              Für den Außenbereich verwenden wir dauerhaft beständige Hölzer:
            </p>
            <ul className="text-gray-400 space-y-1 mt-4">
              <li>• Lärche – natürlich resistent</li>
              <li>• Douglasie – heimisch und robust</li>
              <li>• Thermoholz – modifiziert und formstabil</li>
              <li>• Accoya – extrem langlebig</li>
            </ul>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Projekt anfragen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

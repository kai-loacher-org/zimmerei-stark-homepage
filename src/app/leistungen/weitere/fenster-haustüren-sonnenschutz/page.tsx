import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, DoorOpen, Sun, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fenster, Haustüren & Sonnenschutz | Weitere Leistungen | Zimmerei Stark',
  description: 'Fenster, Haustüren und Sonnenschutz von Qualitätsherstellern. Einbau und Wartung aus einer Hand.',
}

export default function FensterHaustürenPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg" alt="Fenster und Haustüren" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fenster, Haustüren & Sonnenschutz</h1>
          <p className="text-xl md:text-2xl">Verbindung nach draußen</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Fenster und Türen sind die Verbindung zwischen Innen und Außen. 
            Wir liefern und montieren hochwertige Produkte renommierter 
            Hersteller – perfekt abgestimmt auf Ihren Holzbau.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Home, title: 'Fenster', desc: 'Holz, Holz-Alu, Kunststoff' },
              { icon: DoorOpen, title: 'Haustüren', desc: 'Sicherheit und Optik' },
              { icon: Sun, title: 'Sonnenschutz', desc: 'Rollläden und Raffstoren' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Fenster</h2>
          <ul className="space-y-2">
            <li>✓ Holzfenster – natürlich und nachhaltig</li>
            <li>✓ Holz-Aluminium-Fenster – wartungsarm und langlebig</li>
            <li>✓ Kunststofffenster – wirtschaftlich und pflegeleicht</li>
            <li>✓ Dachflächenfenster (Velux, Roto)</li>
            <li>✓ Hebeschiebetüren und Faltanlagen</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Haustüren</h2>
          <ul className="space-y-2">
            <li>✓ Holzhaustüren</li>
            <li>✓ Aluminium-Haustüren</li>
            <li>✓ Sicherheitsausstattung (RC2, RC3)</li>
            <li>✓ Elektronische Zutrittssysteme</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Sonnenschutz</h2>
          <ul className="space-y-2">
            <li>• Rollläden (auch Solar-betrieben)</li>
            <li>• Raffstoren</li>
            <li>• Markisen</li>
            <li>• Insektenschutz</li>
            <li>• Smart-Home-Integration</li>
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

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Sun, Moon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beleuchtung & Lichtgestaltung | Küche & Einrichtung | Zimmerei Stark',
  description: 'Professionelle Lichtplanung und integrierte Beleuchtungslösungen für Möbel und Räume.',
}

export default function BeleuchtungPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/beleuchtung-hero.jpg"
          alt="Beleuchtung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Beleuchtung & Lichtgestaltung</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Licht schafft Atmosphäre
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Das richtige Licht verwandelt Räume. Wir integrieren durchdachte 
              Beleuchtung in unsere Möbel und planen Lichtkonzepte, die 
              Funktionalität und Atmosphäre perfekt verbinden.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Sun,
                  title: 'Arbeitslicht',
                  description: 'Hell und fokussiert fürs Arbeiten'
                },
                {
                  icon: Lightbulb,
                  title: 'Akzentlicht',
                  description: 'Highlights setzen, Kunst betonen'
                },
                {
                  icon: Moon,
                  title: 'Stimmungslicht',
                  description: 'Gedimmt für gemütliche Abende'
                }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg text-center border border-amber-200">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Integrierte Möbelbeleuchtung</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Unterschrankleuchten</strong> – für blendfreies Arbeitslicht</li>
              <li>✓ <strong>Regalbeleuchtung</strong> – setzt Objekte in Szene</li>
              <li>✓ <strong>Schubladenbeleuchtung</strong> – findet alles sofort</li>
              <li>✓ <strong>Schrankbeleuchtung</strong> – Licht beim Öffnen</li>
              <li>✓ <strong>Griffleisten mit LED</strong> – dezent und funktional</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Lichtplanung für Räume</h2>
            
            <p>
              Gutes Licht braucht Schichten: Grundbeleuchtung, Arbeitslicht und 
              Akzente. Wir planen alle drei Ebenen:
            </p>

            <ul className="space-y-2 my-6">
              <li>• <strong>Deckenleuchten:</strong> Grundhelligkeit im Raum</li>
              <li>• <strong>Spots:</strong> Gerichtetes Licht für Arbeitsflächen</li>
              <li>• <strong>LED-Bänder:</strong> Indirekte Beleuchtung, versteckt</li>
              <li>• <strong>Pendelleuchten:</strong> Über Tischen und Theken</li>
              <li>• <strong>Wandleuchten:</strong> Für sanftes Seitenlicht</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Smart-Licht</h3>
              <p className="text-gray-300 mb-4">
                Moderne Beleuchtung ist steuerbar – per Schalter, App oder Sprache:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Dimmbare LED in warmweiß bis kaltweiß</li>
                <li>• Szenensteuerung (Kochen, Essen, TV...)</li>
                <li>• Bewegungsmelder-Aktivierung</li>
                <li>• Zeitsteuerung und Simulation</li>
                <li>• Integration in Smart-Home-Systeme</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Energie sparen</h3>
              <p className="text-amber-700">
                LED-Technik spart bis zu 90% Energie gegenüber Halogen – 
                und hält 25.000+ Stunden. Die Mehrkosten amortisieren sich schnell.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Lichtplanung anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/kueche-einrichtung"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

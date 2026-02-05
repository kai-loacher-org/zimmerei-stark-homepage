import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Ruler, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Essbereich | Küche & Einrichtung | Zimmerei Stark',
  description: 'Esstische und Sitzmöbel nach Maß. Vom rustikalen Massivholztisch bis zur eleganten Essgruppe.',
}

export default function EssbereichPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/essbereich-hero.jpg"
          alt="Essbereich"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Essbereich</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Wo Familie zusammenkommt
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Der Esstisch ist der Mittelpunkt des Familienlebens. Hier wird 
              nicht nur gegessen, sondern geredet, gespielt und gefeiert. 
              Wir fertigen Tische und Stühle, die Generationen überdauern.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Ruler,
                  title: 'Nach Maß',
                  description: 'Genau die richtige Größe für Ihren Raum'
                },
                {
                  icon: Users,
                  title: 'Für alle',
                  description: 'Platz für Familie und Gäste'
                },
                {
                  icon: Sparkles,
                  title: 'Einzigartig',
                  description: 'Jedes Stück ein Unikat'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Esstische</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Massivholztische</strong> – Eiche, Nussbaum, Esche, Kirsche</li>
              <li>✓ <strong>Tische mit Baumkante</strong> – natürliche Waldkante als Gestaltungselement</li>
              <li>✓ <strong>Ausziehtische</strong> – flexibel für jeden Anlass</li>
              <li>✓ <strong>Kombinationen</strong> – Holz mit Stahl, Glas oder Stein</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Sitzmöbel</h2>
            
            <ul className="space-y-2 my-6">
              <li>• Holzstühle – klassisch oder modern</li>
              <li>• Gepolsterte Stühle – mit Stoff oder Leder</li>
              <li>• Bänke – auch als Eckbank nach Maß</li>
              <li>• Hocker und Barhocker</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Tischkonfigurator</h3>
              <p className="text-gray-300 mb-4">
                Gestalten Sie Ihren Traumtisch:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• <strong>Holzart:</strong> Eiche, Nussbaum, Esche, Kirsche...</li>
                <li>• <strong>Maße:</strong> Länge, Breite, Höhe individuell</li>
                <li>• <strong>Tischplatte:</strong> Gerade Kante oder Baumkante</li>
                <li>• <strong>Gestell:</strong> Holz, Stahl, X-Gestell, Kufen...</li>
                <li>• <strong>Oberfläche:</strong> Geölt, gewachst, lackiert</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Tisch mit Geschichte</h3>
              <p className="text-amber-700">
                Haben Sie eigenes Holz – vielleicht von einem Baum aus dem Garten? 
                Wir fertigen daraus Ihren ganz persönlichen Esstisch.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Beratung anfordern
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

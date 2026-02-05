import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Heart, Leaf, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Einfamilienhäuser | KomplettHausbau | Zimmerei Stark',
  description: 'Individuelle Einfamilienhäuser in Holzbauweise. Vom klassischen Landhaus bis zur modernen Architektur.',
}

export default function EinfamilienhaeuserPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Einfamilienhaus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Einfamilienhäuser</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ihr Zuhause. Ihre Regeln.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Ein Einfamilienhaus ist mehr als vier Wände und ein Dach – es ist der 
              Rahmen für Ihr Leben, Ihr persönlicher Rückzugsort. Wir planen und 
              bauen Ihr individuelles Traumhaus aus Holz, exakt nach Ihren Vorstellungen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Home,
                  title: '100% Individuell',
                  description: 'Jedes Haus wird nach Ihren Wünschen geplant – keine Kompromisse bei Ihrem Zuhause'
                },
                {
                  icon: Heart,
                  title: 'Wohlfühlklima',
                  description: 'Holz reguliert Feuchtigkeit und schafft ein angenehmes, gesundes Raumklima'
                },
                {
                  icon: Leaf,
                  title: 'Nachhaltig',
                  description: 'CO₂-neutral bauen mit nachwachsenden Rohstoffen aus regionaler Forstwirtschaft'
                },
                {
                  icon: Shield,
                  title: 'Langlebig',
                  description: 'Moderne Holzhäuser halten Generationen – mit minimalem Pflegeaufwand'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Von modern bis traditionell</h2>
            
            <p>
              Ob Sie klare Linien und große Glasflächen bevorzugen oder den Charme 
              eines traditionellen Landhauses suchen – wir setzen jeden Stil in 
              Holz um. Unsere Architekten beraten Sie bei der Gestaltung und finden 
              die perfekte Balance zwischen Ihren Wünschen und den Gegebenheiten.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Beliebte Hausstile:</h3>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Bauhaus-Stil</strong> – Flachdach, kubische Formen, minimalistisch</li>
              <li>✓ <strong>Landhaus</strong> – Satteldach, Holzfassade, gemütlich</li>
              <li>✓ <strong>Bungalow</strong> – Eingeschossig, barrierefrei, praktisch</li>
              <li>✓ <strong>Stadtvilla</strong> – Elegant, großzügig, repräsentativ</li>
              <li>✓ <strong>Ökohaus</strong> – Passivhaus, Naturmaterialien, autark</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Der Weg zu Ihrem Haus</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Erstgespräch', desc: 'Wir lernen Ihre Wünsche kennen' },
                  { step: 2, title: 'Entwurf', desc: 'Erste Visualisierungen und Grundrisse' },
                  { step: 3, title: 'Planung', desc: 'Detaillierte Ausarbeitung und Genehmigung' },
                  { step: 4, title: 'Fertigung', desc: 'Präzise Vorfertigung im Werk' },
                  { step: 5, title: 'Montage', desc: 'Aufbau in wenigen Tagen' },
                  { step: 6, title: 'Ausbau', desc: 'Schlüsselfertige Fertigstellung' }
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-gray-400 ml-2">– {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Grundstück gesucht?</h3>
              <p className="text-amber-700">
                Unsere Stark Immo GmbH unterstützt Sie bei der Grundstückssuche 
                in der Region. Sprechen Sie uns an!
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Beratung vereinbaren
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/referenzen"
              className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

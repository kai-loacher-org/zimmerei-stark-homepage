import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Factory, Store, Warehouse } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gewerbe | ObjektBau | Zimmerei Stark',
  description: 'Gewerbliche Holzbauten für Büros, Werkstätten, Produktionshallen und mehr. Nachhaltig und repräsentativ.',
}

export default function ObjektbauGewerbePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/objektbau-gewerbe-hero.jpg"
          alt="Gewerbebau"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ObjektBau Gewerbe</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Gebäude, die Ihr Unternehmen repräsentieren
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Gewerbliche Holzbauten verbinden Funktionalität mit Nachhaltigkeit. 
              Ob repräsentatives Bürogebäude, flexible Werkstatthalle oder moderne 
              Produktionsstätte – wir planen und bauen Ihr Objekt individuell nach 
              Ihren Anforderungen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: Building2,
                  title: 'Bürogebäude',
                  description: 'Repräsentative Firmensitze und moderne Arbeitswelten in Holz'
                },
                {
                  icon: Factory,
                  title: 'Produktionshallen',
                  description: 'Große Spannweiten, flexible Nutzung, optimales Arbeitsklima'
                },
                {
                  icon: Store,
                  title: 'Verkaufsräume',
                  description: 'Showrooms, Ladenlokale und Ausstellungsflächen'
                },
                {
                  icon: Warehouse,
                  title: 'Lagerhallen',
                  description: 'Wirtschaftliche Lagerlösungen mit Holz-Tragwerken'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Holz im Gewerbebau</h2>
            
            <p>
              Holz ist längst im Gewerbebau angekommen. Große Unternehmen setzen 
              bewusst auf den nachhaltigen Baustoff – als Statement und aus 
              Überzeugung.
            </p>

            <ul className="space-y-2 my-6">
              <li>✓ <strong>Imagegewinn</strong> – Nachhaltigkeit als Unternehmenswert sichtbar machen</li>
              <li>✓ <strong>Mitarbeitergesundheit</strong> – besseres Raumklima, höhere Produktivität</li>
              <li>✓ <strong>Schnelle Bauzeit</strong> – frühere Inbetriebnahme, geringere Finanzierungskosten</li>
              <li>✓ <strong>Flexible Nutzung</strong> – Holztragwerke ermöglichen spätere Umbauten</li>
              <li>✓ <strong>Geringere Betriebskosten</strong> – exzellente Dämmwerte</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Große Spannweiten möglich</h3>
              <p className="text-gray-300 mb-4">
                Moderne Holzwerkstoffe und Ingenieurholzbau ermöglichen stützenfreie 
                Räume von über 30 Metern. Ideal für:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Produktions- und Montagehallen</li>
                <li>• Sporthallen und Veranstaltungsräume</li>
                <li>• Großraumbüros und Coworking Spaces</li>
                <li>• Ausstellungshallen und Showrooms</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Von der Planung bis zum Einzug</h2>
            
            <p>
              Als Komplettanbieter übernehmen wir alle Leistungen aus einer Hand – 
              von der ersten Skizze bis zur schlüsselfertigen Übergabe.
            </p>

            <ol className="space-y-2 my-6">
              <li>1. Bedarfsanalyse und Machbarkeitsstudie</li>
              <li>2. Entwurf und Kostenrahmen</li>
              <li>3. Genehmigungsplanung</li>
              <li>4. Ausführungsplanung und Ausschreibung</li>
              <li>5. Rohbau und Ausbau</li>
              <li>6. Technische Gebäudeausrüstung</li>
              <li>7. Abnahme und Übergabe</li>
            </ol>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Referenzen besichtigen</h3>
              <p className="text-amber-700">
                Überzeugen Sie sich selbst von der Qualität unserer Gewerbebauten. 
                Wir arrangieren gerne eine Besichtigung realisierter Projekte.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Projekt anfragen
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

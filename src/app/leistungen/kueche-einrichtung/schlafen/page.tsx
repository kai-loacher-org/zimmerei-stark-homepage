import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Moon, Bed, DoorClosed } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schlafen | Küche & Einrichtung | Zimmerei Stark',
  description: 'Schlafzimmermöbel nach Maß. Betten, Kleiderschränke, begehbare Ankleide – für erholsamen Schlaf.',
}

export default function SchlafenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Schlafzimmer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Schlafen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Träumen Sie schön
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Ein Drittel unseres Lebens verbringen wir im Schlafzimmer. 
              Zeit, diesen Raum besonders zu gestalten. Unsere maßgefertigten 
              Schlafzimmermöbel aus natürlichen Materialien schaffen eine 
              Atmosphäre der Ruhe.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Bed,
                  title: 'Betten',
                  description: 'Massivholzbetten in jeder Größe und Höhe'
                },
                {
                  icon: DoorClosed,
                  title: 'Schränke',
                  description: 'Kleiderschränke und begehbare Ankleiden'
                },
                {
                  icon: Moon,
                  title: 'Nachttische',
                  description: 'Passend zum Bett, mit cleveren Details'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Betten</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Massivholzbetten</strong> – in allen gängigen und Sondermaßen</li>
              <li>✓ <strong>Polsterbetten</strong> – mit Stoffbezug oder Leder</li>
              <li>✓ <strong>Boxspringbetten</strong> – Rahmen nach Maß</li>
              <li>✓ <strong>Betthäupter</strong> – als einzelnes Element</li>
              <li>✓ <strong>Bettbänke</strong> – praktisch und dekorativ</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kleiderschränke</h2>
            
            <p>
              Unsere Schränke bieten mehr als Stauraum – sie sind auf Ihre 
              Garderobe abgestimmt:
            </p>

            <ul className="space-y-2 my-6">
              <li>• Einbauschränke für jede Raumsituation</li>
              <li>• Schiebetüren oder Drehtüren</li>
              <li>• Begehbare Ankleidezimmer</li>
              <li>• Inneneinteilung nach Ihren Wünschen</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Begehbare Ankleide</h3>
              <p className="text-gray-300 mb-4">
                Der Traum vieler Bauherren: Ein eigener Raum für Kleidung, 
                Schuhe und Accessoires.
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Offene Regale und Kleiderstangen</li>
                <li>• Schubladen und Auszüge</li>
                <li>• Schmuck- und Accessoire-Aufbewahrung</li>
                <li>• Spiegel und Beleuchtung</li>
                <li>• Sitzmöglichkeit</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Gesundes Schlafklima</h3>
              <p className="text-amber-700">
                Holz reguliert die Luftfeuchtigkeit und schafft ein angenehmes 
                Raumklima. Wir verwenden nur emissionsarme Materialien und 
                Oberflächen für Ihre Gesundheit.
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

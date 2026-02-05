import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sofa, Tv, BookOpen, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wohnen | Küche & Einrichtung | Zimmerei Stark',
  description: 'Wohnmöbel nach Maß. Regale, Sideboards, TV-Möbel und mehr – individuell gefertigt für Ihr Zuhause.',
}

export default function WohnenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/wohnen-hero.jpg"
          alt="Wohnbereich"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wohnen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Räume zum Wohlfühlen
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Das Wohnzimmer ist Ihr Rückzugsort. Hier entspannen Sie, 
              empfangen Gäste und verbringen Zeit mit der Familie. 
              Unsere maßgefertigten Möbel schaffen eine Atmosphäre, 
              die zu Ihnen passt.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                {
                  icon: BookOpen,
                  title: 'Regale & Bibliotheken',
                  description: 'Vom einzelnen Regal bis zur raumhohen Bücherwand'
                },
                {
                  icon: Tv,
                  title: 'TV-Möbel & Medienwände',
                  description: 'Elegante Lösungen für Technik und Stauraum'
                },
                {
                  icon: Sofa,
                  title: 'Sideboards & Kommoden',
                  description: 'Stauraum mit Stil in jeder gewünschten Größe'
                },
                {
                  icon: Flame,
                  title: 'Kaminverkleidungen',
                  description: 'Individuelle Einfassungen für Ihren Kamin'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Einbaulösungen</h2>
            
            <p>
              Nischen und Dachschrägen werden mit Einbauten optimal genutzt:
            </p>

            <ul className="space-y-2 my-6">
              <li>✓ Nischenregale – passt auf den Millimeter</li>
              <li>✓ Dachschrägenschränke – jeder Zentimeter zählt</li>
              <li>✓ Wandverkleidungen – mit integrierten Funktionen</li>
              <li>✓ Raumteiler – strukturieren ohne zu trennen</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Technik elegant versteckt</h3>
              <p className="text-gray-300 mb-4">
                Moderne Wohnzimmer sind voller Technik. Wir integrieren sie 
                unsichtbar:
              </p>
              <ul className="text-gray-400 space-y-1">
                <li>• Kabelführung und Steckdosen versteckt</li>
                <li>• Belüftete Gerätefächer</li>
                <li>• Versenkbare TV-Lösungen</li>
                <li>• Soundbar-Integration</li>
                <li>• Smart-Home-Vorbereitung</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Materialien</h2>
            
            <ul className="space-y-2 my-6">
              <li>• <strong>Massivholz:</strong> Eiche, Nussbaum, Esche, Kirsche</li>
              <li>• <strong>Furnier:</strong> edle Oberflächen auf stabilem Kern</li>
              <li>• <strong>Lack:</strong> glänzend oder matt in jeder Farbe</li>
              <li>• <strong>Kombinationen:</strong> Holz mit Glas, Metall, Leder</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">3D-Planung</h3>
              <p className="text-amber-700">
                Mit unserer 3D-Software sehen Sie Ihre neuen Möbel schon vor 
                der Fertigung im virtuellen Raum. So können Sie sicher sein, 
                dass alles perfekt passt.
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

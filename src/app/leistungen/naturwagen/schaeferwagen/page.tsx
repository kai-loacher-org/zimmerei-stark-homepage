import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, TreePine, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schäferwagen | NaturWagen | Zimmerei Stark',
  description: 'Handgefertigte Schäferwagen in traditioneller Bauweise. Für Glamping, als Gästehaus oder romantischen Rückzugsort.',
}

export default function SchaeferwagenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Schäferwagen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Schäferwagen</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Romantik auf Rädern
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Der Schäferwagen ist ein Stück deutsche Handwerksgeschichte. 
              Wir bauen diese charmanten mobilen Unterkünfte in traditioneller 
              Zimmermannskunst – mit modernem Komfort hinter historischer Optik.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              {[
                {
                  icon: Home,
                  title: 'Gästehaus',
                  description: 'Einzigartige Übernachtung für Besucher'
                },
                {
                  icon: TreePine,
                  title: 'Glamping',
                  description: 'Luxus-Camping auf Ihrem Grundstück'
                },
                {
                  icon: Heart,
                  title: 'Rückzugsort',
                  description: 'Ihr privater Platz zum Träumen'
                }
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg text-center border border-amber-200">
                  <item.icon className="w-10 h-10 text-amber-700 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Unsere Schäferwagen</h2>
            
            <ul className="space-y-2 my-6">
              <li>✓ <strong>Traditionelle Bauweise</strong> – Holzrahmen, gebogenes Dach</li>
              <li>✓ <strong>Massivholz</strong> – Lärche, Eiche oder Fichte</li>
              <li>✓ <strong>Isoliert</strong> – ganzjährig nutzbar</li>
              <li>✓ <strong>Auf Rädern</strong> – mobil, keine Baugenehmigung</li>
              <li>✓ <strong>Individuell</strong> – Ausstattung nach Wunsch</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ausstattungsoptionen</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
              {[
                'Bett (140-180cm)',
                'Küchenzeile',
                'Holzofen oder Elektroheizung',
                'Wasseranschluss',
                'Toilette (Trenn/Kompost)',
                'Dusche (optional)',
                'Stromversorgung',
                'Terrasse/Veranda',
                'Solaranlage',
                'Holzverkleidung innen'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-semibold mb-4">Keine Baugenehmigung</h3>
              <p className="text-gray-300 mb-4">
                Als mobile Einheit auf Rädern gilt der Schäferwagen in der Regel 
                nicht als bauliche Anlage. Aber Vorsicht: Die Regelungen variieren 
                je nach Bundesland und Kommune. Wir beraten Sie gerne.
              </p>
              <p className="text-gray-500 text-sm">
                Hinweis: Bei dauerhafter Aufstellung oder gewerblicher Nutzung 
                können andere Vorschriften greifen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Größen</h2>
            
            <div className="grid sm:grid-cols-3 gap-4 not-prose mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-600">S</div>
                <div className="text-sm text-gray-500">ca. 8 m² • 2 Personen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-600">M</div>
                <div className="text-sm text-gray-500">ca. 12 m² • 2-3 Personen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-600">L</div>
                <div className="text-sm text-gray-500">ca. 16 m² • 4 Personen</div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Besichtigung möglich</h3>
              <p className="text-amber-700">
                In unserer Ausstellung können Sie einen Schäferwagen live erleben. 
                Vereinbaren Sie einen Termin!
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Anfrage stellen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/leistungen/naturwagen"
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

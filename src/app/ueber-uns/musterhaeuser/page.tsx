import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, MapPin, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Musterhäuser | Über uns | Zimmerei Stark',
  description: 'Besuchen Sie unsere Musterhäuser. Erleben Sie Holzbau hautnah und lassen Sie sich inspirieren.',
}

export default function MusterhaeuserPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/musterhaus-hero.jpg" alt="Musterhäuser" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Musterhäuser</h1>
          <p className="text-xl md:text-2xl">Erleben Sie Holzbau hautnah</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Bilder sagen viel, aber selbst erleben sagt mehr. Besuchen Sie 
            unsere Musterhäuser und erfahren Sie, wie sich moderner Holzbau 
            anfühlt. Sehen Sie Qualität, Raumgefühl und Verarbeitung live.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Home, title: 'Live erleben', desc: 'Holzbau zum Anfassen' },
              { icon: MapPin, title: 'Vor Ort', desc: 'In unserer Ausstellung' },
              { icon: Calendar, title: 'Termine', desc: 'Nach Vereinbarung' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Musterhaus 2inEins</h2>
          <p>
            Unser aktuelles Musterhaus "2inEins" zeigt, wie flexibel Holzbau 
            sein kann. Das Haus vereint zwei Wohneinheiten unter einem Dach – 
            perfekt für Mehrgenerationen-Wohnen oder Wohnen mit Einliegerwohnung.
          </p>

          <div className="not-prose my-8">
            <Link
              href="/ueber-uns/musterhaeuser/2ineins"
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <h3 className="text-xl font-bold group-hover:text-amber-600 transition-colors">
                Musterhaus 2inEins
              </h3>
              <p className="text-gray-600 mt-2">
                Zwei Wohneinheiten, ein Konzept – besichtigen Sie unser Mehrgenerationen-Haus
              </p>
              <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-medium mt-4">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Besichtigung</h2>
          <p>
            Besichtigungen sind nach Terminvereinbarung möglich. So haben wir 
            Zeit, Sie persönlich zu beraten und alle Ihre Fragen zu beantworten.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Termin vereinbaren</h3>
            <p className="text-amber-700">
              Rufen Sie uns an oder nutzen Sie unser Kontaktformular. 
              Wir freuen uns auf Ihren Besuch!
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Termin vereinbaren <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ueber-uns/ausstellungen" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Zur Ausstellung
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

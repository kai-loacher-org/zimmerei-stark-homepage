import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Handshake, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner | Zimmerei Stark',
  description: 'Unsere Partner und Lieferanten. Zusammenarbeit mit führenden Herstellern für beste Qualität.',
}

const partnerKategorien = [
  {
    titel: 'Holz & Baustoffe',
    partner: ['Binderholz', 'Egger', 'Steico', 'Gutex', 'Knauf']
  },
  {
    titel: 'Fenster & Türen',
    partner: ['Internorm', 'Josko', 'Velux', 'Roto', 'Hörmann']
  },
  {
    titel: 'Küche & Geräte',
    partner: ['next125', 'Leicht', 'Miele', 'Gaggenau', 'Bora', 'Liebherr']
  },
  {
    titel: 'Haustechnik',
    partner: ['Viessmann', 'Vaillant', 'Stiebel Eltron', 'Loxone']
  },
  {
    titel: 'Beschläge & Ausstattung',
    partner: ['Blum', 'Hettich', 'Häfele', 'FSB', 'Hoppe']
  }
]

export default function PartnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/images/partner-hero.jpg"
          alt="Partner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Partner</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Gemeinsam für beste Qualität
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-12">
            Qualität beginnt beim Material. Deshalb arbeiten wir nur mit 
            ausgewählten Partnern und Lieferanten zusammen, die unsere 
            Ansprüche an Qualität und Nachhaltigkeit teilen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Handshake, title: 'Langfristig', desc: 'Verlässliche Partnerschaften' },
              { icon: Award, title: 'Qualität', desc: 'Nur geprüfte Produkte' },
              { icon: Users, title: 'Regional', desc: 'Wo möglich, aus der Region' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Unsere Partner</h2>

          <div className="space-y-8">
            {partnerKategorien.map((kategorie, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">{kategorie.titel}</h3>
                <div className="flex flex-wrap gap-3">
                  {kategorie.partner.map((partner, i) => (
                    <span 
                      key={i}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-amber-50 border-l-4 border-amber-600 p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Kooperationen</h3>
            <p className="text-amber-700">
              Wir sind Mitglied in verschiedenen Fachverbänden und Netzwerken 
              für Qualität und Nachhaltigkeit im Holzbau.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

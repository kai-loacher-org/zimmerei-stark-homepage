import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { projekte } from '@/data/content'

export const metadata: Metadata = {
  title: 'Projekte | Referenzen | Zimmerei Stark',
  description: 'Unsere realisierten Projekte. Von Kindergärten über Hotels bis zu Wohnhäusern – Holzbau auf höchstem Niveau.',
}

export default function ProjektePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://stark-inspiration.de/imgsrv/deDE/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg"
          alt="Projekte"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Projekte</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ausgewählte Referenzen unserer Arbeit
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Jedes Projekt ist einzigartig – und doch verbindet sie alle die gleiche 
            Leidenschaft für hochwertigen Holzbau. Entdecken Sie eine Auswahl unserer 
            realisierten Vorhaben.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projekte.map((projekt) => (
              <Link
                key={projekt.id}
                href={`/referenzen/projekte/${projekt.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={projekt.imageUrl || '/images/projekte/placeholder.jpg'}
                    alt={projekt.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {projekt.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                    {projekt.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {projekt.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {projekt.location}
                    </span>
                    {projekt.year && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {projekt.year}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ihr Projekt könnte hier stehen</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihr nächstes Bauprojekt verwirklichen. 
              Wir freuen uns auf Ihre Anfrage.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Projekt anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

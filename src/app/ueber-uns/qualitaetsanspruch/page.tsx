import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Qualitätsanspruch | Über uns | Zimmerei Stark',
  description: 'Unser Anspruch an Qualität. Meisterbetrieb seit 1920 mit Zertifizierungen und geprüfter Handwerksqualität.',
}

export default function QualitaetsanspruchPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image src="/images/qualitaet-hero.jpg" alt="Qualität" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Qualitätsanspruch</h1>
          <p className="text-xl md:text-2xl">Handwerk auf höchstem Niveau</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Qualität ist kein Zufall – sie ist das Ergebnis von Erfahrung, 
            Sorgfalt und dem Anspruch, immer das Beste zu geben. Seit über 
            100 Jahren steht der Name Stark für Handwerksqualität, auf die 
            Sie sich verlassen können.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
            {[
              { icon: Award, title: 'Meisterbetrieb', desc: 'Geprüfte Qualifikation' },
              { icon: Shield, title: 'Zertifiziert', desc: 'PEFC, RAL, QDF' },
              { icon: CheckCircle, title: 'Geprüft', desc: 'Regelmäßige Audits' }
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-lg text-center border border-amber-200">
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Unsere Qualitätsprinzipien</h2>
          <ul className="space-y-2">
            <li>✓ <strong>Materialauswahl</strong> – nur geprüfte, hochwertige Baustoffe</li>
            <li>✓ <strong>Fachpersonal</strong> – ausgebildete Meister und Gesellen</li>
            <li>✓ <strong>Moderne Technik</strong> – CNC-Fertigung für Präzision</li>
            <li>✓ <strong>Kontrolle</strong> – Qualitätsprüfung bei jedem Arbeitsschritt</li>
            <li>✓ <strong>Dokumentation</strong> – lückenlose Nachvollziehbarkeit</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Zertifizierungen</h2>
          <ul className="space-y-2">
            <li>• <strong>PEFC</strong> – Holz aus nachhaltiger Forstwirtschaft</li>
            <li>• <strong>RAL Gütezeichen</strong> – geprüfte Holzhausqualität</li>
            <li>• <strong>QDF</strong> – Qualitätsgemeinschaft Deutscher Fertigbau</li>
            <li>• <strong>Meisterbetrieb</strong> – in der Handwerksrolle eingetragen</li>
          </ul>

          <div className="bg-gray-900 text-white p-8 rounded-lg my-8 not-prose">
            <h3 className="text-xl font-semibold mb-4">Garantie & Service</h3>
            <p className="text-gray-300">
              Wir stehen zu unserem Handwerk: 5 Jahre Gewährleistung auf alle 
              Bauleistungen, darüber hinaus bleiben wir Ihr Ansprechpartner 
              für Service und Wartung.
            </p>
          </div>

          <div className="mt-12 flex gap-4 not-prose">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
              Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ueber-uns" className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Über uns
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

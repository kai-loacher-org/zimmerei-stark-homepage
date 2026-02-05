import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { Upload, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Online-Bewerbung",
  description: "Bewerben Sie sich online bei Zimmerei Stark - schnell und unkompliziert.",
};

export default function BewerbungPage() {
  return (
    <>
      <PageHero
        title="Online-Bewerbung"
        subtitle="Bewerben Sie sich in nur wenigen Minuten – wir freuen uns auf Sie!"
        badge="Jetzt bewerben"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Benefits */}
            <div className="bg-light rounded-2xl p-6 mb-12">
              <h3 className="font-semibold mb-4">Ihre Vorteile bei STARK:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Familiäres Arbeitsklima",
                  "Faire Vergütung",
                  "Weiterbildungsmöglichkeiten",
                  "Sichere Arbeitsplätze",
                  "Moderne Ausstattung",
                  "30 Tage Urlaub",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <h2 className="text-2xl font-display font-semibold mb-6">Bewerbungsformular</h2>

              {/* Persönliche Daten */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Persönliche Daten</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vorname *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nachname *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                    <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Straße, Hausnummer *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PLZ *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ort *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                </div>
              </div>

              {/* Bewerbung */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Ihre Bewerbung</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gewünschte Stelle *</label>
                    <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="">Bitte wählen...</option>
                      <option value="zimmerer">Zimmerer/in (m/w/d)</option>
                      <option value="schreiner">Schreiner/in (m/w/d)</option>
                      <option value="bauleiter">Bauleiter/in (m/w/d)</option>
                      <option value="technischer-zeichner">Technischer Zeichner/in (m/w/d)</option>
                      <option value="kaufmann">Kaufmann/-frau für Büromanagement (m/w/d)</option>
                      <option value="ausbildung">Ausbildung</option>
                      <option value="initiativ">Initiativbewerbung</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Frühester Eintrittstermin *</label>
                    <input type="date" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gehaltsvorstellung (brutto/Jahr)</label>
                    <input type="text" placeholder="z.B. 45.000 €" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Anschreiben / Nachricht</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none" placeholder="Erzählen Sie uns etwas über sich..."></textarea>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bewerbungsunterlagen *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        Lebenslauf, Zeugnisse, etc. hier ablegen
                      </p>
                      <p className="text-xs text-gray-400">PDF, DOC, DOCX (max. 10 MB)</p>
                      <input type="file" multiple accept=".pdf,.doc,.docx" className="hidden" />
                      <Button variant="outline-dark" size="sm" className="mt-4">
                        Dateien auswählen
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Datenschutz */}
              <div className="flex items-start gap-3">
                <input type="checkbox" required id="privacy" className="mt-1" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Ich habe die <a href="/datenschutz" className="text-primary underline">Datenschutzerklärung</a> gelesen 
                  und bin mit der Verarbeitung meiner Daten im Rahmen des Bewerbungsverfahrens einverstanden. *
                </label>
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Bewerbung absenden
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

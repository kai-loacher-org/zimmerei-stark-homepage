import { Metadata } from "next";
import { contactInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Zimmerei Stark GmbH",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-700">
        <div className="container-custom text-white">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl prose prose-lg">
            <h2>Angaben gemäß § 5 TMG</h2>
            
            <p>
              <strong>Zimmerei Stark GmbH</strong><br />
              {contactInfo.hauptsitz.street}<br />
              {contactInfo.hauptsitz.zip} {contactInfo.hauptsitz.city}
            </p>

            <p>
              Telefon: {contactInfo.hauptsitz.phone.replace("+49 ", "0")}<br />
              Telefax: {contactInfo.hauptsitz.fax?.replace("+49 ", "0")}<br />
              E-Mail: <a href={`mailto:${contactInfo.hauptsitz.email}`}>{contactInfo.hauptsitz.email}</a>
            </p>

            <h3>Vertreten durch</h3>
            <p>Geschäftsführer: Martin Stark, Gert Bachmann</p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Augsburg<br />
              Registernummer: HRB 23783
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE263147692
            </p>

            <h2>Haftungsausschluss</h2>

            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter 
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf 
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für 
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die 
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
              oder Betreiber der Seiten verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die 
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
              der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <h2>Bildquellen</h2>
            <ul>
              <li>Eigene Aufnahmen der Zimmerei Stark GmbH</li>
              <li>Adobe Stock (diverse Stockfotos)</li>
              <li>Shutterstock (diverse Stockfotos)</li>
            </ul>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur 
              Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

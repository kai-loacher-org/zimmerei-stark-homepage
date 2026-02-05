import { Metadata } from "next";
import { contactInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Zimmerei Stark GmbH",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-700">
        <div className="container-custom text-white">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl prose prose-lg">
            <h2>1. Datenschutz auf einen Blick</h2>
            
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, 
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere 
              Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf unserer Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
            </p>
            <p>
              Zimmerei Stark GmbH<br />
              {contactInfo.hauptsitz.street}<br />
              {contactInfo.hauptsitz.zip} {contactInfo.hauptsitz.city}<br />
              E-Mail: dsb@stark-inspiration.de
            </p>

            <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend 
              der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Zimmerei Stark GmbH<br />
              {contactInfo.hauptsitz.street}<br />
              {contactInfo.hauptsitz.zip} {contactInfo.hauptsitz.city}<br />
              Telefon: {contactInfo.hauptsitz.phone.replace("+49 ", "0")}<br />
              E-Mail: dsb@stark-inspiration.de
            </p>

            <h2>3. Datenerfassung auf unserer Website</h2>

            <h3>Cookies</h3>
            <p>
              Unsere Internetseiten verwenden teilweise so genannte Cookies. 
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten 
              keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
              effektiver und sicherer zu machen.
            </p>

            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen 
              in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns 
              übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht 
              vorgenommen. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 
              lit. f DSGVO.
            </p>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre 
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
              Anschlussfragen bei uns gespeichert.
            </p>

            <h2>4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
              <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Die Löschung Ihrer Daten zu verlangen</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen</li>
              <li>Der Verarbeitung zu widersprechen</li>
              <li>Ihre Daten in einem gängigen Format zu erhalten (Datenportabilität)</li>
            </ul>

            <h2>5. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde 
              über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>

            <h2>6. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit 
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder 
              um Änderungen unserer Leistungen umzusetzen.
            </p>
            <p>
              <em>Stand: Februar 2026</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

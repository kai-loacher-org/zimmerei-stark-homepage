import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Zimmerei Stark',
  description: 'Allgemeine Geschäftsbedingungen der Zimmerei Stark GmbH.',
}

export default function AGBPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, 
            Lieferungen und sonstigen Leistungen der Zimmerei Stark GmbH.
          </p>
          <p>
            Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, 
            es sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
          </p>

          <h2>§ 2 Angebote und Vertragsschluss</h2>
          <p>
            Unsere Angebote sind freibleibend. Technische Änderungen sowie 
            Änderungen in Form, Farbe und/oder Gewicht bleiben im Rahmen des 
            Zumutbaren vorbehalten.
          </p>
          <p>
            Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung 
            oder durch Ausführung der Lieferung zustande.
          </p>

          <h2>§ 3 Preise und Zahlung</h2>
          <p>
            Es gelten die am Tag des Vertragsschlusses gültigen Preise. 
            Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
          </p>
          <p>
            Zahlungen sind ohne Abzug innerhalb von 14 Tagen nach Rechnungsstellung 
            fällig, sofern nicht anders vereinbart.
          </p>

          <h2>§ 4 Lieferung und Leistung</h2>
          <p>
            Liefertermine und -fristen gelten nur dann als verbindlich, wenn sie 
            von uns ausdrücklich als verbindlich bestätigt werden.
          </p>
          <p>
            Teillieferungen sind zulässig, soweit dies für den Auftraggeber zumutbar ist.
          </p>

          <h2>§ 5 Eigentumsvorbehalt</h2>
          <p>
            Wir behalten uns das Eigentum an der gelieferten Ware bis zur 
            vollständigen Bezahlung aller Forderungen aus der Geschäftsverbindung vor.
          </p>

          <h2>§ 6 Gewährleistung</h2>
          <p>
            Für Mängel unserer Leistungen haften wir nach den gesetzlichen 
            Vorschriften, insbesondere §§ 633 ff. BGB für Werkverträge.
          </p>
          <p>
            Die Gewährleistungsfrist beträgt 5 Jahre für Bauwerke, soweit nicht 
            gesetzlich längere Fristen vorgeschrieben sind.
          </p>

          <h2>§ 7 Haftung</h2>
          <p>
            Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, 
            des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder 
            fahrlässigen Pflichtverletzung beruhen.
          </p>
          <p>
            Im Übrigen haften wir nur für Vorsatz und grobe Fahrlässigkeit.
          </p>

          <h2>§ 8 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss 
            des UN-Kaufrechts.
          </p>
          <p>
            Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist 
            unser Geschäftssitz, sofern der Auftraggeber Kaufmann ist.
          </p>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die 
            Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>

          <p className="mt-8 text-gray-500">
            Stand: Februar 2026
          </p>
        </div>
      </div>
    </div>
  )
}

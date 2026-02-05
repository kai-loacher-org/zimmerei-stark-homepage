// Zentrale Bildkonfiguration - verweist auf stark-inspiration.de
// So müssen wir keine Bilder hosten

const BASE_URL = 'https://stark-inspiration.de/imgsrv/deDE';

export const images = {
  // Allgemeine Hero-Bilder
  hero: {
    home: `${BASE_URL}/145769/1/3399734127433/teaserbox_bild_text/stark_ueber-uns.jpg`,
    leistungen: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    karriere: `${BASE_URL}/145771/1/3399733876203/teaserbox_bild_text/stark_karriere.jpg`,
  },
  
  // Placeholder für fehlende Bilder - nutzt ein existierendes Bild als Fallback
  placeholder: `${BASE_URL}/145769/1/3399734127433/teaserbox_bild_text/stark_ueber-uns.jpg`,
  
  // Kategorien - alle verweisen erstmal auf Placeholder
  // TODO: Echte Bilder von stark-inspiration.de einpflegen
  categories: {
    beratungPlanung: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    kompletthausbau: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    modulbau: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    objektbau: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    kuecheEinrichtung: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    naturwagen: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
    weitere: `${BASE_URL}/145773/1/3399734377180/teaserbox_bild_text/stark_leistungen.jpg`,
  }
};

// Hilfsfunktion: Gibt Placeholder zurück wenn kein Bild vorhanden
export function getImage(path: string): string {
  return path.startsWith('http') ? path : images.placeholder;
}

export default images;

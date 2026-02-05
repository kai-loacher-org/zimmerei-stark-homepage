import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

interface LeistungDetailProps {
  title: string;
  description: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  image: string;
  ctaText?: string;
  relatedLinks?: { label: string; href: string }[];
}

export default function LeistungDetail({
  title,
  description,
  features,
  benefits,
  image,
  ctaText = "Beratung anfragen",
  relatedLinks,
}: LeistungDetailProps) {
  return (
    <>
      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={image} alt={title} className="w-full h-full object-cover aspect-[4/3]" />
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button href="/kontakt" variant="secondary" size="lg">
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h3 className="text-xl font-semibold mb-6">Verwandte Leistungen</h3>
            <div className="flex flex-wrap gap-4">
              {relatedLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 bg-light rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  {link.label}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Interesse geweckt?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Projekt besprechen. Wir beraten Sie gerne.
          </p>
          <Button href="/kontakt" variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </>
  );
}

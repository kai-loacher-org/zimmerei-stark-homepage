import Button from "@/components/ui/Button";
import { companyStats } from "@/data/content";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-600 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent font-medium">Seit 1920</span>
              <span className="text-white/70">– Über 100 Jahre Handwerkskunst</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Individuell.
              <br />
              Nachhaltig.
              <br />
              <span className="text-accent">STARK.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-10">
              Wir bauen Wohlfühlhäuser in bester Holzbaukunst – von der Planung 
              bis zur schlüsselfertigen Übergabe. Familienunternehmen in 5. Generation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/kontakt" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                Beratung anfragen
              </Button>
              <Button 
                href="/referenzen/projekte" 
                variant="outline" 
                size="lg"
                icon={<Play size={20} />}
                iconPosition="left"
              >
                Projekte ansehen
              </Button>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <div className="text-center text-white/80 p-8">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-lg">Hero-Bild</p>
                <p className="text-sm opacity-70">Holzhaus / Team bei der Arbeit</p>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex gap-8">
                {companyStats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-gray-900 rounded-xl px-4 py-3 shadow-lg hidden lg:block">
              <div className="text-sm font-semibold">5. Generation</div>
              <div className="text-xs opacity-70">Familienunternehmen</div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 lg:hidden">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
        <span className="text-xs mb-2">Scrollen</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

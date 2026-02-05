interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, badge, image }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Optional Background Image */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block bg-white/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              {badge}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/80">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 bg-cover bg-[center_80%]" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-gsl-dark via-gsl-dark/70 to-gsl-dark/40" />
        <div className="relative z-10">
          <Image src="/logo-light.png" alt="GSL Studio" width={200} height={67} className="mb-10 mx-auto opacity-90" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Genesis Light<br /> 
            <span className="text-gsl-beige">Studio</span>
          </h1>
          <p className="text-gsl-beige/80 text-lg md:text-xl mb-2 italic font-light tracking-wide">Illuminate the World. Let Your Light Shine.</p>
          <p className="text-gsl-beige/50 text-sm mb-10 tracking-widest uppercase">Genesis 1:2-4</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/seasons" className="bg-gsl-brown/80 backdrop-blur hover:bg-gsl-beige hover:text-gsl-dark text-white px-8 py-4 rounded transition-all duration-300 text-sm tracking-wider uppercase">
              Découvrir nos saisons
            </Link>
            <Link href="/join" className="border border-gsl-beige/40 text-gsl-beige hover:bg-gsl-beige hover:text-gsl-dark px-8 py-4 rounded transition-all duration-300 text-sm tracking-wider uppercase backdrop-blur">
              Rejoindre GSL
            </Link>
          </div>
        </div>
        {/* NOUVEAU: indicateur de scroll en bas du hero (petite animation bounce) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-gsl-beige/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gsl-beige/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gsl-dark to-gsl-brown/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
          <p className="text-gsl-beige/50 text-sm tacking-widest uppercase mb-4">Ce qui nous anime</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Notre mission</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
          <p className="text-gsl-beige/90 text-lg md:text-xl leading-relaxed font-light">
            Mettre en lumière les combats invisibles. Parler de sujets dont on parle peu.
            Créer des histoires accessibles à tous. Encourager, inspirer et transmettre
            un message d&apos;espoir à travers des histoires authentiques.
          </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 px-6 bg-gsl-dark">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
          <p className="text-gsl-beige/50 text-sm tracking-widest uppercase mb-4">Nos fondations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-14">Nos valeurs</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {["Espoir", "Authenticité", "Créativité", "Excellence", "Compassion", "Collaboration"].map((valeur, i) => (
              <ScrollReveal key={valeur} delay={i * 0.1}>
              <div className="border border-gsl-beige/10 rounded-xl p-8 hover:border-gsl-beige/30 hover:bg-gsl-brown/20 transition-all duration-500 group">
                <p className="text-gsl-beige font-display text-xl group-hover:text-white transition-colors duration-300">{valeur}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gsl-dark to-gsl-brown" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-gsl-beige/50 text-sm tracking-widest uppercase mb-4">Fais partie de l&apos;avanture</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Rejoins l&apos;aventure</h2>
            <p className="text-gsl-beige/80 text-lg mb-10 font-light">Tu es passionné par le cinéma et le storytelling ? On te cherche!
            </p>
            <Link href="/join" className="bg-gsl-dark hover:bg-gsl-beige hover:text-gsl-dark text-white px-8 py-4 rounded text-lg transition">
              Postuler maintenant
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
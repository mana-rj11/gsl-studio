import ScrollReveal from "@/components/ScrollReveal";
export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 bg-gsl-brown text-center relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-bg.jpg')", backgroundPosition: "center 35%" }} />
        <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">À propos</h1>
        <p className="text-gsl-beige text-lg">Qui sommes-nous ?</p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 px-6 bg-gsl-dark">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-gsl-beige text-lg leading-relaxed mb-8">
            Nous sommes une équipe d&apos;étudiants passionnés par le cinéma et le storytelling.
            Notre objectif est de créer des œuvres qui inspirent, encouragent et apportent
            de l&apos;espoir à travers des histoires authentiques.
          </p>
        </div>
        </ScrollReveal>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 bg-gsl-brown">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-display text-3xl font-bold mb-6">Notre vision</h2>
          <p className="text-gsl-beige text-lg leading-relaxed">
            Illuminer le monde avec notre lumière en racontant des histoires qui touchent
            les cœurs et donnent de l&apos;espoir. Nous voulons aussi offrir un espace où
            chacun peut exprimer ses talents et laisser sa lumière briller.
          </p>
        </div>
        </ScrollReveal>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-gsl-dark">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-display text-3xl font-bold mb-6">Notre mission</h2>
          <div className="space-y-3 text-gsl-beige text-lg">
            <p>Mettre en lumière les combats invisibles.</p>
            <p>Parler de sujets dont on parle peu.</p>
            <p>Créer des histoires accessibles à tous.</p>
            <p>Encourager, inspirer et transmettre un message d&apos;espoir.</p>
            <p>Donner l&apos;opportunité à de jeunes talents de s&apos;exprimer.</p>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Valeurs */}
      <section className="py-16 px-6 bg-gsl-brown">
        <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-display text-3xl font-bold mb-10">Nos valeurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Espoir", "Authenticité", "Créativité", "Excellence", "Compassion", "Collaboration"].map((valeur) => (
              <div key={valeur} className="bg-gsl-dark rounded-lg p-6">
                <p className="text-gsl-beige font-semibold text-lg">{valeur}</p>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
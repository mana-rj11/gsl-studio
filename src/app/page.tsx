import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-gsl-dark">
        {/* Image de fond */}
        <div className="absolute inset-0 bg-cover bg-[center_80%]" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gsl-dark/60" />
        <div className="relative z-10 animate-fade-in-up">
          <Image src="/logo-light.png" alt="GSL Studio" width={300} height={100} className="mb-8 mx-auto" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Genesis Light Studio</h1>
          <p className="text-gsl-beige text-lg md:text-xl mb-2">Illuminate the World. Let Your Light Shine.</p>
          <p className="text-gsl-beige text-sm mb-8">Genesis 1:2-4</p>
          <div className="flex gap-4 justify-center">
            <Link href="/seasons" className="bg-gsl-brown hover:bg-gsl-beige hover:text-gsl-dark text-white px-6 py-3 rounded transition">
              Découvrir nos saisons
            </Link>
            <Link href="/join" className="border border-gsl-beige text-gsl-beige hover:bg-gsl-beige hover:text-gsl-dark px-6 py-3 rounded transition">
              Rejoindre GSL
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gsl-brown">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
          <p className="text-gsl-beige text-lg leading-relaxed">
            Mettre en lumière les combats invisibles. Parler de sujets dont on parle peu.
            Créer des histoires accessibles à tous. Encourager, inspirer et transmettre
            un message d&apos;espoir à travers des histoires authentiques.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 bg-gsl-dark">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-10">Nos valeurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Espoir", "Authenticité", "Créativité", "Excellence", "Compassion", "Collaboration"].map((valeur) => (
              <div key={valeur} className="border border-gsl-brown rounded-lg p-6">
                <p className="text-gsl-beige font-semibold">{valeur}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gsl-brown text-center">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Rejoins l&apos;aventure</h2>
        <p className="text-gsl-beige mb-8">Tu es passionné par le cinéma et le storytelling ? On te cherche.</p>
        <Link href="/join" className="bg-gsl-dark hover:bg-gsl-beige hover:text-gsl-dark text-white px-8 py-4 rounded text-lg transition">
          Postuler maintenant
        </Link>
      </section>
    </div>
  );
}
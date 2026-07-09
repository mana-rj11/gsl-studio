"use client";

import { useState } from "react";

export default function Join() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    email: "",
    role: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Candidature envoyée :", formData);
    setSubmitted(true);
  };

  // Style commun pour tous les champs — glow-input active le glow au focus
  const inputStyle =
    "w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none glow-input";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gsl-dark px-6">
        <div className="text-center animate-fade-in-up">
          <div className="text-6xl mb-6">🎬</div>
          <h1 className="text-4xl font-bold mb-4">Merci !</h1>
          <p className="text-gsl-beige text-lg mb-8">
            Ta candidature a bien été envoyée. On te recontacte très vite !
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ nom: "", prenom: "", age: "", email: "", role: "", experience: "", message: "" });
            }}
            className="border border-gsl-beige text-gsl-beige px-6 py-3 rounded hover:bg-gsl-beige hover:text-gsl-dark transition"
          >
            Envoyer une autre candidature
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 bg-gsl-brown text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Rejoindre GSL</h1>
        <p className="text-gsl-beige text-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Let Your Light Shine
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-gsl-dark">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-gsl-beige text-lg leading-relaxed">
            Un espace destiné aux personnes souhaitant rejoindre Genesis Light Studio
            et mettre leurs talents au service de projets inspirants.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 px-6 bg-gsl-dark">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Nom + Prénom — delay 0.4s */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Nom</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required className={inputStyle} placeholder="Ton nom" />
              </div>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Prénom</label>
                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required className={inputStyle} placeholder="Ton prénom" />
              </div>
            </div>

            {/* Âge + Email — delay 0.5s */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Âge</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required min={14} max={99} className={inputStyle} placeholder="Ton âge" />
              </div>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} placeholder="ton@email.com" />
              </div>
            </div>

            {/* Profil — delay 0.6s */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <label className="block text-gsl-beige text-sm mb-2">Profil recherché</label>
              <select name="role" value={formData.role} onChange={handleChange} required className={inputStyle}>
                <option value="">Sélectionne un profil</option>
                <option value="acteur">Acteur / Actrice</option>
                <option value="figurant">Figurant(e)</option>
                <option value="realisateur">Réalisateur / Réalisatrice</option>
                <option value="scenariste">Scénariste</option>
                <option value="cadreur">Cadreur</option>
                <option value="monteur">Monteur / Monteuse</option>
                <option value="photographe">Photographe</option>
                <option value="compositeur">Compositeur / Compositrice</option>
                <option value="designer">Designer</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Expérience — delay 0.7s */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <label className="block text-gsl-beige text-sm mb-2">Niveau d&apos;expérience</label>
              <div className="flex gap-6">
                {["Débutant", "Amateur", "Confirmé"].map((niveau) => (
                  <label key={niveau} className="flex items-center gap-2 text-gsl-beige cursor-pointer">
                    <input type="radio" name="experience" value={niveau.toLowerCase()} onChange={handleChange} required className="accent-gsl-beige" />
                    {niveau}
                  </label>
                ))}
              </div>
            </div>

            {/* Motivation — delay 0.8s */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <label className="block text-gsl-beige text-sm mb-2">Motivation</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputStyle} resize-none`} placeholder="Pourquoi veux-tu rejoindre GSL ?" />
            </div>

            {/* Bouton — delay 0.9s */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <button type="submit" className="w-full bg-gsl-beige text-gsl-dark font-semibold py-4 rounded hover:bg-white hover:shadow-lg hover:shadow-gsl-beige/20 transition-all duration-300">
                Envoyer ma candidature
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
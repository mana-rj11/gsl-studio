"use client";

import { useState } from "react";

export default function Join() {
  // useState = une variable qui, quand elle change, re-affiche le composant
  // Ici on stocke les données du formulaire dans un objet
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    email: "",
    role: "",
    experience: "",
    message: "",
  });

  // État pour savoir si le formulaire a été envoyé
  const [submitted, setSubmitted] = useState(false);

  // Cette fonction se déclenche quand un champ change
  // e = l'événement (quel champ a changé, quelle valeur)
  // e.target.name = le nom du champ (ex: "nom", "email")
  // e.target.value = ce que l'utilisateur a tapé
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // ...formData = copie tout ce qui existe déjà
    // [e.target.name]: e.target.value = remplace juste le champ modifié
  };

  // Quand l'utilisateur clique "Envoyer"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche la page de se recharger
    console.log("Candidature envoyée :", formData); // Pour tester dans la console
    setSubmitted(true); // Affiche le message de confirmation
  };

  // Si déjà envoyé, on affiche un message de confirmation
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gsl-dark px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Merci !</h1>
          <p className="text-gsl-beige text-lg">
            Ta candidature a bien été envoyée. On te recontacte très vite !
          </p>
        </div>
      </div>
    );
  }

  // Le formulaire principal
  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 bg-gsl-brown text-center">
        <h1 className="text-4xl font-bold mb-4">Rejoindre GSL</h1>
        <p className="text-gsl-beige text-lg">Let Your Light Shine</p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-gsl-dark">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gsl-beige text-lg leading-relaxed">
            Un espace destiné aux personnes souhaitant rejoindre Genesis Light Studio
            et mettre leurs talents au service de projets inspirants.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 px-6 bg-gsl-dark">
        <div className="max-w-2xl mx-auto">
          {/* 
            <form> regroupe tous les champs
            onSubmit = quand on clique le bouton Envoyer
          */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Ligne nom + prénom côte à côte sur desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none focus:border-gsl-beige"
                  placeholder="Ton nom"
                />
              </div>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none focus:border-gsl-beige"
                  placeholder="Ton prénom"
                />
              </div>
            </div>

            {/* Ligne âge + email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Âge</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none focus:border-gsl-beige"
                  placeholder="Ton âge"
                />
              </div>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none focus:border-gsl-beige"
                  placeholder="ton@email.com"
                />
              </div>
            </div>

            {/* 
              <select> = menu déroulant
              Chaque <option> = un choix possible
            */}
            <div>
              <label className="block text-gsl-beige text-sm mb-2">Profil recherché</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white focus:outline-none focus:border-gsl-beige"
              >
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

            {/* Radio buttons = un seul choix possible parmi plusieurs */}
            <div>
              <label className="block text-gsl-beige text-sm mb-2">Niveau d&apos;expérience</label>
              <div className="flex gap-6">
                {["Débutant", "Amateur", "Confirmé"].map((niveau) => (
                  <label key={niveau} className="flex items-center gap-2 text-gsl-beige cursor-pointer">
                    <input
                      type="radio"
                      name="experience"
                      value={niveau.toLowerCase()}
                      onChange={handleChange}
                      required
                      className="accent-gsl-beige"
                    />
                    {niveau}
                  </label>
                ))}
              </div>
            </div>

            {/* 
              <textarea> = champ de texte multi-lignes
              rows={4} = hauteur de 4 lignes
            */}
            <div>
              <label className="block text-gsl-beige text-sm mb-2">Motivation</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none focus:border-gsl-beige resize-none"
                placeholder="Pourquoi veux-tu rejoindre GSL ?"
              />
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="w-full bg-gsl-beige text-gsl-dark font-semibold py-4 rounded hover:bg-white transition"
            >
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
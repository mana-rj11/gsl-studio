"use client";

import { useState } from "react";
import { Mail, AtSign, Send, ExternalLink } from "lucide-react";
// import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", formData);
    setSubmitted(true);
  };

  const inputStyle =
    "w-full bg-gsl-brown border border-gsl-beige/30 rounded px-4 py-3 text-white placeholder-gsl-beige/50 focus:outline-none glow-input";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gsl-dark px-6">
        <div className="text-center">
          <Send size={48} className="text-gsl-beige mx-auto mb-6" />
          <h1 className="font-display text-4xl font-bold mb-4">Message envoyé !</h1>
          <p className="text-gsl-beige text-lg">On te répond très vite.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/solitude-bg.jpg')" }} />
        <div className="absolute inset-0 bg-gsl-dark/40" />
        <div className="relative z-10">
          <p className="text-gsl-beige/50 text-sm tracking-widest uppercase mb-4 animate-fade-in-up">Une question ? Écris-nous !</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold animate-fade-in-up">Contact</h1>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="py-20 px-6 bg-gsl-dark">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center animate-fade-in-up">Nos coordonnées</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-in-up">
            <a href="mailto:genesislight.studio@outlook.com" className="flex items-center gap-4 group p-4 rounded-lg border border-gsl-beige/20 hover:border-gsl-beige hover:bg-gsl-brown/50 transition-all duration-300">
              <Mail size={28} className="text-gsl-beige group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-xs text-gsl-beige/60">Email</p>
                <p className="text-gsl-beige group-hover:text-white transition">genesislight.studio@outlook.com</p>
              </div>
            </a>
            <a href="https://www.instagram.com/genesis.light.studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-lg border border-gsl-beige/20 hover:border-gsl-beige hover:bg-gsl-brown/50 transition-all duration-300">
              <AtSign size={28} className="text-gsl-beige group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <div>
                <p className="text-xs text-gsl-beige/60">Instagram</p>
                <div className="flex items-center gap-2">
                  <p className="text-gsl-beige group-hover:text-white transition">@genesis.light.studio</p>
                  <ExternalLink size={14} className="text-gsl-beige/0 group-hover:text-gsl-beige transition-all duration-300" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 px-6 bg-gsl-brown">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center animate-fade-in-up">
            Envoie un message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Nom</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required className={inputStyle} placeholder="Ton nom" />
              </div>
              <div>
                <label className="block text-gsl-beige text-sm mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} placeholder="ton@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-gsl-beige text-sm mb-2">Sujet</label>
              <input type="text" name="sujet" value={formData.sujet} onChange={handleChange} required className={inputStyle} placeholder="De quoi s'agit-il ?" />
            </div>
            <div>
              <label className="block text-gsl-beige text-sm mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputStyle} resize-none`} placeholder="Ton message..." />
            </div>
            <div>
              <button type="submit" className="w-full bg-gsl-dark text-white font-semibold py-4 rounded hover:bg-gsl-beige hover:text-gsl-dark hover:shadow-lg hover:shadow-gsl-beige/20 transition-all duration-300">
                Envoyer
              </button>
            </div>
          </form>
          </div>
      </section>
        </div>
    );
  }
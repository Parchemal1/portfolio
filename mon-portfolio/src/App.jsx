import React, { useState } from 'react';
import { Briefcase, Code, User, ChevronRight, X, Target, Cpu, CheckCircle } from 'lucide-react';

const App = () => {
  // État pour gérer le projet sélectionné dans la modale[cite: 5]
  const [selectedProject, setSelectedProject] = useState(null);

  // Liste structurée des compétences pour affichage avec logos
  const categoriesCompetences = [
    {
      title: "Backend & Data",
      items: [
        { name: "Java", logo: "/assets/skills/java.png" },
        { name: "Spring Boot", logo: "/assets/skills/springboot.png" },
        { name: "PHP", logo: "/assets/skills/php.png" },
        { name: "Python", logo: "/assets/skills/python.png" }
      ]
    },
    {
      title: "Bases de Données",
      items: [
        { name: "MySQL", logo: "/assets/skills/mysql.png" },
        { name: "MongoDB", logo: "/assets/skills/mongodb.png" }
      ]
    },
    {
      title: "Frontend",
      items: [
        { name: "React", logo: "/assets/skills/react.png" },
        { name: "HTML5", logo: "/assets/skills/html5.png" },
        { name: "CSS3", logo: "/assets/skills/css3.png" },
        { name: "JavaScript", logo: "/assets/skills/javaScript.png" }
      ]
    },
    {
      title: "Outils & Architecture",
      items: [
        { name: "GitHub", logo: "/assets/skills/github.png" },
        { name: "Git", logo: "/assets/skills/git.png" },
        { name: "Bash", logo: "/assets/skills/bash.png" },
        { name: "Linux", logo: "/assets/skills/linux.png" },
        { name: "AWS", logo: "/assets/skills/aws.png" },
        { name: "Docker", logo: "/assets/skills/docker.png" }
      ]
    }
  ];

  // Liste des projets avec les détails pour la modale[cite: 5]
  const projets = [
    {
      id: 'pomona',
      title: "Alternance : CRM Presto 2",
      subtitle: "Groupe Pomona",
      description: "Conception et développement d'API REST sous Architecture Hexagonale au sein du pôle Domaine Front.",
      image: "/assets/projets/pomona_crm.png",
      but: "Moderniser le système d'information de vente en créant un nouveau CRM unifié pour centraliser et sécuriser l'ensemble des processus de gestion des prospects et clients (Customer Drafts)." +
          " Améliorant ainsi la prise de commande le suivi des client, les alertes, permettant au groupe de rester compétitif sur le marché",
      tech: ["Java 21", "Spring Boot", "Architecture Hexagonale", "Docker", "WSL 2", "JUnit 5", "Mockito", "Wiremock", "AWS CLI/SAM"],
      realisations: [
        "Développement complet des endpoints REST (POST, GET, DELETE) pour le cycle de vie du Customer Draft.",
        "Mise en place de mécanismes de pagination, filtrage avancé et objets de projection pour optimiser les performances réseau.",
        "Implémentation de fonctionnalités avancées : clonage de draft, signature/validation métier et suppression logique (Soft Delete).",
        "Conception d'une stratégie de tests robuste couvrant 40% du temps de développement (tests unitaires et intégration de bout en bout avec Wiremock)."
      ]
    },
    {
      id: 'buvette',
      title: "Gestion de Buvette",
      subtitle: "Projet Académique",
      description: "Application web complète de gestion de stocks et de ventes pour un système de rafraîchissements multi-buvettes.",
      image: "/assets/projets/buvette.png",
      but: "Fournir une interface centralisée et intuitive permettant aux administrateurs de piloter les approvisionnements, de suivre les ventes en temps réel et de gérer les droits d'accès des serveurs.",
      tech: ["PHP", "SQL (MySQL)", "Architecture MVC", "HTML5", "CSS3", "JavaScript"],
      realisations: [
        "Modélisation et implémentation de la base de données relationnelle (gestion des stocks, produits, utilisateurs).",
        "Développement de la logique métier selon l'architecture logicielle MVC pour séparer proprement les vues de l'accès aux données.",
        "Création d'un panneau d'administration avec des tableaux de bord statistiques pour le suivi des bénéfices."
      ]
    },
    {
      id: 'echecs',
      title: "Jeu d'échecs",
      subtitle: "Projet Académique",
      description: "Développement d'un jeu d'échecs fonctionnel respectant l'intégralité des règles officielles.",
      image: "/assets/projets/echec.jpg",
      but: "Concevoir un moteur de jeu d'échecs robuste en appliquant les principes rigoureux de la programmation orientée objet.",
      tech: ["Java", "Algorithmique avancée", "Programmation Orientée Objet (POO)"],
      realisations: [
        "Modélisation de chaque pièce et encapsulation de leurs règles de déplacement spécifiques.",
        "Gestion des états complexes du jeu : détection du clic, validation du mouvement, échec et mat, pat et roque.",
        "Conception d'une interface utilisateur claire pour suivre le tour des joueurs de façon fluide."
      ]
    },
    {
      id: 'plateforme',
      title: "Jeu de plateforme 2D (Terraria-like)",
      subtitle: "Projet Académique",
      description: "Création d'un jeu d'exploration et de survie en deux dimensions basé sur un monde modifiable.",
      image: "/assets/projets/plateforme.png",
      but: "Développer un moteur de jeu 2D gérant la génération de terrain, la physique des sauts/collisions et l'interaction avec l'environnement.",
      tech: ["Java / JavaFX ou Python", "Moteur 2D", "Gestion de la physique", "Algorithmes de génération"],
      realisations: [
        "Création d'un système de grille dynamique permettant au joueur de détruire et de poser des blocs en temps réel.",
        "Implémentation d'un moteur de physique basique pour gérer la gravité, la vitesse du personnage et la détection précise des collisions avec le sol.",
        "Gestion du rafraîchissement d'affichage (Game Loop) pour maintenir une expérience fluide."
      ]
    }
  ];

  return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">

        {/* Barre de navigation[cite: 5] */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-indigo-600 tracking-wide">PORTFOLIO</h1>
            <nav className="space-x-6 hidden md:flex">
              <a href="#experience" className="hover:text-indigo-600 font-medium transition">Expérience</a>
              <a href="#competences" className="hover:text-indigo-600 font-medium transition">Compétences</a>
              <a href="#projets" className="hover:text-indigo-600 font-medium transition">Projets</a>
            </nav>
          </div>
        </header>

        {/* Hero Section avec Image de Bannière[cite: 5] */}
        <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
          {/* L'image de bannière en arrière-plan sans le voile violet[cite: 5] */}
          <div className="absolute inset-0">
            <img
                src="/assets/banner.png"
                alt="Bannière Portfolio"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Voile neutre foncé pour s'assurer que le texte blanc reste toujours lisible */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">Parchemal Nguimgo Nguetsa</h2>
            <p className="text-xl md:text-2xl font-light text-gray-100 drop-shadow-md">Développeur Logiciel & Étudiant en BUT Informatique</p>
          </div>
        </section>

        {/* Section Expérience (Alternance)[cite: 5] */}
        <section id="experience" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-10 flex items-center text-gray-900 justify-center">
              <Briefcase className="mr-3 text-[#4A7c75]" /> Expérience Professionnelle
            </h3>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Développeur Back-end (Apprenti)</h4>
                  <p className="text-lg text-indigo-600 font-medium">Groupe Pomona • Direction des Systèmes d'Information (DSI)</p>
                </div>
                <span className="mt-2 md:mt-0 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                Projet CRM Presto 2
              </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Intégrer en tant qu'alternant au sein de la section Études de la DSI pour concevoir, implémenter et fiabiliser des API REST en micro-services. Évolution dans un environnement Agile (Scrum) avec sessions de pair programming et revues de code exigeantes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong className="text-gray-900">Architecture :</strong> Clean Code & Architecture Hexagonale (Ports & Adapters) pour isoler le domaine métier des contraintes techniques.</span>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong className="text-gray-900">Mission clé :</strong> Gestion globale du cycle de vie d'un Customer Draft (prospects / clients à l'état de brouillon).</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Compétences (Avant les projets) */}
        <section id="competences" className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-14 text-center text-[#4A7c75]">
              Mes Compétences
            </h3>

            <div className="space-y-12">
              {categoriesCompetences.map((cat, index) => (
                  <div key={index}>
                    <h4 className="text-center text-lg font-bold text-gray-600 mb-6">{cat.title}</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                      {cat.items.map((skill, idx) => (
                          <div
                              key={idx}
                              className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 w-32 h-32 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition duration-300"
                          >
                            <img
                                src={skill.logo}
                                alt={`Logo ${skill.name}`}
                                className="h-12 w-12 object-contain mb-3"
                                onError={(e) => {
                                  // Si l'image n'est pas encore téléchargée, on affiche un carré gris discret
                                  e.target.src = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                                }}
                            />
                            <span className="text-sm font-bold text-gray-800 text-center">{skill.name}</span>
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Projets (À la fin)[cite: 5] */}
        <section id="projets" className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-[#4A7c75] mb-4">
                Mes Projets
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projets.map((project) => (
                  <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition transform duration-300 flex flex-col group border border-gray-100"
                  >
                    {/* Zone Image de couverture du projet[cite: 5] */}
                    <div className="h-56 bg-gray-100 relative overflow-hidden">
                      <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition transform duration-500"
                          onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>

                    {/* Contenu textuel de la carte[cite: 5] */}
                    <div className="p-6 flex-grow flex flex-col justify-between text-center bg-gray-800">
                      <div>
                        <h4 className="text-xl font-bold text-white transition">{project.title}</h4>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pied de page[cite: 5] */}
        <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">© 2026 Parchemal Nguimgo Nguetsa. Tous droits réservés.</p>
          </div>
        </footer>

        {/* MODALE DYNAMIQUE (DÉTAILS DU PROJET AU CLIC)[cite: 5] */}
        {selectedProject && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto transition duration-300">
              <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">

                {/* Bouton Fermer[cite: 5] */}
                <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image d'illustration de la Modale[cite: 5] */}
                <div className="h-56 bg-gray-900 relative">
                  <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover opacity-60"
                      onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  {selectedProject.subtitle}
                </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Contenu détaillé du projet[cite: 5] */}
                <div className="p-6 md:p-8 space-y-8">

                  {/* Le But du Projet[cite: 5] */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-900 flex items-center">
                      <Target className="w-5 h-5 text-indigo-600 mr-2" /> Le But du Projet
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base bg-gray-50 p-4 rounded-xl border border-gray-100">
                      {selectedProject.but}
                    </p>
                  </div>

                  {/* Technologies utilisées[cite: 5] */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-900 flex items-center">
                      <Cpu className="w-5 h-5 text-indigo-600 mr-2" /> Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((technology, idx) => (
                          <span key={idx} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-lg text-xs md:text-sm font-semibold">
                      {technology}
                    </span>
                      ))}
                    </div>
                  </div>

                  {/* Réalisations et compétences développées[cite: 5] */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-gray-900 flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" /> Réalisations Clés
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.realisations.map((realisation, idx) => (
                          <li key={idx} className="flex items-start text-sm md:text-base text-gray-600">
                            <ChevronRight className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0 mt-1" />
                            <span>{realisation}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Pied de la modale[cite: 5] */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end rounded-b-2xl">
                  <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-xl text-sm hover:bg-indigo-700 transition shadow-sm"
                  >
                    Fermer l'aperçu
                  </button>
                </div>

              </div>
            </div>
        )}

      </div>
  );
};

export default App;
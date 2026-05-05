import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  LineChart,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserCheck,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const schools = [
  { name: "Polytechnique", category: "Ingenieur" },
  { name: "Mines Paris", category: "Ingenieur" },
  { name: "CentraleSupelec", category: "Ingenieur" },
  { name: "HEC Paris", category: "Commerce" },
  { name: "ESSEC", category: "Commerce" },
  { name: "ESCP", category: "Commerce" }
];

const subjects = [
  "Mathematiques",
  "Physique",
  "Economie",
  "Finance",
  "Anglais",
  "Preparation aux concours",
  "Methodologie",
  "Entretiens"
];

const teachers = [
  {
    firstName: "Camille",
    school: "Polytechnique",
    subjects: "Mathematiques, Physique",
    price: "55 EUR/h",
    rating: "4.9",
    description: "Accompagnement precis pour lycee scientifique, prepa MPSI et concours."
  },
  {
    firstName: "Adrien",
    school: "HEC Paris",
    subjects: "Economie, Entretiens",
    price: "60 EUR/h",
    rating: "5.0",
    description: "Preparation structuree aux oraux, dossiers et methodes de dissertation."
  },
  {
    firstName: "Lea",
    school: "Mines Paris",
    subjects: "Mathematiques, Methodologie",
    price: "52 EUR/h",
    rating: "4.8",
    description: "Cours courts et intensifs pour debloquer les notions difficiles."
  },
  {
    firstName: "Nicolas",
    school: "ESSEC",
    subjects: "Finance, Anglais",
    price: "58 EUR/h",
    rating: "4.9",
    description: "Suivi exigeant pour candidatures, finance d'entreprise et anglais oral."
  }
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professeurs ultra-selectionnes",
    text: "Chaque profil est verifie pour garantir un niveau academique solide et une vraie pedagogie."
  },
  {
    icon: Award,
    title: "Excellence academique",
    text: "Des etudiants issus des ecoles les plus exigeantes, capables de transmettre leurs methodes."
  },
  {
    icon: Zap,
    title: "Cours courts et efficaces",
    text: "Des sessions ciblees pour comprendre vite, corriger les blocages et gagner en autonomie."
  },
  {
    icon: MapPin,
    title: "Flexibilite",
    text: "Des cours en ligne ou en presentiel selon le rythme de l'eleve et les objectifs."
  },
  {
    icon: Target,
    title: "Objectifs ambitieux",
    text: "Lycée, prepa, universite, concours, entretiens et methodologie de travail."
  }
];

const testimonials = [
  {
    quote: "Une approche tres claire, exigeante et rassurante. Notre fils a repris confiance en maths.",
    author: "Claire M.",
    role: "Parent d'eleve en terminale"
  },
  {
    quote: "J'ai compris en deux seances ce qui bloquait depuis des semaines en microeconomie.",
    author: "Yanis B.",
    role: "Etudiant en licence"
  },
  {
    quote: "Les conseils pour les oraux etaient concrets, personnalises et directement applicables.",
    author: "Sarah L.",
    role: "Candidate aux ecoles de commerce"
  }
];

function Button({ children, variant = "primary", href = "#professeurs" }) {
  const variants = {
    primary: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black hover:shadow-premium",
    secondary: "border border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-soft"
  };

  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 ${variants[variant]}`}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ["Pourquoi", "#pourquoi"],
    ["Ecoles", "#ecoles"],
    ["Matieres", "#matieres"],
    ["Professeurs", "#professeurs"],
    ["Avis", "#avis"]
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 font-semibold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-bold text-white">T3</span>
          <span>Top3</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-ink">
              {label}
            </a>
          ))}
        </div>
        <a href="#professeurs" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-black md:inline-flex">
          Reserver
        </a>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Ouvrir le menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="grid gap-3">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-slate-700">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl lg:mt-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-amber-100 opacity-80 blur-2xl" />
      <div className="relative grid gap-4 rounded-[2rem] border border-white bg-white/80 p-4 shadow-premium backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.5rem] bg-ink p-6 text-white">
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">Selection Top3</span>
            <Sparkles className="text-gold" size={20} />
          </div>
          <p className="text-sm text-white/60">Cours disponible cette semaine</p>
          <h3 className="mt-2 text-3xl font-semibold">Maths prepa avec Camille</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Polytechnique", "MPSI", "4.9/5"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85">{item}</span>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-white p-4 text-ink">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Prochain creneau</p>
                <p className="mt-1 font-semibold">Mercredi, 18:30</p>
              </div>
              <CalendarCheck className="text-electric" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {schools.slice(0, 3).map((school) => (
            <div key={school.name} className="flex items-center justify-between rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{school.category}</p>
                <p className="mt-1 font-semibold text-ink">{school.name}</p>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">Top ecole</span>
            </div>
          ))}
          <div className="rounded-3xl bg-cloud p-5">
            <div className="flex items-center gap-3">
              <LineChart className="text-electric" />
              <div>
                <p className="font-semibold text-ink">Progression mesurable</p>
                <p className="text-sm text-slate-500">Objectifs, exercices et suivi apres chaque cours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-blue-200" : "text-electric"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/70" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <section id="hero" className="overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <GraduationCap size={16} className="text-electric" />
                Professeurs issus du top academique francais
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink md:text-7xl">
                Les meilleurs eleves des meilleures ecoles pour vous faire progresser
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Reservez des cours particuliers avec des etudiants de Polytechnique, Mines Paris, CentraleSupelec, HEC, ESSEC et ESCP.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#professeurs">Trouver un professeur</Button>
                <Button href="#cta" variant="secondary">Devenir professeur</Button>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section id="pourquoi" className="bg-cloud px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Pourquoi Top3 ?" title="Un niveau d'exigence rare, une experience simple" text="Top3 associe selection, clarte pedagogique et flexibilite pour des cours vraiment utiles." />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {reasons.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
                  <Icon className="text-electric" />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ecoles" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Ecoles" title="Six institutions d'excellence" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {schools.map((school) => (
                <article key={school.name} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{school.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-ink">{school.name}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">Top ecole</span>
                  </div>
                  <ChevronRight className="mt-8 text-slate-300 transition group-hover:translate-x-1 group-hover:text-electric" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="matieres" className="bg-ink px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle dark eyebrow="Matieres" title="Des cours cibles pour les objectifs importants" text="Matieres academiques, concours, entretiens et methodologie de travail." />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {subjects.map((subject) => (
                <div key={subject} className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5">
                  <CheckCircle2 className="shrink-0 text-gold" size={20} />
                  <span className="font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="professeurs" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Professeurs" title="Des profils verifies, choisis pour leur pedagogie" text="Quelques exemples de professeurs disponibles sur Top3." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {teachers.map((teacher) => (
                <article key={teacher.firstName} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cloud text-lg font-semibold text-ink">{teacher.firstName.slice(0, 1)}</div>
                    <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                      <Star size={15} fill="currentColor" />
                      {teacher.rating}
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{teacher.firstName}</h3>
                  <p className="mt-1 text-sm font-medium text-electric">{teacher.school}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{teacher.description}</p>
                  <div className="mt-5 rounded-2xl bg-cloud p-4">
                    <p className="text-sm font-medium text-slate-500">{teacher.subjects}</p>
                    <p className="mt-2 text-lg font-semibold text-ink">{teacher.price}</p>
                  </div>
                  <a href="#cta" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-black">
                    Reserver <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cloud px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Fonctionnement" title="Reserve en quatre etapes" />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {["Choisissez une matiere", "Selectionnez un professeur", "Reservez un creneau", "Progressez rapidement"].map((step, index) => (
                <div key={step} className="rounded-3xl bg-white p-6 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-white">{index + 1}</span>
                  <h3 className="mt-6 text-lg font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avis" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Preuve sociale</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Confiance, exigence et resultats visibles</h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["6 ecoles d'excellence", "Professeurs verifies", "Cours en ligne ou en presentiel", "Accompagnement personnalise"].map((stat) => (
                    <div key={stat} className="rounded-2xl border border-slate-200 p-5">
                      <p className="font-semibold">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {testimonials.map((testimonial) => (
                  <article key={testimonial.author} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                    <BookOpen className="text-gold" />
                    <p className="mt-4 text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>
                    <p className="mt-5 font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-ink px-6 py-16 text-center text-white shadow-premium md:px-12">
            <UserCheck className="mx-auto text-gold" size={34} />
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Pret a progresser avec les meilleurs ?</h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#professeurs" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">Reserver un cours</a>
              <a href="mailto:professeurs@top3.fr" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">Rejoindre Top3 comme professeur</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-bold text-white">T3</span>
              Top3
            </div>
            <p className="mt-3 text-sm text-slate-500">Top3 — Cours particuliers par les eleves des meilleures ecoles francaises.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            {["A propos", "Professeurs", "Matieres", "Tarifs", "Contact"].map((link) => (
              <a key={link} href="#hero" className="transition hover:text-ink">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

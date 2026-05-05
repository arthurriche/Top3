import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  DoorOpen,
  GraduationCap,
  LineChart,
  Lock,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserCheck,
  Users,
  Video,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const schools = [
  { name: "X-ENS Ulm", mark: "X-ENS", category: "Ingenieur & ENS", tone: "from-slate-950 to-blue-900" },
  { name: "Mines Paris", mark: "MINES", category: "Ingenieur", tone: "from-blue-950 to-slate-800" },
  { name: "CentraleSupelec", mark: "CS", category: "Ingenieur", tone: "from-slate-900 to-indigo-900" },
  { name: "HEC Paris", mark: "HEC", category: "Commerce", tone: "from-blue-900 to-slate-950" },
  { name: "ESSEC", mark: "ESSEC", category: "Commerce", tone: "from-slate-950 to-sky-900" },
  { name: "ESCP", mark: "ESCP", category: "Commerce", tone: "from-indigo-950 to-slate-950" }
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
    school: "X-ENS Ulm",
    subjects: "Mathematiques, Physique",
    price: 65,
    rating: "4.9",
    reviews: 48,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
    description: "Ex-khube MPSI/MP, specialisee dans les exercices difficiles et les raisonnements de concours.",
    slots: ["Mardi 18:00", "Mercredi 19:30", "Samedi 10:00"]
  },
  {
    firstName: "Adrien",
    school: "HEC Paris",
    subjects: "Economie, Entretiens",
    price: 60,
    rating: "5.0",
    reviews: 36,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    description: "Preparation structuree aux oraux, dossiers, dissertations et entretiens de motivation.",
    slots: ["Lundi 20:00", "Jeudi 18:30", "Dimanche 11:00"]
  },
  {
    firstName: "Lea",
    school: "Mines Paris",
    subjects: "Mathematiques, Methodologie",
    price: 58,
    rating: "4.8",
    reviews: 41,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    description: "Cours courts et intensifs pour debloquer les notions, reprendre confiance et travailler vite.",
    slots: ["Mercredi 17:00", "Vendredi 18:00", "Samedi 14:30"]
  },
  {
    firstName: "Nicolas",
    school: "ESSEC",
    subjects: "Finance, Anglais",
    price: 62,
    rating: "4.9",
    reviews: 29,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    description: "Suivi exigeant pour finance d'entreprise, anglais oral et preparation aux candidatures.",
    slots: ["Mardi 20:00", "Jeudi 19:00", "Samedi 16:00"]
  },
  {
    firstName: "Ines",
    school: "ESCP",
    subjects: "Entretiens, Economie",
    price: 59,
    rating: "4.9",
    reviews: 33,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    description: "Coaching clair pour les oraux, la posture, la synthese et les questions de culture economique.",
    slots: ["Lundi 18:30", "Mercredi 20:00", "Dimanche 15:00"]
  },
  {
    firstName: "Mathis",
    school: "CentraleSupelec",
    subjects: "Physique, Concours",
    price: 61,
    rating: "4.8",
    reviews: 27,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    description: "Approche tres methodique pour transformer un cours dense en automatismes de resolution.",
    slots: ["Mardi 17:30", "Vendredi 19:00", "Samedi 11:30"]
  }
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Selection stricte",
    text: "Profils verifies, parcours academique clair et entretien pedagogique avant publication."
  },
  {
    icon: Award,
    title: "Excellence visible",
    text: "Des etudiants issus de X-ENS Ulm, Mines Paris, CentraleSupelec, HEC, ESSEC et ESCP."
  },
  {
    icon: Zap,
    title: "Cours courts et efficaces",
    text: "Chaque seance cible un blocage precis, avec un plan d'action concret a la fin."
  },
  {
    icon: Users,
    title: "Kholles duo",
    text: "Deux eleves en parallele, deux salles virtuelles, un professeur qui alterne et challenge chacun."
  },
  {
    icon: Target,
    title: "Objectifs ambitieux",
    text: "Lycee, prepa, universite, concours, entretiens et methodologie de travail."
  }
];

const testimonials = [
  {
    quote: "Le format kholle a deux a ete tres efficace : assez intense, mais moins intimidant qu'un oral seul.",
    author: "Paul D.",
    role: "Eleve en ECG"
  },
  {
    quote: "Le professeur a repere le vrai probleme en dix minutes. Les exercices etaient exactement au bon niveau.",
    author: "Claire M.",
    role: "Parent d'eleve en terminale"
  },
  {
    quote: "J'ai reserve, paye et recu le lien de cours sans friction. L'experience fait tres serieuse.",
    author: "Yanis B.",
    role: "Etudiant en licence"
  }
];

const stats = ["6 ecoles d'excellence", "Professeurs verifies", "Kholles duo sur Zoom", "Paiement avant reservation"];

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
    ["Kholles", "#kholles"],
    ["Professeurs", "#professeurs"],
    ["Avis", "#avis"]
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
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

function SchoolMark({ school, compact = false }) {
  return (
    <div className={`grid place-items-center rounded-2xl bg-gradient-to-br ${school.tone} text-white shadow-soft ${compact ? "h-12 w-16 text-[11px]" : "h-16 w-24 text-sm"}`}>
      <span className="font-extrabold tracking-wide">{school.mark}</span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl lg:mt-0">
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(201,164,92,0.20),transparent_28%)]" />
      <div className="relative grid gap-4 rounded-[2rem] border border-white bg-white/82 p-4 shadow-premium backdrop-blur md:grid-cols-[1.02fr_0.98fr]">
        <div className="overflow-hidden rounded-[1.5rem] bg-ink text-white">
          <img src={teachers[0].image} alt="" className="h-52 w-full object-cover opacity-95" />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">Selection Top3</span>
              <Sparkles className="text-gold" size={20} />
            </div>
            <h3 className="mt-5 text-3xl font-semibold">Kholle maths avec Camille</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {["X-ENS Ulm", "Duo possible", "4.9/5"].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Reservation</p>
                <p className="mt-1 font-semibold text-ink">Mercredi, 19:30</p>
              </div>
              <CalendarCheck className="text-electric" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-cloud p-4">
                <Video className="text-electric" size={19} />
                <p className="mt-2 text-sm font-semibold">Zoom commun</p>
              </div>
              <div className="rounded-2xl bg-cloud p-4">
                <DoorOpen className="text-gold" size={19} />
                <p className="mt-2 text-sm font-semibold">2 salles privees</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {schools.slice(0, 4).map((school) => (
              <div key={school.name} className="rounded-3xl border border-slate-100 bg-white p-4 shadow-soft">
                <SchoolMark school={school} compact />
                <p className="mt-3 text-sm font-semibold text-ink">{school.name}</p>
              </div>
            ))}
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

function BookingModal({ teacher, onClose }) {
  const [selectedSlot, setSelectedSlot] = React.useState(teacher?.slots?.[0] ?? "");
  const [format, setFormat] = React.useState("Solo");

  if (!teacher) return null;

  const price = format === "Kholle duo" ? teacher.price + 20 : teacher.price;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/55 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[2rem] bg-white shadow-premium">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-cloud p-5 sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric">Reservation</p>
                <h3 className="mt-2 text-3xl font-semibold text-ink">{teacher.firstName}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">{teacher.school} - {teacher.subjects}</p>
              </div>
              <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-600 shadow-sm" aria-label="Fermer">
                <X size={18} />
              </button>
            </div>
            <img src={teacher.image} alt="" className="mt-6 h-72 w-full rounded-3xl object-cover" />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Profil verifie", "Lien Zoom envoye", "Paiement securise"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 text-sm font-semibold text-ink">
                  <CheckCircle2 className="mb-2 text-electric" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 sm:p-7">
            <p className="text-sm font-semibold text-slate-500">Format</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {["Solo", "Kholle duo"].map((item) => (
                <button key={item} onClick={() => setFormat(item)} className={`rounded-2xl border p-4 text-left transition ${format === item ? "border-ink bg-ink text-white" : "border-slate-200 bg-white text-ink hover:border-slate-300"}`}>
                  <span className="font-semibold">{item}</span>
                  <span className={`mt-1 block text-sm ${format === item ? "text-white/65" : "text-slate-500"}`}>
                    {item === "Solo" ? "Cours individuel classique" : "2 eleves, salles virtuelles alternees"}
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-slate-500">Creneau</p>
            <div className="mt-3 grid gap-3">
              {teacher.slots.map((slot) => (
                <button key={slot} onClick={() => setSelectedSlot(slot)} className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${selectedSlot === slot ? "border-electric bg-blue-50 text-ink" : "border-slate-200 hover:border-slate-300"}`}>
                  <span className="font-semibold">{slot}</span>
                  <Clock size={17} className="text-slate-400" />
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total a payer maintenant</p>
                  <p className="mt-1 text-3xl font-semibold">{price} EUR</p>
                </div>
                <CreditCard className="text-electric" />
              </div>
              <div className="mt-5 grid gap-3">
                <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Nom sur la carte" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Numero de carte" />
                <div className="grid grid-cols-2 gap-3">
                  <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="MM/AA" />
                  <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="CVC" />
                </div>
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-white transition hover:bg-black">
                <Lock size={16} />
                Payer et reserver
              </button>
              <p className="mt-3 text-center text-xs text-slate-400">Prototype sans backend : aucun paiement reel n'est effectue.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedTeacher, setSelectedTeacher] = React.useState(null);

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <section id="hero" className="overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <GraduationCap size={16} className="text-electric" />
                Cours et kholles par le top academique francais
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink md:text-7xl">
                Les meilleurs eleves des meilleures ecoles pour vous faire progresser
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Reservez un cours particulier ou une kholle duo avec des etudiants de X-ENS Ulm, Mines Paris,
                CentraleSupelec, HEC, ESSEC et ESCP.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#professeurs">Trouver un professeur</Button>
                <Button href="#kholles" variant="secondary">Voir les kholles duo</Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-5 border-t border-slate-200 pt-7">
                {["Professeurs verifies", "Paiement en avance", "Zoom ou presentiel"].map((item) => (
                  <p key={item} className="text-sm font-semibold text-slate-600">{item}</p>
                ))}
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section id="pourquoi" className="bg-cloud px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Pourquoi Top3 ?" title="Un niveau d'exigence rare, une experience simple" text="Top3 associe selection, clarte pedagogique et formats intensifs pour des cours vraiment utiles." />
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
            <SectionTitle eyebrow="Ecoles" title="Des profils issus d'institutions d'elite" text="Des cartes textuelles premium remplacent les logos officiels pour eviter l'usage d'actifs proteges." />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {schools.map((school) => (
                <article key={school.name} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <SchoolMark school={school} />
                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">Top ecole</span>
                  </div>
                  <p className="mt-6 text-sm font-medium text-slate-500">{school.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{school.name}</h3>
                  <ChevronRight className="mt-8 text-slate-300 transition group-hover:translate-x-1 group-hover:text-electric" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kholles" className="bg-ink px-5 py-20 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Kholles duo</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Deux eleves, deux salles virtuelles, un professeur qui alterne
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Les deux eleves rejoignent un Zoom commun. Chacun passe ensuite dans sa salle virtuelle.
                Le professeur circule entre les deux salles pour interroger, corriger et relancer le travail.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#professeurs" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
                  Reserver une kholle <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Zoom commun", "Brief, consignes et debrief final avec les deux eleves.", Video],
                ["Salle A", "Premier eleve interroge sur une question ciblee.", DoorOpen],
                ["Salle B", "Deuxieme eleve travaille puis passe a l'oral.", DoorOpen],
                ["Rotation professeur", "Le professeur alterne, corrige et compare les methodes.", Users]
              ].map(([title, text, Icon]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <Icon className="text-gold" />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="matieres" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Matieres" title="Des cours cibles pour les objectifs importants" text="Matieres academiques, concours, entretiens et methodologie de travail." />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {subjects.map((subject) => (
                <div key={subject} className="flex min-h-20 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                  <CheckCircle2 className="shrink-0 text-gold" size={20} />
                  <span className="font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="professeurs" className="bg-cloud px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Professeurs" title="Cliquez sur un profil, choisissez un creneau, payez en avance" text="Les donnees sont fictives pour le prototype, mais le parcours reproduit une reservation premium." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {teachers.map((teacher) => (
                <button key={teacher.firstName} onClick={() => setSelectedTeacher(teacher)} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <div className="relative h-64 overflow-hidden">
                    <img src={teacher.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-amber-700 backdrop-blur">
                      <Star size={15} fill="currentColor" />
                      {teacher.rating} ({teacher.reviews})
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-ink">{teacher.firstName}</h3>
                        <p className="mt-1 text-sm font-medium text-electric">{teacher.school}</p>
                      </div>
                      <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-ink">{teacher.price} EUR/h</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{teacher.description}</p>
                    <div className="mt-5 rounded-2xl bg-cloud p-4">
                      <p className="text-sm font-medium text-slate-500">{teacher.subjects}</p>
                    </div>
                    <span className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-black">
                      Voir les creneaux <ArrowRight size={16} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Fonctionnement" title="Reserve en quatre etapes" />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {["Choisissez une matiere", "Selectionnez un professeur", "Payez votre creneau", "Progressez rapidement"].map((step, index) => (
                <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-white">{index + 1}</span>
                  <h3 className="mt-6 text-lg font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avis" className="bg-cloud px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Avis fictifs</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Une preuve sociale claire pour rassurer parents et etudiants</h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <Building2 className="mb-3 text-electric" size={19} />
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

        <section id="cta" className="px-5 py-20 lg:px-8">
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
      <BookingModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

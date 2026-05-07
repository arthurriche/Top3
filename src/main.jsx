import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  CreditCard,
  DoorOpen,
  FileUp,
  LineChart,
  Lock,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Video,
  X,
  Zap
} from "lucide-react";
import { isSupabaseConfigured, supabase } from "./lib/supabase";
import "./styles.css";

const schools = [
  {
    name: "X-ENS Ulm",
    mark: "X-ENS",
    category: "Ingenieur & ENS",
    description: "Association des deux references les plus exigeantes du parcours scientifique francais : excellence mathematique, culture scientifique profonde et preparation aux concours les plus selectifs.",
    strengths: ["Mathematiques avancees", "Physique", "Rigueur de concours"],
    logos: [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/%C3%89cole_polytechnique_signature.svg",
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo_%C3%89cole_normale_sup%C3%A9rieure_-_PSL_(ENS-PSL).svg"
    ]
  },
  {
    name: "Mines Paris",
    mark: "MINES",
    category: "Ingenieur",
    description: "Grande ecole d'ingenieurs reconnue pour son exigence scientifique, son ouverture aux enjeux industriels et sa capacite a former des profils analytiques tres complets.",
    strengths: ["Sciences appliquees", "Methodes de travail", "Problemes ouverts"],
    logos: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Logo_Mines_Paris_-_PSL.png"]
  },
  {
    name: "CentraleSupelec",
    mark: "CS",
    category: "Ingenieur",
    description: "Ecole d'ingenieurs de reference pour les mathematiques, la physique, l'informatique et les sciences de l'entreprise, avec une forte culture concours.",
    strengths: ["Physique", "Informatique", "Preparation prepa"],
    logos: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Ecole_Centrale_Supelec_logo.svg"]
  },
  {
    name: "HEC Paris",
    mark: "HEC",
    category: "Commerce",
    description: "Institution phare du management en France, reconnue pour l'exigence de ses admissions, ses parcours en finance, strategie et entrepreneuriat.",
    strengths: ["Entretiens", "Economie", "Finance"],
    logos: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/HEC_Paris.svg"]
  },
  {
    name: "ESSEC",
    mark: "ESSEC",
    category: "Commerce",
    description: "Grande ecole de commerce reputee pour ses parcours flexibles, son excellence en finance, marketing, conseil et preparation des oraux.",
    strengths: ["Finance", "Anglais", "Oral de motivation"],
    logos: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/ESSEC_Logo.svg"]
  },
  {
    name: "ESCP",
    mark: "ESCP",
    category: "Commerce",
    description: "Ecole de commerce historique et internationale, adaptee aux profils qui cherchent une preparation solide en economie, entretiens et parcours europeens.",
    strengths: ["Economie", "Entretiens", "Culture generale"],
    logos: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/ESCP_LOGO_CMJN.png"]
  }
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

const levels = [
  "Seconde",
  "Premiere",
  "Terminale",
  "Prepa scientifique",
  "Prepa commerce",
  "Licence",
  "Master",
  "Concours / oraux"
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
    bio: "Camille travaille avec des eleves qui visent un saut de niveau rapide : reprise des definitions, choix des bonnes idees, puis entrainement en temps limite.",
    track: "MP* - admissible X/ENS, tutrice en mathematiques",
    results: "+3,1 points de moyenne observes sur les suivis longs",
    style: "Tableau blanc, questions guidees, correction exigeante",
    level: "Terminale scientifique, MPSI, MP, PC",
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
    bio: "Adrien aide les candidats a clarifier leur trajectoire, construire des arguments solides et travailler une expression orale precise.",
    track: "HEC Paris - prepa ECG, jury blanc associatif",
    results: "24 candidats accompagnes sur oraux et entretiens",
    style: "Simulation, feedback direct, plan de progression",
    level: "Prepa ECG, admissions paralleles, licence",
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
    bio: "Lea structure les seances autour de diagnostics rapides : identifier l'erreur, reconstruire la methode, puis automatiser avec des exercices proches du controle.",
    track: "Mines Paris - ancienne PCSI/PSI",
    results: "Specialiste des remises a niveau avant DS",
    style: "Fiches methodes, exercices gradues, suivi entre cours",
    level: "Seconde a prepa scientifique",
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
    bio: "Nicolas combine rigueur technique et aisance orale : cas pratiques, vocabulaire professionnel, entrainement aux questions de recruteurs.",
    track: "ESSEC - parcours finance, experience en M&A",
    results: "Preparation aux stages, entretiens et partiels de finance",
    style: "Cas concrets, anglais professionnel, feedback oral",
    level: "Licence, master, ecoles de commerce",
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
    bio: "Ines travaille la clarte du discours et la posture : construire une reponse courte, l'illustrer, puis tenir face aux relances.",
    track: "ESCP - double parcours economie et strategie",
    results: "Suivi de candidats BCE, AST et oraux blancs",
    style: "Oral blanc, grille d'evaluation, replay des reponses",
    level: "Prepa commerce, AST, bachelor",
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
    bio: "Mathis rend la physique plus lisible : schema, lois utiles, ordre de grandeur, puis resolution propre en conditions concours.",
    track: "CentraleSupelec - filiere PSI",
    results: "Accompagnement regulier en physique et SI",
    style: "Schema de resolution, exercices chronometres, kholles duo",
    level: "Premiere, terminale, PCSI, PSI",
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
    ["Devenir prof", "#devenir-prof"],
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
    <div className={`flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/95 shadow-sm ${compact ? "h-14 w-full px-3" : "h-24 w-full px-4"}`}>
      {school.logos?.map((logo) => (
        <img
          key={logo}
          src={logo}
          alt={`Logo ${school.name}`}
          className={`${compact ? "max-h-8 max-w-[4.8rem]" : "max-h-14 max-w-[9rem]"} object-contain`}
          loading="lazy"
        />
      ))}
      {!school.logos?.length && <span className="font-extrabold tracking-wide text-ink">{school.mark}</span>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl lg:mt-0">
      <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(201,164,92,0.22),transparent_28%)]" />
      <div className="relative grid gap-4 rounded-[2rem] border border-white bg-white/88 p-4 shadow-premium backdrop-blur md:grid-cols-[1.02fr_0.98fr]">
        <div className="overflow-hidden rounded-[1.5rem] bg-ink text-white">
          <img src={teachers[0].image} alt="" className="h-52 w-full object-cover opacity-95" />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">Selection Top3</span>
              <Sparkles className="text-gold" size={20} />
            </div>
            <h3 className="mt-5 text-3xl font-semibold">Kholle maths avec Camille</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">Documents importes, objectifs renseignes, creneau confirme et paiement reserve en avance.</p>
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
          <div className="rounded-3xl border border-slate-100 bg-ink p-5 text-white shadow-soft">
            <div className="flex items-center gap-3">
              <Trophy className="text-gold" size={22} />
              <div>
                <p className="text-sm font-semibold">Profils audites</p>
                <p className="mt-1 text-xs leading-5 text-white/60">Certificat de scolarite, parcours et methodologie verifies avant publication.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {schools.slice(0, 2).map((school) => (
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

async function uploadFiles(bucket, folder, files) {
  if (!files?.length) return [];

  const uploads = [];

  for (const file of files) {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const path = `${folder}/${Date.now()}-${safeName}`;
    const { data, error } = await supabase.storage.from(bucket).upload(path, file);

    if (error) {
      throw error;
    }

    uploads.push({
      name: file.name,
      path: data.path,
      size: file.size,
      type: file.type
    });
  }

  return uploads;
}

function BookingModal({ teacher, onClose }) {
  const [selectedSlot, setSelectedSlot] = React.useState(teacher?.slots?.[0] ?? "");
  const [format, setFormat] = React.useState("Solo");
  const [submitStatus, setSubmitStatus] = React.useState(null);

  if (!teacher) return null;

  const price = format === "Kholle duo" ? teacher.price + 20 : teacher.price;

  async function handleReservationSubmit(event) {
    event.preventDefault();
    setSubmitStatus({ type: "loading", message: "Reservation en cours..." });

    if (!isSupabaseConfigured) {
      setSubmitStatus({ type: "error", message: "Supabase n'est pas configure dans l'environnement." });
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      const courseFiles = await uploadFiles(
        "course-documents",
        "reservations",
        formData.getAll("course_documents").filter((file) => file?.size > 0)
      );

      const { error } = await supabase.from("course_reservations").insert({
        teacher_name: teacher.firstName,
        teacher_school: teacher.school,
        subjects: teacher.subjects,
        format,
        slot: selectedSlot,
        price_eur: price,
        study_topics: formData.get("study_topics"),
        class_level: formData.get("class_level"),
        origin_school: formData.get("origin_school"),
        documents: courseFiles,
        payment_status: "prototype_pending"
      });

      if (error) throw error;

      setSubmitStatus({ type: "success", message: "Reservation envoyee dans Supabase." });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `Impossible d'enregistrer : ${error.message}`
      });
    }
  }

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
            <div className="mt-5 rounded-3xl bg-white p-5">
              <p className="text-sm font-semibold text-ink">Profil detaille</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{teacher.bio}</p>
              <div className="mt-5 grid gap-3">
                {[
                  ["Parcours", teacher.track],
                  ["Niveaux", teacher.level],
                  ["Methode", teacher.style],
                  ["Resultats", teacher.results]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-cloud p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Profil verifie", "Lien Zoom envoye", "Paiement securise"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 text-sm font-semibold text-ink">
                  <CheckCircle2 className="mb-2 text-electric" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleReservationSubmit} className="p-5 sm:p-7">
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
              <div className="mb-6 rounded-3xl bg-cloud p-5">
                <p className="text-sm font-semibold text-ink">Informations pour preparer le cours</p>
                <div className="mt-4 grid gap-3">
                  <textarea
                    name="study_topics"
                    className="min-h-28 rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric"
                    placeholder="Sujets a travailler : chapitre, exercice, concours, type de difficulte..."
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      name="class_level"
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric"
                      placeholder="Niveau dans la classe"
                    />
                    <input
                      name="origin_school"
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric"
                      placeholder="Etablissement d'origine"
                    />
                  </div>
                  <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-4 text-sm text-slate-600 transition hover:border-electric">
                    <span className="flex items-center gap-3">
                      <FileUp className="text-electric" size={18} />
                      Ajouter documents du cours, DM, annales ou copies
                    </span>
                    <input name="course_documents" type="file" multiple className="hidden" />
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total a payer maintenant</p>
                  <p className="mt-1 text-3xl font-semibold">{price} EUR</p>
                </div>
                <CreditCard className="text-electric" />
              </div>
              <div className="mt-5 grid gap-3">
                <input name="card_name" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Nom sur la carte" />
                <input name="card_number" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Numero de carte" />
                <div className="grid grid-cols-2 gap-3">
                  <input name="card_expiry" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="MM/AA" />
                  <input name="card_cvc" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="CVC" />
                </div>
              </div>
              <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-white transition hover:bg-black">
                <Lock size={16} />
                {submitStatus?.type === "loading" ? "Envoi..." : "Payer et reserver"}
              </button>
              {submitStatus && (
                <p className={`mt-3 text-center text-xs ${submitStatus.type === "error" ? "text-red-500" : submitStatus.type === "success" ? "text-emerald-600" : "text-slate-400"}`}>
                  {submitStatus.message}
                </p>
              )}
              <p className="mt-3 text-center text-xs text-slate-400">Prototype sans backend : aucun paiement reel n'est effectue.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedTeacher, setSelectedTeacher] = React.useState(null);
  const [teacherSignupStatus, setTeacherSignupStatus] = React.useState(null);
  const [hasAutoEntrepreneurStatus, setHasAutoEntrepreneurStatus] = React.useState("no");
  const [searchSubject, setSearchSubject] = React.useState(subjects[0]);
  const [searchLevel, setSearchLevel] = React.useState(levels[0]);

  async function handleTeacherSignupSubmit(event) {
    event.preventDefault();
    setTeacherSignupStatus({ type: "loading", message: "Creation du profil en cours..." });

    if (!isSupabaseConfigured) {
      setTeacherSignupStatus({ type: "error", message: "Supabase n'est pas configure dans l'environnement." });
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      const certificateFiles = await uploadFiles(
        "teacher-certificates",
        "applications",
        formData.getAll("certificate").filter((file) => file?.size > 0)
      );

      const { error } = await supabase.from("teacher_applications").insert({
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        school: formData.get("school"),
        profile: formData.get("profile"),
        hourly_rate: formData.get("hourly_rate"),
        availability: formData.get("availability"),
        has_auto_entrepreneur_status: formData.get("has_auto_entrepreneur_status") === "yes",
        auto_entrepreneur_identifier: formData.get("auto_entrepreneur_identifier"),
        needs_auto_entrepreneur_setup: formData.get("has_auto_entrepreneur_status") !== "yes",
        certificates: certificateFiles,
        status: "pending_review"
      });

      if (error) throw error;

      setTeacherSignupStatus({ type: "success", message: "Profil professeur envoye dans Supabase." });
      event.currentTarget.reset();
    } catch (error) {
      setTeacherSignupStatus({
        type: "error",
        message: `Impossible d'enregistrer : ${error.message}`
      });
    }
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <section id="hero" className="hero-surface overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
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
              <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white/90 p-4 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold text-ink">Trouver le bon professeur</p>
                <div className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Matiere</span>
                    <select
                      value={searchSubject}
                      onChange={(event) => setSearchSubject(event.target.value)}
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-ink outline-none transition focus:border-electric"
                    >
                      {subjects.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Niveau</span>
                    <select
                      value={searchLevel}
                      onChange={(event) => setSearchLevel(event.target.value)}
                      className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-ink outline-none transition focus:border-electric"
                    >
                      {levels.map((level) => (
                        <option key={level}>{level}</option>
                      ))}
                    </select>
                  </label>
                  <a href="#professeurs" className="inline-flex h-12 items-center justify-center self-end rounded-2xl bg-ink px-5 text-sm font-semibold text-white transition hover:bg-black">
                    Rechercher
                  </a>
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Recherche : <span className="font-semibold text-ink">{searchSubject}</span> pour <span className="font-semibold text-ink">{searchLevel}</span>
                </p>
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
            <SectionTitle eyebrow="Ecoles" title="Des profils issus d'institutions d'elite" text="Les professeurs doivent attester leur appartenance a une ecole eligible avant de publier leur profil." />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {schools.map((school) => (
                <article key={school.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <SchoolMark school={school} />
                  <p className="mt-6 text-sm font-medium text-slate-500">{school.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{school.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{school.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {school.strengths.map((strength) => (
                      <span key={strength} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {strength}
                      </span>
                    ))}
                  </div>
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
                    <div className="mt-5 grid gap-3">
                      <div className="rounded-2xl bg-cloud p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Matieres</p>
                        <p className="mt-1 text-sm font-semibold text-slate-700">{teacher.subjects}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-slate-200 p-4">
                          <Brain className="text-electric" size={18} />
                          <p className="mt-2 text-xs font-semibold text-slate-500">Methode</p>
                          <p className="mt-1 text-sm font-semibold text-ink">{teacher.style}</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 p-4">
                          <Trophy className="text-gold" size={18} />
                          <p className="mt-2 text-xs font-semibold text-slate-500">Experience</p>
                          <p className="mt-1 text-sm font-semibold text-ink">{teacher.reviews} avis</p>
                        </div>
                      </div>
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

        <section id="avis" className="bg-cloud px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Avis</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Des retours concrets de parents et d'etudiants</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Des temoignages precis, sobres et centres sur les progres reels obtenus avec leur professeur Top3.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <article key={testimonial.author} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                    <BookOpen className="text-gold" />
                    <p className="mt-4 text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>
                    <div className="mt-5 flex text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <p className="mt-4 font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="devenir-prof" className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">Devenir professeur</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Creez votre profil et attestez votre ecole
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Les professeurs doivent renseigner leur parcours, leurs matieres, leurs tarifs et deposer un certificat de scolarite
                pour verifier leur appartenance a une ecole eligible.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Certificat de scolarite requis", "Profil verifie avant publication", "Tarifs et disponibilites libres", "Cours solo ou kholles duo"].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <ClipboardCheck className="mb-3 text-electric" size={20} />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleTeacherSignupSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-premium sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="first_name" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Prenom" />
                <input name="last_name" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Nom" />
                <input name="email" type="email" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Email etudiant" />
                <select name="school" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-500 outline-none transition focus:border-electric">
                  <option value="">Ecole a verifier</option>
                  {schools.map((school) => (
                    <option key={school.name}>{school.name}</option>
                  ))}
                </select>
              </div>
              <textarea
                name="profile"
                className="mt-4 min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric"
                placeholder="Matieres enseignees, niveau cible, experience de kholles, methode pedagogique..."
              />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input name="hourly_rate" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Tarif horaire souhaite" />
                <input name="availability" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric" placeholder="Disponibilites types" />
              </div>
              <div className="mt-4 rounded-3xl bg-cloud p-5">
                <p className="text-sm font-semibold text-ink">Statut auto-entrepreneur</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Si vous avez deja un statut, renseignez-le. Sinon, Top3 vous accompagne pour l'ouverture avant les premiers cours.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["yes", "Oui, j'ai deja un statut"],
                    ["no", "Non, Top3 m'accompagne"]
                  ].map(([value, label]) => (
                    <label key={value} className={`cursor-pointer rounded-2xl border p-4 text-sm font-semibold transition ${hasAutoEntrepreneurStatus === value ? "border-ink bg-ink text-white" : "border-slate-200 bg-white text-ink"}`}>
                      <input
                        type="radio"
                        name="has_auto_entrepreneur_status"
                        value={value}
                        checked={hasAutoEntrepreneurStatus === value}
                        onChange={() => setHasAutoEntrepreneurStatus(value)}
                        className="sr-only"
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {hasAutoEntrepreneurStatus === "yes" && (
                  <input
                    name="auto_entrepreneur_identifier"
                    className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-electric"
                    placeholder="Numero SIRET ou information administrative"
                  />
                )}
              </div>
              <label className="mt-4 flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300 bg-cloud px-4 py-5 text-sm text-slate-600 transition hover:border-electric">
                <span className="flex items-center gap-3">
                  <FileUp className="text-electric" size={18} />
                  Importer certificat de scolarite
                </span>
                <input name="certificate" type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
              </label>
              <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-sm font-semibold text-white transition hover:bg-black">
                {teacherSignupStatus?.type === "loading" ? "Envoi..." : "Creer mon profil professeur"} <ArrowRight size={16} />
              </button>
              {teacherSignupStatus && (
                <p className={`mt-3 text-center text-xs ${teacherSignupStatus.type === "error" ? "text-red-500" : teacherSignupStatus.type === "success" ? "text-emerald-600" : "text-slate-400"}`}>
                  {teacherSignupStatus.message}
                </p>
              )}
            </form>
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
            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-400">
              Les logos et marques des ecoles sont utilises a titre d'identification. Top3 n'est pas affilie aux etablissements cites.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            {[
              ["Pourquoi", "#pourquoi"],
              ["Ecoles", "#ecoles"],
              ["Kholles", "#kholles"],
              ["Professeurs", "#professeurs"],
              ["Devenir prof", "#devenir-prof"]
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-ink">{label}</a>
            ))}
          </div>
        </div>
      </footer>
      <BookingModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

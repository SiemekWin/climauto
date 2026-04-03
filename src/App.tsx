/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Thermometer, 
  Wind, 
  Zap, 
  Search, 
  ShieldCheck, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Droplets,
  Wrench,
  Check,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SERVICES = [
  {
    title: "Serwis i naprawa",
    description: "Kompleksowa naprawa klimatyzacji w samochodach większości marek. Przeglądy okresowe i bieżąca konserwacja.",
    icon: Wrench,
  },
  {
    title: "Odgrzybianie",
    description: "Skuteczne usuwanie drobnoustrojów metodą chemiczną oraz ozonową (generator ozonu).",
    icon: Wind,
  },
  {
    title: "Napełnianie R134a",
    description: "Napełnianie układu tradycyjnym czynnikiem wraz z uzupełnieniem oleju w układzie.",
    icon: Droplets,
  },
  {
    title: "Napełnianie R1234YF",
    description: "Obsługa nowoczesnego czynnika chłodniczego stosowanego w najnowszych modelach aut.",
    icon: Thermometer,
  },
  {
    title: "Diagnostyka komputerowa",
    description: "Kasowanie błędów, naprawa sterowników oraz programowanie układu klimatyzacji.",
    icon: Zap,
  },
  {
    title: "Szczelność układu",
    description: "Profesjonalne sprawdzanie szczelności układu i lokalizacja nieszczelności.",
    icon: Search,
  },
  {
    title: "Filtr kabinowy",
    description: "Kontrola stanu oraz wymiana filtra kabinowego dla czystego powietrza w aucie.",
    icon: ShieldCheck,
  },
  {
    title: "Płukanie układu",
    description: "Specjalistyczne płukanie układu po zatarciu sprężarki dla ochrony nowych części.",
    icon: Droplets,
  },
];

const PROCEDURE_STEPS = [
  "Odessanie czynnika chłodniczego",
  "Odessanie starego oleju krążącego w układzie",
  "Sprawdzenie szczelności metodą podciśnieniową lub za pomocą azotu",
  "Osuszenie układu / wytworzenie próżni",
  "Wprowadzenie nowego oleju do układu",
  "Napełnianie czynnikiem R134a lub R1234yf",
  "Wymiana filtra kabinowego",
  "Odgrzybianie klimatyzacji",
  "Sprawdzenie działania układu klimatyzacji",
];

const PRICING = [
  { 
    service: "Odgrzybianie ozonem", 
    description: "Odgrzybianie za pomocą generatora ozonu",
    price: "100 zł" 
  },
  { 
    service: "Odgrzybianie chemiczne", 
    description: "Odgrzybianie środkiem pianotwórczym",
    price: "50 zł" 
  },
  { 
    service: "Uzupełnienie czynnika R134a", 
    description: "Usługa obejmuje: opróżnienie układu z czynnika i oleju, sprawdzenie szczelności, uzupełnienie oleju i czynnika we właściwych ilościach",
    price: "300 zł" 
  },
  { 
    service: "Ocena stanu technicznego i szczelności", 
    description: "Ciśnieniowe sprawdzenie szczelności HYDROGEN",
    price: "120 zł" 
  },
  { 
    service: "Zdiagnozowanie nieszczelności", 
    description: "Zdiagnozowanie nieszczelności układu połączone z demontażem podzespołów pojazdu",
    price: "70 zł" 
  },
  { 
    service: "Diagnostyka komputerowa", 
    description: "Kasowanie błędów, programowanie i naprawa sterowników",
    price: "100 zł" 
  },
  { 
    service: "Przegląd klimatyzacji R-1234YF", 
    description: "Odciągnięcie czynnika, próżnia, sprawdzenie szczelności, uzupełnienie oleju, napełnienie właściwą ilością czynnika. Cena + 120 zł za każde 100g czynnika.",
    price: "250 zł" 
  },
  { 
    service: "Płukanie układu po zatarciu", 
    description: "Profesjonalne płukanie układu po zatarciu sprężarki (cena ustalana indywidualnie)",
    price: "od 800 zł" 
  },
];

const REVIEWS = [
  {
    name: "Marek K.",
    text: "Pełen profesjonalizm. Pan Paweł dokładnie wytłumaczył co było nie tak. Pomiar parametrów przed i po usłudze daje pewność, że wszystko działa jak należy.",
    stars: 5,
  },
  {
    name: "Anna S.",
    text: "Szybko, czysto i rzetelnie. Klimatyzacja w końcu przestała śmierdzieć po ozonowaniu. Polecam każdemu z Pruszkowa!",
    stars: 5,
  },
  {
    name: "Piotr W.",
    text: "Najlepszy serwis w okolicy. Korzystam od lat i nigdy się nie zawiodłem. Ceny uczciwe i jasne zasady.",
    stars: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'main' | 'privacy'>('main');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const scrollTo = (id: string) => {
    if (view !== 'main') {
      setView('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo("home")}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-all duration-500">
                <Wind className="text-white w-7 h-7 animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-white shadow-sm" />
            </div>
            <div className="flex flex-col -space-y-1.5">
              <span className="text-2xl font-black tracking-tighter text-blue-600">CLIM<span className="text-slate-400">AUTO</span></span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500/60">Professional</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Nasza oferta", "Cennik", "Informacje techniczne", "Kontakt"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:+48601384456"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone size={16} />
              Zadzwoń teraz
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Home", "Nasza oferta", "Cennik", "Informacje techniczne", "Kontakt"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                  className="text-xl font-semibold text-slate-800"
                >
                  {item}
                </button>
              ))}
              <a 
                href="tel:+48601384456"
                className="bg-blue-600 text-white py-4 rounded-xl text-lg font-bold shadow-xl flex items-center justify-center gap-3"
              >
                <Phone />
                +48 601-384-456
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content or Privacy Policy */}
      {view === 'main' ? (
        <>
          {/* Hero Section */}
          <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10 rounded-l-[200px] hidden lg:block" />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-600 rounded-2xl text-xs font-black uppercase tracking-widest mb-8 shadow-sm">
                <ShieldCheck size={16} className="text-blue-500" />
                Autoryzowany Serwis Klimatyzacji
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                Chłód i czystość <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">w Twoim aucie.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
                Profesjonalny serwis klimatyzacji w Pruszkowie. Precyzyjna diagnostyka, nowoczesne czynniki i gwarancja najwyższej jakości.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="tel:+48601384456"
                  className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="group-hover:rotate-12 transition-transform" />
                  Zadzwoń teraz
                </a>
                <button 
                  onClick={() => scrollTo("nasza-oferta")}
                  className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Sprawdź ofertę
                  <ChevronRight size={22} className="text-blue-500" />
                </button>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500 font-medium">Ponad 500 zadowolonych klientów</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(37,99,235,0.2)] border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profesjonalny serwis samochodowy Climauto" 
                  className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-1000 object-cover min-h-[400px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl z-20 hidden sm:block border border-white">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Lokalizacja</p>
                    <p className="text-xl font-black text-slate-900">Pruszków, ul. Grunwaldzka 31</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="nasza-oferta" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Nasza oferta</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Kompleksowy serwis klimatyzacji</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Zajmujemy się profesjonalną obsługą układów chłodzenia w samochodach osobowych i dostawczych. Stawiamy na precyzję i nowoczesne technologie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Information Section */}
      <section id="informacje-techniczne" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Wiedza i Standardy</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Wszystko o Twojej klimatyzacji</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Regularny serwis to nie tylko komfort, ale przede wszystkim Twoje zdrowie i oszczędność na kosztownych naprawach.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Importance Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-blue-600 text-white p-10 rounded-[40px] shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <ShieldCheck size={120} />
              </div>
              <h4 className="text-2xl font-bold mb-6">Pamiętaj!</h4>
              <p className="text-blue-100 leading-relaxed mb-6">
                Regularne serwisowanie klimatyzacji zapobiega awariom i kosztownym naprawom. Koszt corocznego serwisu jest niewielki w porównaniu do kosztu naprawy uszkodzonego układu.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} />
                  </div>
                  <p className="text-sm font-medium">Oszczędność na naprawach</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} />
                  </div>
                  <p className="text-sm font-medium">Dłuższa żywotność sprężarki</p>
                </div>
              </div>
            </motion.div>

            {/* Schedule Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Calendar size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Harmonogram</h4>
              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">Raz w roku</p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Sprawdzenie działania układu</li>
                    <li>• Wymiana filtra kabinowego</li>
                    <li>• Odgrzybianie parownika</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">Co dwa lata</p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Kontrola szczelności</li>
                    <li>• Uzupełnienie czynnika i oleju</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Diagnostics Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Zap size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Diagnostyka</h4>
              <p className="text-slate-500 text-sm mb-6 italic">Podczas każdego przeglądu sprawdzamy:</p>
              <ul className="space-y-4">
                {[
                  "Uszkodzenia mechaniczne",
                  "Instalację elektryczną",
                  "Ciśnienie w układzie",
                  "Prawidłowość przepływu powietrza"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Filter Section */}
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 group">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Filtr kabinowy</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Oczyszcza powietrze z kurzu, pyłków, drobnoustrojów i zarodników grzybów. Zanieczyszczenia te mogą powodować alergie i nieprzyjemny zapach. 
                <span className="block mt-4 font-medium text-slate-900">
                  Zanieczyszczony filtr ogranicza napływ powietrza i może doprowadzić do uszkodzenia dmuchawy.
                </span>
              </p>
            </div>

            {/* Disinfection Section */}
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 group">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wind size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Odgrzybianie</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Oferujemy metodę ozonową oraz chemiczną. Ozon zapewnia całkowite odkażenie mikrobiologiczne tam, gdzie chemia nie dociera. 
                <span className="block mt-4 font-medium text-slate-900">
                  Eliminuje bakterie, wirusy, pleśń i wszelkie przykre zapachy – organiczne i nieorganiczne.
                </span>
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Procedure List */}
            <div className="order-2 lg:order-1">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Procedura przeglądu</h4>
              <div className="grid sm:grid-cols-1 gap-4">
                {PROCEDURE_STEPS.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Efficiency Section */}
            <div className="order-1 lg:order-2">
              <div className="bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
                <Droplets className="w-16 h-16 mb-8 text-blue-400 opacity-50" />
                <h4 className="text-3xl font-bold mb-8 leading-tight">Szczelność i smarowanie</h4>
                <div className="space-y-8">
                  <div>
                    <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Wydajność układu</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Ubytek 50% czynnika sprawia, że klimatyzacja przestaje chłodzić. Regularne uzupełnianie R134a/R1234yf gwarantuje pełną wydajność i regulację temperatury.
                    </p>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Ochrona sprężarki</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Olej w układzie smaruje sprężarkę. Praca bez smarowania prowadzi do zatarcia, którego naprawa jest niezwykle kosztowna i często wymaga wymiany całego podzespołu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Przejrzyste ceny</h2>
            <h3 className="text-4xl font-extrabold mb-4">Cennik usług</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Wszystkie podane ceny są kwotami netto. Do ceny należy doliczyć 23% VAT. Wystawiamy dokumenty potwierdzające zakres wykonanych prac.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-800 rounded-[32px] overflow-hidden shadow-2xl border border-slate-700">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-700/50">
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-slate-300">Usługa</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-slate-300 text-right">Cena (netto)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {PRICING.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-8 py-5">
                      <div className="font-medium text-white">{item.service}</div>
                      {item.description && <div className="text-xs text-slate-400 mt-1">{item.description}</div>}
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-blue-400 whitespace-nowrap">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Opinie</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Co mówią nasi klienci?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-slate-900">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Kontakt</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Napisz do nas</h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const subject = `Wiadomość ze strony od ${formData.get('name')}`;
                    const body = formData.get('message');
                    window.location.href = `mailto:info@climauto.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body as string)}`;
                  }}
                  className="space-y-4 mb-12"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Imię i nazwisko" 
                      required 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Twój e-mail" 
                      required 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <textarea 
                    name="message" 
                    placeholder="W czym możemy pomóc?" 
                    rows={4} 
                    required 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    Wyślij wiadomość
                    <ChevronRight size={20} />
                  </button>
                </form>

                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <a href="tel:+48601384456" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      +48 601-384-456
                    </a>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:info@climauto.pl" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      info@climauto.pl
                    </a>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      ul. Grunwaldzka 31, Pruszków
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative min-h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.84364716943!2d20.80385437713437!3d52.1735165619183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193077395646f3%3A0x6b4907106096739a!2sGrunwaldzka%2031%2C%2005-800%20Pruszk%C3%B3w!5e0!3m2!1spl!2spl!4v1712150000000!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

        </>
      ) : (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-slate-100"
            >
              <button 
                onClick={() => setView('main')}
                className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all"
              >
                <X size={20} className="rotate-45" />
                Powrót do strony głównej
              </button>
              
              <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">Polityka Prywatności</h1>
              
              <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">I Informacje ogólne</h2>
                  <p>Niniejsza Polityka Prywatności określa sposób pozyskiwania, przetwarzania oraz zabezpieczania danych osobowych w rozumieniu ustawy o ochronie danych osobowych z dnia 29 sierpnia 1997 roku (Dz.U. Nr 133, poz. 883 z póź. zm.) oraz ustawą o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (Dz.U. Nr 144, poz. 1204 z póź. zm.).</p>
                  <p>Właścicielem strony internetowej www.climauto.pl oraz administratorem danych osobowych jest Vagservice Baranek Paweł; 05-802 Pruszków, ul. Grunwaldzka 31; NIP: 5271704460.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">II Dane osobowe</h2>
                  <p>Serwis zbiera informacje podane dobrowolnie przez użytkownika. Dane osobowe są pozyskiwane podczas wysyłania maila na adres podany na stronie lub kontaktu telefonicznego.</p>
                  <p>Dane osobowe są wykorzystywane wyłącznie w celu realizacji zapytania lub usługi. Zawartość strony internetowej można przeglądać bez podawania jakichkolwiek danych osobowych.</p>
                  <p>Każda osoba, która udostępniła swoje dane osobowe ma prawo do dostępu do ich treści oraz możliwość ich poprawiania, uaktualniania, uzupełniania, jak i również żądania zaprzestania przetwarzania danych osobowych oraz wniesienia sprzeciwu wobec przetwarzania danych osobowych. Wymienione czynności można dokonać poprzez wysłanie stosownego oświadczenia na adres e-mail: info@climauto.pl.</p>
                  <p>Pozyskane przez administratora dane osobowe są przechowywane, przetwarzane i chronione zgodnie z obowiązującymi przepisami prawa. Administrator chroni zgromadzone dane osobowe korzystając ze środków zabezpieczających zbiór danych przed nieuprawnionym dostępem.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">III Informacja o plikach cookies</h2>
                  <p>Serwis korzysta z plików cookies. Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu.</p>
                  <p>Pliki cookies wykorzystywane są w celu tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości oraz określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych.</p>
                  <p>Użytkownicy Serwisu mogą dokonać zmiany ustawień w zakresie plików cookies w swojej przeglądarce. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">IV Zarządzanie plikami cookies</h2>
                  <p>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić korzystanie ze stron www.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">V Udostępnienie danych</h2>
                  <p>Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych. Operator może mieć obowiązek udzielania informacji zebranych przez Serwis upoważnionym organom na podstawie zgodnych z prawem żądań.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">VI Postanowienia końcowe</h2>
                  <p>Administrator ma prawo do zmian w niniejszej Polityce Prywatności. W sprawach nieuregulowanych niniejszą Polityką Prywatności stosuje się obowiązujące przepisy prawa polskiego.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => scrollTo("home")}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-all duration-500">
                  <Wind className="text-white w-7 h-7" />
                </div>
                <span className="text-2xl font-black tracking-tighter">
                  CLIM<span className="text-slate-400">AUTO</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Profesjonalny serwis klimatyzacji samochodowej i diagnostyki komputerowej. Gwarantujemy rzetelność i najwyższą jakość obsługi.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/vagservicepruszkow" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
                >
                  <Facebook size={20} />
                </a>
                <span className="text-sm text-slate-400 self-center">Śledź nas na Facebooku</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Szybkie linki</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => scrollTo("home")} className="hover:text-blue-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollTo("nasza-oferta")} className="hover:text-blue-400 transition-colors">Nasza oferta</button></li>
                <li><button onClick={() => scrollTo("cennik")} className="hover:text-blue-400 transition-colors">Cennik</button></li>
                <li><button onClick={() => scrollTo("informacje-techniczne")} className="hover:text-blue-400 transition-colors">Informacje techniczne</button></li>
                <li><button onClick={() => scrollTo("kontakt")} className="hover:text-blue-400 transition-colors">Kontakt</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Dane firmy</h4>
              <div className="text-slate-400 text-sm space-y-2">
                <p className="font-bold text-white">Vagservice Paweł Baranek</p>
                <p>ul. Grunwaldzka 31</p>
                <p>05-802 Pruszków</p>
                <p>NIP: 5271704460</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Climauto. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => setView('privacy')} 
                className="hover:text-white transition-colors"
              >
                Polityka Prywatności
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:+48601384456"
          className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-pulse"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

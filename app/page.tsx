'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode, faCode, faPalette, faRocket, faServer,
  faDatabase, faLayerGroup, faMapMarkerAlt, faPaperPlane,
  faFileDownload, faUserCircle, faSun, faMoon, faTerminal, faGraduationCap, faLightbulb
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
      <main className={`${darkMode ? 'bg-[#020617] text-slate-200' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans antialiased relative transition-colors duration-700`}>

        {/* Fondo técnico de cuadrícula */}
        <div className={`absolute inset-0 z-0 opacity-[0.1] ${darkMode ? 'invert-0' : 'invert'}`}
             style={{ backgroundImage: `radial-gradient(#334155 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>

        {/* NAV */}
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white italic">I</div>
            <span className="font-black tracking-tighter text-xl uppercase">Isaac Cruz</span>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </nav>

        {/* --- HERO --- */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase italic">
                Junior Full-Stack Developer
              </span>
                <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase italic">
                  Isaac <br /> <span className="text-blue-600 not-italic">Cruz Pino</span>
                </h1>
                <p className="text-xl max-w-xl opacity-60 font-medium">
                  Apasionado por construir aplicaciones modernas y eficientes. Centrado en el aprendizaje continuo y las mejores prácticas de desarrollo.
                </p>
                <div className="flex gap-4 pt-4">
                  <a href="#proyectos" className="px-10 py-5 bg-blue-600 text-white font-black rounded-xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all uppercase text-xs">Mis Proyectos</a>
                  <a href="/cv-isaac-cruz.pdf" download className="px-10 py-5 bg-transparent border border-blue-500/30 font-black rounded-xl hover:bg-blue-600/10 transition-all uppercase text-xs flex items-center gap-2">
                    <FontAwesomeIcon icon={faFileDownload} /> Descargar CV
                  </a>
                </div>
              </motion.div>
            </div>

            {/* BENTO CARD: JUNIOR MINDSET */}
            <div className="lg:col-span-5 hidden lg:block">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                          className={`p-10 rounded-[3rem] border shadow-2xl relative overflow-hidden ${darkMode ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200'}`}>
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-black italic">22</span>
                    <FontAwesomeIcon icon={faLightbulb} className="text-blue-600 text-2xl" />
                  </div>
                  <p className="font-black uppercase tracking-[0.3em] text-xs opacity-40">Status: Formación Finalizada</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>Aprendizaje Activo</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1 w-full bg-blue-600/20 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }} className="h-full bg-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                    "Con la base técnica del IES Vega de Mijas y listo para aportar valor en proyectos reales."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SOBRE MÍ --- */}
        <section className={`relative z-10 border-y ${darkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-100 border-slate-200'} py-24`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 italic">01. Perfil</h3>
              <p className="text-2xl font-black leading-tight uppercase">22 Años. <br/>Málaga, España.</p>
              <p className="opacity-60 text-sm font-medium">Formado en Desarrollo de Aplicaciones Web (DAW) con gran capacidad de adaptación y trabajo en equipo.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 italic">02. Stack</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {['Java', 'Spring Boot', 'MySQL', 'Angular', 'Next.js', 'Tailwind CSS'].map(s => (
                    <span key={s} className={`px-3 py-1 rounded text-[10px] font-black border uppercase ${darkMode ? 'bg-black border-white/10' : 'bg-white border-slate-300'}`}>{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-600 italic">03. Formación</h3>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 text-xl" />
                <div>
                  <p className="font-black text-sm uppercase">Técnico Superior DAW</p>
                  <p className="opacity-60 text-xs font-bold uppercase tracking-tighter">IES Vega de Mijas (2026)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROYECTOS --- */}
        <section id="proyectos" className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-16">Proyectos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Booking App */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-60 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-blue-900/10' : 'bg-blue-50'}`}>
                <FontAwesomeIcon icon={faLayerGroup} className="text-7xl opacity-10 text-blue-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-xl uppercase italic opacity-60">Full Stack Project</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Booking App</h3>
                <p className="opacity-60 text-sm font-medium h-12">Aplicación de gestión de reservas. Desarrollada con Angular para el cliente y Spring Boot para la lógica de servidor.</p>
                <div className="flex gap-3 pt-2">
                  <a href="https://github.com/Brica701/booking-frontend" target="_blank" className="flex-1 py-4 bg-blue-600 text-white rounded-xl text-center font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all">Frontend</a>
                  <a href="https://github.com/Brica701/booking-backend" target="_blank" className={`flex-1 py-4 rounded-xl text-center font-black text-[10px] uppercase tracking-widest border ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-300 hover:bg-slate-100'}`}>Backend</a>
                </div>
              </div>
            </motion.div>

            {/* Gomez Moreno IT */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-60 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-indigo-900/10' : 'bg-indigo-50'}`}>
                <FontAwesomeIcon icon={faServer} className="text-7xl opacity-10 text-indigo-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-xl uppercase italic opacity-60">Inventory System</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Gomez Moreno IT</h3>
                <p className="opacity-60 text-sm font-medium h-12">Software diseñado para el control de inventario tecnológico y auditoría de activos informáticos.</p>
                <a href="https://github.com/Brica701/gomez_moreno_IT" target="_blank" className={`block w-full py-4 mt-2 rounded-xl text-center font-black text-[10px] uppercase tracking-[0.2em] transition-all ${darkMode ? 'bg-white text-black hover:bg-blue-500 hover:text-white' : 'bg-slate-900 text-white'}`}>
                  Ver Repositorio
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- CONTACTO: AJUSTADO PARA SER MENOS LLAMATIVO --- */}
        <section className="relative z-10 py-32 text-center max-w-7xl mx-auto px-6">
          <div className={`p-16 rounded-[3.5rem] border ${darkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <FontAwesomeIcon icon={faPaperPlane} className="text-blue-500 text-5xl mb-10" />
            </motion.div>
            {/* TÍTULO MÁS PEQUEÑO Y REFINED */}
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">¿Hablamos?</h2>
            <p className="font-black uppercase tracking-[0.4em] opacity-60 mb-12 text-xs">Busco mi primera oportunidad profesional</p>
            <a href="mailto:isaacruz2003@gmail.com" className="text-xl md:text-3xl font-black text-blue-600 transition-all block break-all hover:opacity-70">
              isaacruz2003@gmail.com
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-12 text-center text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
          Isaac Cruz Pino • IES Vega de Mijas • 2026
        </footer>
      </main>
  );
}
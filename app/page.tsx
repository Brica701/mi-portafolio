'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode, faCode, faPalette, faRocket, faServer,
  faDatabase, faLayerGroup, faMapMarkerAlt, faPaperPlane,
  faFileDownload, faUserCircle, faSun, faMoon, faTerminal,
  faGraduationCap, faLightbulb, faClock, faXmark,
  faChevronLeft, faChevronRight, faImages
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // --- CONFIGURACIÓN DE GALERÍAS ---

  // Estado escalable: controla qué proyecto está abierto y qué índice de foto
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    projectKey: null, // 'taller' o 'gomezGol'
    currentPhotoIndex: 0
  });

  // Base de datos de fotos de los proyectos basándome en tus capturas
  const projectPhotos = {
    taller: [
      '/taller/Captura de pantalla 2026-05-08 083201.jpg',
      '/taller/Captura de pantalla 2026-05-08 083234.jpg',
      '/taller/Captura de pantalla 2026-05-08 083312.jpg',
      '/taller/Captura de pantalla 2026-05-08 083340.jpg'
    ],
    gomezGol: [
      '/gomez-gol/admin.png',
      '/gomez-gol/apuestas_usuarios.png',
      '/gomez-gol/ganancias.png',
      '/gomez-gol/inicio_sesion.png',
      '/gomez-gol/pantalla_principal.png',
      '/gomez-gol/partidos.png'
    ]
  };

  // Funciones de control de galería escalables
  const openGallery = (projectKey) => {
    setGalleryState({
      isOpen: true,
      projectKey: projectKey,
      currentPhotoIndex: 0
    });
  };

  const closeGallery = () => {
    setGalleryState(prev => ({ ...prev, isOpen: false }));
  };

  const getCurrentPhotos = () => {
    return galleryState.projectKey ? projectPhotos[galleryState.projectKey] : [];
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    const photos = getCurrentPhotos();
    setGalleryState(prev => ({
      ...prev,
      currentPhotoIndex: (prev.currentPhotoIndex + 1) % photos.length
    }));
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    const photos = getCurrentPhotos();
    setGalleryState(prev => ({
      ...prev,
      currentPhotoIndex: (prev.currentPhotoIndex - 1 + photos.length) % photos.length
    }));
  };

  // Título dinámico para el Lightbox
  const getGalleryTitle = () => {
    if (galleryState.projectKey === 'taller') return 'Capturas: Control Taller';
    if (galleryState.projectKey === 'gomezGol') return 'Capturas: Gomez-Gol';
    return '';
  };

  return (
      <main className={`${darkMode ? 'bg-[#020617] text-slate-200' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans antialiased relative transition-colors duration-700`}>

        {/* --- FONDO DE PUNTOS --- */}
        <div className={`absolute inset-0 z-0 opacity-[0.1] ${darkMode ? 'invert-0' : 'invert'}`}
             style={{ backgroundImage: `radial-gradient(#334155 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>

        {/* --- NAVEGACIÓN --- */}
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
                  <a href="#proyectos" className="px-10 py-5 bg-blue-600 text-white font-black rounded-xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all uppercase text-xs text-center">Mis Proyectos</a>

                  {/* RUTA CORREGIDA: Apunta a la subcarpeta /cv que creaste dentro de public */}
                  <a href="/cv/CV_Isaac_Cruz.pdf" download="CV_Isaac_Cruz.pdf" className="px-10 py-5 bg-transparent border border-blue-500/30 font-black rounded-xl hover:bg-blue-600/10 transition-all uppercase text-xs flex items-center gap-2 justify-center">
                    <FontAwesomeIcon icon={faFileDownload} /> Descargar CV
                  </a>
                </div>
              </motion.div>
            </div>

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
                {['Java', 'Spring Boot', 'Node.js', 'MariaDB', 'Angular', 'Next.js', 'Tailwind CSS'].map(s => (
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

          <div className="grid grid-cols-1 md:md-cols-2 lg:grid-cols-3 gap-8">
            {/* GalapaGo */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-48 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-blue-900/10' : 'bg-blue-50'}`}>
                <FontAwesomeIcon icon={faLayerGroup} className="text-6xl opacity-10 text-blue-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-sm uppercase italic opacity-60 tracking-widest">Full Stack Project</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">GalapaGo</h3>
                <p className="opacity-60 text-xs font-medium h-12 leading-relaxed">Gestión de reservas desarrollada con Angular y Spring Boot.</p>
                <div className="flex gap-3 pt-2">
                  <a href="https://github.com/Brica701/GalapaGo-frontend-Terminado" target="_blank" className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:bg-blue-700 transition-all">Frontend</a>
                  <a href="https://github.com/Brica701/GalapaGo-backend-terminado" target="_blank" className={`flex-1 py-3 rounded-xl text-center font-black text-[9px] uppercase tracking-widest border ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-300 hover:bg-slate-100'}`}>Backend</a>
                </div>
              </div>
            </motion.div>

            {/* Gomez Moreno IT */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-indigo-500/50' : 'bg-white border-slate-200 hover:border-indigo-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-48 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-indigo-900/10' : 'bg-indigo-50'}`}>
                <FontAwesomeIcon icon={faServer} className="text-6xl opacity-10 text-indigo-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-sm uppercase italic opacity-60 tracking-widest">Inventory System</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Gomez Moreno IT</h3>
                <p className="opacity-60 text-xs font-medium h-12 leading-relaxed">Control de inventario tecnológico mediante Spring Boot.</p>
                <a href="https://github.com/Brica701/gomez_moreno_IT" target="_blank" className={`block w-full py-3 mt-2 rounded-xl text-center font-black text-[9px] uppercase tracking-[0.2em] transition-all ${darkMode ? 'bg-white text-black hover:bg-indigo-500 hover:text-white' : 'bg-slate-900 text-white'}`}>
                  Ver Repositorio
                </a>
              </div>
            </motion.div>

            {/* Control Taller */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-emerald-500/50' : 'bg-white border-slate-200 hover:border-emerald-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-48 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-emerald-900/10' : 'bg-emerald-50'}`}>
                <FontAwesomeIcon icon={faClock} className="text-6xl opacity-10 text-emerald-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-sm uppercase italic opacity-60 tracking-widest">Time Tracking App</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Control Taller</h3>
                <p className="opacity-60 text-xs font-medium h-12 leading-relaxed">Monitorización de productividad con Node.js y MariaDB.</p>
                <button
                    onClick={() => openGallery('taller')}
                    className={`block w-full py-3 mt-2 rounded-xl text-center font-black text-[9px] uppercase tracking-[0.2em] transition-all ${darkMode ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-900 text-white'}`}
                >
                  <FontAwesomeIcon icon={faImages} className="mr-2" /> Fotos
                </button>
              </div>
            </motion.div>

            {/* Gomez-Gol */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-48 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-blue-900/10' : 'bg-blue-50'}`}>
                <FontAwesomeIcon icon={faRocket} className="text-6xl opacity-10 text-blue-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-sm uppercase italic opacity-60 tracking-widest">APIs & Betting Platform</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Gomez-Gol</h3>
                <p className="opacity-60 text-xs font-medium h-12 leading-relaxed">Plataforma de datos deportivos e integración de apuestas de fútbol en tiempo real.</p>
                <button
                    onClick={() => openGallery('gomezGol')}
                    className={`block w-full py-3 mt-2 rounded-xl text-center font-black text-[9px] uppercase tracking-[0.2em] transition-all ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white'}`}
                >
                  <FontAwesomeIcon icon={faImages} className="mr-2" /> Fotos
                </button>
              </div>
            </motion.div>

            {/* Sistema de Vacaciones - Próximamente */}
            <motion.div whileHover={{ y: -5 }} className={`rounded-[2rem] border overflow-hidden p-2 transition-all ${darkMode ? 'bg-slate-900 border-white/5 hover:border-red-500/50' : 'bg-white border-slate-200 hover:border-red-600 shadow-lg'}`}>
              <div className={`rounded-[1.5rem] h-48 flex items-center justify-center relative mb-6 ${darkMode ? 'bg-red-900/10' : 'bg-red-50'}`}>
                <FontAwesomeIcon icon={faUserCircle} className="text-6xl opacity-10 text-red-600" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-sm uppercase italic opacity-60 tracking-widest">HR & Management Tool</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Gestión Vacaciones</h3>
                <p className="opacity-60 text-xs font-medium h-12 leading-relaxed">Sistema interno donde empleados solicitan vacaciones y administradores gestionan aprobaciones.</p>
                <div className="block w-full py-3 mt-2 rounded-xl text-center font-black text-[9px] uppercase tracking-[0.2em] bg-red-600/10 text-red-500 border border-red-500/20">
                  <FontAwesomeIcon icon={faLightbulb} className="mr-2" /> Proximamente
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* --- LIGHTBOX MODAL ESCALABLE --- */}
        <AnimatePresence>
          {galleryState.isOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeGallery}
                  className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md select-none"
              >
                {/* Cabecera del modal */}
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 font-black text-xs uppercase tracking-widest text-white/70">
                    <FontAwesomeIcon icon={faImages} className="text-blue-500"/>
                    {getGalleryTitle()}
                  </div>
                  {/* Botón de cerrar */}
                  <button
                      onClick={closeGallery}
                      className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xl transition-all"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                {/* Contenedor de la Imagen */}
                <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
                  <motion.img
                      key={galleryState.currentPhotoIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      src={getCurrentPhotos()[galleryState.currentPhotoIndex]}
                      alt={`Captura ${galleryState.currentPhotoIndex + 1}`}
                      className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                  />

                  {/* Flecha Izquierda */}
                  <button
                      onClick={prevPhoto}
                      className="absolute -left-4 md:-left-16 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xl transition-all"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>

                  {/* Flecha Derecha */}
                  <button
                      onClick={nextPhoto}
                      className="absolute -right-4 md:-right-16 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xl transition-all"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>

                {/* Contador de posición inferior */}
                <div className="mt-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-black text-[10px] tracking-[0.3em] text-white/60 uppercase">
                  {galleryState.currentPhotoIndex + 1} / {getCurrentPhotos().length}
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* --- CONTACTO --- */}
        <section className="relative z-10 py-32 text-center max-w-7xl mx-auto px-6">
          <div className={`p-16 rounded-[3.5rem] border ${darkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200 shadow-xl'}`}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <FontAwesomeIcon icon={faPaperPlane} className="text-blue-500 text-5xl mb-10" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">¿Hablamos?</h2>
            <p className="font-black uppercase tracking-[0.4em] opacity-60 mb-12 text-xs">Busco mi primera oportunidad profesional</p>
            <a href="mailto:isaacruz2003@gmail.com" className="text-xl md:text-3xl font-black text-blue-600 transition-all block break-all hover:opacity-70">
              isaacruz2003@gmail.com
            </a>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="relative z-10 py-12 text-center text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
          Isaac Cruz Pino • IES Vega de Mijas • 2026
        </footer>
      </main>
  );
}
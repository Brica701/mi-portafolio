'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCode, faPalette, faRocket, faBriefcase, faEnvelope, faServer, faDatabase, faLayerGroup, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
      <main className="min-h-screen bg-[#030303] text-gray-100 font-sans antialiased" style={{ backgroundImage: 'radial-gradient(#ffffff11 1px, transparent 1px)', backgroundSize: '24px 24px' }}>

        {/* --- SECCIÓN HERO (ACERCA DE MÍ - CENTRADO) --- */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">
            DESARROLLADOR FULL STACK
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 text-balance">
            Hola, soy <span className="text-blue-500">Isaac</span>
          </h1>
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-8 text-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 w-4 h-4" />
            Málaga, España
          </p>

          <ul className="inline-block text-left space-y-4 text-lg text-gray-400 mb-10">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPalette} className="text-blue-500 w-5 h-5" />
              <span>Interfaces <strong className="text-white">elegantes</strong> y minimalistas.</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCode} className="text-blue-500 w-5 h-5" />
              <span>Soluciones digitales con <strong className="text-white">código limpio</strong>.</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faRocket} className="text-blue-500 w-5 h-5" />
              <span>Enfoque en el rendimiento y la <strong className="text-white">experiencia de usuario</strong>.</span>
            </li>
          </ul>

          <div className="flex justify-center gap-4">
            <a href="#proyectos" className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-gray-200 transition-all shadow-lg">
              Ver proyectos
            </a>
          </div>
        </section>

        {/* --- SECCIÓN FORMACIÓN ACADÉMICA --- */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center gap-3 mb-12">
            <FontAwesomeIcon icon={faLaptopCode} className="text-blue-500 w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">Formación académica</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-xl hover:border-blue-500/30 transition-all">
              <div className="p-4 bg-blue-900/30 rounded-2xl border border-blue-500/20 text-blue-400">
                <FontAwesomeIcon icon={faLaptopCode} className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">Técnico Superior (DAW)</h3>
                <p className="text-gray-400 mt-1">Desarrollo de Aplicaciones Web.</p>
              </div>
              <span className="text-[10px] font-bold uppercase px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">Superior</span>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN TECNOLOGÍAS --- */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center gap-3 mb-12">
            <FontAwesomeIcon icon={faCode} className="text-blue-500 w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">Tecnologías</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center hover:border-orange-500/30 transition-all">
              <FontAwesomeIcon icon={faServer} className="text-orange-500 w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-bold text-white mb-4 text-lg">Backend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'PostgreSQL', 'Docker'].map(s => <span key={s} className="px-2 py-1 bg-orange-500/10 rounded text-[10px] text-orange-300 border border-orange-500/20 font-bold uppercase">{s}</span>)}
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center hover:border-blue-500/30 transition-all">
              <FontAwesomeIcon icon={faLayerGroup} className="text-blue-500 w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-bold text-white mb-4 text-lg">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Angular', 'TypeScript', 'JavaScript', 'Tailwind', 'CSS', 'HTML'].map(s => <span key={s} className="px-2 py-1 bg-blue-500/10 rounded text-[10px] text-blue-300 border border-blue-500/20 font-bold uppercase">{s}</span>)}
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center hover:border-purple-500/30 transition-all">
              <FontAwesomeIcon icon={faDatabase} className="text-purple-500 w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-bold text-white mb-4 text-lg">Herramientas</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['GitHub', 'Figma', 'Git'].map(s => <span key={s} className="px-2 py-1 bg-purple-500/10 rounded text-[10px] text-purple-300 border border-purple-500/20 font-bold uppercase">{s}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN PROYECTOS --- */}
        <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <FontAwesomeIcon icon={faBriefcase} className="text-blue-500 w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white">Proyectos Destacados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all shadow-2xl">
              <div className="h-40 bg-gradient-to-br from-teal-900/20 to-black flex items-center justify-center">
                <FontAwesomeIcon icon={faLayerGroup} className="text-teal-500 text-4xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Booking App (Angular)</h3>
                <p className="text-gray-400 text-sm mb-6">Gestión de reservas profesional. Arquitectura desacoplada Angular + Spring.</p>
                <div className="flex gap-3">
                  <a href="https://github.com/Brica701/booking-frontend" target="_blank" className="flex-1 text-center py-2 bg-white/5 border border-white/10 rounded-lg text-xs hover:bg-teal-600 transition-all">Frontend</a>
                  <a href="https://github.com/Brica701/booking-backend" target="_blank" className="flex-1 text-center py-2 bg-white/5 border border-white/10 rounded-lg text-xs hover:bg-teal-600 transition-all">Backend</a>
                </div>
              </div>
            </div>

            <div className="group bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all shadow-2xl">
              <div className="h-40 bg-gradient-to-br from-blue-900/20 to-black flex items-center justify-center">
                <FontAwesomeIcon icon={faServer} className="text-blue-500 text-4xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Gomez Moreno IT</h3>
                <p className="text-gray-400 text-sm mb-6">Control de inventario y activos tecnológicos (FCT 07/04/26 - 12/06/26).</p>
                <a href="https://github.com/Brica701/gomez_moreno_IT" target="_blank" className="block text-center py-2 bg-white text-black font-bold rounded-lg text-xs hover:bg-blue-500 hover:text-white transition-all">Ver Repositorio</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN CONTACTO (NUEVA) --- */}
        <section id="contacto" className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="bg-[#0a0a0a] border border-white/10 p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>

            <FontAwesomeIcon icon={faPaperPlane} className="text-blue-500 text-4xl mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Estoy abierto a nuevas oportunidades y proyectos interesantes. Si quieres contactar conmigo, escríbeme a:
            </p>

            <a
                href="mailto:isaacruz2003@gmail.com"
                className="text-xl md:text-2xl font-mono text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-8 decoration-blue-500/30"
            >
              isaacruz2003@gmail.com
            </a>

            <div className="mt-10 pt-10 border-t border-white/5 flex justify-center gap-6">
              <a href="https://github.com/Brica701" target="_blank" className="text-gray-500 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
                GitHub
              </a>
              <span className="text-gray-800">|</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest">
                Málaga, ES
              </span>
            </div>
          </div>
        </section>

        <footer className="py-10 border-t border-white/5 text-center text-gray-700 text-xs bg-black">
          <p>© 2026 Isaac Cruz Pino | Portafolio Profesional Fullstack</p>
        </footer>
      </main>
  );
}
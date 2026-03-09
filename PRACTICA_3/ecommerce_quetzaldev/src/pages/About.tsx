import { ArrowRight, Code2, Globe2, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgLandscape from '../assets/about-landscape.png';
import imgTeam from '../assets/equipo-quetzaldev.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
    useScrollAnimation();

    return (
        <div className="font-dm-sans bg-[#F7F8F5] pb-24">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-[#0B100B] border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <img src={imgLandscape} alt="Paisaje de Guatemala" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B100B] via-transparent to-[#0B100B]/50"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 data-animate className="text-5xl md:text-7xl font-syne font-bold text-white tracking-tight mb-8">
                        Código que impulsa <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">el futuro de Guatemala.</span>
                    </h1>
                    <p data-animate className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ transitionDelay: '150ms' }}>
                        QuetzalDev nació con una visión clara: democratizar el acceso a software de clase mundial para las empresas guatemaltecas.
                        No hacemos plantillas, construimos arquitecturas empresariales.
                    </p>
                </div>
            </section>

            {/* Nuestra Vision / Grid */}
            <section id="vision" className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
                <h2 data-animate className="text-4xl md:text-5xl font-syne font-bold text-[#0B100B] mb-16 text-center tracking-tight">Nuestra Visión</h2>
                <div className="grid md:grid-cols-2 gap-8" data-animate="stagger">

                    {/* Vision Card */}
                    <div data-animate className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] rounded-[16px] p-10 md:p-14 transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-[#E8F5EB] rounded-[10px] flex items-center justify-center mb-8 text-[#2D7A3A]">
                            <Globe2 size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-syne font-bold text-[#0B100B] mb-4">Software Hiperlocalizado</h3>
                        <p className="text-lg text-[#6B6B6B] leading-relaxed">
                            Entendemos que un ERP genérico no sirve para una finca cafetalera en Cobán, ni para el control de remesas. Nuestras soluciones están modeladas para las leyes, la moneda y la cultura de negocios de nuestro país.
                        </p>
                    </div>

                    {/* Quality Card */}
                    <div data-animate className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] rounded-[16px] p-10 md:p-14 transition-transform duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-[#E8F5EB] rounded-[10px] flex items-center justify-center mb-8 text-[#2D7A3A]">
                            <Code2 size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-syne font-bold text-[#0B100B] mb-4">Arquitectura Impecable</h3>
                        <p className="text-lg text-[#6B6B6B] leading-relaxed">
                            Adoptamos estándares top a nivel global (React, Flutter, bases de datos resilientes). Entregamos código fuente limpio, documentado y listo para escalar si tu empresa lo necesita mañana mismo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Etica Inline */}
            <section id="etica" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h2 data-animate className="text-4xl md:text-5xl font-syne font-bold text-[#0B100B] mb-16 tracking-tight">Ética de Software</h2>
                <div className="grid sm:grid-cols-2 gap-12 text-left" data-animate="stagger">
                    <div data-animate className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
                        <div className="w-12 h-12 bg-[#E8F5EB] rounded-[10px] flex items-center justify-center text-[#2D7A3A] shrink-0">
                            <Users size={24} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-xl font-syne font-bold text-[#0B100B] mb-2">Enfoque Humano</h4>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                Detrás de cada línea de código hay personas tratando de hacer crecer sus negocios. Diseñamos con empatía y extrema simplicidad.
                            </p>
                        </div>
                    </div>
                    <div data-animate className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
                        <div className="w-12 h-12 bg-[#E8F5EB] rounded-[10px] flex items-center justify-center text-[#2D7A3A] shrink-0">
                            <ShieldCheck size={24} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-xl font-syne font-bold text-[#0B100B] mb-2">Transparencia Radical</h4>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                Sin suscripciones ocultas, ni cobros abusivos. Licenciamiento claro y código abierto para el cliente que lo adquiere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Historia / Equipo */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20 text-center">
                <h2 data-animate className="text-4xl font-syne font-bold text-[#111311] mb-12">Nuestra Historia</h2>
                <div data-animate className="max-w-4xl mx-auto rounded-[16px] overflow-hidden aspect-video relative bg-[#EDEEE9] mb-10 border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <img src={imgTeam} alt="Equipo Base QuetzalDev" className="w-full h-full object-cover" />
                </div>
                <p data-animate className="text-lg text-[#4A4F4A] max-w-3xl mx-auto leading-relaxed">
                    Comenzamos como un pequeño equipo de ingenieros con la convicción de crear soluciones de nivel mundial sin desconectarnos de la realidad centroamericana. Hoy, nuestra arquitectura corre en docenas de empresas.
                </p>
            </section>

            {/* CTA / Contacto */}
            <section id="contacto" className="max-w-[85%] mx-auto px-4 py-24 text-center">
                <div data-animate className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-gray-100 rounded-[16px] p-12 md:p-20">
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-[#0B100B] mb-6 tracking-tight">¿Listo para transformar tu empresa?</h2>
                    <p className="text-lg text-[#6B6B6B] mb-10 max-w-2xl mx-auto">
                        Explora nuestro catálogo de productos pre-empaquetados y descubre cómo QuetzalDev puede ahorrarte meses de desarrollo de software.
                    </p>
                    <Link
                        to="/catalogo"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#2D7A3A] hover:bg-[#23632f] rounded-[16px] transition-all"
                    >
                        Acceder al Catálogo
                        <ArrowRight size={20} strokeWidth={2} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

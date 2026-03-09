import { Link } from 'react-router-dom';
import { ShoppingBag, Terminal, Code2, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import imgHero from '../assets/hero-corporate.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';

const StatCounter = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) => {
    const value = useAnimatedNumber(end, 1200);
    return (
        <div className="flex flex-col items-center gap-1 px-4">
            <span className="text-4xl md:text-5xl font-syne font-bold text-[#0B100B] tracking-tight">
                {Math.round(value)}{suffix}
            </span>
            <span className="text-[13px] font-dm-mono uppercase tracking-[0.1em] text-[#8A8F8A] text-center">{label}</span>
        </div>
    );
};

export const Home = () => {
    useScrollAnimation();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-[#0B100B] text-white min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5 flex items-center">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(45,122,58,0.15)_0%,transparent_60%)] animate-[pulse-glow_6s_ease-in-out_infinite_alternate]"></div>

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5 text-left flex flex-col items-start gap-8">

                            <div
                                data-animate
                                style={{ transitionDelay: '50ms' }}
                                className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-[#2D7A3A]/40 bg-[#2D7A3A]/20 text-[#7EC88A] font-dm-mono text-[12px] font-semibold tracking-wide"
                            >
                                <Code2 size={16} />
                                Módulos Empresariales para Guatemala
                            </div>

                            <h1
                                data-animate
                                style={{ transitionDelay: '100ms' }}
                                className="text-[48px] lg:text-[76px] font-syne font-[800] tracking-tight leading-[1.05]"
                            >
                                <span className="text-white block">Software</span>
                                <span className="text-white block">corporativo</span>
                                <span className="text-[#8A8F8A] block">listo para</span>
                                <span className="text-[#2D7A3A] block">escalar.</span>
                            </h1>

                            <p
                                data-animate
                                style={{ transitionDelay: '300ms' }}
                                className="text-[17px] text-[#A1A1AA] leading-[1.6] max-w-[90%] font-dm-sans"
                            >
                                Descarga e implemente potentes módulos de software adaptados a la realidad local. Desde ERPs agrícolas hasta soluciones gubernamentales LAIP.
                            </p>

                            <ul
                                data-animate
                                style={{ transitionDelay: '500ms' }}
                                className="flex flex-col gap-3 font-dm-sans w-full"
                            >
                                {[
                                    'Completamente adaptado al entorno fiscal y social GT',
                                    'Código limpio, seguro y escalable',
                                    'Cero suscripciones: compra única por licenciamiento'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-[15px] text-[#A1A1AA] font-regular">
                                        <div className="mr-3 text-[#2D7A3A] bg-[#2D7A3A]/10 rounded-full flex items-center justify-center p-[2px]">
                                            <CheckCircle2 size={16} strokeWidth={2.5} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div
                                data-animate
                                style={{ transitionDelay: '700ms' }}
                                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-dm-sans"
                            >
                                <Link
                                    to="/catalogo"
                                    className="inline-flex items-center justify-center gap-3 px-[28px] py-[16px] text-[16px] font-bold text-white bg-[#2D7A3A] hover:bg-[#236130] hover:-translate-y-[2px] rounded-[10px] transition-all duration-200"
                                >
                                    <ShoppingBag size={20} strokeWidth={2} />
                                    Ver Catálogo
                                </Link>
                                <Link
                                    to="/nosotros"
                                    className="inline-flex items-center justify-center gap-3 px-[28px] py-[16px] text-[16px] font-medium text-[#A1A1AA] hover:text-white border border-[#4A4F4A] hover:border-[#8A8F8A] rounded-[10px] transition-all duration-200 group"
                                >
                                    Conocer QuetzalDev
                                    <ArrowRight size={18} className="text-[#A1A1AA] group-hover:text-white transition-colors" />
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="hidden lg:block relative lg:col-span-7" style={{ animationDelay: '400ms' }}>
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[55vw] h-[85vh] min-h-[650px] max-h-[850px] rounded-l-[32px] overflow-hidden border-y border-l border-white/10 animate-[image-hero-load_0.8s_ease-out_forwards] opacity-0 shadow-[-20px_0_80px_rgba(0,0,0,0.5)]">
                                <img src={imgHero} alt="QuetzalDev Software Dashboard Preview" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(11,16,11,0.85) 0%, rgba(11,16,11,0.4) 50%, rgba(11,16,11,0.0) 100%)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white border-b border-black/5 py-14 px-4">
                <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 divide-x divide-black/5" data-animate>
                    <StatCounter end={3} label="Productos Listos" />
                    <StatCounter end={6} label="Meses de Soporte" />
                    <StatCounter end={100} label="Codigo Fuente" suffix="%" />
                </div>
            </section>

            {/* Features Showcase */}
            <section className="py-24 bg-[#F7F8F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-syne font-bold text-[#0B100B] mb-6">Arquitectura Profesional</h2>
                        <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg font-dm-sans">
                            Nuestros productos son el resultado de años de experiencia en desarrollo personalizado, ahora empaquetados para ti.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 font-dm-sans" data-animate="stagger">
                        <div data-animate className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] px-8 pb-8 pt-6 rounded-[16px] hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-[#F7F8F5] rounded-[10px] flex items-center justify-center mb-6 text-[#2D7A3A]">
                                <Terminal size={24} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-syne font-bold text-[#0B100B] mb-3">Agro ERP</h3>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                Software diseñado para la administración contable y productiva de fincas de exportación.
                            </p>
                        </div>

                        <div data-animate className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] px-8 pb-8 pt-6 rounded-[16px] hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-[#F7F8F5] rounded-[10px] flex items-center justify-center mb-6 text-[#2D7A3A]">
                                <Code2 size={24} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-syne font-bold text-[#0B100B] mb-3">Leyes y Transparencia</h3>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                Portales web estandarizados para municipalidades, integrando la ley LAIP nativamente.
                            </p>
                        </div>

                        <div data-animate className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] px-8 pb-8 pt-6 rounded-[16px] hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-[#F7F8F5] rounded-[10px] flex items-center justify-center mb-6 text-[#2D7A3A]">
                                <Smartphone size={24} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-syne font-bold text-[#0B100B] mb-3">Finanzas y Remesas</h3>
                            <p className="text-[#6B6B6B] leading-relaxed">
                                Aplicaciones móviles diseñadas para el rastreo y bancarización de receptoras de divisas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

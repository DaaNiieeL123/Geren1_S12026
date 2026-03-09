import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

import logoImg from '../assets/LogoOficial.png';

const QuetzalLogo = ({ className, filterClass = "" }: { className?: string, filterClass?: string }) => (
    <img src={logoImg} alt="QuetzalDev" className={`${className || "w-full h-full object-contain"} ${filterClass} transition-all duration-300`} />
);

export const Layout = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [cartAnimate, setCartAnimate] = useState(false);
    const location = useLocation();
    const { itemCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // triggers a bit earlier for smoother feel
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (itemCount > 0) {
            setCartAnimate(true);
            const timer = setTimeout(() => setCartAnimate(false), 300);
            return () => clearTimeout(timer);
        }
    }, [itemCount]);

    const hasDarkHero = location.pathname === '/' || location.pathname === '/nosotros';

    // Base default: Transparent over dark hero. White text.
    const navText = (scrolled || !hasDarkHero) ? 'text-[#111311]' : 'text-white';
    const navBg = scrolled ? 'bg-white/85 backdrop-blur-md shadow-[0_1px_16px_rgba(0,0,0,0.06)]' : 'bg-transparent';
    const logoFilter = (scrolled || !hasDarkHero) ? '' : 'brightness(0) invert(1)';

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Catálogo', href: '/catalogo' },
        { name: 'Nosotros', href: '/nosotros' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#111311] font-dm-sans">
            <nav className={`fixed w-full top-0 z-50 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] duration-350 ${navBg} ${navText}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center transition-all duration-350" style={{ height: scrolled ? '72px' : '88px' }}>
                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center transition-transform hover:scale-[0.98]">
                                <QuetzalLogo className="h-7 sm:h-9 w-auto object-contain" filterClass={logoFilter} />
                            </Link>
                            <div className="hidden md:ml-10 md:flex md:space-x-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`inline-flex items-center px-1 pt-1 text-sm font-bold transition-all border-b-[2.5px] ${location.pathname === item.href
                                            ? `border-[currentColor] opacity-100`
                                            : `border-transparent opacity-70 hover:opacity-100`
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Link to="/carrito" className={`relative p-2 opacity-80 hover:opacity-100 transition-opacity ${navText}`}>
                                <ShoppingCart size={24} strokeWidth={1.5} className="mt-1" />
                                {itemCount > 0 && (
                                    <span className={`absolute top-0 right-0 inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 text-[11px] font-bold text-white bg-[#2D7A3A] rounded-full transform shadow-sm border-[1.5px] border-white transition-transform duration-300 ${cartAnimate ? 'scale-125' : 'scale-100'}`}>
                                        {itemCount}
                                    </span>
                                )}
                            </Link>

                            <div className="flex items-center md:hidden ml-4">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className={`opacity-80 hover:opacity-100 transition-opacity ${navText}`}
                                    aria-label="Toggle menu"
                                >
                                    {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu wrapper for smooth transition */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0B100B] ${isMenuOpen ? 'max-h-[300px] border-t border-white/10' : 'max-h-0'}`}>
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.href
                                    ? 'bg-[#2D7A3A]/20 text-white'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-[#0B100B] text-white pt-16 pb-10 text-sm border-t border-white/5 font-dm-sans">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Strip */}
                    <div className="text-center font-light text-[13px] text-white/40 border-b border-white/5 pb-8 mb-12 flex items-center justify-center gap-2">
                        <MapPin size={13} strokeWidth={1.5} className="text-white/30" />
                        Diseñado para las empresas de Guatemala
                    </div>

                    {/* Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16" data-animate="stagger">
                        <div>
                            <h3 className="font-dm-sans font-medium text-[13px] tracking-[0.08em] uppercase text-white/40 mb-6">Productos</h3>
                            <ul className="space-y-4">
                                <li><Link to="/catalogo" onClick={() => window.scrollTo(0, 0)} className="text-[14px] text-white/65 hover:text-white transition-colors duration-200">AgroERP Quetzal</Link></li>
                                <li><Link to="/catalogo" onClick={() => window.scrollTo(0, 0)} className="text-[14px] text-white/65 hover:text-white transition-colors duration-200">MuniWeb Transparencia</Link></li>
                                <li><Link to="/catalogo" onClick={() => window.scrollTo(0, 0)} className="text-[14px] text-white/65 hover:text-white transition-colors duration-200">RemesaFlow App</Link></li>
                                <li><Link to="/catalogo" onClick={() => window.scrollTo(0, 0)} className="text-[14px] text-white/65 hover:text-white transition-colors duration-200 font-medium text-[#2D7A3A]">Ver Catálogo →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-dm-sans font-medium text-[13px] tracking-[0.08em] uppercase text-white/40 mb-6">Empresa</h3>
                            <ul className="space-y-4">
                                <li><Link to="/nosotros#vision" className="text-[14px] text-white/65 hover:text-white transition-colors duration-200">Nuestra Visión</Link></li>
                                <li><Link to="/nosotros#etica" className="text-[14px] text-white/65 hover:text-white transition-colors duration-200">Ética de Software</Link></li>
                                <li><Link to="/nosotros#contacto" className="text-[14px] text-white/65 hover:text-white transition-colors duration-200">Trabaja con Nosotros</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-dm-sans font-medium text-[13px] tracking-[0.08em] uppercase text-white/40 mb-6">Local</h3>
                            <p className="font-light text-white/65 mb-6 leading-relaxed">
                                Software a medida para los desafíos reales de Centroamérica.
                            </p>
                            <div className="mt-4">
                                <QuetzalLogo className="h-8 sm:h-9 w-auto object-contain" filterClass="brightness(0) invert(1)" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-white/30 font-light">
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                            <span>Copyright © 2026 QuetzalDev Inc. Todos los derechos reservados.</span>
                            <div className="flex gap-4">
                                <Link to="/privacidad#privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                                <span>|</span>
                                <Link to="/terminos#terminos" className="hover:text-white transition-colors">Términos de Uso</Link>
                                <span>|</span>
                                <Link to="/legal#aviso-legal" className="hover:text-white transition-colors">Legal</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Guatemala</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

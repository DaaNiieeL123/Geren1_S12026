import { Link } from 'react-router-dom';
import { ArrowLeft, Frown } from 'lucide-react';

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#F7F8F5] flex flex-col items-center justify-center px-4 text-center font-dm-sans">
            <div className="mb-8 text-[#2D7A3A]/20">
                <Frown size={96} strokeWidth={0.8} />
            </div>
            <p className="font-dm-mono text-[13px] tracking-[0.2em] uppercase text-[#2D7A3A] mb-4">Error 404</p>
            <h1 className="text-5xl md:text-6xl font-syne font-bold text-[#0B100B] mb-4 tracking-tight">
                Pagina no encontrada
            </h1>
            <p className="text-lg text-[#6B6B6B] max-w-md mb-10 leading-relaxed">
                La ruta que buscas no existe o fue movida. Intenta volver al inicio o explorar el catalogo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#2D7A3A] hover:bg-[#23632f] rounded-[12px] transition-all hover:-translate-y-[2px]"
                >
                    <ArrowLeft size={18} strokeWidth={2} />
                    Volver al Inicio
                </Link>
                <Link
                    to="/catalogo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#4A4F4A] border border-black/10 hover:border-black/25 bg-white rounded-[12px] transition-all hover:-translate-y-[2px]"
                >
                    Ver Catalogo
                </Link>
            </div>
        </div>
    );
};

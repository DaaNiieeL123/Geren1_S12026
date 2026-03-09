import { useEffect } from 'react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';

export const Legal = () => {
    useEffect(() => {
        // Ensuring we scroll to top on mount if no hash is present, 
        // though ScrollToTop component does this, it's a good fallback.
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="font-dm-sans bg-[#F7F8F5] min-h-screen">
            {/* Dark Hero Strip (Duotono) */}
            <div className="bg-[#0B100B] pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-syne font-bold text-white tracking-tight mb-4">
                        Centro Legal y Privacidad
                    </h1>
                    <p className="text-lg text-[#A1A1AA]">
                        Información transparente sobre cómo manejamos tus datos y nuestros términos de servicio.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-24">

                {/* Table of Contents */}
                <div className="bg-white rounded-[16px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-center gap-6 text-[14px] text-[#2D7A3A] font-medium font-dm-sans">
                    <a href="#privacidad" className="hover:text-[#236130] hover:underline flex items-center gap-1">→ Política de Privacidad</a>
                    <a href="#terminos" className="hover:text-[#236130] hover:underline flex items-center gap-1">→ Términos de Uso</a>
                    <a href="#aviso-legal" className="hover:text-[#236130] hover:underline flex items-center gap-1">→ Aviso Legal</a>
                </div>

                <div className="space-y-16">
                    {/* Política de Privacidad */}
                    <section id="privacidad" className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 border-l-[4px] border-l-[#2D7A3A]">
                        <div className="flex items-start sm:items-center gap-4 mb-4">
                            <div className="w-[60px] h-[60px] bg-[#E8F5EB] rounded-full flex items-center justify-center text-[#2D7A3A] shrink-0 p-[10px]">
                                <ShieldCheck size={40} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-syne font-bold text-[#0B100B]">Política de Privacidad</h2>
                                <p className="font-dm-mono text-[11px] text-[#8A8F8A] mt-1">Última actualización: Enero 2026</p>
                            </div>
                        </div>
                        <div className="prose prose-lg text-[#6B6B6B] max-w-none space-y-6">
                            <p>
                                En QuetzalDev, tu privacidad es nuestra prioridad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal cuando usas nuestro sitio web y los módulos de software que ofrecemos.
                            </p>
                            <h3 className="text-xl font-medium text-[#111311]">1. Información que Recopilamos</h3>
                            <p>
                                Recopilamos la información que nos proporcionas directamente al registrarte en nuestros servicios, realizar una compra o comunicarte con nuestro equipo de soporte. Esto puede incluir tu nombre, dirección de correo electrónico, detalles de facturación de tu empresa y requerimientos técnicos específicos.
                            </p>
                            <h3 className="text-xl font-medium text-[#111311]">2. Uso de la Información</h3>
                            <p>
                                Utilizamos la información recopilada exclusivamente para operar, mantener y mejorar nuestros servicios, procesar tus transacciones, enviarte notificaciones técnicas y responder a tus consultas de soporte. No vendemos ni compartimos tu información con terceros para fines publicitarios.
                            </p>
                            <h3 className="text-xl font-medium text-[#111311]">3. Seguridad de Datos</h3>
                            <p>
                                Implementamos medidas de seguridad de clase mundial, incluyendo encriptación en tránsito y en reposo, para proteger tu información contra acceso no autorizado, alteración o destrucción. Nuestro equipo de ingeniería monitorea constantemente nuestros sistemas para prevenir vulnerabilidades.
                            </p>
                        </div>
                    </section>

                    {/* Términos de Uso */}
                    <section id="terminos" className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 border-l-[4px] border-l-[#2D7A3A]">
                        <div className="flex items-start sm:items-center gap-4 mb-4">
                            <div className="w-[60px] h-[60px] bg-[#E8F5EB] rounded-full flex items-center justify-center text-[#2D7A3A] shrink-0 p-[10px]">
                                <FileText size={40} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-syne font-bold text-[#0B100B]">Términos de Uso</h2>
                                <p className="font-dm-mono text-[11px] text-[#8A8F8A] mt-1">Última actualización: Enero 2026</p>
                            </div>
                        </div>
                        <div className="prose prose-lg text-[#6B6B6B] max-w-none space-y-6">
                            <p>
                                Al acceder o comprar código a través de QuetzalDev, aceptas estar sujeto a los siguientes términos de servicio. Por favor, léelos cuidadosamente antes de proceder con cualquier adquisición de licenciamiento.
                            </p>
                            <h3 className="text-xl font-medium text-[#111311]">1. Licenciamiento de Software</h3>
                            <p>
                                QuetzalDev opera bajo un modelo de licenciamiento de pago único para la mayoría de sus módulos pre-empaquetados. Al comprar un producto (como AgroERP o MuniWeb), adquieres el derecho perpetuo para usar y modificar el código fuente dentro de tu organización. Está estrictamente prohibida la reventa de nuestro código fuente a terceros como un producto "etiqueta blanca".
                            </p>
                            <h3 className="text-xl font-medium text-[#111311]">2. Soporte y Actualizaciones</h3>
                            <p>
                                La compra de un módulo incluye 6 meses de soporte técnico general para instalación y resolución de bugs críticos. Las personalizaciones profundas y requerimientos adicionales se gestionan a través de pólizas de mantenimiento separadas o contratos de desarrollo a la medida.
                            </p>
                        </div>
                    </section>

                    {/* Legal */}
                    <section id="aviso-legal" className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 border-l-[4px] border-l-[#2D7A3A]">
                        <div className="flex items-start sm:items-center gap-4 mb-4">
                            <div className="w-[60px] h-[60px] bg-[#E8F5EB] rounded-full flex items-center justify-center text-[#2D7A3A] shrink-0 p-[10px]">
                                <Scale size={40} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-syne font-bold text-[#0B100B]">Aviso Legal</h2>
                                <p className="font-dm-mono text-[11px] text-[#8A8F8A] mt-1">Última actualización: Enero 2026</p>
                            </div>
                        </div>
                        <div className="prose prose-lg text-[#6B6B6B] max-w-none space-y-6">
                            <p>
                                QuetzalDev Inc. es una entidad registrada y constituida bajo las leyes de la República de Guatemala. Toda controversia, disputa o reclamo que surja de, o en conexión con, nuestros servicios, contratos o el uso de este sitio web, estará sujeta a la jurisdicción de los tribunales competentes de la Ciudad de Guatemala.
                                <br /><br />
                                <strong>Número de registro mercantil: XXXX-GT</strong>
                            </p>
                            <p>
                                Los nombres de productos, logotipos, marcas y otras marcas comerciales o imágenes presentes en el sitio web de QuetzalDev son propiedad de sus respectivos titulares de marcas comerciales. El uso de nuestro software debe estar en completa alineación con la legislación guatemalteca (ej. SAT, LAIP) para la cual fueron diseñados los módulos, pero QuetzalDev no se hace responsable por el mal uso fiscal o legal de la información procesada por nuestros clientes.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

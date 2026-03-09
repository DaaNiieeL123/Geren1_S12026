import { Link, useLocation } from 'react-router-dom';
import { Download, FileText, ShoppingBag } from 'lucide-react';
import { useRef, useState, useMemo, useEffect } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import LogoOficial from '../assets/LogoOficial.png';

export const Confirmation = () => {
    useScrollAnimation();
    const location = useLocation();
    const orderData = location.state?.orderData || { name: 'Cliente Valioso', nit: 'CF', email: 'correo@ejemplo.com' };
    const totalAmount = location.state?.totalAmount || 0;
    const items = location.state?.items || [];

    // Memoize the order number so it doesn't change when React re-renders (like when generating PDF)
    const orderNumber = useMemo(() => {
        const orderNumberStr = String(Math.floor(Math.random() * 9000) + 1000);
        return `QD-2026-${orderNumberStr}`;
    }, []);

    const date = new Date().toLocaleDateString('es-GT');

    const ticketRef = useRef<HTMLDivElement>(null);
    const invoiceRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        const duration = 1500;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.6 },
                colors: ['#2D7A3A', '#7EC88A', '#111311']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.6 },
                colors: ['#2D7A3A', '#7EC88A', '#111311']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        // Short delay to let the page animate in before throwing confetti
        setTimeout(frame, 300);
    }, []);

    const downloadPDF = async () => {
        if (!invoiceRef.current) return;
        setIsDownloading(true);
        try {
            // Small delay to allow the React state to update the UI
            await new Promise(resolve => setTimeout(resolve, 150));

            // Capture canvas without CORS because we only use local SVG/CSS
            const canvas = await html2canvas(invoiceRef.current, {
                scale: 2,
                backgroundColor: '#ffffff',
                onclone: (clonedDoc) => {
                    // Iterate and replace any oklab colors that Tailwind 4 generated, which html2canvas 1.4.1 doesn't support
                    const allElements = clonedDoc.querySelectorAll('*');
                    allElements.forEach((el) => {
                        const htmlEl = el as HTMLElement;
                        const style = window.getComputedStyle(htmlEl);

                        ['color', 'backgroundColor', 'borderColor', 'borderBottomColor'].forEach(prop => {
                            const val = style.getPropertyValue(prop);
                            if (val && (val.includes('oklab') || val.includes('oklch'))) {
                                // Provide a safe fallback for the PDF
                                htmlEl.style.setProperty(prop, 'rgb(0, 0, 0)', 'important');
                            }
                        });

                        // Also check inline styles explicitly just in case
                        if (htmlEl.style.color && htmlEl.style.color.includes('oklab')) htmlEl.style.color = '#111311';
                    });
                }
            });
            const imgData = canvas.toDataURL('image/png');

            // Safe instantiation of jsPDF
            // @ts-ignore
            const JS_PDF = typeof jsPDF === 'function' ? jsPDF : (jsPDF.jsPDF || window.jspdf?.jsPDF);
            const pdf = new JS_PDF('p', 'mm', 'a4');

            const pdfWidth = pdf.internal.pageSize.getWidth();
            // A small margin (e.g. 10mm)
            const margin = 15;
            const innerWidth = pdfWidth - margin * 2;
            const pdfHeight = (canvas.height * innerWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', margin, margin, innerWidth, pdfHeight);
            pdf.save(`Ticket_QuetzalDev_${orderNumber}.pdf`);
        } catch (error: any) {
            console.error('Error generating PDF', error);
            alert(`No se pudo generar el PDF: ${error.message || 'Error desconocido'}`);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="py-20 bg-[#F7F8F5] min-h-[calc(100vh-80px)] font-dm-sans">
            <div className="max-w-[560px] mx-auto px-4 sm:px-6 relative z-10" data-animate>

                <div
                    ref={ticketRef}
                    className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] rounded-[24px] overflow-hidden relative mb-8"
                >
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-[#2D7A3A]"></div>

                    <div className="p-10 flex flex-col items-center text-center border-b border-dashed border-[#E5E7EB]">
                        <div className="flex justify-center mb-8">
                            <svg className="w-[80px] h-[80px]" viewBox="0 0 52 52">
                                <circle
                                    cx="26" cy="26" r="25" fill="none"
                                    className="stroke-[#2D7A3A] stroke-[2] animate-[draw-circle_0.6s_ease-out_forwards]"
                                    strokeDasharray="160" strokeDashoffset="160"
                                />
                                <path
                                    fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                    className="stroke-[#2D7A3A] stroke-[3.5] outline-none opacity-0 animate-[draw-check_0.4s_ease-out_0.6s_forwards]"
                                    strokeDasharray="40" strokeDashoffset="40"
                                />
                            </svg>
                        </div>
                        <h1 className="text-[36px] font-syne font-[800] text-[#111311] mb-2 leading-tight">¡Pago Aprobado!</h1>
                        <p className="text-[#4A4F4A] font-dm-sans text-[15px] max-w-sm mb-2">
                            Las licencias adquiridas y las instrucciones de instalación han sido confirmadas.
                        </p>
                        <p className="text-[#8A8F8A] font-dm-mono text-[13px]">
                            Enviado a: <strong>{orderData.email}</strong>
                        </p>
                    </div>

                    <div className="p-8 bg-[rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-2 mb-6">
                            <FileText size={20} className="text-[#111311]" />
                            <h2 className="text-[20px] font-syne font-bold text-[#111311]">Resumen de Orden</h2>
                        </div>

                        <div className="bg-white border border-[rgba(0,0,0,0.05)] shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-[12px] p-6 space-y-4 font-dm-mono text-[13px]">
                            <div className="flex justify-between border-b border-[#F3F4F6] pb-4">
                                <span className="text-[#8A8F8A]">Orden No.</span>
                                <span className="font-bold text-[#111311]">#{orderNumber}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#F3F4F6] pb-4">
                                <span className="text-[#8A8F8A]">Fecha</span>
                                <span className="font-bold text-[#111311]">{date}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#F3F4F6] pb-4 text-right">
                                <span className="text-[#8A8F8A]">Facturado a</span>
                                <span className="font-bold text-[#111311]">{orderData.name}<br />NIT: {orderData.nit}</span>
                            </div>
                            <div className="flex justify-between pt-2 items-center">
                                <span className="text-[#8A8F8A] font-bold">Total Avalado</span>
                                <span className="font-bold text-[#2D7A3A] text-2xl font-syne">Q {totalAmount.toLocaleString('es-GT', { maximumFractionDigits: 0 })}</span>
                            </div>
                        </div>

                        <button
                            onClick={downloadPDF}
                            disabled={isDownloading}
                            className="w-full mt-6 flex flex-row items-center justify-center gap-2 px-6 py-[14px] text-[15px] font-bold text-[#2D7A3A] bg-transparent border-[1.5px] border-[#2D7A3A] hover:bg-[#E8F5EB] rounded-[10px] transition-all disabled:opacity-50"
                        >
                            {isDownloading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-[#111311]/20 border-t-[#111311] rounded-full animate-spin" />
                                    Generando Factura PDF...
                                </>
                            ) : (
                                <>
                                    <Download size={18} />
                                    Descargar Factura PDF
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-3 font-dm-sans" data-animate>
                    <Link
                        to="/"
                        className="w-full flex items-center justify-center py-[16px] text-[17px] font-bold text-white bg-[#2D7A3A] hover:bg-[#236130] rounded-[10px] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(45,122,58,0.35)]"
                    >
                        Volver al Inicio
                    </Link>
                    <Link
                        to="/catalogo"
                        className="w-full flex items-center justify-center py-[16px] text-[17px] font-medium text-[#111311] bg-transparent hover:bg-black/5 rounded-[10px] transition-colors gap-2"
                    >
                        <ShoppingBag size={18} />
                        Explorar Catálogo
                    </Link>
                </div>
            </div>

            {/* Hidden Formal Invoice Template for PDF Generation */}
            <div className="absolute top-[-9999px] left-[-9999px] w-[794px] bg-white text-[#111311] font-dm-sans" ref={invoiceRef}>
                {/* Header */}
                <div className="flex justify-between items-start p-10 border-b border-gray-200">
                    <img src={LogoOficial} alt="QuetzalDev" className="h-[46px] w-auto object-contain" />
                    <div className="text-right">
                        <h2 className="text-[26px] font-syne font-bold text-[#2D7A3A] tracking-wider mb-2">FACTURA COMERCIAL</h2>
                        <p className="text-[14px] text-gray-500 font-dm-mono">Nº de Orden: <span className="text-[#111311] font-bold">{orderNumber}</span></p>
                        <p className="text-[14px] text-gray-500 font-dm-mono">Fecha: <span className="text-[#111311] font-bold">{date}</span></p>
                    </div>
                </div>

                {/* Billing Info */}
                <div className="p-10 grid grid-cols-2 gap-8">
                    <div>
                        <span className="block text-[12px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-3">Facturado A</span>
                        <h3 className="text-[20px] font-bold font-syne text-[#111311] mb-1">{orderData.name}</h3>
                        <p className="text-[14px] text-gray-600 mb-1">NIT: <span className="font-medium text-[#111311]">{orderData.nit}</span></p>
                        <p className="text-[14px] text-gray-600">{orderData.email}</p>
                    </div>
                    <div className="text-right">
                        <span className="block text-[12px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-3">Emisor</span>
                        <h3 className="text-[18px] font-bold font-syne text-[#111311] mb-1">QuetzalDev S.A.</h3>
                        <p className="text-[14px] text-gray-600 mb-1 font-dm-mono">NIT: 10293843-5</p>
                        <p className="text-[14px] text-gray-600">Ciudad de Guatemala, C.A.</p>
                    </div>
                </div>

                {/* Table */}
                <div className="px-10 pb-8 min-h-[350px]">
                    <div className="w-full text-left">
                        <div className="flex border-b-[2px] border-gray-200 pb-3 mb-4">
                            <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest w-[50%]">Descripción de Licencia</div>
                            <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest w-[15%] text-center">Cant.</div>
                            <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest w-[17.5%] text-right">Unitario</div>
                            <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest w-[17.5%] text-right">Subtotal</div>
                        </div>
                        <div className="text-[14px] font-dm-mono border-b border-gray-200 divide-y divide-gray-100">
                            {items.length > 0 ? items.map((item: any) => (
                                <div key={item.id} className="flex py-5 items-center">
                                    <div className="w-[50%] pr-4 font-dm-sans">
                                        <p className="font-bold text-[#111311] text-[16px] mb-1">{item.name}</p>
                                        <p className="text-[13px] text-gray-500 font-medium">{item.category}</p>
                                    </div>
                                    <div className="w-[15%] text-center font-bold text-[#6B6B6B]">{item.quantity}</div>
                                    <div className="w-[17.5%] text-right text-[#6B6B6B]">Q {item.price.toLocaleString('es-GT', { minimumFractionDigits: 2 })}</div>
                                    <div className="w-[17.5%] text-right font-bold text-[#111311]">Q {(item.price * item.quantity).toLocaleString('es-GT', { minimumFractionDigits: 2 })}</div>
                                </div>
                            )) : (
                                <div className="py-6 text-gray-500 font-dm-sans italic text-center w-full">Consolidado de Servicios QuetzalDev</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Totals */}
                <div className="px-10 flex justify-end pb-12">
                    <div className="w-1/2 bg-[#F7F8F5] p-7 rounded-[16px] border border-gray-100/50 font-dm-mono text-[14px] space-y-4">
                        <div className="flex justify-between text-gray-500 font-medium">
                            <span>Subtotal</span>
                            <span className="text-[#111311]">Q {(totalAmount / 1.12).toLocaleString('es-GT', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between text-gray-500 font-medium pb-2 border-b border-gray-200/50">
                            <span>Impuestos (IVA 12%)</span>
                            <span className="text-[#111311]">Q {(totalAmount - (totalAmount / 1.12)).toLocaleString('es-GT', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between text-[#2D7A3A] font-bold text-[22px] pt-1 items-center">
                            <span className="font-syne tracking-tight">TOTAL</span>
                            <span>Q {totalAmount.toLocaleString('es-GT', { minimumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                </div>

                {/* Footer msg */}
                <div className="bg-[#111311] px-10 py-8 text-white text-center mt-auto">
                    <p className="font-syne font-bold text-[18px] mb-2">Gracias por confiar en el Software Local.</p>
                    <p className="text-[12px] text-[#A1A1AA] font-dm-mono leading-relaxed max-w-[80%] mx-auto">
                        Este documento es una representación digital de licenciamiento tecnológico.
                        Queda estrictamente prohibida su modificación fraudulenta.
                    </p>
                </div>
            </div>
        </div>
    );
};

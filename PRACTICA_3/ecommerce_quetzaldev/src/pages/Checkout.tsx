import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Wallet, Landmark, ChevronRight, Lock, User, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Checkout = () => {
    useScrollAnimation();
    const { items, total, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');

    // Form state
    const [formData, setFormData] = useState({ name: '', nit: '', email: '' });

    useEffect(() => {
        if (items.length === 0 && !isProcessing) {
            navigate('/carrito');
        }
    }, [items.length, navigate, isProcessing]);

    if (items.length === 0 && !isProcessing) {
        return null; // Prevents flashing empty checkout if accessed without items
    }

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call and payment processing
        setTimeout(() => {
            clearCart();
            navigate('/confirmacion', { state: { orderData: formData, totalAmount: total * 1.12, items } });
        }, 2000);
    };

    return (
        <div className="py-20 bg-[#F7F8F5] min-h-screen font-dm-sans">
            <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Progress Bar */}
                <div className="flex items-center justify-center gap-4 mb-12" data-animate>
                    <div className={`flex items-center ${step >= 1 ? 'text-[#2D7A3A]' : 'text-[#8A8F8A]'}`}>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 border-2 ${step >= 1 ? 'border-[#2D7A3A] bg-[#2D7A3A]/10' : 'border-gray-300'}`}>1</span>
                        <span className="font-bold hidden sm:inline font-syne">Datos</span>
                    </div>
                    <ChevronRight className={step >= 2 ? 'text-[#2D7A3A]' : 'text-gray-300'} strokeWidth={2} />
                    <div className={`flex items-center ${step >= 2 ? 'text-[#2D7A3A]' : 'text-[#8A8F8A]'}`}>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 border-2 ${step >= 2 ? 'border-[#2D7A3A] bg-[#2D7A3A]/10' : 'border-gray-300'}`}>2</span>
                        <span className="font-bold hidden sm:inline font-syne">Pago</span>
                    </div>
                    <ChevronRight className="text-gray-300" strokeWidth={2} />
                    <div className="flex items-center text-[#8A8F8A]">
                        <span className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center font-bold mr-2">3</span>
                        <span className="font-bold hidden sm:inline font-syne">Ticket</span>
                    </div>
                </div>

                <div className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-black/5 rounded-[24px] overflow-hidden" data-animate>
                    <div className="p-8 border-b border-black/5 flex items-center justify-between bg-black/[0.02]">
                        <div className="flex items-center gap-3">
                            {step === 1 ? <User className="text-[#111311]" size={28} /> : <Lock className="text-[#111311]" size={28} />}
                            <h1 className="text-[22px] font-syne font-bold text-[#111311]">
                                {step === 1 ? 'Datos de Facturación' : 'Método de Pago Seguro'}
                            </h1>
                        </div>
                        <span className="text-[20px] font-dm-mono font-bold text-[#2D7A3A] hidden sm:block">
                            Q {(total * 1.12).toLocaleString('es-GT')}
                        </span>
                    </div>

                    <div className="p-8 md:p-10">
                        {step === 1 ? (
                            <form onSubmit={handleNextStep} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-[500] text-[#111311]">Nombre Empresa / Persona</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white border border-black/10 rounded-[10px] px-4 py-3 text-[#111311] placeholder:text-[#8A8F8A] focus:outline-none focus:border-[#2D7A3A] focus:ring-[3px] focus:ring-[#2D7A3A]/12 transition-all duration-200"
                                            placeholder="Ej. QuetzalDev Corp"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-[500] text-[#111311]">NIT / Identificación Fiscal</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.nit}
                                            onChange={e => setFormData({ ...formData, nit: e.target.value })}
                                            className="w-full bg-white border border-black/10 rounded-[10px] px-4 py-3 text-[#111311] placeholder:text-[#8A8F8A] focus:outline-none focus:border-[#2D7A3A] focus:ring-[3px] focus:ring-[#2D7A3A]/12 transition-all duration-200"
                                            placeholder="1234567-8"
                                        />
                                        <p className="text-[12px] text-[#8A8F8A] mt-1 font-dm-mono">Ej: 1234567-8 o CF para consumidor final</p>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[14px] font-[500] text-[#111311]">Correo Electrónico</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white border border-black/10 rounded-[10px] px-4 py-3 text-[#111311] placeholder:text-[#8A8F8A] focus:outline-none focus:border-[#2D7A3A] focus:ring-[3px] focus:ring-[#2D7A3A]/12 transition-all duration-200"
                                            placeholder="ceo@empresa.com"
                                        />
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-100 flex justify-end">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#2D7A3A] hover:bg-[#23632f] rounded-[10px] transition-colors"
                                    >
                                        Continuar al Pago
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleCheckout} className="space-y-8">
                                <span className="block text-xl font-syne font-bold text-[#2D7A3A] sm:hidden mb-4">
                                    Pagar Q {(total * 1.12).toLocaleString('es-GT', { minimumFractionDigits: 2 })}
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('card')}
                                        className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[16px] border-[2px] cursor-pointer transition-all duration-200 relative ${paymentMethod === 'card'
                                            ? 'border-[#2D7A3A] bg-[#E8F5EB] text-[#2D7A3A]'
                                            : 'border-black/5 bg-white text-[#4A4F4A] hover:border-[#2D7A3A] hover:bg-[#E8F5EB]'
                                            }`}
                                    >
                                        <CreditCard size={32} strokeWidth={1.5} />
                                        <span className="font-bold text-sm">Tarjeta</span>
                                        {paymentMethod === 'card' && (
                                            <div className="absolute top-4 right-4 w-5 h-5 bg-[#2D7A3A] rounded-full flex items-center justify-center animate-[pop-in_0.2s_ease-out]">
                                                <Check size={12} strokeWidth={3} className="text-white" />
                                            </div>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('transfer')}
                                        className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[16px] border-[2px] cursor-pointer transition-all duration-200 relative ${paymentMethod === 'transfer'
                                            ? 'border-[#2D7A3A] bg-[#E8F5EB] text-[#2D7A3A]'
                                            : 'border-black/5 bg-white text-[#4A4F4A] hover:border-[#2D7A3A] hover:bg-[#E8F5EB]'
                                            }`}
                                    >
                                        <Landmark size={32} strokeWidth={1.5} />
                                        <span className="font-bold text-sm">Transferencia</span>
                                        {paymentMethod === 'transfer' && (
                                            <div className="absolute top-4 right-4 w-5 h-5 bg-[#2D7A3A] rounded-full flex items-center justify-center animate-[pop-in_0.2s_ease-out]">
                                                <Check size={12} strokeWidth={3} className="text-white" />
                                            </div>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('deposit')}
                                        className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[16px] border-[2px] cursor-pointer transition-all duration-200 relative ${paymentMethod === 'deposit'
                                            ? 'border-[#2D7A3A] bg-[#E8F5EB] text-[#2D7A3A]'
                                            : 'border-black/5 bg-white text-[#4A4F4A] hover:border-[#2D7A3A] hover:bg-[#E8F5EB]'
                                            }`}
                                    >
                                        <Wallet size={32} strokeWidth={1.5} />
                                        <span className="font-bold text-sm">Depósito Bancario</span>
                                        {paymentMethod === 'deposit' && (
                                            <div className="absolute top-4 right-4 w-5 h-5 bg-[#2D7A3A] rounded-full flex items-center justify-center animate-[pop-in_0.2s_ease-out]">
                                                <Check size={12} strokeWidth={3} className="text-white" />
                                            </div>
                                        )}
                                    </button>
                                </div>

                                <div className="pt-8 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="text-[#6B6B6B] hover:text-[#0B100B] font-bold text-sm underline underline-offset-4"
                                    >
                                        Volver a Datos
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-white bg-[#2D7A3A] hover:bg-[#23632f] rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Procesando Pago...
                                            </>
                                        ) : (
                                            <>
                                                Autorizar Q {(total * 1.12).toLocaleString('es-GT', { minimumFractionDigits: 2 })}
                                                <Lock size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

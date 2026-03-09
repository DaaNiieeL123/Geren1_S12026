// C:\Users\danie\Desktop\PRACTICA2 GEREN1\PRACTICA_3\ecommerce_quetzaldev\src\pages\Cart.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingCart, Lock, BadgeCheck, MapPin } from 'lucide-react';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedTotal = ({ amount, className }: { amount: number, className: string }) => {
    const animatedAmount = useAnimatedNumber(amount, 400);
    return (
        <span className={className}>
            <span className="text-[#2D7A3A]">Q</span>{Math.round(animatedAmount).toLocaleString('es-GT')}
        </span>
    );
};

export const Cart = () => {
    const { items, removeFromCart, updateQuantity, total } = useCart();
    const navigate = useNavigate();
    useScrollAnimation();

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-32 px-4 min-h-[calc(100vh-80px)]">
                <div className="mb-6 text-[#111311]/20">
                    <ShoppingCart size={80} strokeWidth={1} />
                </div>
                <h2 className="text-[22px] font-syne font-[600] text-[#111311] mb-2">Tu carrito está vacío</h2>
                <p className="text-[#4A4F4A] font-dm-sans mb-8 max-w-sm text-center text-[15px]">
                    Explora nuestro catálogo de soluciones y agiliza tu desarrollo.
                </p>
                <Link
                    to="/catalogo"
                    className="inline-flex items-center justify-center px-[28px] py-[12px] text-[15px] font-medium text-white bg-[#2D7A3A] hover:bg-[#236130] rounded-[10px] transition-all"
                >
                    Ver Catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-[#F7F8F5] min-h-screen font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-syne font-bold text-[#111311] mb-2" data-animate>Resumen de Compra</h1>
                <p className="text-[#4A4F4A] mb-10 text-[15px]" data-animate>Revisa tus licencias antes de proceder al pago.</p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-8 flex flex-col gap-4" data-animate="stagger">
                        <div className="font-dm-mono text-[12px] uppercase tracking-wider text-[#8A8F8A] mb-2 font-semibold">
                            Artículos seleccionados
                        </div>

                        <ul className="divide-y divide-black/5 bg-white border border-black/5 rounded-[16px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                            {items.map((item) => (
                                <li key={item.id} className="p-[20px] flex flex-col sm:flex-row sm:items-center gap-6 group hover:bg-black/[0.02] transition-colors">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="relative w-[72px] h-[72px] rounded-[10px] overflow-hidden flex-shrink-0 bg-gray-100">
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <h3 className="text-[16px] font-syne font-[600] text-[#111311] mb-1.5">{item.name}</h3>
                                            <span className="px-[8px] py-[3px] bg-black/65 backdrop-blur-[8px] text-white font-dm-mono text-[10px] rounded-[4px] uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between sm:justify-end gap-8 sm:w-auto">
                                        <div className="flex items-center gap-1 border border-black/10 rounded-[6px] p-0.5 bg-white">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-7 h-7 flex items-center justify-center text-[#4A4F4A] hover:bg-black/5 rounded-[4px] transition-colors"
                                            >
                                                <Minus size={14} strokeWidth={2} />
                                            </button>
                                            <span className="text-[#111311] font-dm-mono font-medium text-[13px] w-6 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-7 h-7 flex items-center justify-center text-[#4A4F4A] hover:bg-black/5 rounded-[4px] transition-colors"
                                            >
                                                <Plus size={14} strokeWidth={2} />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <span className="text-[16px] font-dm-mono font-[600] text-[#111311] min-w-[90px] text-right">
                                                Q{(item.price * item.quantity).toLocaleString('es-GT')}
                                            </span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-[#8A8F8A] hover:text-[#E53E3E] transition-colors duration-200"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={18} strokeWidth={1.5} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4" data-animate>
                        <div className="bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-black/5 rounded-[16px] p-[28px] lg:sticky lg:top-36">

                            <div className="space-y-[12px] mb-8 text-[15px] font-dm-sans">
                                <div className="flex justify-between text-[#111311]">
                                    <span>Subtotal licencias</span>
                                    <span>Q{total.toLocaleString('es-GT')}</span>
                                </div>
                                <div className="flex justify-between text-[#8A8F8A]">
                                    <span>Impuestos (IVA 12%)</span>
                                    <span>Q{(total * 0.12).toLocaleString('es-GT', { maximumFractionDigits: 0 })}</span>
                                </div>
                                <div className="flex justify-between text-[#2D7A3A] font-medium pt-3 border-t border-black/5">
                                    <span>Instalación y despliegue</span>
                                    <span>Gratis</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-8 pt-4 border-t border-gray-200">
                                <span className="font-dm-mono text-[#111311]/60 uppercase tracking-[0.1em] font-[600] text-[13px] mb-2">Total GTQ</span>
                                <AnimatedTotal amount={total * 1.12} className="font-dm-mono font-[800] text-[32px] text-[#111311]" />
                            </div>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full flex items-center justify-center gap-2 py-[16px] text-[17px] font-bold text-white bg-[#2D7A3A] hover:bg-[#236130] rounded-[10px] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(45,122,58,0.35)]"
                            >
                                Proceder al Pago
                            </button>

                            <div className="flex flex-wrap justify-center gap-[16px] mt-[16px] text-[11px] text-[#8A8F8A] font-dm-sans text-center">
                                <span className="flex items-center gap-1.5"><Lock size={11} strokeWidth={2.5} /> Pago Seguro</span>
                                <span className="text-gray-300">|</span>
                                <span className="flex items-center gap-1.5"><BadgeCheck size={11} strokeWidth={2.5} /> SAT Verificado</span>
                                <span className="text-gray-300">|</span>
                                <span className="flex items-center gap-1.5"><MapPin size={11} strokeWidth={2.5} /> Empresa GT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

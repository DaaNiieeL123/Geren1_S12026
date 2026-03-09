import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';
import { ShoppingCart, CheckCircle2, Check } from 'lucide-react';
import { useState } from 'react';

const AnimatedPrice = ({ price }: { price: number }) => {
    const animatedValue = useAnimatedNumber(price, 800);
    return (
        <span className="text-[28px] font-dm-mono font-bold text-[#111311]">
            <span className="text-[#2D7A3A] mr-1">Q</span>{Math.round(animatedValue).toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
    );
};

export const Catalog = () => {
    const { addToCart } = useCart();
    const { showToast } = useToast();
    useScrollAnimation();

    const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

    const handleAddToCart = (product: typeof products[0]) => {
        addToCart(product);
        setAddedItems({ ...addedItems, [product.id]: true });
        showToast(`${product.name} agregado al carrito`);

        // Reset the "Added" state after 1.5 seconds
        setTimeout(() => {
            setAddedItems(prev => ({ ...prev, [product.id]: false }));
        }, 1500);
    };

    return (
        <div className="pt-32 pb-24 bg-[#F7F8F5] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left md:flex md:justify-between md:items-end" data-animate>
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-syne font-bold text-[#111311] mb-4">Catálogo de Software</h1>
                        <p className="text-lg text-[#4A4F4A] font-dm-sans">
                            Licencia única. Código nativo. Listo para implementar.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" data-animate="stagger">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            data-animate
                            className="bg-white rounded-[20px] overflow-hidden border border-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:-translate-y-[6px] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col h-full min-h-[620px] font-dm-sans"
                        >
                            {/* Product Image */}
                            <div className="aspect-[16/9] overflow-hidden relative group bg-gray-100">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-[12px] left-[12px]">
                                    <span className="px-[10px] py-[4px] bg-black/65 backdrop-blur-[8px] text-white font-dm-mono text-[11px] rounded-[6px] uppercase tracking-wide">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Product Content */}
                            <div className="p-[24px] flex-grow flex flex-col">
                                <div className="mb-4">
                                    <h2 className="text-[22px] font-syne font-bold text-[#111311] mb-1">{product.name}</h2>
                                    <p className="text-[#2D7A3A] font-dm-sans text-[13px] font-regular mb-[12px] line-clamp-1">{product.tagline}</p>
                                    <p className="text-[#4A4F4A] text-[14px] font-light leading-[1.6] mb-4">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-[8px] mt-[16px] flex-grow">
                                    {product.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-[14px] text-[#4A4F4A] font-regular">
                                            <Check size={16} strokeWidth={2.5} className="text-[#2D7A3A] mr-[8px] mt-[3px] flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Price and Action */}
                                <div className="mt-auto border-t border-[#EDEEE9] my-[20px] pt-[20px] flex flex-col gap-5">
                                    <div className="flex flex-col">
                                        <span className="block font-dm-mono text-[11px] text-[#8A8F8A] tracking-[0.12em] uppercase mb-1">Licencia Única</span>
                                        <AnimatedPrice price={product.price} />
                                    </div>

                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        disabled={addedItems[product.id]}
                                        className={`w-full flex justify-center items-center gap-2 px-[28px] py-[14px] rounded-[10px] font-dm-sans font-medium text-[16px] transition-all duration-200 ${addedItems[product.id]
                                            ? 'bg-[#E8F5EB] text-[#2D7A3A] cursor-default'
                                            : 'bg-[#2D7A3A] text-white hover:bg-[#236130] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(45,122,58,0.35)]'
                                            }`}
                                    >
                                        {addedItems[product.id] ? (
                                            <>
                                                <CheckCircle2 size={18} fill="currentColor" className="text-[#E8F5EB]" />
                                                ¡Agregado!
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart size={18} strokeWidth={2} />
                                                Agregar al Carrito
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

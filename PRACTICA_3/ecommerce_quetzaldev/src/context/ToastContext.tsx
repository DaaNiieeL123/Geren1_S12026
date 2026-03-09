import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastContextType {
    showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toast, setToast] = useState<{ message: string; visible: boolean }>({
        message: '',
        visible: false,
    });

    const showToast = useCallback((message: string) => {
        setToast({ message, visible: true });
        setTimeout(() => {
            setToast((prev) => ({ ...prev, visible: false }));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Component UI */}
            <div
                className={`fixed bottom-6 right-6 z-50 flex items-center bg-[#0B100B] text-white border-l-4 border-[#2D7A3A] shadow-2xl rounded-r-lg px-4 py-3 min-w-[300px] font-dm-sans transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${toast.visible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'
                    }`}
            >
                <CheckCircle2 size={20} className="text-[#2D7A3A] mr-3 shrink-0" />
                <span className="text-sm font-medium">{toast.message}</span>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

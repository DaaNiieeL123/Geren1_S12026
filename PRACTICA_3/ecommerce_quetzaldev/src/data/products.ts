import imgAgro from '../assets/agro-erp.png';
import imgMuni from '../assets/muni-web.png';
import imgRemesa from '../assets/remesa-app.png';

export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    category: 'ERP' | 'Web' | 'App';
    features: string[];
    benefits: string[];
    imageUrl: string;
    icon: string;
}

export const products: Product[] = [
    {
        id: 'qd-erp-agro-001',
        name: 'AgroERP Quetzal',
        tagline: 'Módulo ERP para Fincas y Agroindustria',
        description: 'Construido específicamente para la gestión de fincas de café, cardamomo y macadamia. Controla planillas de jornaleros por tarea, calcula el costo exacto por quintal cosechado y automatiza las liquidaciones semanales.',
        price: 3500.00,
        category: 'ERP',
        features: [
            'Control de planillas y jornaleros por obra/día',
            'Cálculo automático de costo por quintal de cosecha',
            'Generación de reportes de liquidación semanal',
            'Soporte offline para zonas rurales sin internet'
        ],
        benefits: [
            'Elimina el uso de papel en campo y reduce errores de pago al 0%',
            'Visibilidad financiera exacta del costo de producción agrícola',
            'Adaptado 100% al modelo de trabajo agropecuario guatemalteco'
        ],
        imageUrl: imgAgro, // Coffee farm / Agro
        icon: 'Tractor'
    },
    {
        id: 'qd-web-muni-002',
        name: 'MuniWeb Transparencia',
        tagline: 'Portal Web Estandarizado para Municipalidades',
        description: 'Plantilla web (React + CMS) diseñada para cumplir con la Ley de Acceso a la Información Pública (LAIP) de Guatemala. Incluye visor de ejecución presupuestaria, publicación de Plan Operativo Anual (POA) y ventanilla ciudadana.',
        price: 4200.00,
        category: 'Web',
        features: [
            'Módulos LAIP preconfigurados (Art. 10 y 11)',
            'Dashboard público de ejecución presupuestaria',
            'Sistema de tickets para peticiones vecinales',
            'Diseño accesible (WCAG 2.1) adaptado a móviles'
        ],
        benefits: [
            'Cumplimiento inmediato de las métricas de transparencia estatales',
            'Despliegue rápido en servidores gubernamentales o cloud',
            'Interfaz amigable para ciudadanos de todas las edades'
        ],
        imageUrl: imgMuni, // Clean corporate office / Gov building
        icon: 'Building2'
    },
    {
        id: 'qd-app-remesas-003',
        name: 'RemesaFlow App Kit',
        tagline: 'Gestión Financiera para Familias Receptoras',
        description: 'Código base nativo para una aplicación de salud financiera. Diseñada exclusivamente para que familias que reciben remesas puedan registrar ingresos, presupuestar gastos domésticos y crear un historial crediticio informal.',
        price: 2800.00,
        category: 'App',
        features: [
            'Presupuestador automático basado en ingresos por remesas',
            'Registro gráfico de gastos mensuales vs tipo de cambio',
            'Generador de historial financiero en PDF para microcréditos',
            'Alertas de tipo de cambio USD a GTQ'
        ],
        benefits: [
            'Ayuda a las familias guatemaltecas a bancarizar sus ingresos',
            'Arquitectura Flutter lista para integrar APIs de pago o bancos locales',
            'Interfaz extremadamente intuitiva (Apple HIG) y de bajo peso'
        ],
        imageUrl: imgRemesa, // Money / Finance app context
        icon: 'Wallet'
    }
];

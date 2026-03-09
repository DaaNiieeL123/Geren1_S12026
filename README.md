# Geren1 S1-2026 - Practica 3

Repositorio de la Practica 3 del curso de Sistemas Gerenciales I, ciclo S1-2026.
Grupo 21 — Facultad de Ingenieria, Universidad San Carlos de Guatemala.

## Sitio en Produccion

https://geren1-s12026.pages.dev

## Integrantes

| Carne | Nombre |
|---|---|
| 202004712 | Luis Emilio Rivera Yurrita |
| 202004762 | Angel Guillermo Arreaga Barrientos |
| 202203806 | Hector Daniel Ortiz Osorio |

## Contenido

```
Geren1_S12026/
├── PRACTICA_3/
│   ├── docs/               # Documentacion y enunciado de la practica
│   └── ecommerce_quetzaldev/   # Aplicacion web principal
└── README.md
```

## Aplicacion Web

La aplicacion `ecommerce_quetzaldev` es un sitio de comercio electronico construido con:

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

### Requisitos previos

- Node.js >= 18
- npm >= 9

### Instalacion

```bash
cd PRACTICA_3/ecommerce_quetzaldev
npm install
```

### Desarrollo local

```bash
npm run dev
```

### Build para produccion

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

## Despliegue

El sitio esta configurado para desplegarse en Cloudflare Pages directamente desde la carpeta `PRACTICA_3/ecommerce_quetzaldev/`.

- **Comando de build:** `npm run build`
- **Directorio de publicacion:** `dist`

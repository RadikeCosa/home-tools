# Home Tools

**Home Tools** es un “hub” de utilidades pequeñas hechas con Next.js (App Router). La idea es simple: en vez de tener muchos proyectitos sueltos, cada herramienta vive como una ruta dentro de `app/`, comparte un layout común (header/footer) y se accede desde una pantalla principal tipo tablero.

Este repo está pensado para crecer con el tiempo: hoy puede haber 1 herramienta, mañana 5, y pasado 20; el objetivo es mantener la estructura consistente para que agregar una nueva utilidad sea “copiar un patrón”, no inventar arquitectura cada vez.

---

## Stack

- **Next.js (App Router)**: páginas y routing por carpeta.
- **React**: UI declarativa; herramientas interactivas como Client Components.
- **TypeScript**: tipado para inputs/resultados.
- **Tailwind CSS (v4) + variables CSS**: utilidades de Tailwind y un set pequeño de variables globales para colores y fuentes.
- **ESLint**: linting con presets de Next.

---

## Cómo está estructurado

La estructura apunta a un patrón “hub + mini-apps”:

```
app/
  layout.tsx           # Layout global (header/footer + <main>)
  globals.css          # Variables CSS y estilos base
  page.tsx             # Home / tablero de utilidades
  <utilidad>/
	 page.tsx           # Entrada mínima: monta el componente principal
	 components/        # Componentes propios de esa utilidad

components/
  UtilityCard.tsx      # Tarjeta reutilizable del home
  Header.tsx
  Footer.tsx

public/
```

### Home como “tablero”

El home (`app/page.tsx`) define un array `utilities` con objetos del estilo:

```ts
{ path: "/napkin-calculator", title: "Napkin Calculator", description: "..." }
```

Luego renderiza una grilla de tarjetas usando `components/UtilityCard.tsx`.

Esta decisión es intencional: **centraliza el “catálogo”** de utilidades en un lugar y hace que sumar una herramienta nueva sea cuestión de:

1. crear una ruta, y 2) agregar un ítem al array.

---

## Diseño: variables globales + Tailwind

En `app/globals.css` se define un “mini design system”:

- Paleta (`--color-bg`, `--color-fg`, `--color-primary`, etc.)
- Fuentes (`--font-main`, `--font-title`)

La idea es que todas las herramientas se vean como parte de la misma familia visual sin tener que repetir decisiones de diseño por cada página.

---

## Una utilidad real como ejemplo: Napkin Calculator

La primera herramienta vive en `app/napkin-calculator` y sigue el patrón recomendado:

- `app/napkin-calculator/page.tsx`: entrypoint mínimo.
- `app/napkin-calculator/components/*`: UI + lógica de cálculo.

Si querés el detalle del flujo, motivación y mejoras específicas de esa herramienta, mirá su README:

- `app/napkin-calculator/README.md`

---

## Cómo agregar una nueva utilidad (sin tener “la próxima” definida)

La gracia de este repo es que podés ir sumando herramientas cuando aparezca la idea. Un flujo recomendado:

1. Crear una carpeta nueva:

   - `app/<nombre-de-tu-utilidad>/page.tsx`

2. Mantener la UI y lógica dentro de la utilidad:

   - `app/<nombre-de-tu-utilidad>/components/`

3. Agregar la tarjeta al tablero en `app/page.tsx`:

   - sumar `{ path, title, description }` al array `utilities`

Opcional (cuando la utilidad crezca): agregar `README.md` dentro de la ruta para documentar el cálculo, supuestos y decisiones.

---

## Scripts

- `npm run dev`: levanta el entorno local.
- `npm run build`: build de producción.
- `npm run start`: corre el build.
- `npm run lint`: corre ESLint.

---

## Puntos fuertes del enfoque

- **Escala por repetición de un patrón**: cada herramienta es una ruta autocontenida.
- **Layout compartido**: header/footer + estilos globales unifican el producto.
- **Bajo acoplamiento**: una utilidad puede evolucionar sin romper a otras.
- **Coste de incorporación bajo**: sumar una herramienta nueva es rápido.

---

## Ideas de mejora (cuando tengas ganas)

- **Tipado del catálogo**: crear un tipo `Utility` para el array del home (evita errores al sumar rutas).
- **Estandarizar validaciones UX**: evitar `alert()` y mostrar errores inline en formularios.
- **Extraer lógica a funciones puras**: facilita tests unitarios para cálculos.
- **Convenciones de UI**: decidir un criterio consistente entre “variables CSS + estilos inline” vs “clases Tailwind” para simplificar mantenimiento.
- **Testing**: sumar una base de tests (por ejemplo unit tests para cálculos) cuando tengas varias utilidades.

---

## Objetivo a largo plazo

Que “Home Tools” se convierta en tu caja de herramientas personal: un lugar donde cada idea pequeña tiene un hogar, con un look consistente y una estructura predecible.

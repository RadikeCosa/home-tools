# Napkin Calculator: Aprende a Calcular el Costo de tus Servilletas de Tela

¿Alguna vez te preguntaste cuántas servilletas puedes obtener de una pieza de tela y cuánto cuesta realmente cada una? ¡Bienvenido a **Napkin Calculator**! Este proyecto, pensado para principiantes y curiosos, te guía paso a paso para entender y calcular el costo unitario de servilletas hechas a partir de cualquier tela.

---

## ¿Para qué sirve esta herramienta?

**Napkin Calculator** es una calculadora interactiva que te ayuda a:

- Saber cuántas servilletas puedes cortar de una tela de ciertas dimensiones.
- Calcular el costo por servilleta, considerando el precio total de la tela.
- Visualizar el aprovechamiento de la tela (utilización en porcentaje).
- Descubrir si conviene rotar la servilleta para aprovechar mejor la tela.

---

## ¿Cómo funciona?

La app te pide los siguientes datos:

- **Precio de la tela** (en tu moneda preferida)
- **Ancho de la tela** (en centímetros)
- **Largo de la tela** (en centímetros)
- **Ancho de la servilleta** (en centímetros)
- **Alto de la servilleta** (en centímetros)

Con estos datos, el sistema calcula:

- **Cuántas servilletas caben** en la tela, probando dos orientaciones (normal y rotada 90°).
- **Costo por servilleta**: precio total dividido por la cantidad máxima posible.
- **Aprovechamiento de la tela**: porcentaje del área de tela realmente usada.
- **Mejor orientación**: si rotar la servilleta permite obtener más unidades.

---

## ¿Qué hace especial a este proyecto?

- **Didáctico y claro**: El código está pensado para ser fácil de leer y entender, ideal para quienes están aprendiendo React, TypeScript y lógica de programación.
- **Interfaz amigable**: El formulario guía al usuario y muestra errores claros si los datos no son válidos.
- **Resultados visuales**: Muestra el total de servilletas, el costo unitario y el porcentaje de aprovechamiento de forma visual y atractiva.
- **Código probado**: Incluye tests automáticos para asegurar que los cálculos sean correctos.

---

## ¿Cómo se usa?

1. Ingresa el precio y las dimensiones de tu tela.
2. Ingresa el tamaño deseado de las servilletas.
3. Haz clic en **Calculate**.
4. ¡Listo! Verás cuántas servilletas puedes obtener, el costo por unidad y el aprovechamiento de la tela.
5. Si quieres empezar de nuevo, haz clic en **Clear**.

---

## ¿Qué puedes aprender revisando este proyecto?

- Cómo manejar formularios y estados en React con TypeScript.
- Validación de datos y manejo de errores amigable para el usuario.
- Lógica para optimizar el uso de materiales (orientación y aprovechamiento).
- Buenas prácticas de diseño de componentes y separación de responsabilidades.
- Cómo escribir y ejecutar tests automáticos con Jest.

---

## ¿Dónde está el código principal?

- **Cálculo y lógica:** [`app/napkin-calculator/utils/calculateNapkins.ts`](utils/calculateNapkins.ts)
- **Formulario y UI:** [`app/napkin-calculator/components/`](components/)
- **Página principal de la calculadora:** [`app/napkin-calculator/page.tsx`](page.tsx)
- **Pruebas automáticas:** [`app/napkin-calculator/utils/calculateNapkins.test.ts`](utils/calculateNapkins.test.ts)

---

## ¿Te gustaría contribuir o aprender más?

¡Explora el código, prueba la app y si tienes ideas o mejoras, eres bienvenido a contribuir! Este proyecto es ideal para quienes quieren practicar y mostrar habilidades en desarrollo web moderno.

---

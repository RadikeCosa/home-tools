import UtilityCard from "../components/UtilityCard";

const utilities = [
  {
    path: "/napkin-calculator",
    title: "Napkin Calculator",
    description: "Calculadora De Costo de Servilletas.",
  },
  // Agrega más utilidades aquí
];

export default function Home() {
  return (
    <div className="flex justify-center items-start min-h-[60vh]">
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl px-2 sm:px-4 md:grid-cols-2 lg:grid-cols-3">
        {utilities.map((util) => (
          <UtilityCard key={util.path} {...util} />
        ))}
      </div>
    </div>
  );
}

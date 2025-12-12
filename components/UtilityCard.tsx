import Link from "next/link";
import React from "react";

interface UtilityCardProps {
  title: string;
  description: string;
  path: string;
}

const UtilityCard: React.FC<UtilityCardProps> = ({
  title,
  description,
  path,
}) => {
  return (
    <Link
      href={path}
      className="block rounded-lg border border-var(--color-muted) bg-white p-6 shadow-sm transition-all duration-200 hover:bg-var(--color-primary)/10 hover:border-var(--color-primary) focus:outline-none focus:ring-2 focus:ring-var(--color-primary)"
    >
      <h3 className="text-lg font-semibold mb-2 text-var(--color-fg)">
        {title}
      </h3>
      <p className="text-sm text-var(--color-fg)">{description}</p>
    </Link>
  );
};

export default UtilityCard;

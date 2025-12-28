import { LucideIcon } from "lucide-react";

interface AddonCardProps {
  title: string;
  description: string;
  price?: string;
  icon?: LucideIcon;
}

export default function AddonCard({
  title,
  description,
  price,
  icon: Icon,
}: AddonCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--color-accent)] hover:-translate-y-1 text-center">
      {/* Icon */}
      {Icon && (
        <div className="w-14 h-14 rounded-lg bg-[var(--color-cream)] flex items-center justify-center mb-5 mx-auto group-hover:bg-[var(--color-accent)] transition-colors duration-300">
          <Icon
            size={26}
            className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
          />
        </div>
      )}

      {/* Content */}
      <h4 className="text-xl font-bold text-[var(--color-primary)] mb-3 font-[var(--font-cormorant)]">
        {title}
      </h4>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        {description}
      </p>

      {/* Price */}
      {price && (
        <p className="text-[var(--color-accent)] font-bold text-lg mt-auto">
          {price}
        </p>
      )}
    </div>
  );
}


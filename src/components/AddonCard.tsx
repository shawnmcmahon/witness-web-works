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
    <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--color-accent)] hover:-translate-y-1">
      {/* Icon */}
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-[var(--color-cream)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
          <Icon
            size={24}
            className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
          />
        </div>
      )}

      {/* Content */}
      <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
        {title}
      </h4>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
        {description}
      </p>

      {/* Price */}
      {price && (
        <p className="text-[var(--color-accent)] font-bold text-lg">
          {price}
        </p>
      )}
    </div>
  );
}


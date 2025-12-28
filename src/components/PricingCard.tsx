import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  ctaText = "Book a Call",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 ${
        popular
          ? "bg-[var(--color-primary)] text-white shadow-xl scale-105 z-10"
          : "bg-white text-[var(--color-text)] shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-[var(--color-accent)] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`p-8 md:p-10 text-center border-b ${popular ? "border-gray-600" : "border-gray-100"}`}>
        <h3
          className={`text-2xl md:text-3xl font-bold mb-3 font-[var(--font-cormorant)] ${
            popular ? "text-white" : "text-[var(--color-primary)]"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-sm md:text-base mb-6 leading-relaxed ${
            popular ? "text-gray-300" : "text-[var(--color-text-muted)]"
          }`}
        >
          {description}
        </p>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl md:text-5xl font-bold ${popular ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}`}>
            {price}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 p-8 md:p-10">
        <ul className="space-y-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                  popular ? "bg-[var(--color-accent)]" : "bg-[var(--color-primary)]"
                }`}
              >
                <Check size={14} className="text-white" />
              </div>
              <span className={`text-sm md:text-base leading-relaxed ${popular ? "text-gray-200" : "text-[var(--color-text-light)]"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="p-8 md:p-10 pt-0">
        <Link
          href={ctaHref}
          className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
            popular
              ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] hover:shadow-lg"
              : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}


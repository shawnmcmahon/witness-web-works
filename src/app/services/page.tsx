import PricingCard from "@/components/PricingCard";
import AddonCard from "@/components/AddonCard";
import Link from "next/link";
import {
  Check,
  ShoppingCart,
  Search,
  FileText,
  Calendar,
  BarChart3,
  Mail,
  Megaphone,
  PenTool,
  Shield,
  RefreshCw,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Services & Pricing | Witness Web Works",
  description:
    "Explore our web design packages - Starter, Advanced, and Complete plans with website addons, marketing services, and ongoing support options.",
};

export default function ServicesPage() {
  const plans = [
    {
      name: "Starter",
      price: "$1,999",
      description: "Perfect for small businesses just getting started online",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "Social media links",
        "Google Analytics setup",
        "2 rounds of revisions",
        "1 month support",
      ],
      popular: false,
    },
    {
      name: "Advanced",
      price: "$4,999",
      description: "Ideal for growing businesses with complex needs",
      features: [
        "Up to 15 pages",
        "Mobile responsive design",
        "Advanced SEO optimization",
        "Blog/News section",
        "Newsletter integration",
        "Custom animations",
        "Speed optimization",
        "5 rounds of revisions",
        "3 months support",
      ],
      popular: true,
    },
    {
      name: "Complete",
      price: "$8,999",
      description: "Full-scale solution for established enterprises",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom integrations",
        "Advanced analytics",
        "Membership/Login system",
        "Priority support",
        "Content management system",
        "Unlimited revisions",
        "6 months support",
      ],
      popular: false,
    },
  ];

  const includedFeatures = [
    "Custom domain setup",
    "SSL security certificate",
    "Mobile-first responsive design",
    "Fast loading speeds",
    "SEO-friendly structure",
    "Cross-browser compatibility",
    "Accessibility compliance",
    "Training session included",
  ];

  const websiteAddons = [
    {
      title: "E-Commerce Store",
      description: "Full online store with product catalog, cart, and secure checkout",
      price: "From $1,500",
      icon: ShoppingCart,
    },
    {
      title: "SEO Package",
      description: "Comprehensive search engine optimization and keyword research",
      price: "From $800",
      icon: Search,
    },
    {
      title: "Blog Setup",
      description: "Full blog with categories, tags, and social sharing",
      price: "From $500",
      icon: FileText,
    },
    {
      title: "Booking System",
      description: "Online appointment scheduling with calendar integration",
      price: "From $700",
      icon: Calendar,
    },
  ];

  const marketingAddons = [
    {
      title: "Google Analytics Setup",
      description: "Advanced tracking and conversion monitoring",
      price: "$300",
      icon: BarChart3,
    },
    {
      title: "Email Marketing",
      description: "Newsletter setup with automated campaigns",
      price: "From $500",
      icon: Mail,
    },
    {
      title: "Social Media Integration",
      description: "Connect and display your social feeds",
      price: "$250",
      icon: Megaphone,
    },
    {
      title: "Content Creation",
      description: "Professional copywriting for your website",
      price: "From $400",
      icon: PenTool,
    },
  ];

  const monthlyAddons = [
    {
      title: "Security Monitoring",
      description: "24/7 security scanning and malware protection",
      price: "$99/mo",
      icon: Shield,
    },
    {
      title: "Website Maintenance",
      description: "Regular updates, backups, and performance checks",
      price: "$149/mo",
      icon: RefreshCw,
    },
    {
      title: "Priority Support",
      description: "Dedicated support with 4-hour response time",
      price: "$199/mo",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-primary)]">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-cormorant)]">
            Plans & Pricing
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transparent pricing for exceptional web design. Choose the plan that 
            fits your business needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Websites Include */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              All Websites Include
            </h2>
            <div className="gold-line"></div>
            <p className="mt-8 text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
              Every project comes with these essential features at no extra cost
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[var(--color-cream)] p-5 rounded-lg"
              >
                <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-[var(--color-text)] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Addons */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              Popular Website Addons
            </h2>
            <div className="gold-line"></div>
            <p className="mt-8 text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
              Enhance your website with powerful additional features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {websiteAddons.map((addon, index) => (
              <div
                key={addon.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AddonCard {...addon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Addons */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              Marketing Addons
            </h2>
            <div className="gold-line"></div>
            <p className="mt-8 text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
              Grow your online presence with our marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {marketingAddons.map((addon, index) => (
              <div
                key={addon.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AddonCard {...addon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Addons */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              Monthly Services
            </h2>
            <div className="gold-line"></div>
            <p className="mt-8 text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
              Keep your website secure, updated, and performing at its best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {monthlyAddons.map((addon, index) => (
              <div
                key={addon.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AddonCard {...addon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[var(--font-cormorant)]">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s discuss your project and find the perfect plan for your business.
            Book a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 group"
          >
            Book a Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}


import Link from "next/link";
import { ArrowRight, Monitor, ShoppingCart, Palette, Zap } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Monitor,
      title: "Custom Web Design",
      description: "Beautiful, responsive websites tailored to your brand identity",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that convert visitors into customers",
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Cohesive visual design that tells your unique story",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed and seamless user experience",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[var(--color-primary)] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        </div>

        <div className="container relative z-10 py-32 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse"></span>
              <span className="text-white/80 text-sm">Denver-Based Web Design Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}>
              <span className="text-white">Denver Web Design</span>
              <span className="block text-[var(--color-accent)]">& E-Commerce</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
              We help businesses reach more clients by building beautiful, 
              engaging websites that drive results and grow your brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
              <Link
                href="/services"
                className="btn btn-primary text-lg px-8 py-4 group"
              >
                Start Here
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform inline"
                />
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              What We Do Best
            </h2>
            <div className="gold-line"></div>
            <p className="mt-8 text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
              We combine creativity with technical expertise to deliver 
              exceptional digital experiences for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-white rounded-xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-6 mx-auto group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <feature.icon size={30} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 font-[var(--font-cormorant)]">
                Your Vision, Our Expertise
              </h2>
              <div className="gold-line lg:mx-0"></div>
              <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-6 mt-8">
                At Witness Web Works, we believe every business deserves a stunning 
                online presence. We partner with you to understand your goals and 
                create websites that not only look amazing but also drive real business results.
              </p>
              <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-10">
                From small businesses to growing enterprises, we provide tailored 
                solutions that fit your budget and exceed your expectations.
              </p>
              <Link
                href="/meet-the-team"
                className="btn btn-secondary inline-flex items-center gap-2 group"
              >
                Meet Our Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-10 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <p className="text-lg text-[var(--color-accent)] uppercase tracking-widest font-medium">Our Promise</p>
                  <p className="text-2xl md:text-3xl font-bold font-[var(--font-cormorant)] leading-relaxed">
                    Client-Centered Design,<br />Results-Driven Development
                  </p>
                  <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto"></div>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">
                    Every project receives our full attention, ensuring your vision becomes reality.
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)] rounded-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-[var(--color-accent)] rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[var(--font-cormorant)]">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s discuss your project and create something amazing together. 
            Book a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

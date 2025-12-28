import Link from "next/link";
import { ArrowRight, Heart, Target, Users, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Meet the Team | Witness Web Works",
  description:
    "Get to know the team behind Witness Web Works. We're passionate about creating beautiful, effective websites for businesses in Denver and beyond.",
};

export default function MeetTheTeamPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We genuinely love what we do. Every project is an opportunity to create something amazing.",
    },
    {
      icon: Target,
      title: "Purpose",
      description:
        "We build websites with intention, focusing on your business goals and user experience.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We see ourselves as an extension of your team, working together toward your success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay current with the latest technologies to deliver cutting-edge solutions.",
    },
  ];

  const teamMembers = [
    {
      name: "Shawn",
      role: "Lead Developer & Co-Founder",
      description:
        "With years of experience in web development, Shawn brings technical expertise and creative problem-solving to every project. He's passionate about building fast, accessible, and beautiful websites.",
    },
    {
      name: "Demetri",
      role: "Strategy & Business Development",
      description:
        "Demetri focuses on understanding client needs and translating business goals into effective digital strategies. He ensures every project delivers real value and measurable results.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-cormorant)]">
            Meet the Team
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;re a small team with big ambitions. Get to know the people 
            behind Witness Web Works.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
                Our Story
              </h2>
              <div className="gold-line mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
                Witness Web Works was born from a simple observation: too many small 
                businesses struggle to get online presence that truly represents their 
                value. We saw countless entrepreneurs with incredible products and 
                services, held back by websites that didn&apos;t do them justice.
              </p>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
                Based in Denver, Colorado, we set out to change that. Our mission is to 
                provide professional, affordable web design services that help businesses 
                of all sizes compete in the digital landscape. We believe every business 
                deserves a website that works as hard as they do.
              </p>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Today, we&apos;ve helped dozens of businesses transform their online 
                presence, from local shops to growing e-commerce brands. We&apos;re proud 
                of every project we deliver and the relationships we build along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              The Team
            </h2>
            <div className="gold-line mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-[var(--color-primary)] mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white font-[var(--font-cormorant)]">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-accent)] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
              Our Values
            </h2>
            <div className="gold-line mx-auto"></div>
            <p className="mt-6 text-[var(--color-text-muted)] max-w-2xl mx-auto">
              These core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] mx-auto mb-4 flex items-center justify-center">
                  <value.icon size={28} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 font-[var(--font-cormorant)]">
                  {value.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[var(--font-cormorant)]">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Ready to discuss your project? We&apos;d love to hear about your 
            business and how we can help you succeed online.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}


import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Witness Web Works",
  description:
    "Get in touch with Witness Web Works. Book a free consultation and let's discuss your web design project.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shawn@witnesswebworks.com",
      href: "mailto:shawn@witnesswebworks.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(303) 555-0123",
      href: "tel:+13035550123",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Denver, Colorado",
      href: null,
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon - Fri: 9am - 5pm",
      href: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-cormorant)]">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your project? We&apos;d love to hear from you. 
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[var(--color-cream)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
                  Send Us a Message
                </h2>
                <p className="text-[var(--color-text-muted)] mb-8">
                  Fill out the form and we&apos;ll be in touch soon.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 font-[var(--font-cormorant)]">
                Get In Touch
              </h2>
              <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
                Whether you have a question about our services, pricing, or just 
                want to discuss your project ideas, our team is ready to help. 
                Reach out through the form or use any of the contact methods below.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                      <info.icon size={22} className="text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)] mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-primary)] font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 font-[var(--font-cormorant)]">
                  Free Consultation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Not sure where to start? Book a free 30-minute consultation 
                  and let&apos;s discuss your project requirements, goals, and 
                  how we can help bring your vision to life.
                </p>
                <p className="text-[var(--color-accent)] font-medium">
                  No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[var(--font-cormorant)]">
                Frequently Asked Questions
              </h2>
              <div className="gold-line mx-auto"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-[var(--color-cream)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
                  How long does it take to build a website?
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Most projects take 4-8 weeks from start to finish, depending on 
                  complexity and scope. We&apos;ll provide a detailed timeline 
                  during our initial consultation.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
                  Do you offer payment plans?
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Yes! We offer flexible payment options. Typically, we require 
                  50% upfront and 50% upon completion. For larger projects, we 
                  can arrange a custom payment schedule.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
                  Will I be able to update the website myself?
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Absolutely! We provide training and documentation so you can 
                  make updates to your content. For more complex changes, our 
                  support team is always available to help.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 font-[var(--font-cormorant)]">
                  Do you work with clients outside of Denver?
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  Yes! While we&apos;re based in Denver, we work with clients 
                  across the United States and beyond. All of our meetings can 
                  be conducted virtually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


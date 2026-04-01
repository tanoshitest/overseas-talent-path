import { Link } from "react-router-dom";
import { Users, Wrench, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

const serviceIcons = [Users, Wrench, FileCheck];

export default function ForEmployersPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220, 46%, 18%) 0%, hsl(220, 40%, 28%) 100%)" }}>
        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-main text-center relative z-10 py-20 px-4 md:px-6">
          <ScrollReveal animation="fade-down">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.employers.heroTitle}</h1>
          </ScrollReveal>
          <ScrollReveal animation="blur-in" delay={200}>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">{t.employers.heroSubtitle}</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={400}>
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                {t.employers.heroCta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={t.employers.servicesTitle} />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.employers.services.map((svc, i) => {
              const Icon = serviceIcons[i];
              const serviceImages = [
                "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80",
                "https://images.unsplash.com/photo-1504917595217-d4dc5ede4884?w=400&q=80",
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
              ];
              return (
                <ScrollReveal key={i} delay={i * 150} animation="fade-up">
                  <div className="bg-background border border-border rounded-xl shadow-sm overflow-hidden h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="img-zoom h-40">
                      <img src={serviceImages[i]} alt={svc.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">{svc.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{svc.desc}</p>
                      <ul className="space-y-2">
                        {svc.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-section-bg">
        <div className="container-main">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={t.employers.benefitsTitle} />
          </ScrollReveal>
          <div className="space-y-12">
            {t.employers.benefits.map((b, i) => {
              const benefitImages = [
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
              ];
              return (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <ScrollReveal animation={i % 2 === 0 ? "fade-left" : "fade-right"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{b.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                  </ScrollReveal>
                  <ScrollReveal animation={i % 2 === 0 ? "fade-right" : "fade-left"} className={`img-zoom rounded-xl shadow-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img src={benefitImages[i]} alt={b.title} className="w-full h-56 md:h-64 object-cover rounded-xl" />
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  );
}

import { Link } from "react-router-dom";
import { Users, Wrench, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

function ScrollRevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`${isVisible ? "animate-fade-up" : "opacity-0"} ${className || ""}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const serviceIcons = [Users, Wrench, FileCheck];

export default function ForEmployersPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero with image */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220, 46%, 18%) 0%, hsl(220, 40%, 28%) 100%)" }}>
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80"
          alt="Industrial workplace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-main text-center relative z-10 py-20 px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.employers.heroTitle}</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">{t.employers.heroSubtitle}</p>
          <Button variant="hero" size="xl" asChild className="group">
            <Link to="/contact">
              {t.employers.heroCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading title={t.employers.servicesTitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.employers.services.map((svc, i) => {
              const Icon = serviceIcons[i];
              const serviceImages = [
                "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80",
                "https://images.unsplash.com/photo-1504917595217-d4dc5ede4884?w=400&q=80",
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
              ];
              return (
                <ScrollRevealDiv key={i} delay={i * 120}>
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
                </ScrollRevealDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-section-bg">
        <div className="container-main">
          <SectionHeading title={t.employers.benefitsTitle} />
          <div className="space-y-12">
            {t.employers.benefits.map((b, i) => {
              const benefitImages = [
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
              ];
              return (
                <ScrollRevealDiv key={i}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{b.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                    <div className={`img-zoom rounded-xl shadow-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                      <img
                        src={benefitImages[i]}
                        alt={b.title}
                        className="w-full h-56 md:h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </ScrollRevealDiv>
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

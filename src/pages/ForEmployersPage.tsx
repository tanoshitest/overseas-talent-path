import { Link } from "react-router-dom";
import { Users, Wrench, FileCheck, CheckCircle } from "lucide-react";
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
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center section-padding bg-primary">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-h1 text-primary-foreground mb-4">{t.employers.heroTitle}</h1>
          <p className="text-body text-primary-foreground/70 max-w-2xl mx-auto mb-8">{t.employers.heroSubtitle}</p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">{t.employers.heroCta}</Link>
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
              return (
                <ScrollRevealDiv key={i} delay={i * 100}>
                  <div className="bg-background border border-border rounded-xl shadow-sm p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <Icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
          <div className="space-y-16">
            {t.employers.benefits.map((b, i) => (
              <ScrollRevealDiv key={i}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-h3 text-foreground mb-3">{b.title}</h3>
                    <p className="text-body text-muted-foreground">{b.desc}</p>
                  </div>
                  <div className={`rounded-xl bg-background border border-border h-48 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="text-6xl font-bold text-accent/20">{["60%", "✓", "12m"][i]}</div>
                  </div>
                </div>
              </ScrollRevealDiv>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  );
}

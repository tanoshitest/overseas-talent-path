import { Link } from "react-router-dom";
import {
  Users, Clock, SearchX, CheckCircle, GraduationCap, Languages, Briefcase,
  Shield, TrendingUp, Heart, Zap, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

function ScrollRevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-up" : "opacity-0"} ${className || ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StatItem({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useScrollReveal();
  const count = useCountUp(value, isVisible);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-accent">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

const problemIcons = [Users, Clock, SearchX];
const qualityIcons = [GraduationCap, Languages, Briefcase];
const whyUsIcons = [Shield, TrendingUp, Heart, Zap];
const avatarColors = ["bg-accent", "bg-primary", "bg-success"];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center section-padding" style={{ background: "linear-gradient(180deg, hsl(225, 60%, 97%) 0%, hsl(0, 0%, 100%) 100%)" }}>
        <div className="container-main grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-h1 text-foreground mb-6">{t.hero.title}</h1>
            <p className="text-body text-muted-foreground mb-8 max-w-xl">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">{t.hero.cta1}</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#process">{t.hero.cta2}</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-64 h-72">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute bg-background rounded-xl shadow-lg border border-border p-4 w-52"
                  style={{ top: `${i * 36}px`, left: `${i * 20}px`, zIndex: 3 - i }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-full ${avatarColors[i]} flex items-center justify-center text-sm font-bold text-background`}>
                      {["AK", "SJ", "ML"][i]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{["Ahmad K.", "Sara J.", "Marco L."][i]}</div>
                      <div className="text-xs text-muted-foreground">{["CNC Operator", "Electrician", "Welder"][i]}</div>
                    </div>
                  </div>
                  <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium">✓ Verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading title={t.problem.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.problem.cards.map((card, i) => {
              const Icon = problemIcons[i];
              return (
                <ScrollRevealDiv key={i} delay={i * 100}>
                  <div className="rounded-xl p-6 bg-destructive/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <Icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </div>
                </ScrollRevealDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-section-bg">
        <div className="container-main">
          <SectionHeading title={t.solution.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollRevealDiv>
              <ul className="space-y-5">
                {t.solution.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                    <span className="text-body text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollRevealDiv>
            <ScrollRevealDiv delay={200}>
              <div className="bg-background rounded-xl shadow-lg border border-border p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-xl font-bold text-accent-foreground">AK</div>
                  <div>
                    <div className="font-semibold text-foreground">{t.solution.profileName}</div>
                    <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium">{t.solution.profileBadge}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.solution.profileSkills.map((s, i) => (
                    <span key={i} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </ScrollRevealDiv>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* Candidate Quality */}
      <section className="section-padding bg-section-bg">
        <div className="container-main">
          <SectionHeading title={t.quality.title} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <StatItem value={500} suffix="+" label={t.quality.stats[0].label} />
            <StatItem value={95} suffix="%" label={t.quality.stats[1].label} />
            <StatItem value={0} suffix="" label={t.quality.stats[2].label} />
            <StatItem value={12} suffix="" label={t.quality.stats[3].label} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.quality.cards.map((card, i) => {
              const Icon = qualityIcons[i];
              return (
                <ScrollRevealDiv key={i} delay={i * 100}>
                  <div className="bg-background rounded-xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <Icon className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </div>
                </ScrollRevealDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats B1+ fix: show text directly */}

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading title={t.testimonials.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible">
            {t.testimonials.items.map((item, i) => (
              <ScrollRevealDiv key={i} delay={i * 100}>
                <div className="bg-background border border-border rounded-xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 min-w-[280px]">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-sm text-foreground italic mb-6 leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollRevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-primary">
        <div className="container-main">
          <SectionHeading title={t.whyUs.title} light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.whyUs.items.map((item, i) => {
              const Icon = whyUsIcons[i];
              return (
                <ScrollRevealDiv key={i} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                </ScrollRevealDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

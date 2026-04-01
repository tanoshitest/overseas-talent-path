import { Link } from "react-router-dom";
import {
  Users, Clock, SearchX, CheckCircle, GraduationCap, Languages, Briefcase,
  Shield, TrendingUp, Heart, Zap, Quote, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import SafeImage from "@/components/SafeImage";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

function StatItem({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, isVisible } = useScrollReveal();
  const count = useCountUp(value, isVisible);
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <div className="text-3xl md:text-5xl font-bold text-gradient">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

const problemIcons = [Users, Clock, SearchX];
const qualityIcons = [GraduationCap, Languages, Briefcase];
const whyUsIcons = [Shield, TrendingUp, Heart, Zap];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220, 46%, 18%) 0%, hsl(220, 40%, 28%) 50%, hsl(220, 35%, 35%) 100%)" }}>
        <SafeImage
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
          <div>
            <ScrollReveal animation="fade-down" delay={100}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-success pulse-success" />
                <span className="text-sm text-white/90 font-medium">500+ professionals placed</span>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={200}>
              <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={400}>
              <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">{t.hero.subtitle}</p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/contact">
                    {t.hero.cta1}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="ctaOutline" size="xl" asChild>
                  <a href="#process">{t.hero.cta2}</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-72 h-80">
              {[
                { name: "Ahmad K.", role: "CNC Operator", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
                { name: "Sara J.", role: "Electrician", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
                { name: "Marco L.", role: "Welder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
              ].map((person, i) => (
                <ScrollReveal key={i} animation="fade-right" delay={300 + i * 200}>
                  <div
                    className={`glass-card rounded-xl shadow-2xl p-4 w-56 ${
                      i === 0 ? "animate-float" : i === 1 ? "animate-float-delayed" : "animate-float-slow"
                    }`}
                    style={{ marginTop: `${i * 8}px`, marginLeft: `${i * 24}px` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <SafeImage src={person.img} alt={person.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{person.name}</div>
                        <div className="text-xs text-muted-foreground">{person.role}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium inline-flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Verified
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={t.problem.title} />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.problem.cards.map((card, i) => {
              const Icon = problemIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 150} animation="fade-up" className="h-full">
                  <div className="rounded-xl p-6 bg-destructive/5 border border-destructive/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-section-bg">
        <div className="container-main">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={t.solution.title} />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-left">
              <ul className="space-y-5">
                {t.solution.bullets.map((b, i) => (
                  <ScrollReveal key={i} animation="fade-left" delay={i * 150}>
                    <li className="flex items-start gap-3 bg-background rounded-lg p-4 shadow-sm border border-border">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 shrink-0" />
                      <span className="text-body text-foreground">{b}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={200}>
              <div className="relative">
                <div className="img-zoom rounded-xl shadow-xl">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-6 glass-card rounded-xl shadow-xl p-4 max-w-[220px] animate-float-slow">
                  <div className="flex items-center gap-3 mb-3">
                    <SafeImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" className="w-12 h-12 rounded-full object-cover ring-2 ring-accent" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.solution.profileName}</div>
                      <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium">{t.solution.profileBadge}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.solution.profileSkills.map((s, i) => (
                      <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Candidate Quality */}
      <section className="section-padding bg-section-bg relative overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={t.quality.title} />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
            <StatItem value={500} suffix="+" label={t.quality.stats[0].label} />
            <StatItem value={95} suffix="%" label={t.quality.stats[1].label} />
            <StatItem value={0} suffix="" label={t.quality.stats[2].label} />
            <StatItem value={12} suffix="" label={t.quality.stats[3].label} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.quality.cards.map((card, i) => {
              const Icon = qualityIcons[i];
              const images = [
                "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
                "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
              ];
              return (
                <ScrollReveal key={i} delay={i * 150} animation="zoom-in">
                  <div className="bg-background rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="img-zoom h-40">
                      <SafeImage src={images[i]} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={t.testimonials.title} />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} animation={i === 0 ? "fade-left" : i === 2 ? "fade-right" : "fade-up"}>
                <div className="bg-background border border-border rounded-xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <p className="text-sm text-foreground italic mb-6 leading-relaxed flex-1">"{item.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {item.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative section-padding overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220, 46%, 18%) 0%, hsl(220, 40%, 28%) 100%)" }}>
        <SafeImage src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container-main relative z-10">
          <ScrollReveal animation="blur-in">
            <SectionHeading title={t.whyUs.title} light />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.whyUs.items.map((item, i) => {
              const Icon = whyUsIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 120} animation={i % 2 === 0 ? "fade-left" : "fade-right"}>
                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

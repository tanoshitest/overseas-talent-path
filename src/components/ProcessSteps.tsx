import { FileText, ListChecks, Video, Plane } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons = [FileText, ListChecks, Video, Plane];

export default function ProcessSteps() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background" id="process">
      <div className="container-main" ref={ref}>
        <SectionHeading title={t.process.title} subtitle={t.process.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5">
            <div className="h-full bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 rounded-full" />
          </div>
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center relative ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold mb-4 relative z-10 shadow-lg shadow-accent/20">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

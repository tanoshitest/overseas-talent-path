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
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-border" />
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center relative ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold mb-4 relative z-10">
                  {i + 1}
                </div>
                <Icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="text-h3 text-foreground mb-2 text-base font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

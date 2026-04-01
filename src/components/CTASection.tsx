import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(135deg, hsl(21, 78%, 57%), hsl(21, 70%, 48%))" }}
    >
      <div
        className={`container-main text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        ref={ref}
      >
        <h2 className="text-h2 text-background mb-4">{t.cta.title}</h2>
        <p className="text-body text-background/80 mb-8">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="ctaWhite" size="xl" asChild>
            <Link to="/contact">{t.cta.btn1}</Link>
          </Button>
          <Button variant="ctaOutline" size="xl" asChild>
            <a href="mailto:info@talentbridge.de">{t.cta.btn2}</a>
          </Button>
        </div>
        <p className="text-xs text-background/60 mt-6">{t.cta.trust}</p>
      </div>
    </section>
  );
}

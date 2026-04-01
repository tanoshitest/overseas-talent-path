import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative section-padding overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(21, 78%, 52%), hsl(21, 70%, 42%))" }}>
      <img
        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
        alt="Team handshake"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(21, 78%, 52%, 0.92), hsla(21, 70%, 42%, 0.92))" }} />
      <div
        className={`container-main text-center relative z-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        ref={ref}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="ctaWhite" size="xl" asChild className="group">
            <Link to="/contact">
              {t.cta.btn1}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="ctaOutline" size="xl" asChild>
            <a href="mailto:info@ihpvietnam.com">{t.cta.btn2}</a>
          </Button>
        </div>
        <p className="text-xs text-white/50 mt-8">{t.cta.trust}</p>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/lib/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};
    if (!data.get("company")) newErrors.company = true;
    if (!data.get("person")) newErrors.person = true;
    if (!data.get("email")) newErrors.email = true;
    if (!data.get("message")) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    toast({ title: t.contact.successToast });
    form.reset();
  };

  const fieldClass = (name: string) =>
    `${errors[name] ? "border-destructive ring-1 ring-destructive/30" : ""}`;

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220, 46%, 18%) 0%, hsl(220, 40%, 28%) 100%)" }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-main relative z-10 py-20 md:py-28 px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{t.contact.title}</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div
          className={`container-main grid grid-cols-1 lg:grid-cols-5 gap-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          ref={ref}
        >
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.fields.company} *</label>
                    <Input name="company" className={`h-11 ${fieldClass("company")}`} />
                    {errors.company && <p className="text-xs text-destructive mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.fields.person} *</label>
                    <Input name="person" className={`h-11 ${fieldClass("person")}`} />
                    {errors.person && <p className="text-xs text-destructive mt-1">Required</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.fields.email} *</label>
                    <Input name="email" type="email" className={`h-11 ${fieldClass("email")}`} />
                    {errors.email && <p className="text-xs text-destructive mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.fields.phone}</label>
                    <Input name="phone" type="tel" className="h-11" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.fields.positions}</label>
                  <Input name="positions" type="number" min="1" className="h-11" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.fields.message} *</label>
                  <Textarea name="message" rows={5} className={fieldClass("message")} />
                  {errors.message && <p className="text-xs text-destructive mt-1">Required</p>}
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full group">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  {t.contact.submit}
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                {t.contact.directReach}{" "}
                <a href="mailto:info@ihpvietnam.com" className="text-accent hover:underline font-medium">info@ihpvietnam.com</a>
              </p>
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Book a call card */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
                alt="Book a call"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/90" />
              <div className="relative z-10 p-6">
                <Calendar className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold mb-1 text-white">{t.contact.bookCall}</h3>
                <p className="text-sm text-white/70 mb-4">{t.contact.bookCallSub}</p>
                <Button variant="ctaWhite" size="lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">{t.contact.bookBtn}</a>
                </Button>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                info@ihpvietnam.com
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                +49 69 123 4567
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-4 w-4 text-accent" />
                </div>
                +49 170 123 4567 (WhatsApp)
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                Kaiserstraße 50, 60329 Frankfurt am Main, Germany
              </div>
            </div>

            {/* Map with image */}
            <div className="img-zoom rounded-xl shadow-sm border border-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80"
                alt="Frankfurt am Main skyline"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

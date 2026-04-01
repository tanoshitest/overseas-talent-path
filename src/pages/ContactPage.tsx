import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
    `${errors[name] ? "border-destructive" : ""}`;

  return (
    <section className="section-padding bg-background">
      <div
        className={`container-main grid grid-cols-1 lg:grid-cols-5 gap-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        ref={ref}
      >
        {/* Form */}
        <div className="lg:col-span-3">
          <h2 className="text-h2 text-foreground mb-2">{t.contact.title}</h2>
          <p className="text-body text-muted-foreground mb-8">{t.contact.subtitle}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t.contact.fields.company} *</label>
                <Input name="company" className={fieldClass("company")} />
                {errors.company && <p className="text-xs text-destructive mt-1">Required</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t.contact.fields.person} *</label>
                <Input name="person" className={fieldClass("person")} />
                {errors.person && <p className="text-xs text-destructive mt-1">Required</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t.contact.fields.email} *</label>
                <Input name="email" type="email" className={fieldClass("email")} />
                {errors.email && <p className="text-xs text-destructive mt-1">Required</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">{t.contact.fields.phone}</label>
                <Input name="phone" type="tel" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{t.contact.fields.positions}</label>
              <Input name="positions" type="number" min="1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">{t.contact.fields.message} *</label>
              <Textarea name="message" rows={5} className={fieldClass("message")} />
              {errors.message && <p className="text-xs text-destructive mt-1">Required</p>}
            </div>
            <Button type="submit" variant="hero" size="xl" className="w-full">
              {t.contact.submit}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            {t.contact.directReach}{" "}
            <a href="mailto:info@talentbridge.de" className="text-accent hover:underline">info@talentbridge.de</a>
          </p>
        </div>

        {/* Info */}
        <div className="lg:col-span-2">
          <div className="bg-primary text-primary-foreground rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-1">{t.contact.bookCall}</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">{t.contact.bookCallSub}</p>
            <Button variant="ctaWhite" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">{t.contact.bookBtn}</a>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Mail className="h-5 w-5 text-accent" /> info@talentbridge.de
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <Phone className="h-5 w-5 text-accent" /> +49 69 123 4567
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <MessageCircle className="h-5 w-5 text-accent" /> +49 170 123 4567 (WhatsApp)
            </div>
            <div className="flex items-start gap-3 text-sm text-foreground">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              Kaiserstraße 50, 60329 Frankfurt am Main, Germany
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-6 rounded-xl bg-section-bg border border-border h-40 flex flex-col items-center justify-center">
            <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
            <span className="text-sm text-muted-foreground">Frankfurt am Main</span>
          </div>
        </div>
      </div>
    </section>
  );
}

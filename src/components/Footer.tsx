import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main px-4 md:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-xl font-bold">IHP VIETNAM</span>
              <span className="w-2 h-2 rounded-full bg-accent -mt-2" />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1">{t.nav.home}</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1">{t.nav.about}</Link></li>
              <li><Link to="/for-employers" className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1">{t.nav.employers}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors inline-flex items-center gap-1">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Legal</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.impressum}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.datenschutz}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent shrink-0" /> info@talentbridge.de
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0" /> +49 69 123 4567
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0" /> Frankfurt am Main
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-main px-4 md:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-primary-foreground/40">{t.footer.rights}</p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors inline-flex items-center gap-1"
          >
            Back to top <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-0.5 mb-3">
              <span className="text-xl font-bold">TalentBridge</span>
              <span className="w-2 h-2 rounded-full bg-accent -mt-2" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/for-employers" className="hover:text-primary-foreground transition-colors">{t.nav.employers}</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">{t.nav.contact}</Link></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.impressum}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t.footer.datenschutz}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@talentbridge.de</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +49 69 123 4567</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Frankfurt am Main, Germany</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-main px-4 md:px-6 py-4">
          <p className="text-center text-xs text-primary-foreground/50">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

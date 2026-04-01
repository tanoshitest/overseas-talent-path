import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "@/lib/LanguageContext";

export default function Header() {
  const { lang, toggleLang, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/for-employers", label: t.nav.employers },
    { to: "/contact", label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-0.5 group">
          <span className="text-xl font-bold text-white">
            IHP VIETNAM
          </span>
          <span className="w-2 h-2 rounded-full bg-accent -mt-2 group-hover:scale-125 transition-transform" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                isActive(l.to)
                  ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-medium transition-colors px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40"
          >
            {lang === "en" ? "EN" : "DE"} / {lang === "en" ? "DE" : "EN"}
          </button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive(l.to) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={toggleLang}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left border border-border rounded-full px-4 py-2 w-fit"
              >
                {lang === "en" ? "EN / DE" : "DE / EN"}
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

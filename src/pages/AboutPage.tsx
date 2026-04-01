import { useTranslation } from "@/lib/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Users, Award, Globe, Handshake } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();
  const about = t.about;
  const r1 = useScrollReveal();
  const r2 = useScrollReveal();
  const r3 = useScrollReveal();
  const r4 = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container-main px-4 md:px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{about.heroTitle}</h1>
          <p className="text-white/70 text-lg">{about.heroSubtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={r1.ref} className={`section-padding bg-background transition-all duration-600 ${r1.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="container-main px-4 md:px-6 grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: about.missionTitle, text: about.missionText },
            { icon: Eye, title: about.visionTitle, text: about.visionText },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-sm border">
              <item.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section ref={r2.ref} className={`section-padding bg-muted transition-all duration-600 ${r2.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="container-main px-4 md:px-6">
          <SectionHeading title={about.valuesTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[Globe, Handshake, Award, Users, Target, Eye].slice(0, about.values.length).map((Icon, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <Icon className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-bold text-foreground mb-2">{about.values[i].title}</h4>
                <p className="text-muted-foreground text-sm">{about.values[i].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={r3.ref} className={`section-padding bg-background transition-all duration-600 ${r3.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="container-main px-4 md:px-6 max-w-3xl mx-auto text-center">
          <SectionHeading title={about.storyTitle} />
          <p className="text-muted-foreground leading-relaxed mt-6">{about.storyText}</p>
        </div>
      </section>

      {/* Team */}
      <section ref={r4.ref} className={`section-padding bg-muted transition-all duration-600 ${r4.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="container-main px-4 md:px-6">
          <SectionHeading title={about.teamTitle} subtitle={about.teamSubtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {about.team.map((member, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h4 className="font-bold text-foreground">{member.name}</h4>
                <p className="text-accent text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

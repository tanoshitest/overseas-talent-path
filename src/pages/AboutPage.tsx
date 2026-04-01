import { useTranslation } from "@/lib/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Users, Award, Globe, Handshake } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();
  const about = t.about;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220, 46%, 18%) 0%, hsl(220, 40%, 28%) 100%)" }}>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-main px-4 md:px-6 text-center max-w-3xl mx-auto relative z-10 py-20 md:py-28">
          <ScrollReveal animation="fade-down">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-white">{about.heroTitle}</h1>
          </ScrollReveal>
          <ScrollReveal animation="blur-in" delay={200}>
            <p className="text-white/70 text-lg">{about.heroSubtitle}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-main px-4 md:px-6 grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: about.missionTitle, text: about.missionText, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" },
            { icon: Eye, title: about.visionTitle, text: about.visionText, img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80" },
          ].map((item, i) => (
            <ScrollReveal key={i} animation={i === 0 ? "fade-left" : "fade-right"} delay={i * 200}>
              <div className="bg-card rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="img-zoom h-48">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <item.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-bg">
        <div className="container-main px-4 md:px-6">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={about.valuesTitle} />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[Globe, Handshake, Award, Users].slice(0, about.values.length).map((Icon, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 120}>
                <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{about.values[i].title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{about.values[i].desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-main px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-left">
            <div className="img-zoom rounded-xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Our story" className="w-full h-72 md:h-96 object-cover rounded-xl" />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={200}>
            <div>
              <SectionHeading title={about.storyTitle} />
              <p className="text-muted-foreground leading-relaxed">{about.storyText}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-section-bg">
        <div className="container-main px-4 md:px-6">
          <ScrollReveal animation="fade-up">
            <SectionHeading title={about.teamTitle} subtitle={about.teamSubtitle} />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {about.team.map((member, i) => {
              const teamImages = [
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
              ];
              return (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                  <div className="bg-card rounded-xl p-6 shadow-sm border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <img src={teamImages[i]} alt={member.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-accent/20" />
                    <h4 className="font-bold text-foreground">{member.name}</h4>
                    <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

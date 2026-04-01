interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className={`text-2xl md:text-h2 font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`w-12 h-1 rounded-full mx-auto mt-4 mb-3 ${light ? "bg-accent/60" : "bg-accent"}`} />
      {subtitle && (
        <p className={`mt-2 text-body max-w-2xl mx-auto ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

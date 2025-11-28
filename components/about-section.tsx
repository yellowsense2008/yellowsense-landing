import { Target, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative technology solutions that drive growth and efficiency in an ever-evolving digital landscape.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "To be the leading technology partner for enterprises seeking transformative digital solutions that create lasting impact.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse collective of engineers, designers, and strategists united by our passion for technology and commitment to excellence.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Collection of Tech Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our services span various needs at every stage of the transformation process. Explore how we help businesses
            transform and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

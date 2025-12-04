"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, BarChart3, Cloud, Lock, Music } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Users,
      title: "Booking Maid/Nanny",
      description:
        "Connect with trusted and verified maids and nannies for your household needs. Our platform ensures safe, reliable, and professional home help services with instant booking and flexible scheduling.",
      features: ["Instant Booking", "Verified Professionals", "Flexible Scheduling"],
    },
    {
      icon: Lock,
      title: "Confidential Clean Rooms (CCR)",
      description:
        "Empowering the next billion users through innovative data governance and predictive analytics solutions using AI/ML based Confidential Clean Rooms for secure, compliant lending.",
      features: ["Automated Compliance Solutions", "Flow-Based Lending", "Inclusive Credit Ecosystem"],
    },
    {
      icon: Music,
      title: "Melody",
      description:
        "Advanced AI-powered solutions for content creation, media processing, and digital experiences. Revolutionizing how businesses and creators work with multimedia content.",
      features: ["AI Content Creation", "Media Processing", "Digital Innovation"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "We keep your business safe by actively identifying and neutralizing cyber threats through a proactive risk and threat-centric approach.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"],
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description:
        "We help you unlock the immense potential of data, AI and analytics, ensuring that your organisation is fit for the digital future.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization"],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Transform your IT infrastructure with our cloud solutions that offer scalability, security, and cost-efficiency for modern enterprises.",
      features: ["Cloud Migration", "DevOps Solutions", "Infrastructure Management"],
    },
  ]

  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Products & Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium gap-1" onClick={() => {
                    const urls = [
                      'https://yellowsense.in', // Maid/Nanny booking
                      'https://ccr.yellowsense.in/', // CCR
                      'https://melody.yellowsense.in', // Melody
                      'https://yellowsense.in', // Cybersecurity
                      'https://yellowsense.in', // Data & Analytics
                      'https://yellowsense.in'  // Cloud Infrastructure
                    ];
                    window.open(urls[index], '_blank');
                  }}>
                    Click
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

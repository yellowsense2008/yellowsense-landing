"use client"

import { Target, Lightbulb, Users } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To simplify complex challenges through intuitive technology that empowers organizations and enriches everyday life.",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description:
        "We blend deep technical expertise with human-centered design to help businesses operate smarter and families care better.",
    },
    {
      icon: Users,
      title: "Our Solutions",
      description:
        "Delivering intelligent solutions across enterprise technology, AI, and modern nanny-care services with forward-focused innovation.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary uppercase tracking-wider"
          >
            About Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance"
          >
            Forward-Focused Innovation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Yellowsense Technologies is a forward-focused innovation company delivering intelligent solutions across enterprise technology, AI, and modern nanny-care services. We blend deep technical expertise with human-centered design to help businesses operate smarter and families care better. Our mission is to simplify complex challenges through intuitive technology that empowers organizations and enriches everyday life.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

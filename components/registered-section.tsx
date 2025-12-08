"use client"
import { motion } from "framer-motion"

export function RegisteredSection() {
  const logos = [
    "/assets/img-1.webp",
    "/assets/img-2.webp",
    "/assets/img-3.webp",
    "/assets/img-4.webp",
    "/assets/img-5.webp",
    "/assets/img-6.webp",
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Registered with
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((src, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              className="flex items-center justify-center hover:grayscale-0 grayscale transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={src}
                alt={`Registration ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    id: 1,
    title: "AI tools aiding crime probes with speed and efficiency",
    excerpt: "How advanced AI systems are revolutionizing forensic investigations and evidence analysis.",
    category: "Industry News",
    date: "Dec 5, 2024",
    link: "#",
  },
  {
    id: 2,
    title: "The rising threat of deepfakes in enterprise security",
    excerpt: "Understanding and mitigating synthetic media risks in corporate environments.",
    category: "Security",
    date: "Dec 3, 2024",
    link: "#",
  },
  {
    id: 3,
    title: "New research on multi-modal deepfake detection published",
    excerpt: "Our team presents groundbreaking research at IEEE International Conference.",
    category: "Research",
    date: "Nov 28, 2024",
    link: "#",
  },
  {
    id: 4,
    title: "AI becoming too human is also a looming threat",
    excerpt: "Exploring the ethical implications of increasingly realistic AI-generated content.",
    category: "Opinion",
    date: "Nov 25, 2024",
    link: "#",
  },
]

export function NewsSection() {
  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              Latest Updates
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            >
              News & Insights
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" className="rounded-full gap-2">
              Explore all blogs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={item.link} className="block">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary rounded-2xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-primary font-medium">{item.category}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


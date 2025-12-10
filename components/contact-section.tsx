"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left - Info */}
            <div className="p-8 lg:p-16 bg-gradient-to-br from-amber-100 to-yellow-50 text-gray-800">
              <span className="inline-block text-xs font-semibold tracking-widest text-amber-600 uppercase mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Ready to Secure Your Digital Future?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Connect with our team to learn how our deep tech solutions can protect 
                your organization from fraud and synthetic media threats.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:hr@yellowsense.in" 
                  className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-200/50 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">hr@yellowsense.in</div>
                  </div>
                </a>

                <a 
                  href="tel:+919869397868" 
                  className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-200/50 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium">+91 98693 97868</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 rounded-xl bg-amber-200/50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">Bengaluru, Karnataka</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-8 lg:p-16">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Send us a message
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border-border bg-secondary/50 focus:bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border-border bg-secondary/50 focus:bg-background"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="rounded-xl border-border bg-secondary/50 focus:bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border-border bg-secondary/50 focus:bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full rounded-full bg-amber-400 text-gray-900 hover:bg-amber-500 gap-2"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

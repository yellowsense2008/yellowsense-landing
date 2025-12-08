"use client"
import Link from "next/link"
import { Linkedin, Twitter, Github, Instagram, MapPin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { FooterSpiral } from "./animated-blobs"

export function Footer() {
  const productLinks = [
    { label: "pi-authentify", href: "#" },
    { label: "pi-vox", href: "#" },
    { label: "pi-scout", href: "#" },
    { label: "pi-sense", href: "#" },
    { label: "pi-securechain", href: "#" },
  ]

  const companyLinks = [
    { label: "About us", href: "#about" },
    { label: "Awards & events", href: "#" },
    { label: "Our team", href: "#" },
    { label: "Careers", href: "#" },
  ]

  const resourceLinks = [
    { label: "Research", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/yellowsense-technologies/", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "X-Twitter" },
  ]

  return (
    <footer className="bg-footer-bg text-footer-foreground relative overflow-hidden">
      {/* Animated Spiral Background */}
      <FooterSpiral />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8 py-16 relative z-10"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Products */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-6 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-footer-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-footer-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-6 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-footer-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-footer-foreground mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-start gap-3 text-footer-foreground/60 hover:text-primary transition-colors text-sm group"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Bengaluru, Karnataka, India
                  <span className="block text-xs text-footer-foreground/40 group-hover:text-primary/60 mt-1">
                    Show on map
                  </span>
                </span>
              </a>
              <a 
                href="mailto:hello@pi-labs.ai" 
                className="flex items-center gap-3 text-footer-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                hello@pi-labs.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Link 
              href="#" 
              className="text-footer-foreground/40 text-xs hover:text-footer-foreground/60 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-footer-foreground/20">|</span>
            <Link 
              href="#" 
              className="text-footer-foreground/40 text-xs hover:text-footer-foreground/60 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-footer-foreground/5 hover:bg-footer-foreground/10 flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-footer-foreground/60" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-footer-foreground/30 text-xs">
            © {new Date().getFullYear()} pi-labs.ai. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

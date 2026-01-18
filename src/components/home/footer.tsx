"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PortfolioBuilder</h3>
            <p className="text-sm opacity-75">
              Create beautiful portfolios that get you hired.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
            <p className="text-sm opacity-75">
              © 2025 PortfolioBuilder. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/" className="opacity-75 hover:opacity-100 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="/" className="opacity-75 hover:opacity-100 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="/" className="opacity-75 hover:opacity-100 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="/" className="opacity-75 hover:opacity-100 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

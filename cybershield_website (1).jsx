import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Bug, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CyberShieldWebsite() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#00ffcc22,transparent_40%),radial-gradient(circle_at_80%_30%,#0066ff22,transparent_40%)]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            CyberShield
          </h1>
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#services" className="hover:text-green-400">Services</a>
            <a href="#pricing" className="hover:text-green-400">Pricing</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>
          <Button className="bg-green-500 hover:bg-green-600 rounded-2xl">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Elite Cybersecurity Protection
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10">
          Advanced penetration testing and security services trusted by modern
          businesses.
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-2xl">
          Get Security Audit
        </Button>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 bg-[#050505]">
        <h3 className="text-3xl font-bold text-center mb-14">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceCard icon={<Bug size={40} />} title="Penetration Testing" desc="Real-world attack simulation." />
          <ServiceCard icon={<Lock size={40} />} title="Vulnerability Assessment" desc="Risk-based security scanning." />
          <ServiceCard icon={<ShieldCheck size={40} />} title="Security Consulting" desc="Strategic security guidance." />
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-24 text-center">
        <h3 className="text-3xl font-bold mb-12">Case Studies</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CaseCard title="E-commerce Security Hardening" />
          <CaseCard title="Startup PenTest Engagement" />
          <CaseCard title="Corporate Network Audit" />
        </div>
      </section>

      {/* Client Logos */}
      <section className="px-6 py-16 bg-[#050505] text-center">
        <h3 className="text-2xl font-bold mb-10">Trusted By</h3>
        <div className="flex flex-wrap justify-center gap-10 opacity-70 text-gray-400">
          <span>TechCorp</span>
          <span>SecureBank</span>
          <span>CloudNova</span>
          <span>DataEdge</span>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 text-center">
        <h3 className="text-3xl font-bold mb-12">Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PricingCard name="Starter" price="$199" />
          <PricingCard name="Professional" price="$499" featured />
          <PricingCard name="Enterprise" price="Custom" />
        </div>
      </section>

      {/* LinkedIn Funnel */}
      <section className="px-6 py-20 bg-[#050505] text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s Connect on LinkedIn</h3>
        <p className="text-gray-400 mb-8">
          Follow CyberShield for latest security insights and client success stories.
        </p>
        <Button className="rounded-2xl px-8 py-3 bg-blue-600 hover:bg-blue-700">
          Visit LinkedIn
        </Button>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 text-center">
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-xl bg-black border border-gray-700" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-xl bg-black border border-gray-700" />
          <textarea name="message" placeholder="Your Message" required rows={4} className="w-full p-3 rounded-xl bg-black border border-gray-700" />
          <Button className="w-full bg-green-500 hover:bg-green-600 rounded-2xl py-3">
            <Mail className="mr-2" size={18} /> Send Message
          </Button>
        </form>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/923000000000" target="_blank" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg">
        <MessageCircle />
      </a>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} CyberShield. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <Card className="bg-black border-gray-800 rounded-2xl hover:border-green-500 transition">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 text-green-400">{icon}</div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{desc}</p>
      </CardContent>
    </Card>
  );
}

function CaseCard({ title }) {
  return (
    <Card className="bg-black border-gray-800 rounded-2xl">
      <CardContent className="p-6">
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">Detailed security engagement improving client posture.</p>
      </CardContent>
    </Card>
  );
}

function PricingCard({ name, price, featured }) {
  return (
    <Card className={`rounded-2xl border ${featured ? "border-green-500 scale-105" : "border-gray-800"} bg-black`}>
      <CardContent className="p-8 text-center">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="text-3xl font-bold mb-6">{price}</p>
        <Button className="w-full rounded-2xl bg-green-500 hover:bg-green-600">Choose Plan</Button>
      </CardContent>
    </Card>
  );
}

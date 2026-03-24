import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'praveenray947@gmail.com',
    href: 'mailto:praveenray947@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9218804047',
    href: 'tel:+919218804047'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/praveen-ray',
    href: 'https://linkedin.com/in/praveen-ray'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ray-praveen',
    href: 'https://github.com/ray-praveen'
  }
];

export function ContactSection() {

  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "f6d22e7b-c29f-483c-a91f-6bf9bb7d2541");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!!");
      event.target.reset();
    } else {
      setResult("Something went wrong!!");
    }
  };

  return (
    <section id="contact" className="relative bg-black py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.23, 0.86, 0.36, 0.99] }}
          className="text-center mb-20"
        >
          <div className="text-xs tracking-[0.3em] text-white/40 mb-4">GET IN TOUCH</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            Let's Build<br />Something Amazing
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'm always interested in hearing about new opportunities 
            and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">

              <div>
                <label className="block text-sm text-white/60 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder:text-white/30 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder:text-white/30 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 text-white placeholder:text-white/30 outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(92, 107, 255, 0.9)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-[#5C6BFF] hover:bg-[#5C6BFF]/90 rounded-full text-white font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>

              {/* ✅ RESULT TEXT */}
              <span className="text-white/40 text-sm">{result}</span>

            </form>
          </motion.div>

          {/* RIGHT: CONTACT INFO (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group block p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5C6BFF]/10 group-hover:bg-[#5C6BFF]/20 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-[#5C6BFF]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">{info.label}</div>
                    <div className="text-white/80">{info.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Education Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.23, 0.86, 0.36, 0.99], delay: 0.4 }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#5C6BFF]/10 to-purple-600/10 border border-white/10"
            >
              <div className="text-xs tracking-[0.3em] text-white/40 mb-4">EDUCATION</div>
              <h3 className="text-xl font-light text-white mb-2">
                Lovely Professional University
              </h3>
              <p className="text-sm text-white/60 mb-1">B.Tech - Computer Science and Engineering</p>
              <p className="text-xs text-white/40">Aug 2023 - Present</p>
            </motion.div>


            
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.23, 0.86, 0.36, 0.99] }}
          className="mt-32 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/40 mb-2">
            © 2026 Praveen Ray. Built with passion for innovation.
          </p>
      
        </motion.div>
      </div>
    </section>
  );
}
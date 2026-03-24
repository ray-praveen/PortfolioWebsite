import { motion, useInView } from "motion/react";
import { Code2, Sparkles, Users, Zap } from "lucide-react";
// import ParticleAvatar from "./ParticleAvatar";
import praveen from "../public/praveen.jpeg";
import { useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable and scalable architecture",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Exploring AI and modern technologies",
  },
  {
    icon: Users,
    title: "User Focus",
    description: "Designing intuitive user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Fast and responsive applications",
  },
];

export function AboutSection() {

  const textRef = useRef(null);
  const isInView = useInView(textRef, { margin: "-100px" });

  return (
    <section
      id="about"
      className="relative bg-[#05060A] py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute left-[-200px] top-[20%] w-[600px] h-[600px] bg-blue-600/20 blur-[200px] rounded-full" />
      <div className="absolute right-[-200px] bottom-[10%] w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-xs tracking-[0.3em] text-white/40 mb-6">
            ABOUT ME
          </div>

          <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-white font-light max-w-4xl">
            Crafting Intelligent
            <span className="italic font-medium"> Digital Experiences</span>
          </h2>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* Text */}

          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >

            <motion.p
              animate={{
                color: isInView
                  ? "#ffffff"
                  : "rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed"
            >
              I'm an Android developer passionate about building scalable
              and high-performance mobile applications using modern
              technologies like
              <span className="text-white"> Kotlin</span>,
              <span className="text-white"> Jetpack Compose</span>, and
              <span className="text-white"> Firebase</span>.
            </motion.p>

            <motion.p
              animate={{
                color: isInView
                  ? "#ffffff"
                  : "rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed"
            >
              I enjoy transforming complex problems into intuitive mobile
              solutions. Along with development, I have a strong interest
              in <span className="text-white">UI/UX design</span>,
              ensuring applications are both functional and visually
              engaging.
            </motion.p>

            <motion.p
              animate={{
                color: isInView
                  ? "#ffffff"
                  : "rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed"
            >
              Currently exploring the intersection of
              <span className="text-white"> AI and mobile development</span>,
              experimenting with adaptive interfaces and intelligent
              features that respond to user behavior.
            </motion.p>

          </motion.div>

          {/* Avatar Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-10 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-center">

              <div className="flex justify-center mb-6">
                <img src = {praveen} alt="Praveen Ray" className="w-70 h-87 rounded-3xl" />
              </div>

              <h3 className="text-xl text-white mb-1">
                Praveen Ray
              </h3>

              <p className="text-white/50 text-sm mb-6">
                Android Developer • Kotlin Specialist • UI/UX Designer
              </p>

              {/* Stats */}

              <div className="flex justify-center gap-8 text-sm">

                <div>
                  <div className="text-white text-lg font-medium">10+</div>
                  <div className="text-white/40 text-xs">Projects</div>
                </div>

                <div>
                  <div className="text-white text-lg font-medium">5+</div>
                  <div className="text-white/40 text-xs">Technologies</div>
                </div>

                <div>
                  <div className="text-white text-lg font-medium">2+</div>
                  <div className="text-white/40 text-xs">Years Learning</div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Highlights */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <item.icon className="w-6 h-6 text-[#6B7CFF] mb-4" />

              <h4 className="text-white text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
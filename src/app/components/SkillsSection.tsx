import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
  import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    // SiCss3,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiFirebase,
    SiKotlin,
    SiAndroid,
    SiTailwindcss,
    SiFigma,
    SiGit,
    SiGithub,
    SiPostgresql,
    SiMysql,
    // SiDocker,
    // SiAmazonaws,
    SiRedux,
    SiExpo,
    SiSupabase,
    SiOpenai
  } from "react-icons/si";


const skillIcons: any = {
  Kotlin: SiKotlin,
  Firebase: SiFirebase,
  JavaScript: SiJavascript,
  React: SiReact,
  Tailwind: SiTailwindcss,
  HTML: SiHtml5,
  Android: SiAndroid,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  SQL: SiPostgresql,
  "Node.js": SiNodedotjs
};


const techIcons: any = {
  TypeScript: { icon: SiTypescript, link: "https://www.typescriptlang.org" },
  JavaScript: { icon: SiJavascript, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  HTML: { icon: SiHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  // CSS: { icon: SiCss3, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  React: { icon: SiReact, link: "https://react.dev" },
  NextJS: { icon: SiNextdotjs, link: "https://nextjs.org" },
  NodeJS: { icon: SiNodedotjs, link: "https://nodejs.org" },
  Firebase: { icon: SiFirebase, link: "https://firebase.google.com" },
  Kotlin: { icon: SiKotlin, link: "https://kotlinlang.org" },
  Android: { icon: SiAndroid, link: "https://developer.android.com" },
  Tailwind: { icon: SiTailwindcss, link: "https://tailwindcss.com" },
  Redux: { icon: SiRedux, link: "https://redux.js.org" },
  Expo: { icon: SiExpo, link: "https://expo.dev" },
  Git: { icon: SiGit, link: "https://git-scm.com" },
  GitHub: { icon: SiGithub, link: "https://github.com" },
  Figma: { icon: SiFigma, link: "https://figma.com" },
  PostgreSQL: { icon: SiPostgresql, link: "https://postgresql.org" },
  MySQL: { icon: SiMysql, link: "https://mysql.com" },
  // Docker: { icon: SiDocker, link: "https://docker.com" },
  // AWS: { icon: SiAmazonaws, link: "https://aws.amazon.com" },
  Supabase: { icon: SiSupabase, link: "https://supabase.com" },
  OpenAI: { icon: SiOpenai, link: "https://openai.com" }
};


const skillCategories = [
  {
    number: "01",
    title: "Android Development",
    description:
      "Building scalable Android applications with modern architecture and clean UI systems.",
    services: [
      "MVVM Architecture",
      "Jetpack Compose UI",
      "Realtime Firebase Apps",
      "Performance Optimization"
    ],
    tools: ["Kotlin", "Android", "Firebase"]
  },

  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and high-performance web interfaces.",
    services: [
      "React Applications",
      "Responsive UI",
      "Modern Animations",
      "Performance Optimization"
    ],
    tools: ["React", "JavaScript", "Tailwind", "HTML"]
  },

  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Designing scalable backend systems and APIs with real-time capabilities.",
    services: [
      "REST API Design",
      "Realtime Systems",
      "Database Management",
      "Authentication Systems"
    ],
    tools: ["Node.js", "Firebase", "SQL"]
  },

  {
    number: "04",
    title: "Tools & Platforms",
    description:
      "Using industry tools for efficient development workflows and collaboration.",
    services: [
      "Version Control (Git)",
      "UI/UX Design (Figma)",
      "Project Collaboration",
      "Development Workflow"
    ],
    tools: ["Git", "GitHub", "Figma", "Android"]
  },

  {
    number: "05",
    title: "CS Fundamentals",
    description:
      "Strong understanding of computer science principles for problem solving.",
    services: [
      "Data Structures",
      "Algorithm Design",
      "Database Concepts",
      "System Design Basics"
    ],
    tools: ["SQL"]
  }
];

export function SkillsSection() {
  return (
    <section className="relative bg-[#000000] py-36 px-6 md:px-12 lg:px-16 overflow-hidden">

      <div className="absolute left-[-200px] top-[30%] w-[600px] h-[600px] bg-blue-600/20 blur-[220px] rounded-full" />
      <div className="absolute right-[-200px] bottom-[20%] w-[600px] h-[600px] bg-purple-600/20 blur-[220px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-xs tracking-[0.3em] text-white/40 mb-6">
            SKILLS
          </div>

          <h2 className="text-[clamp(3rem,6vw,5rem)] text-white font-light">
            Technical <span className="italic font-medium">Expertise</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -8 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >

              <div className="relative p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20">

                {/* Hover Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#5C6BFF] to-purple-600" />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* TOP */}
                  <div className="flex justify-between mb-6">
                    <div className="text-5xl text-white/10 group-hover:text-white/20 transition">
                      {cat.number}
                    </div>

                    <ArrowUpRight className="text-white/40 group-hover:text-white transition" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl text-white mb-4 font-light">
                    {cat.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/50 text-sm mb-6">
                    {cat.description}
                  </p>

                  {/* HOVER CONTENT */}
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500 grid grid-cols-2 gap-6">

                    {/* SERVICES */}
                    <div>
                      <p className="text-white/70 text-sm mb-3">Services</p>
                      <ul className="text-white text-sm space-y-1">
                        {cat.services.map(s => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    {/* TOOLS */}
                    <div>
                      <p className="text-white/70 text-sm mb-3">Tools</p>

                      <div className="flex flex-wrap gap-3">
                        {cat.tools.map(tool => {
                          const Icon = skillIcons[tool];
                          if (!Icon) return null;

                          return (
                            <Icon key={tool} size={24} className="text-white" />
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* TECH ICONS STRIP */}

        <div className="mt-12 pt-8 border-t border-white/10">

  <div className="text-xs tracking-[0.2em] text-white/40 mb-6">
    TECHNOLOGIES USED
  </div>

  <div className="flex flex-wrap gap-6">

    {Object.keys(techIcons).map((tech) => {
      const data = techIcons[tech];
      const Icon = data.icon;

      return (
        <div key={tech} className="relative group">

          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
          >

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5C6BFF]/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />

            {/* icon */}
            <Icon className="w-8 h-8 text-white/60 group-hover:text-white relative z-10 transition" />

          </a>

          {/* TOOLTIP NAME */}
          <div className="absolute left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 text-xs rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
          {tech}
          </div>

        </div>
      );
    })}

  </div>

</div>

      </div>
    </section>
  );
}
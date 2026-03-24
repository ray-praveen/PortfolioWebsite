import { motion } from "motion/react";
import { Briefcase } from "lucide-react";


const internship = {
  company: "Wyreflow Technologies",
  role: "Product Development Intern",
  period: "May 2025 – Jul 2025",
  description:
  "Worked on designing scalable UI systems and improving product usability for the HireM platform. Focused on simplifying user journeys, building reusable UI components, and improving developer–designer collaboration.",
  
  achievements: [
  {
  title: "UI System Design",
  description:
  "Designed reusable UI components and scalable design patterns to maintain visual consistency across the HireM platform."
  },
  
  {
  title: "User Experience Optimization",
  description:
  "Conducted competitor analysis and created wireframes to simplify complex user journeys and improve onboarding flows."
  },
  
  {
  title: "Developer Collaboration",
  description:
  "Collaborated closely with engineers to refine design handoffs, document UI specifications, and improve development efficiency."
  }
  ]
  }



export function InternshipSection() {

return (

<section className="relative bg-black py-36 px-6 md:px-12 lg:px-16 overflow-hidden">

{/* background glow */}

<div className="absolute left-[-200px] top-[30%] w-[600px] h-[600px] bg-blue-600/20 blur-[220px] rounded-full"/>
<div className="absolute right-[-200px] bottom-[20%] w-[600px] h-[600px] bg-purple-600/20 blur-[220px] rounded-full"/>

<div className="max-w-7xl mx-auto relative z-10">

{/* Header */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
viewport={{once:true}}
className="mb-24"
>

<div className="text-xs tracking-[0.3em] text-white/40 mb-6">
EXPERIENCE
</div>

<h2 className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-white font-light">
Professional
<span className="italic font-medium"> Journey</span>
</h2>

</motion.div>

{/* Card */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
viewport={{once:true}}
className="relative"
>

<div className="p-12 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10">

{/* Header */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

<div className="flex items-start gap-4">

<div className="w-16 h-16 rounded-2xl bg-[#6B7CFF]/10 flex items-center justify-center">

<Briefcase className="w-8 h-8 text-[#6B7CFF]"/>

</div>

<div>

<h3 className="text-3xl text-white font-light">
Wyreflow Technologies
</h3>

<p className="text-white/60">
Product Development Intern
</p>

<p className="text-sm text-white/40">
May 2025 – Jul 2025
</p>

</div>

</div>

<div className="px-4 py-2 bg-white/10 rounded-full text-xs text-white/70">
<a href="https://drive.google.com/drive/folders/1Vby_FqF70oN0hkOU1loGQPBIMsv_55zq?usp=sharing">
Internship Certificate
</a> 
</div>

</div>

{/* Description */}

<p className="text-white/60 leading-relaxed mb-12 max-w-3xl">

Worked on designing scalable UI systems and improving product usability for the HireM platform. Focused on simplifying user journeys, building reusable UI components, and improving developer–designer collaboration.

</p>

{/* Achievements */}

<div className="grid md:grid-cols-3 gap-6">

{/* item */}

<div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">

<h4 className="text-white text-sm tracking-widest mb-3">
UI SYSTEM DESIGN
</h4>

<p className="text-white/50 text-sm leading-relaxed">
Designed reusable UI components and scalable design patterns to maintain visual consistency across the platform.
</p>

</div>

<div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">

<h4 className="text-white text-sm tracking-widest mb-3">
UX OPTIMIZATION
</h4>

<p className="text-white/50 text-sm leading-relaxed">
Conducted competitor analysis and developed wireframes to simplify onboarding and improve user journeys.
</p>

</div>

<div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">

<h4 className="text-white text-sm tracking-widest mb-3">
TEAM COLLABORATION
</h4>

<p className="text-white/50 text-sm leading-relaxed">
Worked closely with developers to refine design handoffs and document UI specifications.
</p>

</div>

</div>

</div>

</motion.div>

</div>

</section>

)
}
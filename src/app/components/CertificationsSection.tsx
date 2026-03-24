import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
{
title:"Oracle Cloud Infrastructure 2025 Certified AI Foundations",
issuer:"Oracle",
date:"Dec 2025",
link:"https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7911560&trackId=OCI25AICFA&key=5ab27ade93d40b5face4fee7743c22eb9f18ca53",
color:"from-red-500/10 via-orange-500/10 to-yellow-500/10",
},

{
title:"JPMorganChase Software Engineering Job Simulation",
issuer:"Forage",
date:"Nov 2025",
link:"https://www.linkedin.com/posts/praveenray_jp-morgan-software-engineering-virtual-activity-7402591400590258177-2NfN",
color:"from-blue-500/10 via-cyan-500/10 to-indigo-500/10"
},

{
title:"Leadership Skills",
issuer:"IIM Ahmedabad • Coursera",
date:"Dec 2024",
link:"https://coursera.org/share/78c14affdef3aebec4a9240b374dc1ff",
color:"from-purple-500/10 via-pink-500/10 to-indigo-500/10"
},

{
title:"AI For Everyone",
issuer:"DeepLearning.AI • Coursera",
date:"Sep 2024",
link:"https://coursera.org/share/c2caabf122d98f4280794dec7615f1a2",
color:"from-emerald-500/10 via-teal-500/10 to-green-500/10"
}
];

export function CertificationsSection(){

return(

<section className="relative bg-[#05060A] py-36 px-6 md:px-12 lg:px-16 overflow-hidden">

{/* background glow */}

<div className="absolute left-[-200px] top-[30%] w-[600px] h-[600px] bg-blue-600/20 blur-[220px] rounded-full"/>
<div className="absolute right-[-200px] bottom-[20%] w-[600px] h-[600px] bg-purple-600/20 blur-[220px] rounded-full"/>

<div className="max-w-7xl mx-auto relative z-10">

{/* header */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
viewport={{once:true}}
className="mb-24"
>

<div className="text-xs tracking-[0.3em] text-white/40 mb-6">
CERTIFICATIONS
</div>

<h2 className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-white font-light">
Professional
<span className="italic font-medium"> Learning</span>
</h2>

</motion.div>

{/* grid */}

<div className="grid md:grid-cols-2 gap-6">

{certifications.map((cert,index)=>(

<motion.a
href={cert.link}
target="_blank"
rel="noopener noreferrer"
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
viewport={{once:true}}
className="group relative block"
>

<div className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">

{/* gradient glow */}

<div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />

<div className="relative z-10">

{/* icon + link icon */}

<div className="flex justify-between items-start mb-6">

<div className="w-14 h-14 rounded-2xl bg-[#6B7CFF]/10 flex items-center justify-center">
<Award className="w-7 h-7 text-[#6B7CFF]"/>
</div>

<ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white transition"/>

</div>

{/* title */}

<h3 className="text-xl text-white font-light mb-3 leading-relaxed">
{cert.title}
</h3>

{/* issuer */}

<div className="flex items-center gap-3 text-sm text-white/50">

<span>{cert.issuer}</span>

<span className="w-1 h-1 rounded-full bg-white/30"/>

<span>{cert.date}</span>

</div>

{/* hover CTA */}

<div className="mt-6 text-sm text-white/40 group-hover:text-white transition">
View Certificate →
</div>

</div>

</div>

</motion.a>

))}

</div>

</div>

</section>

)
}
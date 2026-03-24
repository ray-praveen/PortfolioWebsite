import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import video1 from "../public/medi1.mp4";
import video2 from "../public/affecta1.mp4";
import video3 from "../public/chatvat.mp4";
import video4 from "../public/ott.mp4";

const projects = [
{
number: "01",
title: "AiVena",
subtitle: "Healthcare Companion Android App",
period: "2026",
tags: ["Android", "Jetpack Compose", "Firebase"],
description:
"A scalable healthcare onboarding application focused on simplifying patient journeys using structured UI states and smooth motion interactions.",
tech: ["Kotlin","Jetpack Compose","Firebase","Navigation Compose","Material 3","MVVM"],
color: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
video: video1
},

{
number: "02",
title: "AffectaAI",
subtitle: "Emotion-Adaptive Interface Engine",
period: "2025",
tags: ["Android", "AI UX", "Behavior Analytics"],
description:
"An intelligent Android system that adapts UI dynamically based on behavioral signals to improve focus and reduce digital fatigue.",
tech: ["Kotlin","Jetpack Compose","Room DB","DataStore","Behavior Analytics"],
color: "from-purple-500/10 via-pink-500/10 to-indigo-500/10",
video: video2
},

{
number: "03",
title: "Chatify",
subtitle: "Real-time Chat Application",
period: "2025",
tags: ["Android", "Realtime", "Firebase"],
description:
"A real-time messaging app with authentication, live sync and smooth UI for seamless communication.",
tech: ["Kotlin","Firebase Auth","Firestore","Realtime DB","Jetpack Compose"],
color: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10",
video: video3
},

{
number: "04",
title: "OTT Platform App",
subtitle: "Video Streaming Mobile Application",
period: "2025",
tags: ["React Native", "IOS/Android", "Expo", "UI/UX",],
description:
"A modern OTT-style Android app with content browsing and smooth playback experience.",
tech: ["Kotlin","ExoPlayer","Jetpack Compose","Firebase","Material UI"],
color: "from-emerald-500/10 via-teal-500/10 to-green-500/10",
video: video4
}
];


const ProjectVideo = ({ src }: { src: string }) => {

const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
if (videoRef.current) {
videoRef.current.playbackRate = 1.6; 
}
}, []);

return (
<video
ref={videoRef}
src={src}
autoPlay
loop
muted
playsInline
className="w-full h-[240px] object-cover rounded-2xl border border-white/10"
/>
);
};



export function ProjectsSection() {

const [active,setActive] = useState(0);

return (

<section
id="work"
className="relative bg-[#05060A] py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
>

{/* background glow */}
<div className="absolute left-[-200px] top-[20%] w-[600px] h-[600px] bg-blue-600/20 blur-[220px] rounded-full"/>
<div className="absolute right-[-200px] bottom-[10%] w-[600px] h-[600px] bg-purple-600/20 blur-[220px] rounded-full"/>

<div className="max-w-7xl mx-auto relative z-10">

{/* HEADER */}
<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
viewport={{once:true}}
className="mb-24"
>
<div className="text-xs tracking-[0.3em] text-white/40 mb-6">
PROJECTS
</div>

<h2 className="text-[clamp(3rem,6vw,5rem)] text-white font-light">
Selected <span className="italic font-medium">Work</span>
</h2>
</motion.div>


{/* LAYOUT */}
<div className="grid lg:grid-cols-2 gap-16">

{/* LEFT LIST */}
<div className="space-y-5">

{projects.map((p,i)=>(
<motion.div
key={p.title}
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{delay:i*0.1}}
viewport={{once:true}}
onClick={()=>setActive(i)}
className={`cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${
active===i
? "bg-white/[0.07] border-white/20"
: "bg-white/[0.03] border-white/10 hover:bg-white/[0.05]"
}`}
>

<div className="flex items-start gap-4">
<div className="text-white/30 text-3xl">
{p.number}
</div>

<div>
<h3 className="text-white text-xl">{p.title}</h3>
<p className="text-white/50 text-sm">{p.subtitle}</p>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-4">
{p.tags.map(tag=>(
<span key={tag} className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/60">
{tag}
</span>
))}
</div>

</motion.div>
))}

</div>


{/* RIGHT DETAILS */}
<motion.div
key={active}
initial={{opacity:0,scale:0.95}}
animate={{opacity:1,scale:1}}
transition={{duration:0.4}}
className="relative p-10 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 overflow-hidden"
>

<div className={`absolute inset-0 bg-gradient-to-br ${projects[active].color} opacity-40`} />

<div className="relative z-10">

<div className="text-white/40 text-sm mb-2">
{projects[active].period}
</div>

<h3 className="text-3xl text-white mb-2">
{projects[active].title}
</h3>

<p className="text-white/60 mb-6">
{projects[active].subtitle}
</p>

<p className="text-white/60 mb-8 leading-relaxed">
{projects[active].description}
</p>

{/* TECH */}
<div className="border-t border-white/10 pt-6">
<div className="text-xs tracking-[0.2em] text-white/40 mb-4">
TECH STACK
</div>

<div className="flex flex-wrap gap-2">
{projects[active].tech.map(t=>(
<span key={t} className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">
{t}
</span>
))}
</div>
</div>

{/* VIDEO */}
<div className="mt-10">
<ProjectVideo src={projects[active].video} />
</div>

</div>
</motion.div>

</div>
</div>
</section>
);
}
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import resume from "../public/Praveen_Ray_General_CV_Lpu.pdf";

type Particle = {
  ox: number;
  oy: number;
  oz: number;
  size: number;
  alpha: number;
  phase: number;
  clusterBoost: number;
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursor = useRef({ x: -9999, y: -9999 });

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [4, -4]), {
    stiffness: 24,
    damping: 60,
    mass: 1.8,
  });

  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), {
    stiffness: 24,
    damping: 60,
    mass: 1.8,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);

    cursor.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseLeave = () => {
    cursor.current = { x: -9999, y: -9999 };
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particleCount = width < 768 ? 1400 : 2600;
    const radius = width < 768 ? 165 : 245;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const shellBias = 0.88 + Math.random() * 0.18;
      const r = radius * shellBias;

      const ox = r * Math.sin(phi) * Math.cos(theta);
      const oy = r * Math.sin(phi) * Math.sin(theta);
      const oz = r * Math.cos(phi);

      const clusterZone =
        ox > radius * 0.15 && oy < -radius * 0.08 ? 1 : 0;

      particles.push({
        ox,
        oy,
        oz,
        size: Math.random() * 1.15 + 0.55,
        alpha: Math.random() * 0.42 + 0.3,
        phase: Math.random() * Math.PI * 2,
        clusterBoost: clusterZone ? Math.random() * 1.2 + 0.8 : 0,
      });
    }

    let raf = 0;
    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      t += 0.0065;

      const sphereX = width < 1024 ? width * 0.62 : width * 0.69;
      const sphereY = height * 0.53;

      const rx = (rotateX.get() * Math.PI) / 180;
      const ry = (rotateY.get() * Math.PI) / 180;

      const autoRotateY = t * 0.42;
      const autoRotateX = Math.sin(t * 0.55) * 0.08;

      // rear ambient haze
      const rearGlow = ctx.createRadialGradient(
        sphereX,
        sphereY,
        radius * 0.15,
        sphereX,
        sphereY,
        radius * 1.45
      );
      rearGlow.addColorStop(0, "rgba(120,130,255,0.14)");
      rearGlow.addColorStop(0.45, "rgba(90,105,255,0.08)");
      rearGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = rearGlow;
      ctx.beginPath();
      ctx.arc(sphereX, sphereY, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      const clusterGlow = ctx.createRadialGradient(
        sphereX + radius * 0.28,
        sphereY - radius * 0.35,
        0,
        sphereX + radius * 0.28,
        sphereY - radius * 0.35,
        radius * 0.62
      );
      clusterGlow.addColorStop(0, "rgba(180,170,255,0.22)");
      clusterGlow.addColorStop(0.4, "rgba(135,120,255,0.12)");
      clusterGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = clusterGlow;
      ctx.beginPath();
      ctx.arc(
        sphereX + radius * 0.28,
        sphereY - radius * 0.35,
        radius * 0.62,
        0,
        Math.PI * 2
      );
      ctx.fill();

      for (const p of particles) {
        const floatX = Math.sin(t * 0.85 + p.phase) * 2.2;
        const floatY = Math.cos(t * 0.72 + p.phase * 1.1) * 2.2;
        const floatZ = Math.sin(t * 0.95 + p.phase * 0.9) * 2.4;

        let x = p.ox + floatX;
        let y = p.oy + floatY;
        let z = p.oz + floatZ;

        const yRot = autoRotateY + ry;
        const xRot = autoRotateX + rx;

        const x1 = x * Math.cos(yRot) - z * Math.sin(yRot);
        const z1 = x * Math.sin(yRot) + z * Math.cos(yRot);

        const y1 = y * Math.cos(xRot) - z1 * Math.sin(xRot);
        const z2 = y * Math.sin(xRot) + z1 * Math.cos(xRot);

        const perspective = 760;
        const scale = perspective / (perspective + z2);

        let px = x1 * scale + sphereX;
        let py = y1 * scale + sphereY;

        const dx = px - cursor.current.x;
        const dy = py - cursor.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let glowColor = `rgba(255,255,255,${Math.min(
          1,
          p.alpha * scale * 1.05
        )})`;
        let outerGlowColor = `rgba(255,255,255,${Math.min(
          1,
          p.alpha * scale * 0.26
        )})`;

        if (dist < 140 && dist > 0.0001) {
          const force = (1 - dist / 140) * 26;
          px += (dx / dist) * force;
          py += (dy / dist) * force;

          glowColor = `rgba(176,140,255,${0.96})`;
          outerGlowColor = `rgba(125,105,255,${0.3})`;
        }

        const clusterAmount = p.clusterBoost;
        if (clusterAmount > 0) {
          glowColor = `rgba(232,228,255,${Math.min(
            1,
            p.alpha * scale * (1.15 + clusterAmount * 0.08)
          )})`;
          outerGlowColor = `rgba(172,160,255,${Math.min(
            0.42,
            0.12 + clusterAmount * 0.08
          )})`;
        }

        const size = p.size * scale * 1.15;
        const outerRadius = size * (clusterAmount > 0 ? 4.2 : 3.2);

        const g = ctx.createRadialGradient(px, py, 0, px, py, outerRadius);
        g.addColorStop(0, glowColor);
        g.addColorStop(0.28, outerGlowColor);
        g.addColorStop(1, "rgba(255,255,255,0)");

        ctx.shadowBlur = clusterAmount > 0 ? 18 : 12;
        ctx.shadowColor = outerGlowColor;
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, outerRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = clusterAmount > 0 ? 10 : 6;
        ctx.shadowColor = glowColor;
        ctx.fillStyle = glowColor;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [mouseX, mouseY, rotateX, rotateY]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#05060A]"
    >
      {/* left cinematic glow */}
      <div className="absolute left-[-220px] top-[10%] h-[720px] w-[720px] rounded-full bg-blue-700/25 blur-[220px]" />

      {/* right subtle glow */}
      <div className="absolute right-[-80px] top-[14%] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[180px]" />

      {/* dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,4,10,0.18)_60%,rgba(2,4,10,0.54)_100%)]" />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* background word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="select-none text-[18vw] font-semibold tracking-[-0.04em] text-white/[0.045]">
          PRAVEEN
        </div>
      </div>

      {/* nav */}
      <div className="absolute left-0 right-0 top-0 z-20 px-6 py-6 md:px-10 lg:px-16 lg:py-8">
        <div className="flex items-center justify-between">
          <div className="text-sm font-light tracking-[0.25em] text-white md:text-[15px]">
            PRAVEEN RAY
          </div>

          <div className="hidden items-center gap-12 text-[15px] text-white/70 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>


<motion.a
  href={resume}
  download="Praveen_Ray_Resume.pdf"
  whileHover={{ scale: 1.03 }}
  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/[0.05] md:px-7 md:py-3.5 md:text-[15px]"
>
  Download Resume

  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
    <Download className="h-4 w-4" />
  </span>
</motion.a>
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-10 lg:px-16">
        <div className="w-full max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex items-center">
              <div className="max-w-[760px] pt-20 lg:pt-8">
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[clamp(3.2rem,7vw,6.1rem)] leading-[0.95] tracking-[-0.05em] text-white"
                >
                  <span className="font-extralight">Building </span>
                  <span className="font-semibold italic">Digital</span>
                  <br />
                  <span className="font-semibold italic">Solutions</span>
                  <span className="font-extralight"> That Matter</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-[510px] text-lg leading-8 text-white/58 md:text-[1.45rem] md:leading-[1.7]"
                >
                  Android developer crafting intelligent mobile experiences,
                  adaptive interfaces, and scalable digital products.
                </motion.p>

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.03 }}
                  className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#7886FF] to-[#A6B0FF] px-9 py-4 text-lg font-medium text-white shadow-[0_0_50px_rgba(120,134,255,0.55)]"
                >
                  Start Your Project
                </motion.a>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="absolute bottom-10 right-6 z-10 md:right-10 lg:right-16">
        <div className="flex gap-8 md:gap-12">
          <div>
            <div className="text-[2.6rem] font-light leading-none text-white">10+</div>
            <div className="mt-1 text-sm leading-5 text-white/62">
              Projects
              <br />
              Built
            </div>
          </div>

          <div>
            <div className="text-[2.6rem] font-light leading-none text-white">8+</div>
            <div className="mt-1 text-sm leading-5 text-white/62">
              Technologies
              <br />
              Used
            </div>
          </div>

          <div>
            <div className="text-[2.6rem] font-light leading-none text-white">100%</div>
            <div className="mt-1 text-sm leading-5 text-white/62">
              Growth
              <br />
              Mindset
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [section, setSection] = useState("hero");

  useEffect(() => {
    // SECTION DETECTION
    const sections = document.querySelectorAll("section");
    

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id || "hero");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;

    let ringX = 0;
    let ringY = 0;

    let scale = 1;

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX = lerp(dotX, mouseX, 0.25);
      dotY = lerp(dotY, mouseY, 0.25);

      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate(${ringX}px, ${ringY}px) 
          translate(-50%, -50%) 
          scale(${scale})
        `;
      }

      if (section === "hero" && ringRef.current) {
        ringRef.current.style.boxShadow =
          "0 0 40px rgba(109,124,255,0.6), 0 0 80px rgba(155,120,255,0.4)";
      }

      requestAnimationFrame(animate);
    };

    // 🎯 HOVER EFFECT
    const handleHover = () => {
      scale = 1.8;
    };

    const handleLeave = () => {
      scale = 1;
    };

    // 🎯 SCROLL EFFECT
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const diff = Math.abs(window.scrollY - lastScroll);
      scale = Math.min(1 + diff / 200, 1.6);
      lastScroll = window.scrollY;
    };

    const interactive = document.querySelectorAll("a, button");

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("scroll", handleScroll);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("scroll", handleScroll);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const getCursorStyle = () => {
    switch (section) {
      case "about":
        return "bg-white/10 backdrop-blur-xl border-white/20";
      case "projects":
        return "bg-gradient-to-br from-[#5C6BFF]/30 to-purple-600/30 border-white/40";
      case "skills":
        return "bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-white/40";
      default:
        return "bg-gradient-to-br from-[#5C6BFF]/20 to-purple-600/20 border-white/30";
    }
  };

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] bg-white"
      />

      {/* RING */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-14 h-14 rounded-full pointer-events-none z-[9998]
        border transition-all duration-300 ${getCursorStyle()}`}
      />
    </>
  );
}
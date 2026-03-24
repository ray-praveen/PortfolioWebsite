// import { useEffect, useRef } from "react";
// import image from "../public/praveen.jpeg";
// export default function ParticleAvatar() {

//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {

//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     const img = new Image();
//     img.src = image;

//     const particles:any[] = [];

//     const mouse = {
//       x: -9999,
//       y: -9999
//     };

//     const width = 300;
//     const height = 360;

//     canvas.width = width;
//     canvas.height = height;

//     img.onload = () => {

//       ctx.drawImage(img,0,0,width,height);

//       const data = ctx.getImageData(0,0,width,height).data;

//       ctx.clearRect(0,0,width,height);

//       for(let y=0;y<height;y+=2){

//         for(let x=0;x<width;x+=2){

//           const index = (y*width + x)*4;

//           const r = data[index];
//           const g = data[index+1];
//           const b = data[index+2];
//           const a = data[index+3];

//           if(a > 150){

//             particles.push({
//               x,
//               y,
//               baseX:x,
//               baseY:y,
//               color:`rgb(${r},${g},${b})`,
//               size:1.4
//             });

//           }

//         }

//       }

//       animate();

//     };

//     function animate(){

//       ctx.clearRect(0,0,width,height);

//       particles.forEach(p=>{

//         const dx = p.x - mouse.x;
//         const dy = p.y - mouse.y;

//         const dist = Math.sqrt(dx*dx + dy*dy);

//         if(dist < 80){

//           const force = (80 - dist)/80;

//           p.x += dx * force * 0.35;
//           p.y += dy * force * 0.35;

//           ctx.fillStyle = "rgba(140,120,255,0.6)";

//         }else{

//           p.x += (p.baseX - p.x)*0.06;
//           p.y += (p.baseY - p.y)*0.06;

//           ctx.fillStyle = p.color;

//         }

//         ctx.beginPath();
//         ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
//         ctx.fill();

//       });

//       requestAnimationFrame(animate);

//     }

//     canvas.addEventListener("mousemove",(e)=>{

//       const rect = canvas.getBoundingClientRect();

//       mouse.x = e.clientX - rect.left;
//       mouse.y = e.clientY - rect.top;

//     });

//     canvas.addEventListener("mouseleave",()=>{

//       mouse.x = -9999;
//       mouse.y = -9999;

//     });

//   },[]);

//   return(

//     <canvas
//       ref={canvasRef}
//       className="w-[300px] h-[360px] rounded-[30px] border border-white/10"
//     />

//   );

// }
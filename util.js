// noop helpers en een eenvoudige spark fallback (wordt alleen gebruikt als nodig)
window.drawSpark = window.drawSpark || function(id, points){
  const c = document.getElementById(id); if(!c) return;
  const ctx = c.getContext('2d'); const w=c.width, h=c.height;
  ctx.clearRect(0,0,w,h);
  const min=Math.min(...points), max=Math.max(...points), pad=6;
  const step=(w-2*pad)/((points.length-1)||1);
  const y=v=>h-pad-((v-min)/((max-min)||1))*(h-2*pad);
  ctx.beginPath(); points.forEach((v,i)=>{const x=pad+i*step, yy=y(v); i?ctx.lineTo(x,yy):ctx.moveTo(x,yy)}); ctx.strokeStyle='#0a5bd3'; ctx.lineWidth=2; ctx.stroke();
};

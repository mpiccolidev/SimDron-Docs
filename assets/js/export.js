(()=>{'use strict';
const article=document.querySelector('main .content');if(!article||!document.querySelector('.page-section'))return;
const W=1020, P=65, textW=W-2*P;
const latin=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const filename=()=>('SimDron-'+latin(article.querySelector('h1')?.textContent||'capitulo')).replace(/[^A-Za-z0-9]+/g,'-').slice(0,75);
function paintText(ctx,text,x,y,maxWidth,font,lineHeight,color){
 ctx.font=font;ctx.fillStyle=color;let lines=0;
 for(const para of String(text||'').split('\n')){
  let line='';
  for(const word of (para.match(/\S+/g)||[])){
   const next=line?line+' '+word:word;
   if(ctx.measureText(next).width>maxWidth&&line){ctx.fillText(line,x,y);y+=lineHeight;lines++;line=word;}else line=next;
  }
  if(line){ctx.fillText(line,x,y);y+=lineHeight;lines++;}
 }
 return y;
}
async function exportPNG(){
 const all=[...article.querySelectorAll('.page-section')];
 const loaded=new Map();for(const im of article.querySelectorAll('.page-section img')){try{const full=new Image();full.src=im.currentSrc||im.src;await Promise.race([full.decode(),new Promise((_,reject)=>setTimeout(()=>reject(new Error('timeout de imagen')),4500))]);loaded.set(im,full)}catch(e){console.warn('Imagen no disponible',e)}}
 const theme=document.documentElement.getAttribute('data-theme')==='dark';
 const bg=theme?'#15181d':'#ffffff',fg=theme?'#f0f2f5':'#23272d',muted=theme?'#b0b7c0':'#57606b',line=theme?'#353b43':'#dfe3e8',accent='#e8ae00';
 const temp=document.createElement('canvas').getContext('2d');
 function draw(ctx,sections,withInk){
  let y=72;
  const rect=(x,top,w,h,color)=>{if(!withInk)return;ctx.fillStyle=color;ctx.fillRect(x,top,w,h)};
  function tx(str,x,yy,width,font,lh,color){if(!withInk){ctx.font=font;let h=0;const words=String(str||'').match(/\S+/g)||[],parts=[];let cur='';for(const w of words){let test=cur?cur+' '+w:w;if(ctx.measureText(test).width>width&&cur){parts.push(cur);cur=w;}else cur=test;}if(cur)parts.push(cur);return yy+parts.length*lh;}return paintText(ctx,str,x,yy,width,font,lh,color)}
  rect(0,0,W,Math.max(ctx.canvas.height,1),bg);
  y=tx(article.querySelector('h1')?.textContent||'SimDron',P,y,textW,'700 34px Arial',43,fg)+9;
  y=tx('Documentación de SimDron · Versión actual v1.0.280',P,y,textW,'16px Arial',24,muted)+24;
  for(const sect of sections){
   rect(P,y,textW,2,line);y+=27;
   const title=sect.querySelector('h2')?.textContent||'Contenido';
   y=tx(title,P,y,textW,'700 23px Arial',31,fg)+17;
   for(const child of sect.children){
    if(child.classList?.contains('imagepanel')){
     const orig=child.querySelector('img');const im=loaded.get(orig);
     if(im&&im.naturalWidth){let w=Math.min(textW,im.naturalWidth),h=w*im.naturalHeight/im.naturalWidth;
       if(h>700){w*=700/h;h=700;}rect(P,y,w+2,h+2,line);if(withInk){try{ctx.drawImage(im,P+1,y+1,w,h)}catch(e){console.warn(e)}}y+=h+14;
     }
     const c=child.querySelector('figcaption');if(c)y=tx(c.textContent,P,y,textW,'13px Arial',19,muted)+13;
    }else if(child.classList?.contains('source-text')){
     for(const p of child.querySelectorAll('p')){
      const val=p.textContent?.trim();if(!val)continue;
      let minor=p.classList.contains('minor');y=tx(val,P,y,textW,minor?'700 16px Arial':'16px Arial',25,fg)+7;
     }
    }
   }
   y+=17;
  }
  y+=12;rect(P,y,textW,1,line);y+=25;
  y=tx('Desarrollo: Mauro Iván Piccoli - Comunicación y Sistemas S.A.',P,y,textW,'13px Arial',18,muted)+30;
  return Math.ceil(y+30);
 }
 let sections=all;
 let estimated=draw(temp,sections,false);
 if(estimated>15500){
  const choice=prompt(`Este capítulo generaría una imagen de ${Math.round(estimated/1000)} mil píxeles de alto. Para conservar la nitidez, elegí qué sección guardar (1–${all.length}). Si necesitás todo el capítulo, utilizá Guardar contenido como PDF.`, '1');
  if(choice===null)return;let n=Number(choice);if(!Number.isInteger(n)||n<1||n>all.length){alert('Número de sección no válido');return;}
  sections=[all[n-1]];estimated=draw(temp,sections,false);
 }
 const canvas=document.createElement('canvas');canvas.width=W;canvas.height=estimated;
 const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)throw new Error('Canvas no disponible');
 draw(ctx,sections,true);
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
 if(!blob)throw new Error('No se pudo producir PNG');
 const href=URL.createObjectURL(blob),a=document.createElement('a');a.href=href;a.download=filename()+(sections.length===1?'_seccion':'')+'.png';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),120000);
}
for(const b of document.querySelectorAll('[data-export]'))b.addEventListener('click',async()=>{
 if(b.dataset.export==='pdf'){window.print();return}
 const prev=b.textContent;b.disabled=true;b.textContent='Generando imagen…';
 try{await exportPNG();}catch(e){console.error(e);alert('No se pudo generar el PNG. Podés utilizar Guardar contenido como PDF.');}
 finally{b.disabled=false;b.textContent=prev}
});
})();

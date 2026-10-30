/* SimDron Docs — Motor de trivia, 200 preguntas
 * 10 por partida: 7 SimDron VR + 3 Mission Control.
 * Prioriza variedad temática y evita repeticiones entre rondas de esta sesión.
 * Ninguna respuesta se envía a un servidor.
 */
(()=>{'use strict';
const all=Array.isArray(window.SIMDRON_QUIZ_BANK)?window.SIMDRON_QUIZ_BANK:[];
const root=document.getElementById('trivia-root');
if(!root)return;
let selected=[],position=0,results=[],pick=null,locked=false;
const used={'simdron':new Set(),'mission-control':new Set()};
let previous=new Set();
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function random(){
 if(window.crypto&&typeof window.crypto.getRandomValues==='function'){
  const a=new Uint32Array(1);window.crypto.getRandomValues(a);return a[0]/4294967296;
 }
 return Math.random();
}
function shuffle(a){let b=[...a];for(let i=b.length-1;i>0;i--){let j=Math.floor(random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function take(doc,n,topics){
 const candidates=all.filter(q=>q.doc===doc);
 const history=used[doc];
 if(candidates.length<n)return [];
 if(candidates.filter(q=>!history.has(q.id)).length<n)history.clear();
 let options=shuffle(candidates.filter(q=>!history.has(q.id)));
 // On a pool rollover, avoid repeating a question from the immediately preceding round.
 if(options.filter(q=>!previous.has(q.id)).length>=n){
  options=options.filter(q=>!previous.has(q.id));
 }
 const output=[];
 // Prefer variety of subjects. On advanced rounds, draw more L4/L5 than L3.
 for(const phase of [0,1,2]){
  for(const q of options){
   if(output.length>=n)break;
   if(output.includes(q))continue;
   if(phase===0 && (q.level<4 || topics.has(q.topic)))continue;
   if(phase===1 && topics.has(q.topic))continue;
   output.push(q);
   topics.add(q.topic);
  }
 }
 output.forEach(q=>history.add(q.id));
 return output;
}
function choose(){
 const topics=new Set();
 const chosen=[...take('simdron',7,topics),...take('mission-control',3,topics)];
 previous=new Set(chosen.map(q=>q.id));
 return shuffle(chosen);
}
function begin(){
 selected=choose();position=0;results=[];pick=null;locked=false;
 if(selected.length!==10){root.innerHTML='<p>No se pudo iniciar la trivia: no está disponible el banco de 200 preguntas.</p>';return;}
 render();
}
function render(){
 const q=selected[position],progress=((position+1)/10)*100;
 const choices=q.options.map((s,i)=>({s,i}));
 const available=shuffle(choices);q._mixed=available;
 const level={3:'Intermedio',4:'Avanzado',5:'Experto'}[q.level]||'Avanzado';
 root.innerHTML=`<div class="quiz-progress" role="progressbar" aria-valuenow="${position+1}" aria-valuemin="1" aria-valuemax="10"><div style="width:${progress}%"></div></div>
 <div class="quiz-top"><span>Pregunta ${position+1} de 10</span><span>${q.doc==='simdron'?'SimDron VR':'Mission Control'} · ${esc(q.topic)} · ${level}</span></div>
 <h2 class="quiz-question">${esc(q.question)}</h2><div class="quiz-options" role="radiogroup" aria-label="Opciones de respuesta">
 ${available.map((v,i)=>`<button type="button" class="quiz-option" data-option="${i}" aria-pressed="false"><span class="quiz-letter">${'ABCD'[i]}</span><span>${esc(v.s)}</span></button>`).join('')}</div>
 <div class="quiz-feedback" id="quiz-feedback" aria-live="polite"></div><div class="quiz-bottom"><span>Elegí una respuesta y confirmá.</span><button class="btn primary" type="button" id="quiz-confirm" disabled>Responder</button></div>`;
 root.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{
  if(locked)return;
  pick=Number(b.dataset.option);
  root.querySelectorAll('[data-option]').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',String(x===b));});
  root.querySelector('#quiz-confirm').disabled=false;
 }));
 root.querySelector('#quiz-confirm').addEventListener('click',check);
}
function check(){
 if(pick===null||locked)return;
 locked=true;
 const q=selected[position],given=q._mixed[pick].i,ok=given===q.answer;
 results.push({q,given,ok});
 root.querySelectorAll('[data-option]').forEach((b,i)=>{
  b.disabled=true;const v=q._mixed[i].i;
  b.classList.toggle('correct',v===q.answer);
  b.classList.toggle('incorrect',i===pick&&!ok);
 });
 const note=root.querySelector('#quiz-feedback');
 note.classList.add('visible');
 note.innerHTML=`<strong>${ok?'✓ Correcto · +10 puntos':'✕ Esta vez no'}</strong><p>${esc(q.why)}</p><a href="${esc(q.link)}#p${q.page}" target="_blank" rel="noopener">Ver capítulo de referencia · pág. ${q.page} ↗</a>`;
 root.querySelector('.quiz-bottom span').textContent=ok?'Bien resuelto.':'Revisá la explicación para aprender del resultado.';
 const b=root.querySelector('#quiz-confirm');b.disabled=false;b.textContent=position===9?'Ver resultado':'Siguiente pregunta';
 b.onclick=()=>{position++;pick=null;locked=false;position===10?finish():render();};
}
function finish(){
 const correct=results.filter(x=>x.ok).length,score=correct*10;
 const level=score>=90?'Dominio experto':score>=70?'Nivel avanzado':score>=50?'Buen nivel intermedio':'En etapa de formación';
 const mistake=10-correct;
 root.innerHTML=`<div class="quiz-finish"><span class="home-kicker">EVALUACIÓN FINALIZADA</span><div class="quiz-score">${score}<small>/100</small></div><h2>${level}</h2><p>${correct} respuestas correctas de 10. ${mistake?'Revisá los conceptos y volvé a intentarlo con otras preguntas.':'Excelente precisión en esta ronda.'}</p><div class="quiz-result-actions"><button class="btn primary" type="button" id="quiz-repeat">Nueva ronda aleatoria</button><button class="btn" type="button" id="quiz-print">Guardar resultado como PDF</button></div></div><h2 class="quiz-review-title">Revisión de respuestas</h2><div class="quiz-review">${results.map(({q,given,ok},i)=>`<section class="quiz-review-item"><div class="quiz-review-status ${ok?'ok':'bad'}">${ok?'✓':'✕'} Pregunta ${i+1} · ${q.doc==='simdron'?'SimDron VR':'Mission Control'}</div><h3>${esc(q.question)}</h3><p><strong>Tu respuesta:</strong> ${esc(q.options[given])}</p>${ok?'':`<p><strong>Respuesta correcta:</strong> ${esc(q.options[q.answer])}</p>`}<p>${esc(q.why)}</p><a href="${esc(q.link)}#p${q.page}" target="_blank" rel="noopener">Fuente: manual, página ${q.page} ↗</a></section>`).join('')}</div>`;
 root.querySelector('#quiz-repeat').addEventListener('click',()=>{begin();root.scrollIntoView({behavior:'smooth',block:'start'});});
 root.querySelector('#quiz-print').addEventListener('click',()=>window.print());
 window.scrollTo({top:0,behavior:'smooth'});
}
const start=document.getElementById('start-trivia');
if(start)start.addEventListener('click',()=>{begin();root.scrollIntoView({behavior:'smooth',block:'start'});});
})();

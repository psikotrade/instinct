const tabContent=document.getElementById('tabContent');
const data={
 ihsg:{title:'IHSG',value:'6,147.86',change:'−1.51%',bars:[42,58,49,65,61,78,70,84,66,55,43,30],metrics:[['SUPPORT','6.050–6.100'],['RESISTANCE','6.230–6.270'],['STRUCTURE','Bearish correction']]},
 macro:{title:'MACRO',value:'Risk pressure',change:'HIGH',bars:[35,42,55,60,72,68,76,83,80,72,69,75],metrics:[['FED','3.75–4.00%'],['BI RATE','5.75%'],['US10Y','> 5%']]},
 global:{title:'GLOBAL',value:'Risk-off bias',change:'WATCH',bars:[66,72,68,60,54,49,58,46,41,37,45,39],metrics:[['BRENT','> $100'],['USD/IDR','17,9xx'],['FLOW','Selective']]}
};
function renderTab(key){const d=data[key];tabContent.innerHTML=`<div class="quote-row"><div><small>${d.title}</small><strong>${d.value}</strong></div><em>${d.change}</em></div><div class="bar-chart">${d.bars.map(v=>`<span style="height:${v}%"></span>`).join('')}</div><div class="metrics">${d.metrics.map(m=>`<div class="metric"><small>${m[0]}</small><b>${m[1]}</b></div>`).join('')}</div>`}
renderTab('ihsg');
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderTab(btn.dataset.tab)}));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.research').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.cat!==f))}));
const menu=document.getElementById('menuBtn'),nav=document.getElementById('mainNav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const toast=document.getElementById('toast');document.getElementById('waitlistBtn').addEventListener('click',()=>{toast.textContent='Waitlist noted — prototype mode. Next step: connect this to a real form/database.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3600)});

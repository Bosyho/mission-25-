const pages=[...document.querySelectorAll('.page')];const dots=[...document.querySelectorAll('.progress-dot')];let current=0;
function showPage(n){current=Math.max(0,Math.min(pages.length-1,n));pages.forEach((p,i)=>p.classList.toggle('active',i===current));dots.forEach((d,i)=>d.classList.toggle('current',i===current));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('.next-btn').forEach(b=>b.addEventListener('click',()=>showPage(current+1)));
document.querySelectorAll('.prev-btn').forEach(b=>b.addEventListener('click',()=>showPage(current-1)));
document.querySelectorAll('.progress-dot').forEach(d=>d.addEventListener('click',()=>showPage(Number(d.dataset.go))));
document.querySelector('.restart-btn').addEventListener('click',()=>showPage(0));
const otherWrap=document.getElementById('otherWrap'),colorWrap=document.getElementById('colorWrap');
document.querySelectorAll('input[name="place"]').forEach(r=>r.addEventListener('change',()=>otherWrap.classList.toggle('hidden',r.value!=='Other')));
document.querySelectorAll('input[name="match"]').forEach(r=>r.addEventListener('change',()=>colorWrap.classList.toggle('hidden',r.value!=='Yes')));
document.getElementById('sendChoice').addEventListener('click',()=>{
 const place=document.querySelector('input[name="place"]:checked')?.value;
 const match=document.querySelector('input[name="match"]:checked')?.value;
 const other=document.getElementById('otherPlace').value.trim();
 const color=document.querySelector('input[name="color"]:checked')?.value;
 if(!place){alert('Pick a place first 😊');return;}
 if(place==='Other'&&!other){alert('Tell me which place you have in mind 😊');return;}
 if(!match){alert('And… wanna match?');return;}
 if(match==='Yes'&&!color){alert('Choose our color vibe first 💛');return;}
 const msg=`My Mission 25 picks 🎂\\nDate: Friday, 4 December 2026\\nTime: 5:00–6:00 PM\\nPlace: ${place==='Other'?other:place}\\nMatching: ${match}${match==='Yes'?' — '+color:''}\\n\\nMission accepted.`;
 window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank','noopener');
});
document.getElementById('soundToggle').addEventListener('click',()=>{alert('The song is waiting for you in the final page — tap play there 🎵');});

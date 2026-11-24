
document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.hamb'), mobile=document.querySelector('.mobile-nav');
 if(menu&&mobile) menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
 const input=document.querySelector('#game-search'), results=document.querySelector('#search-results');
 if(input&&results){
  const render=()=>{const q=input.value.trim().toLowerCase();const found=(window.NINE_GAMES||[]).filter(g=>(g.name+' '+g.category+' '+g.description).toLowerCase().includes(q));results.innerHTML='';
   if(!q){results.hidden=true;return} results.hidden=false;
   if(!found.length){results.innerHTML='<div class="empty">No games found</div>';return}
   found.forEach(g=>{const a=document.createElement('a');a.className='game-card';a.href='g.slug+'.html';const top=document.createElement('div');top.className='card-top';const icon=document.createElement('div');icon.className='game-icon';icon.textContent=g.icon;const info=document.createElement('div');const h=document.createElement('h3');h.textContent=g.name;const tag=document.createElement('span');tag.className='tag';tag.textContent=g.category;info.append(h,tag);top.append(icon,info);a.append(top);results.append(a);});
  };input.addEventListener('input',render);
 }
});

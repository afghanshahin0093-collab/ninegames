
document.addEventListener('DOMContentLoaded',()=>{
 const panel=document.querySelector('[data-download-game]');if(!panel)return;
 const slug=panel.dataset.downloadGame,key='ninegames_unlock_'+slug;
 const offer=panel.dataset.offerUrl||'#',finalUrl=panel.dataset.downloadUrl||'#';
 const status=document.querySelector('#download-status'),message=document.querySelector('#download-message'),start=document.querySelector('#start-offer'),download=document.querySelector('#download-now'),timer=document.querySelector('#countdown'),bar=document.querySelector('#progress-bar');
 let interval=null;
 function unlock(){clearInterval(interval);status.className='status ready';status.textContent='✓ Download Unlocked';message.textContent='The timer has finished. This is a timer-based unlock only; offer completion has not been verified.';timer.textContent='Ready';bar.style.width='100%';start.hidden=true;download.hidden=false;}
 function tick(){const started=Number(sessionStorage.getItem(key));if(!started)return;const remaining=Math.max(0,60-Math.floor((Date.now()-started)/1000));if(remaining<=0){unlock();return;}status.className='status wait';status.textContent='⏳ Preparing Download';message.textContent='Offer started. Please wait until the download becomes available.';timer.textContent=remaining+' seconds remaining';bar.style.width=((60-remaining)/60*100)+'%';start.hidden=true;download.hidden=true;}
 start.addEventListener('click',()=>{if(offer&&offer!=='#')window.open(offer,'_blank','noopener,noreferrer');sessionStorage.setItem(key,String(Date.now()));tick();interval=setInterval(tick,1000);});
 download.addEventListener('click',()=>{if(finalUrl==='#'){message.textContent='The final download URL has not been configured yet.';}});
 const existing=sessionStorage.getItem(key);if(existing){tick();if(Date.now()-Number(existing)<60000)interval=setInterval(tick,1000);}else{status.textContent='🔒 Download Locked';message.textContent='Your download is currently locked. Start the offer and wait 60 seconds to unlock the download.';download.hidden=true;}
});

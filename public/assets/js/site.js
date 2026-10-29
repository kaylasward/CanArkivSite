(() => {
 const root=document.documentElement;
 const themeToggle=document.querySelector('[data-theme-toggle]');
 const systemDark=window.matchMedia('(prefers-color-scheme: dark)');
 const key='canarkiv-theme';
 const read=()=>{try{return localStorage.getItem(key)}catch{return null}};
 const save=v=>{try{localStorage.setItem(key,v)}catch{}};
 const apply=theme=>{root.dataset.theme=theme;themeToggle?.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);themeToggle?.setAttribute('title',`Switch to ${theme==='dark'?'light':'dark'} theme`);const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#11171A':'#F6F7F4';};
 const saved=read();apply(saved==='light'||saved==='dark'?saved:(systemDark.matches?'dark':'light'));
 themeToggle?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';save(next);apply(next)});
 systemDark.addEventListener?.('change',()=>{if(!read())apply(systemDark.matches?'dark':'light')});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 async function copyAddress(address){
   if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(address);return}
   const area=document.createElement('textarea');area.value=address;area.setAttribute('readonly','');area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();if(!ok)throw Error('Copy unavailable');
 }
 document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
   const feedback=button.closest('.help-section')?.querySelector('[data-copy-status]');
   try{await copyAddress(button.dataset.copy);if(feedback)feedback.textContent='Address copied.'}
   catch{if(feedback)feedback.textContent='Could not copy automatically. Please select the address above.'}
 }));
})();

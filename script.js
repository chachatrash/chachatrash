document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const lightbox=document.getElementById('lightbox');
if(lightbox){
  document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{
    const bg=getComputedStyle(btn).backgroundImage;
    const url=bg.match(/url\(["']?(.*?)["']?\)/);
    if(url){lightbox.querySelector('img').src=url[1];lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}
  }));
  const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');};
  lightbox.querySelector('.lightbox-close').addEventListener('click',close);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
const form=document.getElementById('contact-form');
if(form)form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent('Demande de contact');
  const body=encodeURIComponent(`Bonjour,\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`);
  window.location.href=`mailto:contact@example.com?subject=${subject}&body=${body}`;
});

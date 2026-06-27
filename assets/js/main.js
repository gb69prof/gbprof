(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const here = document.body.dataset.page || 'home';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.dataset.nav === here) a.classList.add('active');
  });
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',()=> nav && nav.classList.remove('open'));
  });
  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
  }
})();

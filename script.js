const header=document.querySelector('.site-header');const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.contact-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('.form-note').textContent='Thank you. HD Structures Ltd will be in touch shortly.';e.target.reset()});

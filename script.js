const links=[...document.querySelectorAll('.site-nav nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}})},{threshold:.35});
sections.forEach(s=>obs.observe(s));

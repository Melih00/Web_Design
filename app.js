
const btnHome = document.querySelector('.btnHome');
const btnAbout = document.querySelector('.btnAbout');
const btnServ = document.querySelector('.btnServ');
const pageHome = document.querySelector('.home');
const pageAbout = document.querySelector('.about');
const pageServices = document.querySelector('.services');
const h2home = document.querySelector('.h2home')
const h2about = document.querySelector('.h2about')
const h2services = document.querySelector('.h2services')
btnHome.onclick = ()=>{
    h2home.style.color = 'rgb(168, 80, 139)';
    h2about.style.color = 'white';
    h2services.style.color = 'white';
     pageServices.classList.contains('shown') ?    pageServices.classList.remove('shown'):null;
     pageServices.classList.contains('hidden') ?   null: pageServices.classList.add('hidden');
     pageAbout.classList.contains('shown') ?    pageAbout.classList.remove('shown'):null;
     pageAbout.classList.contains('hidden') ?    null: pageAbout.classList.add('hidden');
     pageHome.classList.contains('hidden') ?    pageHome.classList.remove('hidden'):null;
     pageHome.classList.contains('shown') ?    null: pageHome.classList.add('shown');
}
btnAbout.onclick = ()=>{
    h2home.style.color = 'white';
    h2about.style.color = 'rgb(168, 80, 139)';
    h2services.style.color = 'white';
    pageServices.classList.contains('shown') ?    pageServices.classList.remove('shown'):null;
    pageServices.classList.contains('hidden') ?    null: pageServices.classList.add('hidden');
    pageHome.classList.contains('shown') ?    pageHome.classList.remove('shown'):null;
    pageHome.classList.contains('hidden') ?    null: pageHome.classList.add('hidden');
    pageAbout.classList.contains('hidden') ?    pageAbout.classList.remove('hidden'):null;
    pageAbout.classList.contains('shown') ?    null: pageAbout.classList.add('shown');
}
btnServ.onclick = ()=>{
    h2home.style.color = 'white';
    h2about.style.color = 'white';
    h2services.style.color = 'rgb(168, 80, 139)';
    pageAbout.classList.contains('shown') ?    pageAbout.classList.remove('shown'):null;
    pageAbout.classList.contains('hidden') ?    null: pageAbout.classList.add('hidden');
    pageHome.classList.contains('shown') ?    pageHome.classList.remove('shown'):null;
    pageHome.classList.contains('hidden') ?    null: pageHome.classList.add('hidden');
    pageServices.classList.contains('hidden') ?    pageServices.classList.remove('hidden'):null;
    pageServices.classList.contains('shown') ?    null: pageServices.classList.add('shown');
}

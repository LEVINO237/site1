const bouton= document.getElementById('case2');
const page2= document.querySelector('.page2');
const page1= document.querySelector('.page1');
const peid= document.querySelector('footer');
const bouton1= document.querySelector('#rentre');
const panier= document.querySelector('.vert');
const montre= document.querySelector(".mycart")
bouton.addEventListener('click', ()=>{
  page1.style.display='none';
  page2.style.display='block';
  peid.style.display='none';
});
bouton1.addEventListener("click",()=>{
    page1.style.display='block';
    page2.style.display='none';
    peid.style.display='block';
});
panier.addEventListener("click", ()=>{
  montre.style.display="block";
  panier.style.backgroundcolor="red";

});

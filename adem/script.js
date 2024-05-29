document.addEventListener('DOMContentLoaded', function() {
   const profilPaneli = document.querySelector('.profil-paneli');
   const cevirOnButton = document.getElementById('cevir-on');
   const cevirArkaButton = document.getElementById('cevir-arka');

   cevirOnButton.addEventListener('click', function() {
       profilPaneli.classList.add('cevrildi');
   });

   cevirArkaButton.addEventListener('click', function() {
       profilPaneli.classList.remove('cevrildi');
   });
});
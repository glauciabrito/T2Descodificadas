const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}


/*document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Formulário enviado!');
    this.reset();
});*/

/**
* Carrossel - Container
*/
const CardCarouselContainer = document.querySelectorAll('.card-carousel-container')

CardCarouselContainer.forEach(container =>{
   //Card ativo
   var activeItem = container.querySelector('.card-carousel-item.active')

   //Anterior ao ativo
   var activePrevSibling = activeItem.previousElementSibling
   //Navegação do carrossel
   var nextNav = container.querySelector('.card-nav-next')
   var prevNav = container.querySelector('.card-nav-prev')

   //add anterior (com classe)
   if(activePrevSibling !== null)
       activePrevSibling.classList.add('left');

   // Chama o próximo card
   nextNav.addEventListener('click', function(e){
       e.preventDefault()
       navigateNextCard()
   })
   // Chama o card anterior
   prevNav.addEventListener('click', function(e){
       e.preventDefault()
       navigatePrevCard()
   })

   // função próximo card
   const navigateNextCard = function(){
       if(activeItem.nextElementSibling == null ||(activeItem.nextElementSibling != null && !activeItem.nextElementSibling.classList.contains('card-carousel-item')))
           return false;
       if(activePrevSibling !== null && activePrevSibling.classList.contains('left'))
           activePrevSibling.classList.remove('left');
       activeItem.nextElementSibling.classList.add('active')
       activeItem.classList.remove('active')
       activeItem = activeItem.nextElementSibling
       activePrevSibling = activeItem.previousElementSibling
       activePrevSibling.classList.add('left')
       if(activeItem.nextElementSibling == null ||(activeItem.nextElementSibling != null && !activeItem.nextElementSibling.classList.contains('card-carousel-item')))
           nextNav.style.display = 'none';
       else
           nextNav.style.display = 'flex';
       if(activeItem.previousElementSibling == null ||(activeItem.previousElementSibling != null && !activeItem.previousElementSibling.classList.contains('card-carousel-item')))
           prevNav.style.display = 'none';
       else
           prevNav.style.display = 'flex';

        // Exibe mais de um card do carrossel em telas menores
       if (window.innerWidth < 600) {
        let nextCards = container.querySelectorAll('.card-carousel-item.active + .card-carousel-item');
       for (let i = 0; i < nextCards.length; i++) {
        nextCards[i].classList.add('active');
       }
       }

       
   }
   // função card anterior
   const navigatePrevCard = function(){
       console.log(activeItem.previousElementSibling)
       if(activeItem.previousElementSibling == null ||(activeItem.previousElementSibling != null && !activeItem.previousElementSibling.classList.contains('card-carousel-item')))
           return false;
       if(activePrevSibling !== null && activePrevSibling.classList.contains('left'))
           activePrevSibling.classList.remove('left');
       activeItem.previousElementSibling.classList.add('active')
       activeItem.classList.remove('active')
       activeItem = activeItem.previousElementSibling
       activePrevSibling = activeItem.previousElementSibling
       if(activePrevSibling !== null && !activePrevSibling.classList.contains('left'))
           activePrevSibling.classList.add('left');
       if(activeItem.nextElementSibling == null ||(activeItem.nextElementSibling != null && !activeItem.nextElementSibling.classList.contains('card-carousel-item')))
           nextNav.style.display = 'none';
       else
           nextNav.style.display = 'flex';
       console.log(activeItem.previousElementSibling)
       if(activeItem.previousElementSibling == null ||(activeItem.previousElementSibling != null && !activeItem.previousElementSibling.classList.contains('card-carousel-item')))
           prevNav.style.display = 'none';
       else
           prevNav.style.display = 'flex';
   }
})


  

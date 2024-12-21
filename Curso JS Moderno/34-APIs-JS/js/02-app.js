document.addEventListener('DOMContentLoaded',() =>{

    //Habilitamos Intersection Observer
    const observer = new IntersectionObserver((entries) =>{
         if(entries[0].isIntersecting){
             console.log('Ya esta visible');
         }else{
             console.log('Aun no esta visible');
         }
    });

         //le decimos que si el elemento esta visible, entonces muestre la notificación
    observer.observe(document.querySelector('.premium'))
})
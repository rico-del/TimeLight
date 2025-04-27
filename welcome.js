const moons=document.querySelectorAll('.moon')
moons.for each(moon=>{
    moon.addEventListener('mouseover', function(){
        moon.style.transform='scale(1.2)';
    })
    moon.addEventListener('mouseover', function(){
        moon.style.transform='scale(1)';
    })
})
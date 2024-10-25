document.addEventListener('DOMContentLoaded',function(){
    animate()
})


let moon = document.getElementById('moon')
let moonbox = document.getElementById('moon_box')
let position = 0
let direction =1


let angle = 0
let angle_move = 0.3


function movemoon(){
    let moonboxwidth = moonbox.offsetWidth
    let moonwidth = moon.offsetWidth
    let maxposition = moonboxwidth - moonwidth

    position += 0.5*direction
    position = Math.max(0,Math.min(position,maxposition))
    
    if(position===0 || position === maxposition){
        direction = -direction
        angle_move = -angle_move
    }
    angle = (angle+angle_move)%360
    moon.style.transform = `translateX(${position}px) rotate(${angle}deg)`
}

function animate(){
    movemoon()
    requestAnimationFrame(animate)
}


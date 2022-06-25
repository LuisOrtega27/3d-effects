'use strict'

const carrousel = document.querySelector('.carrousel')

const btnL = document.querySelector('.btn-l')
const btnR = document.querySelector('.btn-r')

let rotationX = 0

btnL.addEventListener('click', ()=>{
    rotationX += 45
    // console.log(rotationX)
    carrousel.style.transform = `perspective(800px) rotateY(${rotationX}deg)`
})

btnR.addEventListener('click', ()=>{
    rotationX -= 45
    // console.log(rotationX)
    carrousel.style.transform = `perspective(800px) rotateY(${rotationX}deg)`
})
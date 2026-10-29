let eyeBtn = document.querySelector('.eyeBtn')
let input = document.querySelector('input')

function pskHideShow(){
    if(input.type == 'password'){
        input.type = 'text'
        eyeBtn.innerHTML = '<i class="bi bi-eye"></i>'
    } else{
        input.type = 'password'
        eyeBtn.innerHTML = '<i class="bi bi-eye-slash"></i>'
    }
}

eyeBtn.addEventListener('click', pskHideShow)

let watbut = document.querySelector('.whatsapp')
let pop = document.querySelector('.popup')
let fillbox = document.querySelector('.fillbox')

watbut.addEventListener('click',()=>{
    pop.classList.add('yespop')
})
pop.addEventListener('click',()=>{
    pop.classList.remove('yespop')
})
fillbox.addEventListener('click',(event)=>{
    event.stopPropagation()
})
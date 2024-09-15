
const hsbutton = document.getElementById('butt') as HTMLButtonElement

const sk = document.getElementById('skillss') as HTMLElement
hsbutton.addEventListener('click',  ()=>{
    if(sk.style.display === 'none'){
        sk.style.display = 'block'
    } else{
        sk.style.display = 'none'
    }
})
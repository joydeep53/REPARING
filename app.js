
let toggle = document.querySelector('.toggle')
let nav = document.querySelector('.nav-content')
let xmark = document.querySelector('.xmark')

function openNav(){
    nav.style.height = '450px'
   
    xmark.style.visibility ='visible'
 
    toggle.style.visibility ='hidden'


    

}
function CloseNav(){
    nav.style.height = '0px'

    xmark.style.visibility ='hidden'
    toggle.style.visibility ='visible'
}

    






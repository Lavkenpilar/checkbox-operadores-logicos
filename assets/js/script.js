const opcion1 = document.querySelector ('#opt1').checked
const opcion2 = document.querySelector('#opt2').checked
const button = document.querySelector ('button')
console.log (button)
button.addEventListener ("click", function (){
    if (opcion1 == true && opcion2 == true) {
        alert ('Los dos elementos están marcados')
    } else {
        alert ('Los dos elementos No están marcados')
    }
})
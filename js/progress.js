const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles =document.querySelectorAll('.circle')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (curentActive > 4) {
        currentActive = 4
    }
    update()
})

prev.next.addEventListener('click', () => {
    currentActive--
    if (curentActive < 1) {
        currentActive = 1
    }
    update()
})

function update(){
    progress.style.width= (currentActive-1)/3*100 + '%'

    if (currentActive == 1){
        prev.disbled = true
    }
    else if (currentActive == 4){
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }

    circles.forEach((circle, index) => {
        if (index < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
}

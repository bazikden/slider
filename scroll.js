const slider = document.querySelector('.slider-container .slider2')
let scroll

function scrollSlider() {
    console.log('start')
    scroll = setInterval(() => {
        myslider2.onNextBtnClick()
    }, 3000)


}

scrollSlider()

onMouseEnter = () => {
    clearInterval(scroll)
}

onMouseLeave = () => {
    scrollSlider()
}


slider.addEventListener('mouseenter', onMouseEnter)
slider.addEventListener('mouseleave', onMouseLeave)

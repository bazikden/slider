const slider = document.querySelector('.slider-container .slider2')
let scroll

function scrollSlider() {
    scroll = setInterval(() => {
        myslider2.onNextBtnClick()
    }, 3000)


}
scrollSlider()

onMouseEnter = () => {
    clearInterval(scroll)
}

onMouseLeave = () => {
    clearInterval(scroll)
    scrollSlider()
}




slider.addEventListener('mouseenter', onMouseEnter)
slider.addEventListener('mouseleave', onMouseLeave)
window.addEventListener('focus',scrollSlider)
window.addEventListener('blur',onMouseEnter)


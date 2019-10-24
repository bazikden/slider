function Slider(arr, name) {
    this.name = name,
        this.pictureIndex = 0,
        this.imageArr = arr,
        this.imageWidth = 200,
        this.imageMargin = 10,
        this.showedPictures = 3,
        this.imageHeight = 200,
        this.root = '.root',
        this.prevposition = 0

    this.init = () => {
        //this.createDOM('div',`slider-container ${name}`,'root',null)  // root is class of parrent component of slider
        let el = document.createElement('div')
        el.className = `slider-container ${name}`
        document.querySelector(this.root).appendChild(el)   //

        createDOM('div', `image-container ${name}`, `slider-container`)
        createDOM('img', `prev ${name}`, `image-container`)
        createDOM('div', `image-wrapper ${name}`, `image-container`)


        for (let i = 0; i < this.showedPictures + 2; i++) {
            createDOM('img', `image ${name}`, `image-wrapper`)
        }
        createDOM('img', `next ${name}`, `image-container`)

        this.prevBtn = document.querySelector(`.prev.${name}`)
        this.prevBtn.src = './images/arrow.png'
        this.nextBtn = document.querySelector(`.next.${name}`)
        this.nextBtn.src = './images/arrow.png'
        this.image = document.querySelectorAll(`.image.${name}`)
        this.imageWrapper = document.querySelector(`.image-wrapper.${name}`)
        this.imageWrapper.style.width = this.imageWidth * this.image.length + this.imageMargin * this.image.length * 2 + 'px'
        this.imageWrapper.style.left = `-${this.imageWidth + 2 * this.imageMargin}px`

        for (let k = 0; k < this.image.length; k++) {
            this.image[k].style.width = this.imageWidth + 'px'
            this.image[k].style.height = this.imageHeight + 'px'
            this.image[k].style.margin = '0 ' + this.imageMargin + 'px'
        }
        this.imageContainer = document.querySelector(`.image-container.${name}`)
        this.imageContainer.style.width = (this.imageWidth * (this.showedPictures)) + this.imageMargin * ((this.showedPictures * 2)) + 'px'
        this.nextBtn.addEventListener('click', onNextBtnClick)
        this.prevBtn.addEventListener('click', onPrevBtnClick)
        for (let i = 0; i < this.image.length; i++) {
            this.image[i].src = this.imageArr[i + this.pictureIndex]
        }

        navArrowsPosition()


    }


    const createDOM = function (tag, clas, parrent) {
        let elem = document.createElement(tag)
        elem.className = clas
        par = document.querySelector(`.${parrent}.${name}`)
        par.appendChild(elem)
    }


    const onNextBtnClick = () => {
        this.prevBtn.removeEventListener('click', onPrevBtnClick)
        this.prevBtn.addEventListener('click', onPrevBtnClick)
        let position = 0
        let interval = setInterval(() => {
            position = 10
            let left = +this.imageWrapper.style.left.replace('px', '') - position
            this.imageWrapper.style.left = left + 'px'
            if (left === -(this.imageWidth * 2 + this.imageMargin * 4)) {
                clearInterval(interval)
                this.imageWrapper.style.left = `-${this.imageWidth + 2 * this.imageMargin}px`
                this.pictureIndex++
                this.prevBtn.disabled = false
                for (let i = 0; i < this.image.length; i++) {
                    let index = i + this.pictureIndex
                    if (index >= this.imageArr.length) {
                        index = index - this.imageArr.length
                    }
                    this.image[i].src = this.imageArr[index]


                }

                if (this.pictureIndex === this.imageArr.length) {
                    this.pictureIndex = 0

                }

            }
        }, 50)

    }


    const onPrevBtnClick = () => {
        this.nextBtn.removeEventListener('click', onNextBtnClick)
        this.nextBtn.addEventListener('click', onNextBtnClick)
        let position = 0
        let interval = setInterval(() => {
            position = 10
            let left = +this.imageWrapper.style.left.replace('px', '') + position
            this.imageWrapper.style.left = left + 'px'
            if (left === 0) {
                clearInterval(interval)
                this.imageWrapper.style.left = `-${this.imageWidth + 2 * this.imageMargin}px`
                this.pictureIndex--
                this.nextBtn.disabled = false
                for (let i = 0; i < this.image.length; i++) {
                    let index = i + this.pictureIndex
                    if (index < 0) {
                        index = this.imageArr.length + index
                    }
                    if (index >= this.imageArr.length) {
                        index = index - this.imageArr.length
                    }
                    this.image[i].src = this.imageArr[index]

                }
                if (this.pictureIndex < 0) {
                    this.pictureIndex = this.imageArr.length - 1
                }
            }


        }, 50)


    }


    const navArrowsPosition = () => {
        const container = document.querySelector(`.image-container .${name} `).parentNode
        console.log(container)
        const coords = container.getBoundingClientRect()
        console.log(coords)
        this.prevBtn.style.left =  this.imageMargin + 'px'
        this.prevBtn.style.top = coords.height / 2 - 25 + "px"
        this.nextBtn.style.top = coords.height / 2 - 25 + "px"
        this.nextBtn.style.right =  this.imageMargin + 'px'

    }

    const onWindowChange = () =>{
        console.log(window.innerWidth)
        const elem = document.querySelector(`.image-container .${name} `).parentNode
        const countImages = Math.floor(window.innerWidth/(this.imageWidth + (this.imageMargin*2)))
        console.log(countImages)
        console.log(elem)
        this.showedPictures >=countImages && (elem.style.width = (this.imageWidth + this.imageMargin*2) * countImages +'px')
    }
    window.addEventListener('resize',onWindowChange)


}
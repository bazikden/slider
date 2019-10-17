function Slider(arr,name){
    this.name = name
    this.pictureIndex = 0,
    this.imageArr = arr,
    this.imageWidth = 200,
    this.imageMargin = 10,
    this.showedPictures = 3,
    this.imageHeight = 200,
    
    this.init = () => {
            //this.createDOM('div',`slider-container ${name}`,'root',null)  // root is class of parrent component of slider 
            let el = document.createElement('div')
            el.className = `slider-container ${name}`
            document.querySelector('.root').appendChild(el)   
            this.createDOM('button',`prev ${name}`,`slider-container`,'Prev')
            this.createDOM('div',`image-container ${name}`,`slider-container`,null)
            this.createDOM('div',`image-wrapper ${name}`,`image-container`,null)
            
            for(let i = 0; i < this.showedPictures+2;i++){
                this.createDOM('img',`image ${name}`,`image-wrapper`,null)
            }
            this.createDOM('button',`next ${name}`,`slider-container`,'Next')
        
            this.prevBtn = document.querySelector(`.prev.${name}`)
            this.nextBtn = document.querySelector(`.next.${name}`)
            this.image = document.querySelectorAll(`.image.${name}`)
            this.imageWrapper = document.querySelector(`.image-wrapper.${name}`)
            this.imageWrapper.style.width = this.imageWidth * this.image.length + this.imageMargin * this.image.length * 2 + 'px'
            this.imageWrapper.style.left = `-${this.imageWidth + 2 * this.imageMargin}px`
            
            for (let k = 0;k < this.image.length;k++){
                this.image[k].style.width = this.imageWidth + 'px'
                this.image[k].style.height = this.imageHeight + 'px'
                this.image[k].style.margin =   '0 ' + this.imageMargin + 'px'
            } 
            this.imageContainer = document.querySelector(`.image-container.${name}`)
            this.imageContainer.style.width =  (this.imageWidth * (this.showedPictures ))  + this.imageMargin * ((this.showedPictures * 2)-1) + 'px'
            this.nextBtn.addEventListener('click',this.onNextBtnClick)
            this.prevBtn.addEventListener('click',this.onPrevBtnClick)
            for(let i =0;i < this.image.length;i++ ){
                this.image[i].src = this.imageArr[i+this.pictureIndex]
            }
            
        
    },

    this.createDOM = (tag,clas,parrent,html) =>{
        let elem =document.createElement(tag)
        elem.className = clas
        html && (elem.innerHTML = html)
        par = document.querySelector(`.${parrent}.${name}`)
        par.appendChild(elem)    
    }



    this.onNextBtnClick = ()=>{
        let position = 0
        let interval =setInterval(()=>{
            position =  10
             let left = +this.imageWrapper.style.left.replace('px','') - position
            this.imageWrapper.style.left = left +'px' 
            if(left ===  -(this.imageWidth*2 + this.imageMargin*4)) {
                clearInterval(interval)
                this.imageWrapper.style.left = `-${this.imageWidth + 2 * this.imageMargin}px`
                this.pictureIndex ++
            this.prevBtn.disabled = false
            for(let i =0; i < this.image.length;i++){
                let index= i + this.pictureIndex
                if (index >= this.imageArr.length){
                    index = index - this.imageArr.length
                }
                this.image[i].src = this.imageArr[index]
     
               
            }
            
            if (this.pictureIndex === this.imageArr.length){
                this.pictureIndex = 0
                
            }
            
            }
        },50)

    },



    this.onPrevBtnClick = ()=>{
        let position = 0
        let interval =setInterval(()=>{
            position =  10
             let left = +this.imageWrapper.style.left.replace('px','') + position
            this.imageWrapper.style.left = left +'px' 
            if(left ===  0) {
                clearInterval(interval)
                this.imageWrapper.style.left = `-${this.imageWidth + 2 * this.imageMargin}px`
                this.pictureIndex --
                this.nextBtn.disabled = false
                for(let i =0; i < this.image.length;i++){
                    let index = i + this.pictureIndex
                     if(index < 0 ){index = this.imageArr.length + index}
                    if(index >= this.imageArr.length){index = index - this.imageArr.length}
                    this.image[i].src = this.imageArr[index]
            
                }
                if (this.pictureIndex < 0){
                    this.pictureIndex = this.imageArr.length -1
                }
            }
        
        document.getElementById('test').innerHTML =(this.pictureIndex)
        },50)

    

    }

}
let searchBtn = document.querySelector('.search-btn')
let searchInput = document.querySelector('.search-input')
const error = document.querySelector('.error')

const query = {
    query: 'cars',
    client_id: key

}

const querySting = (obj) => {
    let query = []
    for (key in obj) {
        query.push(`${key}=${obj[key]}`)
    }

    const querystring = '?' + query.join('&')

    return querystring

}


const getPictures = async () => {
    if (searchInput.value === '') {
        searchInput.setAttribute('placeholder', 'Enter what you want to find')
        searchInput.className += ' inputerror'
    }
    query.query = searchInput.value
    const res = await fetch(`https://api.unsplash.com/search/photos${querySting(query)}`)
        .then(res => res.json())

    if (res.total < myslider.showedPictures + 2) {
        error.style.display = 'block'
    } else {
        error.style.display = 'none'
        arr = await res.results.map(e => {
            return e.urls.small
        })

        myslider.updatePhoto(arr)
    }


}

const onInputChange = () => {
    error.style.display = "none"
    searchInput.className = searchInput.className.split(' ')[0]
    searchInput.value = ''
}

const onKeyDown = (e) => {
    if (e.code === 'Enter') {
        getPictures()
        searchInput.value = ''
    }
}


searchInput.addEventListener('click', onInputChange)
searchInput.addEventListener('keydown', onKeyDown)
searchBtn.addEventListener('click', getPictures)
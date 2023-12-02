// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const ACCESS_KEY = 'tLaFgt-bZhAoXlvL7KEe-KKTs0KFnQfSMZ_JtO_2aWM';
const SECRET_KEY = 'XcrUmYIGj5RdmF3EbMVwv4P15mc46QswuV0W20dTgVs'

// const fetchPhotos = async () => {
//     state = []
//     const url = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&count=3`;
//     const response = await fetch(url)
//     const data = await response.json()
//     if (response.ok) {

//         state = data
//         console.log(data);
//         renderIt()
//     }
// }
// fetchPhotos()

// const renderIt = () => {
//     return state.map(({ urls: { regular } }) => {
//         const img = document.createElement('img')
//         img.src = regular
//         divEl.appendChild(img)

//     }).join('')
// }


// function checkPosition() {
//     const height = document.body.offsetHeight
//     const screenHeight = window.innerHeight
//     console.log(height, screenHeight);
//     const scrolled = window.scrollY
//     console.log(scrolled);
//     const threshold = height - screenHeight / 4
//     const position = scrolled + screenHeight
//     if (position >= threshold) {
//         fetchPhotos()
//     }
// }
// window.addEventListener('scroll', checkPosition)
// window.addEventListener('resize', checkPosition)

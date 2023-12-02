const ACCESS_KEY = 'tLaFgt-bZhAoXlvL7KEe-KKTs0KFnQfSMZ_JtO_2aWM';
const SECRET_KEY = 'XcrUmYIGj5RdmF3EbMVwv4P15mc46QswuV0W20dTgVs'
const divEl = document.querySelector('.div')
let state = []

const blokImg = document.querySelector('.bloc-image');
const img = document.querySelector('.img')
const namePhoto = document.querySelector('.name-photo')
const btnLike = document.querySelector('.btn-like');



const fetchPhotos = async () => {
    const url = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}`;
    const response = await fetch(url);
    const data = await response.json()
    if (response.ok) {
        state = data
        createImg()
    }

}
// fetchPhotos()

function createImg() {
    img.src = state.urls.full
    namePhoto.textContent = state.user.name
    btnLike.textContent = state.likes
}



btnLike.addEventListener('click', ()=>{
    count = btnLike.textContent
    btnLike.classList.toggle('active')
    if(btnLike.classList.contains('active') ){
        btnLike.textContent = count++;
    }else{
        btnLike.textContent = count--
    }
})



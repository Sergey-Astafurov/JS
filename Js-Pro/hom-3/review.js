"use strict"

const nameProd = document.querySelector('.name-prod')
const textReview = document.querySelector('.text-review')
const btnReview = document.querySelector('.btn-review')
const warn = document.querySelector('.warn')
btnReview.addEventListener('click', (e)=>{
    e.preventDefault()
    if(!nameProd.value || !textReview.value ){
        warn.textContent = 'Все поля должны быть заполнены'
    }else{
        addReview(nameProd.value, textReview.value)
        // document.body.textContent = 'Отзыв успешно отправлен'
    }

})
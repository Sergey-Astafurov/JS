"use strict"

const productList = document.querySelector('.product__list')


function createListProduct() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        const reviewsList = (getReviews(key))
        let divItem = document.createElement('div')
        divItem.className = 'product__item'
        divItem.innerHTML = `
        <h3 class="product__name"  >${key}</h3>
        <button class="product__reviews-btn toggle">Показать отзывы</button>
        <div class="product__reviews-list hidden">
           ${reviewsList.map((review) => {
            return `
            <div class='product__reviews-item'> ${review}

            <button class="product__reviews-del" data-name="${key}"> удалить </button>
            </div>
            `
        }).join('')}
        </div>`
        productList.appendChild(divItem)
    }
}

function init() {
    createListProduct()
}
init()
const productItem = document.querySelectorAll('.product__item')
const productName = document.querySelectorAll('.product__name')
const productReviewsBtn = document.querySelectorAll('.product__reviews-btn')
const productReviewsList = document.querySelectorAll('.product__reviews-list')

productReviewsBtn.forEach((btn, idx) => btn.addEventListener('click', (e) => {
    let target = e.target;
    target.classList.toggle('toggle')
    productReviewsList[idx].classList.toggle('hidden')
    if (!target.classList.contains('toggle') && !productReviewsList[idx].classList.contains('hidden')) {
        target.textContent = 'Скрыть'
    } else {
        target.textContent = 'Показать отзывы'
    }
}))


const productReviewsItem = document.querySelectorAll('.product__reviews-item')
const productReviewsDel = document.querySelectorAll('.product__reviews-del')

productReviewsDel.forEach((btnDel, idx) => {
    btnDel.addEventListener('click', (e) => {
        const target = e.target
        const nameProd = target.dataset.name;
        const elemRewievs = productReviewsItem[idx].innerHTML.trim().split('\n')[0];
        deleteReviews(elemRewievs, nameProd, idx);
    })
})

function deleteReviews(itemReviews, name, idx) {
    let array = getReviews(name);
    let index = array.indexOf(itemReviews)
    array.splice(index, 1)
    localStorage.setItem(name, JSON.stringify(array));
    productReviewsItem[idx].remove()


}


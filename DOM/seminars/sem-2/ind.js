const productsData = [
    {
        id: 1,
        name: "Ноутбук",
        category: "Электроника",
    },
    {
        id: 2,
        name: "Смартфон",
        category: "Электроника",
    },
    {
        id: 3,
        name: "Кофемашина",
        category: "Бытовая техника",
    },
    {
        id: 4,
        name: "Фотокамера",
        category: "Электроника",
    },
    {
        id: 5,
        name: "Микроволновая печь",
        category: "Бытовая техника",
    },
    {
        id: 6,
        name: "Книга",
        category: "Книги",
    },
    {
        id: 7,
        name: "Футболка",
        category: "Одежда",
    },
    {
        id: 8,
        name: "Шапка",
        category: "Одежда",
    },
    {
        id: 9,
        name: "Стул",
        category: "Мебель",
    },
    {
        id: 10,
        name: "Стол",
        category: "Мебель",
    },
];

const select = document.querySelector('#category-select')
const options = Array.from(document.querySelectorAll('option'))
const div = document.querySelector('.div')

console.log(div);
select.addEventListener('change', (e) => {
    displayProduct(e.target.value)


})

function displayProduct(elem) {
    const div = document.querySelector('.div')
    div.innerHTML = ''

    productsData.forEach((product) => {
        if (elem == '' || product.category == elem ){
            const listIt = document.createElement('li')
            listIt.textContent = product.name
            div.appendChild(listIt)
        }
    })

}
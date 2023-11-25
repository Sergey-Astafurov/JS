/*
Задание 1:
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся"
во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на
кнопку "Загрузить новости", ваш код должен имитировать задержку, словно
происходит реальная загрузка данных из внешнего источника, а после этой
задержки — отображать новости на странице.

1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером
для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна
имитировать задержку в 2 секунды перед успешным возвращением данных из
"виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она
должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(),
обрабатывая успешное выполнение и ошибки с использованием then() и catch().
При успешной загрузке отобразите статьи на странице. При ошибке покажите
сообщение об ошибке.
4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки"
новостей и активирует её снова после завершения операции (будь то успешная
загрузка или ошибка).
*/

const newsList = [
    {
        title: 'title1',
        descr: 'desc1',
    },
    {
        title: 'title2',
        descr: 'desc1',
    },
    {
        title: 'title3',
        descr: 'desc1',
    },
    {
        title: 'title4',
        descr: 'desc1',
    },
    {
        title: 'title5',
        descr: 'desc1',
    }
]
function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random()
            return random > 0.25 ? resolve(newsList) : reject(new Error("ERRRROOR!"))
        }, 2500);


    });
}
const btn = document.querySelector('.btn')
const dive = document.querySelector('.news')
btn.addEventListener('click', () => {
    btn.disabled = true

    const promis = fetchNews();
    promis.then(result =>
        dive.innerHTML = result.map((el) =>
            `<div>
        <h3>${el.title}</h3>
        <p>${el.descr}</p>
        </div>`).join('')).catch((error)=>console.log('error', error)).finally(()=>btn.disabled=false)

})
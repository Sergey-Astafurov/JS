const user = getAuthedUser()
const btnex = document.querySelector('.btn-hello')
const divHel = document.querySelector('.text')


if (!user) {
    window.location.href = "login.html"
} else {
    divHel.textContent = ` hello ${user}`
}


btnex.addEventListener('click', () => {
    logout()
    window.location.href = 'login.html'
})
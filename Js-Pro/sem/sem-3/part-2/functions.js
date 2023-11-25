const usersKey = 'users'
const userLoginKey = 'auth'
function addUsers(login, password) {
    const usersArr = getUsers();
    if (usersArr.some((user) => user.login === login)) {
        throw new Error("User already exists");
    }
    usersArr.push({login, password});
    saveUser(usersArr);
}

function getUsers(){
    const data = localStorage.getItem(usersKey)
    if (data === null) {
        return []
    }
    return JSON.parse(data)
}

function saveUser(users){
   const value =  JSON.stringify(users)
    localStorage.setItem(usersKey, value)
}

function findUser(login) {
    return getUsers().find((user) => user.login === login);
}

function authUser(login){
    localStorage.setItem(userLoginKey, login)
}
function getAuthedUser(){
    return localStorage.getItem(userLoginKey)
}
function logout(){
    localStorage.removeItem(userLoginKey)
}
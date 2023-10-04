// Домашнее задание
// Задание 1. Получение данных о пользователе.
async function getUserData(id) {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      if (response.ok) {
          console.log(await response.json());
      }
    } catch {
      (error) => console.log(error);
    }
  }
  getUserData(1);
  getUserData(39);

// Задание 2. Отправка данных на сервер.
const user = {
  "name": "John Doe",
  "job": "unknown"
};
const saveUserData =async (username)=>{
    try {
        let res = await fetch("https://reqres.in/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(username),
        });

        if (res.ok) {
          console.log("Data saved successfully");
        }
      } catch {
        (error) => console.log(error);
      }
    }
saveUserData(user)

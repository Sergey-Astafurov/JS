"use strict";

const cooks = new Map();
cooks.set('Пицца', 'Олег')
cooks.set('Суши', 'Андрей')
cooks.set('Десерт', 'Анна')

const dishs = new Set();
dishs
    .add('Маргарита')
    .add('Пепперони')
    .add('Три сыра')
    .add('Филадельфия')
    .add('Калифорния')
    .add('Чизмаки')
    .add('Сеякемаки')
    .add('Тирамису')
    .add('Чизкейк')

class Client {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
function checkedDish(name) {
    let flag = true
    name.forEach((o) => {
        if (!dishs.has(o.name)) {
            flag = false;
        }
    })
    return flag
}

function checkOrder(orders, client) {
    if (!checkedDish(orders)) {
        console.log('такого в меню нет');
    } else {
        console.log(`Клиент ${client.firstname} заказал:`);
        orders.forEach(order => {
            console.log(`${order.type} "${order.name}"- ${order.quantity}; Готовит повар ${cooks.get(order.type)};`);
        });
    }
}



class Manager {
    newOrder(client, ...args) {
        client = new Client(client.firstname, client.lastname);
        let arr = [];
        for (const arg of args) {
            const order = {};
            order.name = arg.name;
            order.type = arg.type;
            order.quantity = arg.quantity;
            arr.push(order)

        }
        checkOrder(arr, client)
        return arr
    }

}

const manager = new Manager();
const clientPavel = new Client("Павел", "Павлов");

manager.newOrder(
    new Client("Иван", "Иванов"),
    { name: "Маргарита", quantity: 1, type: "Пицца" },
    { name: "Пепперони", quantity: 2, type: "Пицца" },
    { name: "Чизкейк", quantity: 1, type: "Десерт" },
    // { name: "Чизsкейк", quantity: 1, type: "Десерт" },

);























// manager.newOrder(
//   clientPavel,
//   { name: "Филадельфия", quantity: 1, type: "Суши" },
//   { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
// );
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
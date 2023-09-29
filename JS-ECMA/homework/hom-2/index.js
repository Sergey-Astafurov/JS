// Задание 1: "Управление библиотекой книг"
class Book{
    title;
    author;
    pages;
constructor(title, author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages
}
displayInfo(){
    return console.log( `Title:${this.title},Author:${this.author},Pages: ${this.pages}`);
}
}
const bookPushkin = new Book ('Капитанская дочка', 'А.С Пушкин', 300)
bookPushkin.displayInfo();
// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:



// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.
class Student {
    name;
    age;
    grade;
    constructor(name,age,grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }

}
const st1 = new Student('John Doe', 22, '10th grade')
st1.displayInfo()
// // Пример использования класса
// const student = new Student("John Smith", 16, "10th grade");
// student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"
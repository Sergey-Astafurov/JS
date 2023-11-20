// /*
// Задание 1:
// Необходимо создать механизм для безопасного добавления метаданных к объектам
// книг с использованием ключей типа Symbol. Для чего необходимо:
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут
// необходимы для работы кода ниже.
// */

// // Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

// class Book {
//     constructor(title, author) {
//       this.title = title;
//       this.author = author;
//     }

//     /**
//      * Метод извлекает из объекта book значение под свойством metadataType
//      * и возвращает его.
//      * @param {Symbol} metadataType
//      * @returns {Array}
//      */
//     getMetadata( metadataType) {
//         return this[metadataType] ? this[metadataType] : console.log('error');
//     }

//     /**
//      * Метод добавляет в свойство book массив под ключом metadataType,
//      * со значением data внутри. Если массив под данным свойством уже существует,
//      * тогда data просто будет добавлен в данный массив.
//      * @param {Symbol} metadataType
//      * @param {any} data
//      */
//     addMetadata( metadataType, data) {
//         if(this[metadataType]){
//             this[metadataType].push(data)
//         }else{
//             this[metadataType]= [data]
//         }
//     }
//     getAverageRating(){
//        const res = this[ratingSymbol].reduce((a,b)=>  a + b , 0) / this[ratingSymbol].length
//        return +res.toFixed(1)
//     }
//     hasTag(data){
//         return this[tagsSymbol].includes(data)
//     }
//     reviewsCount(){
//         return this[reviewSymbol].length
//     }
//   }
//   const reviewSymbol = Symbol('review')
//   const ratingSymbol = Symbol('rating')
//   const tagsSymbol = Symbol('tag')

//   const book = new Book("George Orwell", "1984");
//   book.addMetadata( reviewSymbol, "Отличная книга о дистопии!");
//   book.addMetadata( reviewSymbol, "Книга отстой, не покупайте ее.");
//   book.addMetadata( ratingSymbol, 5);
//   book.addMetadata( ratingSymbol, 4);
//   book.addMetadata( ratingSymbol, 4);
//   book.addMetadata( tagsSymbol, "novel");
//   book.addMetadata( tagsSymbol, "dystopia");

//   //   // --- Вывод метаданных для книги

//   //   // ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
//   console.log(book.getMetadata( reviewSymbol));
//   console.log(book.getMetadata( ratingSymbol)); // [5, 4, 4]
//   console.log(book.getMetadata( tagsSymbol)); // ["novel", "dystopia"]

//   console.log(book);
//   console.log( book.getAverageRating() ); // 4.3
//   console.log(book.hasTag("novel")); // true
//   console.log(book.hasTag("blockbuster")); // false
//   console.log(book.reviewsCount()); // 2

/*
Задание 2:
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" },
//   ];

// const library = {
//     books,
//     // [Symbol.iterator](){
//     //     let i = 0;
//     //     const array = this.books;
//     //     return {
//     //         next(){
//     //             return i < array.length ? { done: false , value: array[i++]} :{done: true};
//     //         }
//     //     }

//     // }
//     *[Symbol.iterator](){
//         for (const book of books) {
//             yield book
//         }
//     }
// }
// for (const book of library) {
//     console.log(book);
// }

/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.

Необходимо:
1. Создать Map объект, который будет использоваться для хранения соответствия
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные
студентом.
*/

const ivan = {
    name: "Иван",
};
const lessonsTeacher = new Map();
lessonsTeacher
    .set('Математика', 'Смрнов')
    .set('Литература', 'Михеева')
    .set('Англ' ,'Якушев')

const studentLessons = new Map();
const ivanLesson = new Set('')
ivanLesson.add('Математика').add('Англ')
studentLessons.set(ivan , ivanLesson)

// Преподаватель по Математике: Смирнов.
console.log(`Преподаватель по математике: ${lessonsTeacher.get('Математика')}`);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${Array.from( studentLessons.get(ivan))}`);


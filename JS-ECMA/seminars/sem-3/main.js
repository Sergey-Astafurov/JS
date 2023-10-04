// const  delayMessage = async (message, delay)=> {
//     await  setTimeout(() => {
//         console.log(message);
//     }, delay);
//      console.log('end')
// }

// delayMessage('hello', 1000)
// delayMessage('hello2', 500)
// delayMessage('helloooo2', 1500)

// const tasks = [
//     {name: 'task1', time: 4000},
//     {name: 'task2', time: 3000},
//     {name: 'task3', time: 2000},
// ]
// for (let i = 0; i < tasks.length; i++) {
//     setTimeout(() => {
//         console.log(tasks[i].name);
//     }, tasks[i].time);

// }

// const loadData = (url)=>{
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url,true)
//     xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//     }
// };
// xhr.send()
// }

// loadData('https://jsonplaceholder.typicode.com/users')

async function loadData(url){
    try {
        const res = await fetch(url);
        if(res.ok){
            const arr = await res.json();
            arr.sort((a,b)=>{
                return a.name.localeCompare(b.name)
            })
            console.log(arr);
        }


    } catch (error) {
        console.log(error);
    }
}

loadData('https://jsonplaceholder.typicode.com/users')


// window.addEventListener('resize', (e) => {
//     console.log(window.innerWidth, window.innerHeight);
//   });

// window.addEventListener('beforeunload', (e)=> {
//     return true
// })
const contentEl = document.querySelector('.content')
const btnText = ['добавить элемент', 'удалить элемент', 'клонировать элемент']
const containerEl = document.querySelector('.container')

function createButton(){
    btnText.forEach((btn)=>{
        const elem = document.createElement('button')
        elem.classList.add('btn__action')
        elem.textContent = btn
        contentEl.appendChild(elem)
    })

}
createButton()
// function createDivEl(){
//     const divs = 3;
//     for (let i = 0; i < divs; i++) {
//         const divEl = document.createElement('div')
//         divEl.classList.add('div_elem')
//         divEl.style.width = 100 + 'px'
//         divEl.style.height = 100 + 'px'
//         divEl.style.background = '#cfc'
//         divEl.textContent = i
//         containerEl.appendChild(divEl)

//     }
// }
// createDivEl()

const div = document.querySelectorAll('.div_elem')
let blockNumber = 4;
const btnEl = document.querySelectorAll('.btn__action')
btnEl.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        console.log(e.target.textContent);
        switch (e.target.textContent) {
            case 'добавить элемент':
                let elem = document.createElement('div')
                // let elem = document.createElement('div')
                elem.classList.add('div_elem')
                elem.style.width = 100 + 'px'
                elem.style.height = 100 + 'px'
                elem.style.background = '#cfc'
                elem.textContent = blockNumber
                blockNumber++
                containerEl.appendChild(elem)
                // console.log(div);
                break;
            case 'удалить элемент' :
                const divs = document.querySelectorAll('.div_elem');
                console.log(divs.length);
                if(divs.length > 3) {
                    console.log(divs[divs.length-1]);
                    divs[divs.length - 1].remove()
                    blockNumber = 4
                }
                break;
            case 'клонировать элемент' :
                const len = document.querySelectorAll('.div_elem');
                let clone = containerEl.lastChild.cloneNode(true)
                containerEl.appendChild(clone)


            default:
                break;
        }
    })
})
console.log(btnEl);
function actionsDiv(action){

}

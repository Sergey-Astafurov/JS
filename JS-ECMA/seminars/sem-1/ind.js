const arr1 = [1, 2, 3, 4];
const arr2 = [35, 21, 34, 42];

const arr3 = [...arr1, ...arr2]
console.log(arr3);
const doublearr = (ar1, ar2) => {
    let arr = []
    return arr = [...ar1, ...ar2]
}
console.log(doublearr(arr1, arr2));
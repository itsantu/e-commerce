// const myFunc = () => {
//     return new Promise ((resolve, reject) => {
//         resolve("Promise kept successfully")
//     })
// }

// console.log(myFunc());

// const arr = ['antu', 'mallick', 'swaraj', 'halder', 'shrabani','halder']

// const [val1, val2, val3, ...rest] = arr
// const hello = (restArr) => {
//     return restArr.filter((item) => item).join(" ")
// }
// console.log(hello(rest));

// class Car {
//     constructor(brand, name) {
//         this.brand = brand
//         this.name = name
//     }

//     sayName () {
//         console.log(`My car is ${this.name} from ${this.brand}`);
//     }
// }

// class Safari extends Car {
//     hello () {
//         console.log(`I got ${this.name} car`);
//     }
// }

// const newCar = new Safari('Tata', 'Safari')
// newCar.sayName();
// newCar.hello();


const output = document.querySelector("#output")

const handleClick = (e) => {
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container")
const button = document.querySelector("button")

document.body.addEventListener("click", handleClick)
container.addEventListener("click", handleClick)
button.addEventListener("click", handleClick)


console.log('hello world');
setTimeout(() => {
    console.log('hello world 2');
}, 2000);
console.log('hello world 3');
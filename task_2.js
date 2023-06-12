// 2️⃣‼️Создайте массив с произвольными элементами. 
// Отсортируйте его в обратном порядке и выведите 
// в документе или консоли все данные из него. ‼️
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log("Исходный массив: " + arr);

let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log("Отсортированный в обратном порядке массив: " + reversedArr);

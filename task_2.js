let arr = [5, 2, 8, 1, 4, 7];

// Сортировка в обратном порядке с помощью цикла
for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// Вывод данных в консоль
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
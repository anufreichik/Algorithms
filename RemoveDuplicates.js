const list = [1, 2, 3, 4, 4, 3]
const uniqueList = [...new Set(list)]



const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter(unique)

console.log(uniqueAges)


//Задание 2. Дан массив чисел arr. Вернуть массив, в котором все элементы встречаются
// только один раз.

const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
const allElements = arr.filter((el, i) => i === arr.indexOf(el));
console.log(allElements); // [-1, 2, 0, 7, 8, 3, 4],
// в данном случае также можно использовать метод arr.lastIndexOf()
// для получения всех элементов без их дубликатов


//Задание 3. Дан массив arr. Вернуть массив дубликатов, при этом каждый дубликат должен быть
// представлен в единственном числе, и в порядке, когда он появляется в массиве в последний раз.

const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
const duplicates = arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
console.log(duplicates); // [2, 7, -1, 0]

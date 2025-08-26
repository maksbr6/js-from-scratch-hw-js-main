/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const { includesElement } = require('./01.js');
array = [1, 2, 3, 2, 1, 4]

function findUniqueElements(array) {
    let  massiveWithUniqueElements = [array[0]]
    for (let i = 1; i <array.length; i++) {
        if (includesElement(massiveWithUniqueElements, array[i]) === false) {
            massiveWithUniqueElements.push(array[i])
        }  
    }
    return massiveWithUniqueElements
}
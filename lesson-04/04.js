/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let stringOfDoubledCharacters = []
    for (let i = 0; i < str.length; i++) {
        stringOfDoubledCharacters.push(str[i]);
        stringOfDoubledCharacters.push(str[i])
    }   
    return stringOfDoubledCharacters.join('')
} 
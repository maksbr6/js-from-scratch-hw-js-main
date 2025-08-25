// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    if (a>=b && a>=c) {
        return a
    } else if (b>=c && b>a) {
      return b
    } else {
        return c
    }
}

# # JavaScript Arrays

## Learning Goals

- Understand basic array data type
- Understand and use built-in array methods

## Detailed Topics of the Lesson

In JavaScript, an **array** is a special type of object that can hold multiple values in a single variable, basically a list of elements with a numbered position:

```plain
┌─────┬─────┬─────┬─────┬─────┐
│  0  │  1  │  2  │  3  │ ... │
├─────┼─────┼─────┼─────┼─────┤
│  a  │  b  │  c  │  d  │ ... │
└─────┴─────┴─────┴─────┴─────┘
```

Each value is called an `element`, and each _element_ has a numbered position called an `index`.

Create an array by using square brackets and listing the elements separated by commas. For example:

```js
const colors = ["blue", "black", "red"];
```

You can access the `elements` of an array by using the `index` number in square brackets. For example:

```js
console.log(colors[0]); // 'blue'
console.log(colors[1]); // 'black'
console.log(colors[2]); // 'red'
```

:heavy_exclamation_mark: **Keep in mind that the `index` number starts at 0!**

JavaScript arrays also have built-in methods that you can use to manipulate the elements. For example, you can use the `push()` method to add an `element` to the end of an array, or the `pop()` method to remove the last `element`.

### Built-in array methods

There are various methods available within Javascript to change and manipulate arrays:

- [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
- [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [`join()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach)

#### Examples used during the lesson:

`push() / pop()`

```js
const array = ["a", "b", 14, "d"];
const newLength = array.push(28);
console.log(array); // Output: ['a', 'b', 14, 'd', 28]
console.log(newLength); // Output: 5
array.pop();
console.log(array); // Output: ['a', 'b', 14, 'd']
console.log(array.pop()); // Output: "d"
```

`shift() / unshift()`

```js
const numbers = [1, 2, 3, 4, 5];
const first = numbers.shift();
console.log(first); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]
```

```js
const numbers = [1, 2, 3, 4, 5];
const firstFew = numbers.shift(2);
console.log(firstFew); // Output: [1, 2]
console.log(numbers); // Output: [3, 4, 5]
```

```js
const numbers = [1, 2, 3, 4, 5];
const first = numbers.unshift(0);
console.log(first); // Output: 6
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]
```

```js
const numbers = [1, 2, 3, 4, 5];
const addMore = numbers.unshift(-1, 0);
console.log(addMore); // Output: 7
console.log(numbers); // Output: [-1, 0, 1, 2, 3, 4, 5]
```

`splice()`

```js
const numbers = [1, 2, 3, 4, 5];
// adding
numbers.splice(0, 0, 0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]
// replacing
numbers.splice(4, 2, 4.5, 5.0);
console.log(numbers); // Output: [0, 1, 2, 3, 4.5, 5.0]
```

:heavy_exclamation_mark: **Keep in mind that most of the built-in array functions mutate the original array except `forEach()` and `slice()`**

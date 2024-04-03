---
title: "JavaScript Notes"
date: "2023-03-17"
seoTitle: "First Hello world"
layout: "article"
tag: "JS"
image: "/pic1.jpg"
color: "#FCFF74"
---

# JavaScript

5. You can create a string in JavaScript by using the double quotes ( “ ” ) or single quotes ( ‘ ’ ).
6. The `.length` property is used to return the length of the string.

# **1. Basic Function**

```jsx
function sum(x, y) {
  return x + y;
}
sum(3, 4);
```

1. In JavaScript, you **have** to return from inside functions. If you forget to write `return`, your function will return `undefined`.
2. The `return` keyword will also quit/exit the function.

# **2. Strings I**

1. You can create a string in JavaScript by using the double quotes ( “ ” ) or single quotes ( ‘ ’ ).
2. The `.length` property is used to return the length of the string.

```jsx
"Hello".length; // 5
let text = "Hello World";
text.length; // 11
```

### A. String Methods → .toLowerCase( ) .toUpperCase( )

1. `.toLowerCase` will return a new string that has all of its character in lower case.

```jsx
"HELLO".toLowerCase(); // hello
"hello".toUpperCase(); // HELLO
```

1. `.toUpperCase` will return a new string that has all of its character in upper case.

<aside>
✔️ Note that .length should not have **( )** after it because it is a **property** (a value that has already been computed). Whereas `.toLowerCase()` is a **method** that is requires the **( )** because it’s an **action** that you are performing.

</aside>

1. when solving challenges feel free to use `console.log()` to visualize a variable or expression. It is **NOT** replacement for **return**.

### B. Character access → Square brackets[idx] .at(idx)

1. You can access a specific character in a string by using the square brackets syntax [ ].
2. You have to provide the index of the character you’d like to access, starting from 0.

```jsx
const language = "JavaScript";

language[0]; // first character -> J
language[1]; // second character -> a
language[2]; // third character -> v
```

1. You can also combine the character access with **.length** property. So using the same **language** variable, here’s how you get the second to last character from it.

```jsx
const language = "JavaScript";
language[language.length - 2];
```

1. `.at()` is a method that reads the character at a certain index, which can also be negative.
2. We can use **.at( )** or **square brackets [ ]** whichever approach we prefer.

```jsx
const language = "JavaScript";
language.at(0); // J
language.at(1); // a
language.at(-1); // t
language.at(-2); // p

language[-1]; // undefined
```

### C. Substrings → .substring( indexStart, indexEnd )

1. A Substring is a part or a portion of a string. For e.g., “rain” is a substring of the string “brain” because you can get “rain” by taking the last 4 characters.

```jsx
someString.substring(indexStart, indexEnd);
```

1. When we call substring we give it a 2 parameters, the first one for the **indexStart** and the second one for **indexEnd**.
   - indexStart → the position of the first character you’d like to **include**.
   - indexEnd → the position of the first character you’d like to **ignore.**
2. This means an indexEnd of 5, will only include up to the character at position 4.

```jsx
const language = "JavaScript";
language.substring(1, 4); // ava
```

1. The **indexEnd** parameter is optional, which means you can pass the **indexStart** and it’ll assume the **indexEnd** to be the same as the string length.

```jsx
language.substring(4); // "Script"
```

1. Do not use the `.substr` method as it’s deprecated and works differently. Always use the `.substring` method.

```jsx
// returns all the characters except the first one form the text

function skipTheFirstCharacter(text) {
  return text.substring(1);
}

console.log(skipTheFirstCharacter("Xcode")); // code
console.log(skipTheFirstCharacter("Hello")); // ello
```

### D. Plus Operator ( +), Additional Assignment (+=)

1. In JavaScript, the plus operator (+) will behave differently based on the types of values you see it with.
2. we can concatenate 2 strings together using (+), which means merging them together into 1 string.

```jsx
"Hello" + "Worl";  // "Hello World"
let prefix = "Mrs";
let name = "Sam";
Let string = prefix + " " + name; // "Mrs Sam"

let name = "sam";
name = name + " blue";
console.log(name); //"same blue"

// rewrite the above expression
name += " blue";
```

### E. Template Strings, Interpolation(`${variable}`)

1. Template strings supports interpolation and other nifty features.

```jsx
`This is a template string` // miltiline string
`This is a multiline
string that 
just works!`;

// interpolation
let language = "JavaScript";
`I am learning ${language}`;
```

1. The template string start and end with a backtick **` `** character.
2. Template String also support multiple lines.
3. **Interpolation** → We can write a variable in your string, and get its value.

```jsx
function captalize(word) {
  return `${word[0].toUpperCase() + word.substring(1).toLowerCase()}`;
}
```

# [**3. Numbers**](https://www.notion.so/JavaScript-131fac51ebe242bba7b800b47e66f192?pvs=21)

1. You can represent large number clearer, if you wish, with numeric separator ( \_ ). when we use this separator JavaScript will take it out.

```jsx
let num1 = 1_000; // equivalent to 1000
let num2 = 1_000_000; // equivalent to 1 milion
let num3 = 10_00; // equivalent to 1000
```

1. We can convert number to string by calling the `.toString()` method.

```jsx
let answer = 42;
answer.toString(); // "42"
```

<aside>
✔️ if you look at online documentation, you will often see `String.prototype.toString()`. Why there is **prototype** ? it allows to add new properties and method to object without modifying the object themselves. This allows us to extend the functionality of object without having to worry about breaking the existing code.

</aside>

1. **NaN →** Sometime we can encounter NaN which stands for Not a Number. If you try to multiply a string with a number.

```jsx
"abc" * 4; // NaN

function converNumberToString(number) {
  return number.toString();
}

console.log(converNumberToString(42)); // "42"
```

## A. Convert String to Number → parseInt(str,10)

1. If we want to convert a string to a number. We use the function `Number.parseInt()`. We include `Number.` bit. This is because there’s a global object called Number which contains a method called `parseInt()`. This method expects 2 parameters.
2. The radix is the base of numerical system. For decimal system radix is 10, for Binary system radix is 2.

<aside>
⚠️ `Number.parseInt(string, radix)` does not always default to a radix of 10. So make sure to pass the radix as the 2nd parameter.

</aside>

```jsx
let str = "42";
Number.parseInt(str, 10);
Number.parseInt(str, radix);

Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5
```

1. when number is entered by the user in a text box or the number is being read from DOM. Then, we use `Number.parseInt()` method to convert string to number.

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The first line, let greeting;, declares a variable named greeting but does not assign it a value.The second line, greetign = {};, assigns an empty object to the variable greetign. The third line, console.log(greetign);, logs the value of the variable greetign to the console. Since greetign is an object, it is logged to the console as {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The function sum() takes two arguments, a and b, and returns their sum. When the function is called with the arguments 1 and "2", JavaScript will attempt to convert the string "2" to a number. Since the string "2" contains only numeric characters, JavaScript will be able to convert it to the number 2. The function sum() will then return the sum of 1 and 2, which is 3. However, since JavaScript coerces strings to numbers when they are used in arithmetic operations, the result of the function call will be the string "12", not the number 3. This is a common gotcha in JavaScript, and it is important to be aware of it when writing code.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The variable food is a constant reference to an array.
When you modify the contents of the array, you are modifying the array itself, not the reference.
Therefore, the constant variable food still points to the same array, even though the contents of the array have been modified.
Therefore, the output of the code will be ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When a function is called without any arguments, the missing arguments are set to undefined.

In the above code, the function sayHi() is called without any arguments. Therefore, the argument name is set to undefined.

When the function sayHi() returns, it evaluates the expression ${name}, which evaluates to the string "undefined".

Therefore, the output of the code will be Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The forEach() method iterates over the elements of an array and executes a callback function for each element.
The callback function in the above code checks if the current element of the array is greater than zero. If it is, the callback function increments the variable count.
Since there are three elements in the array nums that are greater than zero, the output of the code will be 3.</i>

</p>
</details>

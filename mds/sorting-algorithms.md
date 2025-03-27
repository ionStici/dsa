# Bubble Sort

**Sorting** is the process of rearranging the items in a collection (e.g. an array) so that the items are is some kind of order.

## `.sort()` Array Method

The comparator function of `.sort()` looks at pairs of elements (`a` and `b`), determins their sort order based on the return value:

- If it returns a negative number, `a` will come before `a`
- Returns positive number: `a` comes after `b`
- Returns `0`, `a` and `b` are the same

```js
const arr = [12, 4, 7, 2, 7, 15];

const asc = arr.sort((a, b) => a - b); // [2, 4, 7, 7, 12, 15]
const desc = arr.sort((a, b) => b - a); // [15, 12, 7, 7, 4, 2]
```

## Bubble Sort

A sorting algorithm where the largest values bubble up to the top, one at a time.

Time Complexity: ``

```js
const arr = [12, 4, 7, 2, 15, 7];

function bubbleSort(arr, type = "ASC") {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = arr.length; i > 0; i--) {
    let noSwaps = undefined;

    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;

      console.log(arr, arr[j], arr[j + 1]);

      if (type === "ASC")
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = false;
        }

      if (type === "DESC")
        if (arr[j] < arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwaps = false;
        }
    }

    console.log(`${arr.length - i + 1} PASS COMPLETE!`);

    if (noSwaps) break;
  }

  console.log("----- RESULT -----");
  return arr;
}

const asc = bubbleSort(arr); // [ 2, 4, 7, 7, 12, 15 ]
console.log(asc);

// const desc = bubbleSort(arr, "DESC"); // [ 15, 12, 7, 7, 4, 2 ]
// console.log(desc);
```

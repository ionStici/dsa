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

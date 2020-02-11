function array_range(start, num_of_contents) {
    
    let arr = [];
    arr.length = num_of_contents;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = start;
        start++;
    }

    return arr;
}

console.log(array_range(1, 4)); // [1, 2, 3, 4]
console.log(array_range(-6, 4)); // [-6, -5, -4, -3]
console.log(array_range(3, 5)); // [3, 4, 5, 6, 7]
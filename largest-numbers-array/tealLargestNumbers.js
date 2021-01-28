//same method, different implementation
//O(N) time -- n being length of the subarrays, as the number of subarrays does not change
//O(1) space assuming the result array is a given

largestNums = (arr) => {
  let result = [];

  for (let subArr=0; subArr<arr.length; subArr++){
    if(!arr[subArr][0]) return null;
    let max = arr[subArr][0];

    for (let item=0; item<arr[subArr]; item++){
      max = Math.max(max, arr[subArr][item]);
    }
    result.push(max);
  }
  return result;
}

console.log(largestNums([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNums([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNums([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestNums([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
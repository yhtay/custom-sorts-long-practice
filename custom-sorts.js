function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    return a.age - b.age;
  })
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if(a % 2 === 0 && b % 2 === 1) return 1;
    if(a % 2 === 1 && b % 2 === 0) return -1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  // Your code here
  let arrS = s.split("");
  let arrT = t.split("");

  let sortedS = arrS.sort()
  // console.log(sortedS); ['a', 'a', 'a','g', 'm', 'n','r']
  let sortedT = arrT.sort()
  // console.log(sortedT)
  // console.log(sortedS === sortedT) // false because arrays are different point in memory
  if (sortedS.join('') === sortedT.join('')) {
    return true;
  }
  return false;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    let stringA = a.toString();
    let stringB = b.toString();

    if(stringA.length > stringB.length) return -1;
    if(stringB.length > stringA.length) return 1;

    return a - b;
  })
}

function frequencySort(arr) {
  // Your code here
  let object = {};

  for (let num of arr) {
    // console.log(num) // 1 1 2 2 2 3
    if (object[num] === undefined) {
      object[num] = 1;
    } else {
      object[num]++
    }
  }
  // console.log(object)
  return arr.sort( (a, b) => {
    if (object[a] > object[b]) return 1;
    if (object[a] < object[b]) return -1;
    return b - a;
  })

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

var words = ["my", "hips", "do", "not", "lie"];

function map(arr, cbFn) {
  mappedArr = [];
  for (var c = 0; c < arr.length; c ++) {
  mappedArr.push(cbFn(arr[c]));
  }
  console.log(mappedArr);
  return mappedArr;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

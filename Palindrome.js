function isPalindrome(s) {
  let a = s;
  s = s.split("").reverse().join("");

  return s == a;
}

function PalindromicStrings(arr, N) {
  let ans = [];

  for (let i = 0; i < N; i++) {
    if (isPalindrome(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

let arr = ["mom", "car", "ada", "dad", "level"];
let N = arr.length;

let s = PalindromicStrings(arr, N);
if (s.length == 0) document.write("-1");
for (let st of s) document.write(st, " ");

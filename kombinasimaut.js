function choose_team(n, k) {
  if(k <= 1 || n - 1 <= k) {
    return n
  }
  else {
    return choose_team(n - 1, k - 1) + choose_team(n - 1, k)
  }
}

console.log(choose_team(6, 2));
console.log(choose_team(6, 3));
console.log(choose_team(24, 4));

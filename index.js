function choose_tim(n, k) {

    if (k >= n - 1 || k <= 1) {
        return (n)
    } else {
        return choose_tim(n - 1, k - 1) + choose_tim(n - 1, k)
    }
}


console.log(choose_tim(6, 2))
console.log(choose_tim(6, 3))
console.log(choose_tim(24, 4))


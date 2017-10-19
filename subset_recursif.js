let subset = (n,k) => {
	if (n === 1){
		return n;
	}
	if (k === 0){
		var k=n
		subset(n-1,k)
	}
	return n/k* subset(n-1, k-1)
}

console.log(subset(6,2))
console.log(subset(6,3))
console.log(subset(24,4))
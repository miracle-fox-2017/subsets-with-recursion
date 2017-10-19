function subRecursif(n, k) {
  let total = 1;
  let b = [];
  let c = 1;

  if(k == 0){
    return '';
  }else if(k == 1){
    return n;
  }else{
    for (var i = n; i >= 1; i--) {
      b.push(i)
    }
    for(var j=0; j<k; j++){
      total*=b[j]
    }
    for(var l = k; k>=1; k-- ){
      c*=k
    }
    return total/c ;
  }
}

console.log(subRecursif(6, 3));
console.log(subRecursif(18, 2));

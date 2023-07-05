let n;
n = prompt("n : ");
n = Number(n);
let sum;
sum = 0;
for (let i=0; i<n+1; i++){
    if (i % 3 ==0 || i%5==0){
        sum = sum+i;
    }
}
console.log(sum);
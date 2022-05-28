function add(n1: number, n2:number){
    if (typeof n1 === 'number' && typeof n2 === 'number')
    return (n1+n2)
}

const num1 = 50;
const num2 = 0.8;

const result = add(num1,num2);
console.log(result);
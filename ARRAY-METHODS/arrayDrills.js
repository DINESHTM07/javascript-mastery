
const number = [1,2,3,4,5,6,7,8,5,3,3,8];

function double(){
    const doubled = number.map(num => num*2);
    console.log("Doubled:" , doubled);
}

function even(){
    const evens = number.filter(num => num%2 ===0);
    console.log("Evens:",evens);
}

function largest(){
    const max = number.reduce((biggest, num) =>{
        return num > biggest ? num : biggest ;
    },number[0]);
    console.log("Largest : ", max);
}

function allpositive(){
    const positive = number.every(num => num > 0);
    console.log("All positive?",positive);
}

function odd(){
    const oddnum = number.some(number => number % 2 !== 0);
    console.log("Has odd", oddnum);
}

function countSame(){
    const twice = number.reduce((acc, num)=> {
    acc[num] = (acc[num] || 0)+1;
    return acc;
    },{});
    console.log("counts:",twice);
}

double();
even();
largest();
allpositive();
odd();
countSame();

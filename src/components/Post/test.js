const sumFor = (numberList) => {
    let sum = 0;
    for(const number of numberList){
        const newSum = sum + number;
        sum = newSum;
    }
    return sum;
};
console.log(sumFor([1,2,3,4,5,6]))


const sumReduce = (numberList) => {
    return numberList.reduce((sum, number) => sum + number , 0)
};

console.log(sumReduce([1,2,3,4,5,6]))

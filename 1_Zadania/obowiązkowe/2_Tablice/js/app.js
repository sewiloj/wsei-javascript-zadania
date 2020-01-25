// Zadanie 0 
const distFromAverage = (arr) =>{
    let avg;
    let sum = 0;
    arr.forEach(item =>{
        sum+=item;
    })

    avg = sum/arr.length;
    let newArr = [];

    arr.forEach(item =>{
        newArr.push(item-avg);
    })

    console.log(newArr);
    return newArr;
}

distFromAverage([1,2,3,4,5,6,7])


// Zadanie 1
const fruits = ["apple", "orange", "banana", "strawberry"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

fruits.forEach(fruit =>{
    console.log(fruit);
})


//Zadanie 2 - w domu

// Zadanie 3
function printTable(array){
    for(var i=0; i<=array.length; i++)
    {
        console.log(array[i]);
    }
}
printTable([1,2,3,4]);

// Zadanie 4
function multiply(array){
    let sum = 1;
    for(var i=0; i<array.length; i++){
        sum *= array[i];
    }
    console.log(sum);
    return sum;
}
multiply([1,2,3,4,5,6,7]);


// Zadanie 5
function getEvenAverage(array){
    let evenSum=0;
    let evenCounter=0;
    for(let i = 0; i<array.length; i++){
        if(array[i]%2==0){
            evenSum+=array[i];
            evenCounter++;
        }
    }

    let evenAvg = evenSum / evenCounter;
    console.log(evenAvg);
    if(evenCounter == 0)
    {
        return null;
    }
    else
    {
        return evenAvg;
    }
}
getEvenAvarage([1,2,3,4,5,6,7]);


//Zadanie 6
function sortArray(array){
    array.sort((a,b) => a-b);
    console.log(array);
    return array;

}
sortArray([145,11,3,64,4,6,10])
//zadanie 7
function addArrays(firstArray, secondArray)
{
    let newArr = new Array();
    let length = 0;
    if(firstArray.length >= secondArray.length)
        length = firstArray.length;
    else    
        length = secondArray.length;

    for(i = 0; i < length; i++)
    {
        if (typeof firstArray[i] === "undefined")
            firstArray[i] = 0;
        if (typeof secondArray[i] === "undefined")
            secondArray[i] = 0;

        newArr[i] = firstArray[i] + secondArray[i];

    }
    return newArr;

}

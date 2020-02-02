// Zadanie 0 
const distFromAvarage = (arr) =>{
    let avg;
    let sum = 0;
    arr.forEach(item =>{
        sum+=item;
    });

    avg = sum/arr.length;
    let newArr = [];

    arr.forEach(item =>{
        newArr.push(item-avg);
    });

    console.log(newArr);
    return newArr;
}

distFromAvarage([1,2,3,4,5,6,7]);
distFromAvarage([1,1,1,1]);
distFromAvarage([2,8,3,7]);


// Zadanie 1
const fruits = ["banana", "orange", "berry", "apple"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

fruits.forEach(fruit =>{
    console.log(fruit);
})


// Zadanie 3
function printTable(array){
    for(let i=0; i<array.length; i++)
    {
        console.log(array[i]);
    }
}
printTable([1,2,3,4]);

// Zadanie 4
function multiply(array){
    let sum = 1;
    for(let i=0; i<array.length; i++){
        sum *= array[i];
    }
    console.log(sum);
    return sum;
}
multiply([1,2,3,4,5,6,7]);
multiply([1,1,1,1]);
multiply([2,8,3,7]);

// Zadanie 5
function getEvenAvarage(array){
    let sum = 0;
    let counter = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]%2 == 0){
            sum += array[i];
            counter++;
        }
    }
    if(counter == 0)
    {
        console.log(null);
        return null;
    }
    else
    {
        let avg = sum / counter;
        console.log(avg);
        return avg;
    }
}

getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1]);
getEvenAvarage([2,8,3,7,4]);


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

    for(let i = 0; i < length; i++)
    {
        if (typeof firstArray[i] === "undefined")
            firstArray[i] = 0;
        else if (typeof secondArray[i] === "undefined")
            secondArray[i] = 0;

        newArr[i] = firstArray[i] + secondArray[i];

    }
    console.log(newArr);
    return newArr;

}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);

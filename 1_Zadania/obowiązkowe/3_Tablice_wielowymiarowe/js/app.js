// Zadanie 0
function checkArray(array){

    let newArray = [];

    for(let i = 0; i < array.length; i++)
    {
        let checked = true;
        for(let j = 0; j < array[i].length; j++)
        {
            if(array[i][j]%2 != 0)
                checked = false;
        }
        newArray.push(checked);
    }

    console.log(newArray);
    return newArray;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
]);



// Zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
// Zadanie 1.1
console.log(task1Array[2][1]);
// Zadanie 1.2
console.log(task1Array[1].length);
// Zadanie 1.3
console.log(task1Array[3][1]);


//Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
//Zadanie 2.1
for (let i = 0; i < task2Array[0].length; i++) {
    console.log(task2Array[0][i]);
}
//Zadanie 2.2
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}
//Zadanie 2.3
for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

//Zadanie 3
function print2DArray(array) {
    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < array[i].length; j++)
        {
            console.log(array[i][j]);
        }
    }
}

print2DArray([[1,2], [3,4]]);


//Zadanie 4
const arrayTask4 = [[5,6], [7,8]];
print2DArray(arrayTask4);

//Zadanie 5
function create2DArray(rows, columns) {
    const array = [];
    let number = 1;
    for (let i = 0; i < rows; i++)
    {
        array.push([]);
        for (let j = 0; j < columns; j++) {
            array[i].push(number);
            number++;
        }
    }
    return array;
}
console.log(create2DArray(10, 2));
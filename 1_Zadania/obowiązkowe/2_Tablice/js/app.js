//zadanie 4
function multiply(array)
{
    let sum = array[0];
    for(i=0; i<array.length; i++)
    {
        sum *= array[i];
    }
}
//zadanie 5
function getEvenAvarage(array)
{
    let sum = 0;
    let elements = 0;
    for(i=0; i < array.length; i++)
    {
        if(array[i]%2 == 0)
        {
            sum += array[i];
            elements++;
        }
    }
    if(sum == 0)
        return null;
    else
    {
        sum = sum / elements;
        return sum;
    }
}
//zadanie 6
function sortArray(array)
{
   return array.sort(function(a, b){return a - b});
}
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

function show(data) {
    console.log(data);
}

var array = [1,5,7,2,34,56];

function showAllInsideArray() {

}
//array.forEach(show); показати елементи

var sumOfArray = 0;
array.forEach(function(value){
   sumOfArray += value;
});
show(sumOfArray);

function multiplyEachArrayValues(value,index,array) {
    array[index] = value*10;
}
array.forEach(multiplyEachArrayValues);  // помножити елементи на 10
array.forEach(show);

array.map(multiplyEachArrayValues);
array.forEach(show);

array = [3,6,8,9,4,1,2,3,4,5,6]
var evenNumbers = array.filter(function(value){
    return value%2 === 0;
})

evenNumbers.forEach(show)

function isEven(value) {
    return value%2 === 0;
}

var every = array.every(isEven);
var some = array.some(isEven);

show('every  =  ' + every);
show('some  =  ' + some);

var sumOfArray = array.reduce(function(a,b){
    return a + b;
})

show(sumOfArray);


show(array.indexOf(9));

// SORTING-----------------------------------

var array2 = [];


array2.push({
    name:"Ivan",
    age:50
});

array2.push({
    name:"Vasya",
    age:24
});
array2.push({
    name:"Kolya",
    age:22
});

array2.push({
    name:"Misha",
    age:25
});

function sortByName(obj1,obj2) {
    var obj1Name = obj1.name.toLowerCase();
    var obj2Name = obj2.name.toLowerCase();

    if(obj1Name > obj2Name) {
        return 1
    } else if (obj1Name < obj2Name) {
        return -1
    }
    return 0
}

function sortByAge(obj1,obj2) {
    return obj1.age - obj2.age;
}

array2.forEach(show);
array2.sort(sortByAge);
array2.forEach(show);

array2.sort(sortByName);
array2.forEach(show);






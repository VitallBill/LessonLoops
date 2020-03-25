function show(data) {
    console.log(data);
}

//Сторити масив.

var students = [];

//Наповнити його 5-ма об`єктами Student {name, sex(male\female), age};

students.push(
    {
    name: "Ivan",
    sex:"male",
    age:20
    }
);

students.push(
    {
    name: "Andriy",
    sex:"male",
    age:25
    }
);

students.push(
    {
    name: "Masha",
    sex:"female",
    age:21
    }
);

students.push(
    {
    name: "Vasya",
    sex:"male",
    age:23
    }
);

students.push(
    {
    name: "Lola",
    sex:"female",
    age:19
    }
);

//students.forEach(show);

//Зробити фільтрування обєктів використовуючи filter() , де age < 21, sex ==`male`;

var studentsOlder21 = students.filter(function(obj,age){
    return obj.age < 21;
})
//studentsOlder21.forEach(show);
var studentsMale = students.filter(function(obj,sex){
    return obj.sex == "male";
})
//studentsMale.forEach(show);

//До кожного із відфільтрованих обєктів застосувати функцію map() та написати в нове поле ’yearsUnderAge’ обєкта, різницю 21 - age

var students21 = studentsOlder21.map(function(array) {
    return {
        name : array.name ,
        sex: array.sex,
        age: array.age,
        yearsUnderAge : 21 - array.age
    }
})
//students21.forEach(show)

var stdMale = studentsMale.map(function(array) {
    return {
        name : array.name ,
        sex: array.sex,
        age: array.age,
        yearsUnderAge : 21 - array.age
    }
})
//stdMale.forEach(show);



//Провести сортування за всіма полями об’єкта, де перше поля за яким слід сортувати буде age, далі якщо у них однаковий вік тоді слід сортувати за полем name.

//students.forEach(show)

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

//students.sort(sortByAge);
//students.forEach(show);

//students.sort(sortByName);
//students.forEach(show);


//students.forEach(show)


















































function show(data) {
    console.log(data);
}


//1. Напишіть функцію myFunct(str), яка повертає рядок str з заголовним першим символом, наприклад:
//
//myFunct("yura") ==> "Yura";


function myFunct(str){
    var firstL = str.charAt(0).toUpperCase();
    var secPart = str.substr(1,str.length-1);
    return firstL.concat(secPart);
}

show(myFunct('dimon'));


//2. Створіть функцію truncate (str, maxlength), яка перевіряє довжину рядка str, і якщо вона перевищує maxlength - замінює кінець str на "...", так щоб її довжина стала дорівнювати maxlength.


function truncate(str, maxlength) {
    var l = str.length;
    var dif = l - maxlength;

    if (l > maxlength) {
         l = str.length - (dif + 3);
         show(str.substring(0,l).concat('...'));
    } else return 'there are only  ' + str.length + '  letters'

}


var string = 'Створіть функцію truncate (str, maxlength), яка перевіряє довжину рядка str';


show(truncate(string,29)); // прикольне завдання)


//3. Створіть функцію extractCurrencyValue (str), яка буде з рядка виділяти число-значення. Наприклад є вартість у вигляді рядка: "$ 120". Тобто, першим йде знак валюти, а потім - число. В даному випадку наша функція повинна повернути 120.


function extractCurrencyValue(str) {
    var regPattern = new RegExp("[0-9]+",'g');
   var result = regPattern.exec(str);
    return show(result[0]);
}



var str5 = '$   120    asdasd';
extractCurrencyValue(str5);


















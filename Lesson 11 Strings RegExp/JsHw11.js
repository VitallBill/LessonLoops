function show(data) {
    console.log(data);
}

var str1 = 'Hello World';
var str2 = new String ('Hello World Front-end');


show(str1);
show(str2.toString());


function getString(name) {
    var str3 = `Hello Mr. ${name}`;
    show(str3);
}


getString('Piter');

show(str1.charAt(0));
show(str1.charCodeAt(0));
show(str1.concat(' asdasd'));
show(str1.includes('Hello'));
show(str1.indexOf('o'));
show(str1.lastIndexOf('o'));
show(str1.startsWith('H'));
show(str1.endsWith('H'));
show(str1.repeat(3));
show(str1.replace('Hello','Hi'));
show(str1.slice(0,5));
show(str1.split(' '));
show(str1.substr(2,5)); // после 2-го 5 символів
show(str1.substring(2,5));  // з 2-го по 5-й
show(str1.toLowerCase());
show(str1.toUpperCase());
show(str1.trim());

//--------------------RegEx

var regPattern = new RegExp('Java','g');

var str = 'Super mega language Java and JavaScript';

var result = null;

while((result=regPattern.exec(str)) != null ) {
    show(result[0] + '  on index: ' + result.index);
}

show(regPattern.test(str));


//--------------------Iterators



function rangeData (min,max) {
    var nextValue = min;

    return {
        next: function() {
            if (nextValue>max) {
                throw stopitaration;
            } return nextValue++
        }
    }
}

var range = rangeData(10,25);

while(range.next() < 100){
    show(range.next())
}




var range = {
    from:10,
    to:25
}

range[Symbol.iterator] = function () {
    var current = this.from;
    var last = this.to;

    return {
        next: function() {
            if (current<=last) {
                return {done:false,value:current++}
            } else {
                return {
                    done:true
                }
            }
        }
    }
}

for(var num in range) {
    show(num)
}


//--------------------Generators


function* range2(min,max){
    for(var i = min; i <= max; i++) {
        yield i;
    }
}


var dateArray = range2(10,70);
show(dateArray);






















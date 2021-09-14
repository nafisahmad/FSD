// 1. Ways to print in JavaScript
// console.log("Hello World!");
// alert("click ok");
// document.write("this is document write.");

// 2.JavaScript console API
// console.log("Hello World!", 4+6, "another log");
// alert("click ok");
// document.write("this is document write.");
// console.warn("warning");
// console.error("this is an error");

//3. JavaScript Variables
// var num1=34;
// var num2=16;
// console.log(num1+num2);

// 4.Data types
// Numbers
// var num1=34;
// var num2=16;
// // string
// var str1 = "this is a string";
// var str2 = 'this is also a string';
// // Objects
// var marks = {
//     ravi : 25,
//     suriya : 35,
//     abdul : 45,
// }
/*
// // Boolean
var a = true;
var b = false;

console.log(a, b);

// var und = undefined;
var und;
console.log(und);

var n=null;
console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/
// var arr = [1,2,3,4,5]
// var arr1 = [1,"Dublu",3,4,5]
// console.log(arr1);

// // Operators in JavaScript
// // Arithmetic Operators
// var a = 100;
// var b = 10;
// // console.log("The value of a + b is ", a+b);
// // console.log("The value of a - b is ", a-b);
// // console.log("The value of a * b is ", a*b);
// // console.log("The value of a / b is ", a/b);

// // Assignment Operators
// var c = b;
// // c += 2;
// // c -= 2; // c = c - 2;
// // c *= 2;
// // c /= 2;
// // console.log(c);

// // Comparison Operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);
/*
// functions in javascript

function avg(a,b){
    return (a+b)/2;
}
// DRY= do not repeat yourself
c1= avg(4,6);
c2=avg(14,16);
console.log(c1, c2);

// Conditional in JavaScript

var age = 34;
if (age>18){
    console.log("voter eligible")
}
else{
    console.log("not eligible");
}


// if-else ladder
if(age>2){
    console.log("ticket half");
}
else if (age>8){
    console.log("ticket full");
}

*/

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// for(var i=0;i<arr.length;i++){

//     if(i==2){
//         break;
//     }
//     console.log(arr[i])
// }
// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// // const ac = 0;
// // ac++;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j<arr.length);

// ArrayMethods
// let myArr = ["fan", "camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("YoYo");
// myArr.shift();
// console.log(myArr.length);
// const newLen = myArr.unshift("Harry");
// console.log(newLen);

// string Methods in JavaScript
// let myLovelyString = "harry is a bad boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(1, 3));

// d = myLovelyString.replace("harry", "rohan");
// d = d.replace("bad", "good");
// console.log(d, myLovelyString);


// dates in javaScript
// myDate = new Date();
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());

// Dom = Document Object Model

let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText); 
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ---> removes an element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)


// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }


// Events in JavaScript
// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })

// Arrow Function
// function sum(a,b){
//     return a+b;
// }
// (Both is same)
//  sum = (a,b)=>{
//      return a+b;
//  }

// settimeout and setinterval
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);


// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)

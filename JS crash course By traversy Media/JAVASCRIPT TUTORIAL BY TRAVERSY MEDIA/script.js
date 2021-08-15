// //sigle line comment
// /*Multiple line coment*/
// // CTR + / comment a block of code
// //VARIABLES
// //var
// var fruit;
// fruit = 'mango';
// fruit = 'PineAple'
// console.log(fruit);
// //let
// let name;
// name = 'John Doe';
// console.log(name);
// //const
// const number = '10';
// //Naming convension
// let firstName = 'Peter';//camel case
// let FirstName = 'Peter';//Underscore
// let first_name = 'peter';//Pascal case
// console.log(firstName);
// console.log(FirstName);
// console.log(first_name);
/*---------------------------------------------------------------------*/
// //Primitive Data type
// //String
// const name = 'John';
// console.log(typeof name);
// //Number
// const age = 14;
// console.log(typeof age);
// //Booleans
// const kids = true;
// console.log(typeof kids);
// //null
// const car = null;
// console.log(typeof null);
// //udefined
// let test;
// console.log(typeof test);
// //symbol
// const sym = Symbol();
// console.log(typeof sym);

// //Refference data type
// //array
// const favouriteFruits = ['Apples', 'Mango', 'Peaches'];
// console.log(typeof favouriteFruits);
// //object literal
// const adress = {
//     city: 'Boston',
//     state: 'LA',
// };
// console.log(typeof adress);
// //date
// const today = new Date();
// console.log(today);
// console.log(typeof today);
/*-------------------------------------------------------------------*/

//Data Type Conversion
// let value;

// //Number to String
// value = 5;
// value = String(5);
// //Boolean to string
// value = String(true);
// //Date to string
// value = String(new Date());
// //Array to string
// value = String(['mango', 'Banana']);
// //toString() Method works same as String() method
// value.toString();

// //Strings to numbers
// value = Number('5');
// value = Number(true);
// value = Number(false);
// value = Number(null);
// value  = Number('Hello');

// value = parseInt(100.30);
// value = parseFloat(100.30);
// console.log(value);
// console.log(typeof value);
// //console.log(value.length);
// console.log(value.toFixed());
/*------------------------------------------------------------------*/
//Number and Math Object
// const num1 = 100;
// const num2 = 50;
// let value;
// value = num1 + num2;
// value = num1 - num2;
// value = num1 * num2;
// value = num1 / num2;
// value = num1 % num2;

// //maths object
// value = Math.PI;
// Value = Math.E;
// value = Math.round(2.354);
// value = Math.ceil(2.4);
// value = Math.floor(2.8);
// value = Math.sqrt(25);
// value = Math.abs(-3);
// value = Math.pow(8,2)
// value = Math.min(20.30,4 ,2,-50);
// value = Math.max(20.30,4 ,2,-50);
// value = Math.random();
// value = Math.floor(Math.random() *20 + 1);
// console.log(value);
/*----------------------------------------------------*/
//Strings and String Methods
// const firstName = 'Justus';
// const lastName = 'Keya';
// let value; 
// const age = 63;
// const msg = 'Hello, my name is Justus';
// value = firstName + lastName;

// //concatenation
// value = firstName + ' ' + lastName;
// value = 'My name is ' + firstName + ' and I am ' + age;
// console.log(value);
// //appending
// value = 'Pam';
// value += 'Medecha';
// //Escaping
// value = 'That\'s awesome, I can\'t wait';
// //length
// value = firstName.length;
// //concat
// value = firstName.concat(' ', lastName);
// //change case
// value = firstName.toUpperCase();
// value = firstName.toLowerCase();
// //strings like arrays
// value = firstName[0];
// //indexOf()
// value = firstName.indexOf('t');
// value = firstName.lastIndexOf('u');
// //charAt()
// value = firstName.charAt(2);
// //last character
// value = firstName.charAt(firstName.length - 1);
// //substrings
// value = firstName.substring(0 , 4); 
// value = firstName.slice(0 , 4); 
// value = firstName.slice(-3);
// //split()
// value = msg.split(',');
// //replace()
// value = msg.replace(',');
// //includes()
// value = msg.includes('Hello');
// console.log(value);
/*--------------------------------------------*/
//Template literals
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Nairobi';
// let html;
// //without template strings
// html = '<ul><li>Name: ' + name + '</li><li>Name: ' + age + '</li><li>Name: ' + job + '</li><li>Name: ' + city + '</li></ul>'
// document.body.innerHTML = html;
// //With Template literals
// htnl = `
// <ul>
// <li>Name: ${name}</li>
// <li>Age: ${age}</li>
// <li>Job: ${job}</li>
// <li>City: ${city}</li>
// </ul>
// `;
// document.body.innerHTML = html;
/*-----------------------------------------------*/
//ARRAYS AND ARRAY METHODS
// const numbers = [1, 2, 3, 4, 5];
// const  numbers2 = new Array(1, 2, 3, 4, 5);
// const fruits = ['Apple', 'Banana', 'Mango'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// let value;

// //Array length
// value = numbers.length;
// //check array
// value = Array.isArray(numbers);
// //Get a value from array
// value = numbers[3];
// //Modify array
// numbers[2] = 100;
// //Find index of a value;
// value = numbers.indexOf(100);
// //mutating array
// //Add to end
// numbers.push(250);
// //Add to start
// numbers.unshift(20);
// //Take of from end
// numbers.pop();
// //Take of from start
// numbers.unshift();
// //Splice values
// numbers.splice(1,3);
// //Reverse
// numbers.reverse();
// //concatenate Arrays
// value = numbers.concat(numbers2);
// //Sort array
// value = fruits.sort();
// value = numbers.sort();
// value = numbers.sort(function(a, b){
//       return a - b;
// })
// //find
// function under20(num){
//       return num < 20;
// };
// value = numbers.find(under20);
// console.log(numbers);
// console.log(value);
/*--------------------------*/
// //OBJECT LITERALS
// const person = {
//       fName: 'Justus',
//       lName: 'Keya',
//       age: 24,
//       email: 'justuskeya1@gmail.com',
//       Hobbies:['music', 'Swimming'],
//       address: {
//             city: 'Nairobi',
//             County: 'Nairobi'
//       },
//       getBirthYear: function(){
//             return 2021 - this.age;
//       }
// }
// let value;
// value = person;
// value = person.fName;
// value = person['fName'];
// value = person.age;
// value = person.Hobbies[1];
// value = person.address.city;
// value - person.address['city'];
// value = person.getBirthYear();

// console.log(value);
// //objects in an array
// const people = [
//       {name: 'John', age: 30},
//       {name: 'Juma', age: 40}
// ]
// for(let i = 0; i < people.length; i++){
//       console.log(people[i].name);
// }
/*---------------------------------*/
//DATES AND TIMES;
// let value;
// const today = new Date();
// let birthday = new Date();
// value = today.getMonth();
// value = today.getDate();
// value = today.getDay();
// value = today.getFullYear();
// value = today.getHours();
// value = today.getMinutes();
// value = today.getSeconds();
// value = today.getMilliseconds();
// value = today.getTime();

// birthday.setMonth(5);
// birthday.setDate(12);
// birthday.setFullYear(1997);
// birthday.setHours(3);
// birthday = today.setMinutes(30);
// birthday = today.setSeconds(20);
// birthday = today.setMilliseconds(500);
// birthday = today.setTime(3);
// console.log(birthday);
/*-----------------------------------*/

//IF STATEMENTS AND COMPARISON OPERATORS
//const id = 100
//Equal to value
// if(id == 100){
//       console.log('Correct');
// }else{
//       console.log('Incorrect');
// }
// //Not Equal value
// if(id != 100){
//       console.log('Correct');
// }else{
//       console.log('Incorrect');
// }
// //Equal to value and type
// if(id === 100){
//       console.log('Correct');
// }else{
//       console.log('Incorrect');
// }
// //Not Equal to value and type
// if(id !== 100){
//       console.log('Correct');
// }else{
//       console.log('Incorrect');
// }

//Greater than
// if(id >= 200){
//       console.log('Correct');
// }else{
//       console.log('Incorect');
// }
// //Less than
// if(id >= 200){
//       console.log('Correct');
// }else{
//       console.log('Incorect');
// };

//If eslse
// const color = 'yellow';
// if(color === 'Red'){
//       console.log('color is red')
// }else if(color === 'Blue'){
//       console.log('Color is   Blue')
// }else{
//       console.log('Color is not red or blue');
// }

// //Logical operators
// const name = 'Steve';
// const age = 20;
// //AND &&
// if(age > 0 && age < 12){
//       console.log(`${name} is a child`);
// }else if(age >= 13 && age <= 19){
//       console.log(`${name} is a tenager`);
// }else{
//       console.log(`${name} is an adult`);
// }

// //OR ||
// if(age < 16 || age > 65){
//       console.log(`${name} can not run in race`);
// }else{
//       console.log(`${name} is registred for the race`)
// }

// //Ternary operator
// console.log(id === 100 ? 'Correct' : 'incorrect');
// /*-----------------------------*/
// //SWITCHES
// const color = 'yellow';
// switch(color){
//       case 'red':
//             console.log('The color is red');
//             break;
//       case 'blue':
//             console.log('Color is blue');
//             break;
//       default:
//             console.log('Color is neither red nor blue');    
// }
// let day;
// switch(new Date().getDay()){
//       case 0:
//             day = 'Sunday';
//             break;
//       case 1:
//             day = 'Monday';
//             break;
//       case 2:
//             day = 'Tuesday';
//             break;
//       case 3:
//             day ='Wednesday';
//             break;
//       case 4:
//             day = 'Thursday';
//             break;
//       case 5:
//             day = 'Friday';
//             break;
//       case 6:
//              day = 'Saturday';
//              break;                                   
// }
// console.log(`Today is on ${day}`);
/*---------------------------*/

// //FUNCTIONS
// function greet(){
//       //console.log('Hello');
//       return 'hello';
// }
// console.log(greet());


// function greet(fistName, LastName){
//       return `Hello ${fistName} ${LastName}`;
// }
// console.log(greet('John', 'Doe'));


// function greet(fistName, lastName){
//       if(typeof fistName === 'undefined'){fistName = 'John'};
//       if(typeof lastName === 'undefined'){lastName = 'Doe'};
//       return `Hello ${fistName} ${lastName}`;
// }
// console.log(greet());

// function greet(fistName = 'John', lastName = 'Doe'){
//       return `Hello ${fistName} ${lastName}`;
// }
// console.log(greet());

// //fuction expresions
// const spuare = function(a){
//       return a * a;
// }
// console.log(spuare(8));

//immidiatley invocable fucntion expressions
// (function(){
//       console.log('IIFE Ran')
// })();
/*-----------------------*/

//LOOPS AND ITERATION

//for loop
// for(let i = 0; i < 10; i++){
//       console.log(i);
// }
//Breaking out of the loop
// for(let i = 0; i < 10; i++){
//       if(i === 2){
//             console.log('Two is my favourite number'); 
//             continue;
//       }

//       if(i === 5){
//             console.log('Stop loop')
//             break;
//             continue;
//       }
//       console.log(i); 
// }

//While Loop
// let i = 0;
// while(i < 10 ){
//       console.log(i);
//       i++;
// }

//Do while loop
// let i = 0;
// do{
//       console.log(i);
//       i++
// }
// while(i < 10);

//Looping through arrays
// const cars = ['Ford', 'Honda', 'Toyota', 'Tesla'];
// // for(let i = 0; i < cars.length; i++){
// //       console.log(`I drive a ${cars[i]}`);
// // }
// //array looping methods
// //FOREACH()
// cars.forEach(function(car){
//       console.log(car);
// })
// const fruits = ['Apple', 'Mango', 'Peaches'];
// fruits.forEach(function(fruit){
//       console.log(fruit);
// })

// //MAP();
// // const users = [
// //       {id: 1, name: 'john'},
// //       {id: 2, name: 'Sarah'},
// //       {id: 3, name: 'Peter'}
// // ]
// // const ids = users.map(function(user){
// //       return user.id;
// // });
// // console.log(ids);

// //FORIN()
// const user = {
//       firtsName: 'John',
//       lastName: 'Doe',
//       age: 30
// }
// for(let a in user)[
//       console.log(`${a} : ${user[a]}`)
// ];
/*------------------------------*/

//WINDOW METHODS
//console.log(123)

//ALLERT()
//window.alert('Hello');

//PROMPT()
// const input = prompt();
// alert(input);

//CONFIRM
// if(confirm('Are you sure')){
//       console.log('Yes');
// }

//Outer Height and Width
//let value;
// value = window.outerHeight;
// value = window.outerWidth;

// //Inner Height and width
// value = window.innerHeight;
// value = window.innerWidth;
// console.log(value);

//SCROLL POINTS
// value = window.scrollY;
// value = window.scrollX;


//LOCATION OBJECT
// value = window.location;
// value = window.location.href;
// value = window.location.hostname;
// value = window.location.port;
// //window.location.href = 'https://www.google.com';
// //window.location.reload();

// //HISTORY OBJECT
// //window.history.go(-1);
// //value = window.history.length;

// //NAVIGATOR OBJECT
// value = window.navigator;
// value = window.navigator.appName;
// value = window.navigator.appVersion;
// value  = window.navigator.userAgent;
// value = window.navigator.platform;
//console.log(value);

//Global scope
// var a = 1;
// let b = 2;
// const c = 3;
// //function scope
// // function test(){
// //       var a = 1;
// //       let b = 2;
// //       const c = 3;
// //       console.log('Fuction scope', a, b, c);
// // };
// // test();

// //Block level scope
// if(true){
//       var a = 1;
//       let b = 2;
//       const c = 3;
//       console.log('Block level scope', a, b, c);
// }
/*---------------------------------*/

//DOCUMENT OBJECT MODEL (dom)
// let value;
// value = document;
// value = document.all;
// value - document.all.length;
// value = document.doctype;
// value = document.URL;

// value = document.forms;
// value = document.forms[0];
// value = document.forms.id;

// value = document.links;

// value = document.images;

// value = document.scripts;

// console.log(value);

// //DOM SELECTORS;
// //document.getElementById()
// console.log(document.getElementById('task-title'));

// //get things from element
// document.getElementById('task-title').id;

// //change styles
// document.getElementById('task-title').style.background = '#ddd';
// document.getElementById('task-title').style.color = 'yellow';

// //change content
// document.getElementById('task-title').textContent = 'Task list';
// document.getElementById('task-title').innerText = 'Task list';
// document.getElementById('task-title').innerHTML = '<span> Manager</span>';


// //document.querySelector();
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// document.querySelector('li').style.color = 'yellow';
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'red';


//Multiple Selectors
// //document.getElementsByClassName();
// let items = document.getElementsByClassName('collection-item');
// console.log(items);
// items[0].style.color = 'red';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// //document.getElementsByTagName();
// let li = document.getElementsByTagName('li');
// //convert html collection into arrray
// li = Array.from(li);
// li.reverse();
// console.log(li);

//document.querySelectorAll();
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//       item.textContent = `${index}: Hello`;
// })
// const odds = document.querySelectorAll('li:nth-child(odd)');
// const evens = document.querySelectorAll('li:nth-child(even)');

// odds.forEach(function(odd){
//       odd.style.background = '#ccc';
// })
// evens.forEach(function(even){
//       even.style.background = '#ddd';
// })

// //Above same as bellow
// for(let i = 0; i < odds.length; i++){
//       odds[i].style.color = 'Red';
// }
// for(let i = 0; i < evens.length; i++){
//       evens[i].style.color = 'green';
// }

// console.log(items);


//TRAVERSING THE DOM
// let value;
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');
// value = listItem;

// //Get child nodes
// value = list.childNodes;

// //Get children nodes
// value = list.children;
// value = list.children[0];

// //Get children of children
// value = list.children[3].children;

// //first child
// value = list.firstChild;

// //firstElementChild
// value = list.firstElementChild;
// //value.id = 'collection';//adding id
// //value.className = 'first-item';//adding a class

// //lastChild
// value = list.lastChild;

// //lastElementChild
// value = list.lastElementChild;

// //count child elements
// value = list.childElementCount;


// //Get parentNode
// value = listItem.parentNode;

// //ParentElementNode
// value = listItem.parentElement;

// //Parents of parents
// value = listItem.parentElement.parentElement;

// //Get next sibling
// value = listItem.nextSibling;
// value = listItem.nextElementSibling;

// //Previous sibling
// value = listItem.previousSibling;
// value = listItem.previousElementSibling;
// console.log(value);

//CREATING ELEMENTS
// const li = document.createElement('li');

// //add class
// li.className = 'collection-item';

// //add id
// li.id = 'new-item';

// //add attribute
// li.setAttribute('titile', 'New item');

// //create textnode and append
// const text = document.createTextNode('Hello World');
// li.appendChild(text);

// //create new linkelement
// const link = document.createElement('a');
// //add class
// link.className = 'delete-item secondary-content';
// //add icon
// link.innerHTML = '<i class = "fa fa-remove"></i>';
// //Append link to li
// li.appendChild(link);


// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);



//REMOVING AND REPLACING ELEMENTS
//REPLACE ELEMENTS

//create element
// const newHeading = document.createElement('h2');

// //add id
// newHeading.id = 'task-title';
// //create textnode
// newHeading.appendChild(document.createTextNode('Task list'));
// //get old heading
// const oldHeading = document.getElementById('task-title');
// //Get parent
// const cardAction = document.querySelector('.card-action');
// //replace
// cardAction.replaceChild(newHeading, oldHeading);


// //REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //remove list items
// lis[0].remove();
// //remove by child
// list.removeChild(lis[2]);

// //CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let value;
// value = link.className;
// value = link.classList;
// value = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');

// //attributes
// value = link.getAttribute('href');
// value = link.setAttribute('href', 'http://google.com');
// value = link.hasAttribute('href');
// link.setAttribute('title', 'Google');
// link.removeAttribute('title');
// console.log(value);



//EVENT LISTENERS
// const clearBtn = document.querySelector('.clear-tasks');
// clearBtn.addEventListener('click', function(e){
//       e.preventDefault();
//       console.log('Hello World');
// });

//  const clearBtn = document.querySelector('.clear-tasks');
//  clearBtn.addEventListener('click', onClick);

//  function onClick(e){
//        e.preventDefault();
//        console.log('Clicked');

//        let value;
//        value = e;

//        //Event target element
//        value = e.target;
//        value = e.target.className;
//        value = e.target.classList;

//        //Event type
//        value = e.type;

//        //timestapms
//        value = e.timeStamp;

//        //Coordinates relative to the window
//        value = e.clientY;
//        value = e.clientX;

//         //Coordinates relative to the element
//         value = e.offsetY;
//         value = e.offsetX;
//        console.log(value);
// }


//TYPES OF MOUSE EVENTS
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('click', runEvent);
//doubleclick
//clearBtn.addEventListener('dblclick', runEvent);
//mousedown
//clearBtn.addEventListener('mousedown', runEvent);
//mouseup
//clearBtn.addEventListener('mouseup', runEvent);
//mouseenter
//clearBtn.addEventListener('mouseenter', runEvent);
//mouseleave
//clearBtn.addEventListener('mouseleave', runEvent);
//mouseover
//clearBtn.addEventListener('mouseover', runEvent);
//mouseout
//clearBtn.addEventListener('mouseout', runEvent);
//mousemove
// card.addEventListener('mousemove', runEvent);

// function runEvent(e){
//       console.log(`Event Type: ${e.type}`);
//       heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//       card.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 200 )`;
// }


//KEYBOARD AND INPUT EVENTS
// const form = document.querySelector('form');
// const task = document.getElementById('task');
// const heading = document.querySelector('h5');


//form.addEventListener('submit', runEvent);
//keydown
//task.addEventListener('keydown',runEvent);
//keyup
//task.addEventListener('keyup',runEvent);
//keypress
//task.addEventListener('keypress',runEvent);
//focus
//task.addEventListener('focus',runEvent);
//blur
//task.addEventListener('blur',runEvent);
//cut
//task.addEventListener('cut',runEvent);
//paste
//task.addEventListener('paste',runEvent);
//input
//task.addEventListener('input',runEvent);
//change
// task.addEventListener('change',runEvent);

// function runEvent(e){
//       //prevent default formsubmition
//       // e.preventDefault();
      
//       // //Get input value
//       // console.log(task.value);

//       // //clear the input
//       // task.value = '';
//       console.log(`Event Type: ${e.type}`)
//       console.log(e.target.value);
//       //heading.innerText = e.target.value

// }


//EVENT BUBLING AND DELEGATION

//Event Bubling
// document.querySelector('.card-title').addEventListener('click', function(){
//       console.log('Card title');
// })
// document.querySelector('.card-content').addEventListener('click', function(){
//       console.log('Card content');
// })
// document.querySelector('.card').addEventListener('click', function(){
//       console.log('Card ');
// })
// document.querySelector('.col').addEventListener('click', function(){
//       console.log('Col');
// })

//Event delegation
// //const deleted = document.querySelector('.delete-item').addEventListener('click', deleteItem);
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//       // if(e.target.parentElement.className === 'delete-item secondary-content'){
//       //       console.log('Delete item');
//       // }
//       if(e.target.parentElement.classList.contains('delete-item')){
//             console.log('Delete item');
//             e.target.parentElement.parentElement.remove();
//       }
// }


//LOCAL AND SESSION STORAGE

//set local storage
// localStorage.setItem('name', 'John');
// //set session storage
// sessionStorage.setItem('name', 'Beth');

//remove from storage
// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// console.log(name);

// //clear from storage
// localStorage.clear();

// document.querySelector('form').addEventListener('submit', function(e){
//       e.preventDefault();

//       const task = document.getElementById('task').value
//       let tasks;
//       if(localStorage.getItem('tasks') === null){
//             tasks = [];
//       }else{
//            tasks = JSON.parse(localStorage.getItem('tasks')); 
//       }
//       tasks.push(task);
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       alert('Task saved');
// })

/*----------------------------------------*/

//PROJECTS

//(01)


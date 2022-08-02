var items=document.getElementsByClassName('list-group-item');
/*console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor='yellow';


for(var i=0; i<items.length; i++){
  items[i].style.backgroundColor='#f4f4f4';
}

items[2].style.backgroundColor='green';

for(var i=0; i<items.length; i++){
  items[i].style.fontWeight='bold';
}
*/

// get element by tag name
/*var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[1].textContent = 'Hello 2';
li[1].style.fontWeight= 'bold';
li[1].style.background = '#f4f4f4';

for(var i=0; i<li.length; i++){
li[i].style.fontWeight='bold';
}*/

//li[4].style.color='red';
// QuerySelector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';


var submit = document.querySelector('input[type="submit"]');
submit.value='SEND';

var item= document.querySelector('.list-group-item');
item.style.color='red';

var lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color='blue';





//Querey selector all

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';



var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.background='green';

var thirdItem = document.querySelector
('.list-group-item:nth-child(3)');
thirdItem.style.visibility = "hidden";

var second=document.querySelectorAll(".list-group-item");
second[1].style.color='green';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
  odd[i].style.background='green';
  even[i].style.background='#ccc';

}
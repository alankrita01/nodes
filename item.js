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
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[1].textContent = 'Hello 2';
li[1].style.fontWeight= 'bold';
li[1].style.background = '#f4f4f4';

for(var i=0; i<li.length; i++){
li[i].style.fontWeight='bold';
}

li[4].style.color='red';
// QuerySelector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';



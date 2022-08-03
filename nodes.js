//parent

var itemList= document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.background = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement

console.log(itemList.parentElement);
itemList.parentElement.style.background = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNodes

console.log(itemList.childNodes);

//children

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.background='yellow';


//FirstChild
console.log(itemList.firstchild);

//FirstElementChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//LastChild
console.log(itemList.lastChild);

//LastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextelementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// create Element

//create a div

var newDiv = document.createElement('div');

//add class
newDiv.className= 'hello';

//add id
newDiv.id='hello 1';

//ADD attribute
newDiv.setAttribute('title','Hello Div');

//create text node
var newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');
newDiv.style.fontSize= '30px';
newDiv.style.color= 'black';
container.insertBefore(newDiv,h1);


var items= document.getElementById('items');
items.innerHTML=newDivText+items.innerHTML;


console.log(newDiv);








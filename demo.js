//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.textContent='Good-Bye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//var li=document.getElementById("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[0].style.fontWeight='bold';
//items[1].style.fontWeight='bold';
//items[2].style.fontWeight='bold';
//items[3].style.fontWeight='bold';
//items[2].style.backgroundColor='Yellow';
//headerTitle.style.borderBottom='solid 3px #000';

//for(var i=0;i<items.length;i++){
   // items[i].style.backgroundColor='#f4f4f4';

//}
//GETELEMENTBYTAGNAME

//var li=document.getElementById("list-group-item");
//console.log(items);
//console.log(items[1]);
//li[1].textContent='Hello 2';
//li[0].style.fontWeight='bold';
//li[1].style.fontWeight='bold';
//li[2].style.fontWeight='bold';
//li[3].style.fontWeight='bold';
//li[2].style.backgroundColor='Yellow';

//for(var i=0;i<items.length;i++){
   // li[i].style.backgroundColor='#f4f4f4';

//}

//GQUERYSELECTOR//

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';
 //var input=document.querySelector('input');
 //input.value='Hello World';

 //var submit=document.querySelector('input[type="submit"]');
 //submit.value="SEND";

 //var seconditem=document.querySelector('.list-group-item');
 //seconditem.style.color='green';

 //var titles=document.querySelectorAll('.title');
  
 //console.log(titles);
 //titles[0].textContent='Hello';

 //var odd=document.querySelector('li-nth-child(odd)');
 
 //const lists=document.querySelectorAll('.list-group-item');

 //for(var i=0;i<lists.length;i++){
   
   // lists[3].style.visibility='none';
 //}

 //console.log(lists);

 //var item=document.querySelector('.list-group-item');
 //item.style.color='red';



 //var lastitem=document.querySelector('.list-group-item:last-child');
 //lastitem.style.color='blue';

 //var seconditem=document.querySelector('.list-group-item:nth-child(2)');
 //seconditem.style.visibility='hidden';

 //QUERYSELECTALL

 //var titles=document.querySelectorAll('.title');

 //console.log(titles);
// titles[0].textContent='Hello';

 //var odd=document.querySelectorAll('li:nth-child(odd)');
 //var even=document.querySelectorAll('li:nth-child(even)');

 //for(var i=0; i<odd.length; i++){
    //odd[i].style.backgroundColor='#f4f4f4';
    //even[i].style.backgroundColor='#ccc';
 //}

 //PARENTNODE
 var itemList =document.querySelector('#items');
//parentNode
 //console.log(itemList.parentNode);
 //itemList.parentNode.style.backgroundColor="#f4f4f4";
 //console.log(itemList.parentNode.parentNode);

 //PARENTELEMENT
 //console.log(itemList.parentElement);
 //itemList.parentElement.style.backgroundColor="#f4f4f4";
 //console.log(itemList.parentElement.parentElement);

 //CHILDNODE

 //console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//LASTCHILD
//console.log(itemList.lastChild);
//LASTELEMENTCHILD
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.backgroundColor='red';

//nextsibling
//console.log(itemList.nextSilbling);

////nextELEMENTSibling

//console.log(itemList.nextElementSilbling);

//PREVIOUSIBLING
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
 
//Create div

var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','Hello Div');

//CREATE TEXT NODE
var newdivText=document.createTextNode('Hello World');
console.log(newdiv);








// const title = document.getElementById('title');
// title.innerText = 'my JS power';
// title.style.color = 'red';
// console.log(title.innerText);



// const title2 = document.querySelector('p');
// title2.textContent = ' I am done by selector';
// console.log(title2)

// const item = document.getElementsByClassName('li-items');
// const myArr= Array.from(item);
// console.log(myArr);


// const item = document.getElementsByClassName('li-items');
// for(let index = 0; index < item.length; index++){
//       const element = item[index];
//       element.style.color = 'red';
//       element.innerText = 'amr khushi';
// }
// console.log( typeof item)


// const items2 = document.getElementsByTagName('li');
// for (const iteration of items2){
//       console.log(iteration);
//       iteration.style.backgroundColor = 'yellow';
// }

// const items3 = document.querySelectorAll('li');
// console.log(items3)

// const bodyName = document.querySelector('body');
// console.log(bodyName.children);


// const item= document.querySelector('.li-items');
// console.log(item.previousSibling);

// const ul = document.getElementById('list-container');
// console.log(ul.nextSibling);

//manupulate the dom
// const ul = document.querySelector('ul');
// ul.innerHTML = '<p>hello</p>';

// document.querySelector('h2').removeAttribute('class')
// document.querySelector('h2').setAttribute('class','first-heading');
//  const att = document.querySelector('h2').getAttribute('id');
//  console.log(att);


// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.innerText = 'added by js';
// ul.appendChild(li);

// const ul1 = document.querySelector('h2');
// const h2 = document.createElement('h2');
// h2.innerText = 'added by js';
// ul1.appendChild(h2);

// add class name || classList[odd(),remove()]

// const h2 = document.querySelector('h2');
// console.log(h2);
// h2.classList.add('first','second');
// h2.classList.remove('second');

const ul = document.querySelector('ul');//age amra ul take dhorchi
const second = document.getElementById('second');//j jinistate amra notun element take dite chai oitake id diye dorchi

const li = document.createElement('li');//li create korchi
li.innerText = 'hello';//vhitorer textt ta likhchi
ul.insertBefore(li , second);//vhitore diyechi
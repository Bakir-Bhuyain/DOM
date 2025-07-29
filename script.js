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
const ul = document.querySelector('ul');
ul.innerHTML = '<p>hello</p>';
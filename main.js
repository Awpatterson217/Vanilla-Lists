"use strict"

// divs
let app      = document.querySelector('#app');
let lists    = document.querySelector('#lists');
// buttons
let newList   = document.querySelector('#newList');
let listName  = document.querySelector('#listName');
let listCount = 0;

let makeListId = function(){
  return 'list' + listCount++;
}

let addList = function(){
  let div;
  let title;
  let titleText;
  let selected;
  let list;
  let listId;
  let listBody;
  let listContainer;
  let input;
  let inputId;
  let addButton;
  let addbuttonText;
  let closeButton;
  let closeButtonText;
  let removeButton;
  let removeButtonText;

  let itemCount = 0;
  
  div           = document.createElement('div');
  input         = document.createElement('input');
  addButton     = document.createElement('button');
  closeButton   = document.createElement('button');
  removeButton  = document.createElement('button');
  title         = document.createElement('h1');
  listContainer = document.createElement('div');
  listBody      = document.createElement('div');
  list          = document.createElement('ul');

  input.setAttribute('type', 'text');

  titleText        = document.createTextNode(listName.value);
  addbuttonText    = document.createTextNode(' + ');
  removeButtonText = document.createTextNode('Remove');
  closeButtonText  = document.createTextNode('Delete');

  listId  = makeListId();
  inputId = listId + 'input';

  div.id   = listId;
  input.id = inputId;

  div.className           = 'listDiv';
  list.className          = 'list';
  title.className         = 'listTitle';
  listContainer.className = 'listContainer';
  listBody.className      = 'listBody';
  closeButton.className   = 'closeButton';
  removeButton.className  = 'removeButton';

  title.appendChild(titleText);
  addButton.appendChild(addbuttonText);
  removeButton.appendChild(removeButtonText);
  closeButton.appendChild(closeButtonText);
  listContainer.appendChild(list);
  listBody.appendChild(title);
  listBody.appendChild(input);
  listBody.appendChild(addButton);
  listBody.appendChild(listContainer);
  listBody.appendChild(removeButton);
  div.appendChild(closeButton);
  div.appendChild(listBody);
  lists.appendChild(div);
  
  listName.value = '';
  
  // Events
  addButton.addEventListener('click', function(){
    return addItem();
  });
  closeButton.addEventListener('click', function(){
    return div.parentNode.removeChild(div);
  });  
  removeButton.addEventListener('click', function(){
    return removeItems();
  });
  input.addEventListener('keyup', function(e){
    e.preventDefault();
    if(e.keyCode === 13)
      return addButton.click();
  });

  let addItem = function(){    
    let item;
    let itemText;

    itemCount++;

    item     = document.createElement('li');
    itemText = document.createTextNode(input.value);

    item.appendChild(itemText);
    list.appendChild(item);

    item.addEventListener('click', function(e){
      return selectItem(e.target);
    });

    input.value = '';

    return;
  }
  let removeItems = function(){
    let removedCount = 0;
    for(let counter = 0; counter < itemCount; counter++){
      if(list.childNodes[counter].classList.contains('selected')){
        list.removeChild(list.childNodes[counter]);
        counter--;
        removedCount++;
      }
    }
    itemCount = itemCount - removedCount;
    return;
  }
  let selectItem = function(item){
    if(!item.classList.contains('selected'))
      return item.className = 'selected';
    if(item.classList.contains('selected'))
      return item.classList.remove('selected');
  }
  return;
}

// Events
newList.addEventListener('click', function(){
  return addList();
});
// If user hits enter
listName.addEventListener('keyup', function(e){
  e.preventDefault();
  if(e.keyCode === 13)
    return newList.click();
  });
  
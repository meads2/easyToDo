'use strict';

// -------------------------------
//      Submit Button Listener
// -------------------------------
var submit = document.querySelector('#submit-btn');
submit.addEventListener('click', function(e){
  // Store Input
  var input = document.querySelector('#todo-input');
  // Call addTodo()
  var target = '#the-list';
  // Make sure no empty string
  if(input.value.length > 0 ){
    addTodo(input.value, target);
    // Log out info
    console.info('Button Pressed');
    // Clears input after value added
    input.value = '';
  }
  else{
    alert('Make sure you typed something...');
  }
});


// -------------------------------
//            addTodo f()
/* -------------------------------
Append a given todo item to a target
todo list

Arguments:
todo - a STRING value of a given todo item
  i.e - 'Get milk', 'Pick up food'
target - a STRING value of a CSS selector
  i.e - '.list', '#the-list', 'ul'

*/
function addTodo(todo, target){
  // Declare Variables
  var todoText = document.createTextNode(todo),
      todoList = document.querySelector(target),
      li = document.createElement('li'),
      icon = document.createElement('i'),
      trash = document.createElement('i');

  // Edit icon
  icon.classList.add('fa');
  icon.classList.add('fa-check');

  trash.classList.add('fa');
  trash.classList.add('fa-trash');

  // Adds text to todo item
  li.appendChild(icon);
  li.appendChild(todoText);
  li.appendChild(trash);
  li.classList.add('todo');
  // Adds todo item to todo list
  todoList.appendChild(li);
  // Log completion
  console.info('Item Added!');
}

// -------------------------------
//            isComplete f()
/* -------------------------------
Toggles a check mark based on state
of todo item: completed or not

Arguments:
event - the event object passed in from listener that is parsed
  i.e - e.target

*/
function isComplete(e){
  	if(e.target.classList == "todo active") {
      e.target.className = 'todo';
  		console.log("item already completed");
  	}
    else{
      e.target.className = 'todo active';
      console.log('now complete');
    }
}

// -------------------------------
//            deleteTodo f()
/* -------------------------------
Takes 1 argument that will delete a
todo item

Argument:
event - the event object passed in from listener that is parsed
  i.e - e.target

*/
function deleteTodo(e){
    if(e.target.classList == 'fa fa-trash'){
      console.log('Item Removed...');
      e.target.parentNode.remove();
    }
}

// -------------------------------
//       Todo Item Listener
// -------------------------------
/*
Listens for changes to child element tod items
based on state and child element clicked
*/
var list = document.querySelector('#the-list');
list.addEventListener('click', function(e){
  deleteTodo(e);
  isComplete(e);
});

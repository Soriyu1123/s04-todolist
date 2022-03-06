// the creation of variable for the lists



var form, todoList, button;
// 1.1 form DOM
form = document.querySelector('form');
// 1.2 to do list
todoList = document.querySelector('ul');
// 1.3 button for to do list in DOM
button = document.getElementById('clear');


//2nd creating an input form element using DOM
var input = document.getElementById('user-todo')
// 2.1 adding an event listener to the form field
form.addEventListener('submit', function(event){
    event.preventDefault();

    // 2.2 adding function todo maker : this is to carry out the inputted value
    todoMaker(input.value);
    input.value = '';
})


// 3rd creating a function for the list item
var todoMaker = function(text){
    // 3.1 this is the creation of a new list item inside ul
    var todo = document.createElement('li');
    // 3.2 this is the inputted value inside the li
    todo.textContent = text;

    // 3.3 append to add a sample inputted list
    todoList.appendChild(todo);
    // 3.4 removing bulleted format 

}

// 4th creation of a clear button
// 4.1 creation of an event listener
button.addEventListener('click', function(){
    while (todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
})

//Button disable
function btn() {
     if(document.querySelector("ul").value==="") { 
            document.getElementById('clear').disabled = true; 
        } else { 
            document.getElementById('clear').disabled = false;
        }
};




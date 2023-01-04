const sect = document.querySelector("section"); 
const input = document.querySelector("input"); 
const startList = document.querySelector("ul");
const dragboxes = document.querySelectorAll(".dragBox");

// allow entry of data via "Enter" and check to make sure string is not empty
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        //  event.preventDefault();
        if(input.value === ""){
            alert("Not doing anything is a valid goal. But you still need to enter a string!");
        }
        else{
            enterInput();
            clearInputField()
        }
    }
});

// create todo object
function createTodoObject(title, description, dueDate, priority){
  return {
    title : title,
    description : description,
    dueDate : dueDate,
    priority : priority,

  }
}

const workout = createTodoObject("overheadpress", "Work on overhead strength", "01.03.2023", 3)

// create list object
function createListObject(listTitle){
  return {
    listTitle : listTitle, 
    todoArray : [{arow : "milk", carrot : "orange"},workout,5],
  }
}

const thursdayList = createListObject("Thursday")




// add object to DOM
function enterInput(){
  const listItem = document.createElement("li");
  let inputText = document.querySelector("input").value;

  //set button to input text, add Attributes, add child to startList
  listItem.textContent = inputText;
  listItem.setAttribute('class', 'highlight');
  listItem.setAttribute('draggable', 'true');
  startList.appendChild(listItem);

  //add eventlisteners for various events
  listItem.addEventListener('click', (e) => {
    if(e.ctrlKey){
      listItem.classList.toggle('highlight2');
    }
    
  });
  listItem.addEventListener('dragstart', (e) => {
    listItem.classList.add('dragging');
  });
  listItem.addEventListener('dragend', (e) => {
    listItem.classList.remove('dragging');
  });
}

function clearInputField(){
    let inputContent = document.querySelector("input");
    inputContent.value = "";
}

dragboxes.forEach(dragbox => {
  dragbox.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(dragbox, e.clientY)
    const draggedItem = document.querySelector(".dragging");
    if(afterElement == null){
      dragbox.appendChild(draggedItem);
    } else{
      dragbox.insertBefore(draggedItem, afterElement)
    }
    dragbox.classList.add("receiveDrag");
    
  });
  dragbox.addEventListener("dragleave", () => {
    dragbox.classList.remove("receiveDrag");
  });
  dragbox.addEventListener("dragend", () => {
    dragbox.classList.remove("receiveDrag");
  });
})

// allow user to place li at exact location in ul
function getDragAfterElement (dragbox, y){
  const draggableElements = [...dragbox.querySelectorAll(".highlight:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top -box.height / 2
    if(offset < 0 && offset > closest.offset){
      return {offset :offset, element: child}
    }
    else{
      return closest 
    }
  }, {offset: Number.NEGATIVE_INFINITY }).element
}

// remove Node item on double click
document.body.addEventListener("dblclick", (e) => {
  if(e.target.nodeName === "LI"){
    console.log(e.target)
    e.target.remove();
  } 
})

// this function is currently not used. I plan on using it later
function listToArray(n){
  let nodeList = document.querySelectorAll(`#dragBox${CSS.escape(n)}>li`);
  console.log(nodeList);

  let returnString = "";
  nodeList.forEach(nodes => {
    returnString += nodes.innerHTML + ", ";
  });
  alert("Deine Todos sind " + returnString );
}

const footer = document.querySelector(".footer")
const listButton = document.querySelector("button")
let listCounter = 3

listButton.addEventListener("click", e => {
  let newList = document.createElement("ul")
  newList.setAttribute('draggable', 'true');
  newList.addEventListener('dragstart', (e) => {
    newList.classList.add('dragging');
  });
  newList.addEventListener('dragend', (e) => {
    newList.classList.remove('dragging');
  });
  newList.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(dragbox, e.clientY)
    const draggedItem = document.querySelector(".dragging");
    if(afterElement == null){
      newList.appendChild(draggedItem);
    } else{
      newList.insertBefore(draggedItem, afterElement)
    }
    newList.classList.add("receiveDrag");
  });



  listCounter++
  let dragId = "dragBox"+listCounter
  newList.classList.add("dragBox")
  newList.setAttribute("id", `${dragId}`)
  footer.appendChild(newList) 
})

/* 
Todos: 

add eventlisteners for drag and drop on new lists!

create form to input all todo information

handle adding todo object to list object (push to list.todoArray) on dragdrop
drag and drop does not work on mobile!

maybe enable a different layer per project
accessable via menu (similiar to restaurant project)


CSS
  add box shadows
  adjust width of lists
  work on usability of entering and creating new list (currently not intuitive)
*/
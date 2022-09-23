const sect = document.querySelector("section"); 
const input = document.querySelector("input"); 
const startList = document.querySelector("ul");
const dragboxes = document.querySelectorAll(".dragBox");

// allow entry of data via "Enter" and check to make sure string is not empty
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        //  event.preventDefault();
        if(input.value === ""){
            alert("Not doing anything is a valid goal. But you still need to enter a valid string!");
        }
        else{
            enterInput();
        }
    }
});

function enterInput(){
  const listItem = document.createElement("li");
  let inputText = document.querySelector("input").value;

  //set button to input text, add Attributes, add child to startList
  listItem.textContent = inputText;
  listItem.setAttribute('class', 'highlight');
  listItem.setAttribute('draggable', 'true');
  startList.appendChild(listItem);

  //clear input field
  let inputContent = document.querySelector("input");
  inputContent.value = "";

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
listButton.addEventListener("click", e => {
  let newList = document.createElement("ul")
  newList.classList.add("dragBox")
  newList.setAttribute("id", "dragBox4")
  footer.appendChild(newList) 
})


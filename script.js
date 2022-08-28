const sect = document.querySelector("section"); 
const input = document.querySelector("input"); 
const list = document.querySelector("ul");


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

  //set button to input text, add Attributes, add child to list
  listItem.textContent = inputText;
  listItem.setAttribute('class', 'highlight');
  listItem.setAttribute('draggable', 'true');
  list.appendChild(listItem);

  //clear input field
  let inputContent = document.querySelector("input");
  inputContent.value = "";

  //add eventlisteners for various events
  listItem.addEventListener('dblclick', (e) => {
      list.removeChild(listItem);
  });
  listItem.addEventListener('click', (e) => {
    listItem.classList.toggle('highlight2');
  });
  listItem.addEventListener('dragstart', (e) => {
    listItem.classList.add('dragging');
  });
  listItem.addEventListener('dragend', (e) => {
    listItem.classList.remove('dragging');
  });

}

const dragboxes = document.querySelectorAll(".dragBox");

dragboxes.forEach(dragbox => {
  dragbox.addEventListener("dragover", e => {
    e.preventDefault();
    dragbox.classList.add("receiveDrag");
    const draggedItem = document.querySelector(".dragging");
    dragbox.appendChild(draggedItem);
  });
  dragbox.addEventListener("dragleave", () => {
    dragbox.classList.remove("receiveDrag");
  });
  dragbox.addEventListener("dragend", () => {
    dragbox.classList.remove("receiveDrag");
  });
})


function listToArray(n){

  let nodeList = document.querySelectorAll(`#dragBox${CSS.escape(n)}>li`);
  console.log(nodeList);

  let returnString = "";
  nodeList.forEach(nodes => {
    returnString += nodes.innerHTML + ", ";
  });
  alert("Deine Todos sind " + returnString );
}



// allow user to place li at exact location in ul
// currently the new li is placed at the end of the list





/* use toggle to switch CSS classes
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

use nodelist to access different list items?

*/
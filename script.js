const sect = document.querySelector("section"); 
const input = document.querySelector("input"); 
const list = document.querySelector("ul");
const newList = document.querySelector("#newList");

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
newList.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      //  event.preventDefault();
      if(newList.value === ""){
          alert("Enter the name of your new List!");
      }
      else{
          createNewList();
      }
  }
});

/*
function enterInput(){
  const button = document.createElement("button");
  let inputText = document.querySelector("input").value;

  //set button to input text, add class and id, append to doc
  button.textContent = inputText;
  button.setAttribute('class', 'highlight');
  sect.appendChild(button);

  //clear input field
  let inputContent = document.querySelector("input");
  inputContent.value = "";

  button.addEventListener('click', () => {
    sect.removeChild(button);
  });
}
*/
function enterInput(){
  const listItem = document.createElement("li");
  let inputText = document.querySelector("input").value;

  //set button to input text, add class and id, append to doc
  listItem.textContent = inputText;
  listItem.setAttribute('class', 'highlight');
  listItem.setAttribute('draggable', 'true');
  list.appendChild(listItem);

  //clear input field
  let inputContent = document.querySelector("input");
  inputContent.value = "";

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
/*
function createNewList(){
  const newUl = document.createElement("ul");
  const varLists = document.querySelector(".varLists");

  const listItem = document.createElement("li");
  listItem.textContent = document.querySelector("#newList").value;
  newUl.appendChild(listItem);
  
  
  varLists.appendChild(newUl);
}
*/

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
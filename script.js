const sect = document.querySelector("section"); 
const buttonOne = document.querySelector("button");
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
  const button = document.createElement("button");
  let inputText = document.querySelector("input").value;

  const listItem = document.createElement("li") 
  let listValue = document.querySelector("input").value;

  //set button to input text, add class and id, append to doc
  button.textContent = inputText;
  button.setAttribute('class', 'highlight');
  sect.appendChild(button);

  //clear input field
  let inputContent = document.querySelector("input");
  inputContent.value = "";

}

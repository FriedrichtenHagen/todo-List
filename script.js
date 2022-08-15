const sect = document.querySelector("section"); 
const buttonOne = document.querySelector("button");
const input = document.querySelector("input"); 

// buttonOne.addEventListener("click", buttonClick);

input.addEventListener("keypress", function(event) {
 if (event.key === "Enter") {
   //  event.preventDefault();
     // document.getElementById("myBtn").click();
     buttonClick();
  }
});

let buttonCounter = 0;

function buttonClick(){
  const button = document.createElement("button");
  let inputText = document.querySelector("input").value;

  //set button to input text, add class and id, append to doc
  button.textContent = inputText;
  button.setAttribute('class', 'highlight');
  button.setAttribute('id', buttonCounter);
  sect.appendChild(button);

  //clear input field
  let inputContent = document.querySelector("input");
  inputContent.value = "";
  buttonCounter++;
  button.addEventListener("click", removeButton);
 
}



function removeButton(){
  alert("yo mr white");
  //sect.removeChild(button);
}
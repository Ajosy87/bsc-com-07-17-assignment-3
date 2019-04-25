var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function inputLength(){
	return input.value.length;
} 
 alert('Make sure to write your work in their order of occurrences');
function listLength(){
	return item.length;
}
 
function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); 
	input.value = ""; 

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}
	confirm('Are you sure you have filled in the right work?');
	li.addEventListener("click",crossOut);
	
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON
	


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	};
	//END ADD CLASS DELETE
	
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}

	
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	}  	
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



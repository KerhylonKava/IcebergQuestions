function updateQuestion() {
    //and comments here are what I'm used to! just a normal "//"
    var level = document.getElementById("level").value; // Get input
    var questionDisplay = document.getElementById("questionDisplay"); // Find the element to display the ghost's name
    
    // Check if the user entered something
    if (level == "surface") {
        questionDisplay.textContent = "surface question here";
    } 
    else if (level == "mid") {
        questionDisplay.textContent = "mid here";
    }
    else if (level == "deep") {
        questionDisplay.textContent = "deep here";
    }
}
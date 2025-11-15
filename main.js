function updateQuestion() {
    let surfaceQuestions = ["qs one here", 
        "qs two here",
        "qs three here",
        "and so on s"
    ];

    let midQuestions = ["qm one here", 
        "qm two here",
        "qm three here",
        "and so on m"
    ];

    let deepQuestions = ["qd one here", 
        "qd two here",
        "qd three here",
        "and so ond"
    ];

    var level = document.getElementById("level").value;
    var questionDisplay = document.getElementById("questionDisplay");

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
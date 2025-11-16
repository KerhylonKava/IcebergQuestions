function updateQuestion() {
    const surfaceQuestions = ["qs one here", 
        "qs two here",
        "qs three here",
        "and so on s"
    ];

    const midQuestions = ["qm one here", 
        "qm two here",
        "qm three here",
        "and so on m"
    ];

    const deepQuestions = ["qd one here", 
        "qd two here",
        "qd three here",
        "and so ond"
    ];
    
    var level = document.getElementById("level").value;
    var questionDisplay = document.getElementById("questionDisplay");

    if (level == "surface") {
        const random = Math.floor(Math.random()*surfaceQuestions.length);
        questionDisplay.textContent = surfaceQuestions[random];
    } 
    else if (level == "mid") {
        const random = Math.floor(Math.random()*midQuestions.length);
        questionDisplay.textContent = midQuestions[random];
    }
    else if (level == "deep") {
        const random = Math.floor(Math.random()*deepQuestions.length);
        questionDisplay.textContent = deepQuestions[random];
    }
}
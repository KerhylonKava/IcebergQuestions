function updateQuestion() {
    const surfaceQuestions = [ 
        "What's your favorite color?",
"What's your least favorite food?",
"What's your go-to snack?",
"What's your favorite sport to participate in?",
"What's your favorite movie?",
"What's your favorite TV show?",
"What's your favorite food?",
"What's your favorite book/book series?",
"What's your favorite childhood book/book series?",
"What's your favorite weird food combination?",
"What's your most commonly used emoji?",
"What is your favorite fun fact?",
"What's your favorite season?",
"What's your favorite website? (hint: you're currently using it)",
"Who's your favorite superhero?",
"What's the best vacation you've ever taken?",
"What place do you want to visit that you haven't before?",
"What's your favorite animal?",
"What's your favorite childhood toy?",
"What are your favorite family traditions?",
"What's your dream job?",
"What holidays do you celebrate?",
"What's your favorite time of day?",
"Sweet or Salty?",
"What's your favorite flavor of ice cream?",
"Do you have any pets? If you don't, what pet(s) would you want?",
       
    ];

    const midQuestions = [
        "What do you think is your biggest accomplishment?",
"Where is the coolest place you've travled?",
"If you had a million dollars what's the first thing you'd do with it?",
"What would you put on your ideal sandwich?",
"What skill would you most like to learn?",
"What is your useless talent?",
"If you could have any superpower, what would it be?",
"If you could only bring one thing to a deserted island, what would it be?",
"What does your dream house look like?",
"What does your dream wardrobe look like?",
"If you could switch bodies with anyone for one day, who would it be?",
"What's your biggest fear?",
"What's your most random impulse buy?",
"If you could travel in time only once, when and where would you go?",
"If you were famous, what would you be famous for?",
"Who's your biggest inspiration",
"How do you express yourself artistically?",
"What inspires you the most?",
"What does your dream vacation look like?",
"If you could make up a holiday, what would it be?",
"What is your Zodiac sign? Do you believe in it?",
"What kind of music do you listen to?",
"Where is your happy place?",
"What would be your perfect day?",

    ];

    const deepQuestions = [
        "What value is most important to you and why?",
"What brings you joy?",
"Who is the most important person to you?",
"What is your earliest memory?",
"What makes you unique?",
"Do you think people are a reflection of their actions? Why or why not?",
"Do you believe everyone deserves a second chance? Why or why not?",
"Do you believe in (a) God? Why or why not?",
"What do you think is the meaning of life?",
"Do you think you've ever experienced true pain?",
"What do you think is your biggest flaw? Why?",
"Who do you look up to the most?",
"If I really knew you, what would I know about you?",
"Describe a secret dream or wish you've had before, but thought was too impossible to keep.",
"What do you think is the most important quality in another person? Why?",
"What is the greatest challenge or struggle you've ever faced?",
"What is the biggest risk you've ever taken?",
"Do you believe in life after death? Why or why not?",
"What is the most important decision you've made in your life so far?",
"What are you most thankful for?",
"What do you wish people knew about you?",
"If you could relive one moment in your life, what would it be?",
"What is your definition of success?",

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
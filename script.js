// ––––––––––––––––– GENERATE section ––––––––––––––––– 

//Making arrays, with 5 strings/items (flowers) each. 
const flowers1 = [
    'Tulip',
    'Rose',
    'Sunflower',
    'Daisy',
    'Magnolia'
]
const flowers2 = [
    'Orchid', 
    'Peony',
    'Lily',
    'Freesia',
    'Lavender'
]
const flowers3 = [
    'Chamomile',
    'Carnation',
    'Iris',
    'Violet',
    'Hibiscus'
]
const flowers4 = [
    'Daffodils',
    'Jasmine',
    'Marigold',
    'Pansy',
    'Primrose'
]
//Variable that connects the correct button from HTML to the following function. 
const generateBtn = document.getElementById('generateBtn');
//Adding Event Listener / function to the button. Defining that something will happen when you click the button.  
generateBtn.addEventListener('click', function() {

    //Variable that chooses a random string from the Arrays, using Math.random and Math.floor.
    //Arithmetic calculations (*), and numeric data type.
    const randomNumber1 = Math.floor(Math.random() * (flowers1.length));

    //Accessing HTML elements (id) using the "getElementbyId()" method. 
    //Using the ".innerHTML" property for adding content into the correct HTML output (<li>).
    document.getElementById("li1").innerHTML = flowers1[randomNumber1];

    //Repeats the same process to the other list-elements. 
    const randomNumber2 = Math.floor(Math.random() * (flowers2.length));
    document.getElementById("li2").innerHTML = flowers2[randomNumber2];

    const randomNumber3 = Math.floor(Math.random() * (flowers3.length));
    document.getElementById("li3").innerHTML = flowers3[randomNumber3];

    const randomNumber4 = Math.floor(Math.random() * (flowers4.length));
    document.getElementById("li4").innerHTML = flowers4[randomNumber4];
})


// ––––––––––––––––– QUIZ section ––––––––––––––––– 

//Variables (strings) for the correct- and wrong answers.
const correctAnswer = "Correct! It's a ";
const wrongAnswer = "Sorry! Try again...";

//Variable that connects the correct button from HTML to the following function. 
const roseBtn = document.getElementById('roseBtn');
//Adding Event Listener / function to the button. Defining that something will happen when you click on the button.  
roseBtn.addEventListener('click', function() {

    //Using ".value" at the end of the variable, to get the value that are typed in the element, and not the element itself. 
    //.toLowerCase means that you can type in the correct word using both capital and lowercase letters. 
    const input1 = document.getElementById('input1').value.toLowerCase();

    //If-statement that gives you an output based on what you are answering in the quiz. 
    //Saying that if 'input1' is equal(===) to "rose", you will get the answer correct.
    if (input1 === 'rose') {

        //Using the ".innerHTML" property for adding content to the correct HTML output (<p>). 
        //Using concatenation, combining two string values that are stored in variables. 
        textRose.innerHTML = correctAnswer + input1 + "!";
    } 
    //If you type the wrong answer, this will be the output. 
    else {
       textRose.innerHTML = wrongAnswer;
    } 
})
//Repating the same process to the two following quizes. 
const sunflowerBtn = document.getElementById('sunflowerBtn');
sunflowerBtn.addEventListener('click', function() {
    const input2 = document.getElementById('input2').value.toLowerCase();

    if (input2 === 'sunflower') {
        textSunflower.innerHTML = correctAnswer + input2 + "!";
    } 
    else {
       textSunflower.innerHTML = wrongAnswer;
    }
})
const tulipBtn = document.getElementById('tulipBtn');
tulipBtn.addEventListener('click', function() {
    const input3 = document.getElementById('input3').value;

    if (input3 === 'tulip') {
        //Can also be written as a Template String like ths.
        textTulip.innerHTML = `${correctAnswer} ${input3}!`;
    } 
    else {
       textTulip.innerHTML = wrongAnswer;
    } 
})
//Start over button, refreshes the page.
const startoverBtn = document.getElementById('startoverBtn');
startoverBtn.addEventListener('click', function refreshQuiz() { 
    window.location.reload();
})

 /*
    I didn't manage to include functions declared with parameters and called with arguments in my quiz or generator,
    so I will make an example here to show you that I have learned it:

    function myName(first, second) {
        return first + ' ' + second
    }
    console.log(myName('Lisa Mari', 'Myrene'));
*/

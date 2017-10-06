let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon" ];

let betterSentence = ["Hello", "my", "name", "is", "Tyler", "and", "I", "am", "in", "NSS", "cohort", "22"];

let userInput = prompt("What punctuation do you want to use?");
let addExcitement = (theWordArray, userInput) => {
    let finalOutput = ""
    for (var index = 0; index < theWordArray.length; index++) {
        const position = index + 1;

        if (position % 3 === 0) {
            finalOutput = finalOutput + " " + theWordArray[index] + userInput.repeat(position / 3); 
        } else {
            finalOutput = finalOutput + " " + theWordArray[index];
        }; 
        
        document.write(finalOutput + "<br>");
        console.log(finalOutput)
    }
}

addExcitement(sentence, userInput) 
addExcitement(betterSentence, userInput)


    

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon" ];

let betterSentence = ["Hello", "my", "name", "is", "Tyler", "and", "I", "am", "in", "NSS", "cohort", "22"];
let addExcitement = (theWordArray, punctuation) => {
    let finalOutput = ""
    for (var index = 0; index < theWordArray.length; index++) {
        const position = index + 1;

        if (position % 3 === 0) {
            finalOutput = finalOutput + " " + theWordArray[index] + punctuation.repeat(position / 3); 
        } else {
            finalOutput = finalOutput + " " + theWordArray[index];
        }; 
        document.write(finalOutput);
        console.log(finalOutput)
    }
}

addExcitement(sentence, "?");

addExcitement(betterSentence, "!" )


    

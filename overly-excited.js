let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon" ];

let addExcitement = (theWordArray, punctuation) => {
    for (var index = 0; index <= theWordArray.length; index++) {
        
        if (index % 3 === 0 && index != 0) { 
            theWordArray[index-1] += punctuation.repeat(index/3);
        }
        console.log(theWordArray.slice(0, index).join(" ")); 
    }
}


    


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

//console.log(letters[3]);

//Word generator
const wordGen = () => {
    const wordLength = Math.ceil(Math.random() * 9)
    //console.log(wordLength)

    let newWord = []

    //generate word of length "wordLength"
    for (i = 0; i <= wordLength; i ++) {
        const lett = letters[Math.floor(Math.random() * 26)]
        newWord.push(lett);
    }
    const wholeWord = newWord.join('');
    return wholeWord;
};

//console.log(wordGen());




const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
const messageLength = 12

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


//Message generator
const messageGen = () => {
    let messageCreation = [];
    for (x = 0; x <= messageLength; x ++) {
        const word = wordGen();
        messageCreation.push(word);
    };

    //Join words
    const joinedMessage = messageCreation.join(' ');
    
    //Capitalise first word
    const capitalisedMessage = joinedMessage[0].toUpperCase() + joinedMessage.slice(1) + '.';

    return capitalisedMessage
}

console.log(messageGen());
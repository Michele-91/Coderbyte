/**********************************************************************************************************************
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
***********************************************************************************************************************/

function LetterChanges(str) { 
    
    str = str.replace(/[a-z]/gi, function(ch) {
        if(ch === 'z') return 'a';
        else if(ch === 'Z') return 'A';
        else return String.fromCharCode(ch.charCodeAt (0) + 1);
    });
    
    return str.replace(/[/aeiou]/gi, function(vowel) {
        return vowel.toUpperCase();
    });
}

LetterChanges(readline());

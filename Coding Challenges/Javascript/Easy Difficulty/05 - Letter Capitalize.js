/**************************************************************************************************************************
Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space. 
***************************************************************************************************************************/

function LetterCapitalize(str) { 

  let capitalizedWords = str.split(" ");
  for(let i = 0; i < capitalizedWords.length; i++) {
      capitalizedWords[i] = capitalizedWords[i].substr(0, 1).toUpperCase() + capitalizedWords[i].substr(1);
  }
  return capitalizedWords.join(" "); 
         
}

LetterCapitalize(readline());

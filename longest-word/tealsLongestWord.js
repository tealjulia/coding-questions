//assuming there is no punctuation in the given sentence

longestWord = (str) => { 
//add check for end punctuation instead of assuming
  
  let words = str.split(' ');

  let maxLength = 0;

  for (let i=0; i<words.length; i++){
    maxLength = Math.max(maxLength, words[i].length);
  }
  return maxLength;
} 

console.log(longestWord('This is a sentence'))
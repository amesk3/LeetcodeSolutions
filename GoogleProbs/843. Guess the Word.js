/*
The solution should not rely on luck
I think luck is the last thing a coder can rely on. Instead of wishing to be lucky (use random guesses), I think we should find a way to guarantee that we definitely pass the tests within 10 guesses. And my way is to find a typical word in a wordlist, and use it to get a guess result, and then minimize the wordlist with the guess result, and then continue to find a typical word in the minimized wordlist, and so on...

What is a typical word in a wordlist?
A typical word is a word that have the most common with other words in the wordlist. Here I use a simple version of typical word. Instead of comparing the whole word, I compared letters in the same position to find the letters that occured the most times, and then get a typical word. (If the guess times are even more limited, I think we should find a typical word by comparing the whole word)

Why typical word?
By guessing with a typical word, we get to know how the most words in the wordlist match the secret key. (Because in some test cases there are many words that have no common with the secret key or most of the words in the wordlist, we should try to avoid guessing with those words.)
*/

var findSecretWord = function(wordlist, master) {
  let group = wordlist;
  for (let i = 0; i < 10; i++) {
    //10 guesses
    let currentGuess = findTheTypical(group);
    let res = master.guess(currentGuess);
    if (res === 6) return;
    let tmp = [];
    for (let j = 0; j < group.length; j++) {
      if (diff(group[j], currentGuess) === 6 - res) tmp.push(group[j]);
    }
    group = tmp;
  }
};

function findTheTypical(wordlist) {
  let count = Array.from({ length: 6 }, x => new Object()); //[ {}, {}, {}, {}, {}, {} ] **
  for (let i = 0; i < wordlist.length; i++) {
    for (let j = 0; j < 6; j++) {
      let cur = wordlist[i][j];
      if (count[j][cur] === undefined) count[j][cur] = 1;
      else count[j][cur]++;
    }
  }
  let maxPos = 0,
    maxCount = 0,
    maxAlp = "";
  for (let i = 0; i < 6; i++) {
    for (let k of Object.keys(count[i])) {
      //Object.keys(count[i])
      if (count[i][k] > maxCount) {
        maxCount = count[i][k];
        maxPos = i;
        maxAlp = k;
      }
    }
  }
  for (let i = 0; i < wordlist.length; i++) {
    if (wordlist[i][maxPos] === maxAlp) return wordlist[i];
  }
}
function diff(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count;
}

/*
**
count [ { a: 2, c: 1, e: 1 },
    { c: 2, i: 1, b: 1 },
    { c: 2, b: 1, o: 1 },
    { k: 1, a: 1, w: 1, c: 1 },
    { z: 4 },
    { z: 3 } ]
*/

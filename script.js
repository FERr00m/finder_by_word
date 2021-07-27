'use strict';

const input = document.getElementById('input'),
  mainText = document.getElementById('text'),
  result = document.getElementById('result');


function findWords() {
  
  let text = mainText.value,
    arr = text.split(' '),
    findedWords = arr.filter(word => word.includes(input.value));
  
  if (findedWords.length > 0) {
    let newWords = {};
    findedWords.forEach(element => {
      let newElement = element.replace(input.value, `<span class="finded">${input.value}</span>`);
      newWords[element] = newElement;
    });
    let newText = text;
    for (const [key, value] of Object.entries(newWords)) {
      newText = newText.replace(key, value);
    }
    result.innerHTML = newText;
  } else {
    result.innerHTML = 'Совпадений не найдено :(';
  }
  
}

class Debounce {
  constructor(fn, time) {
    return args => {
      const previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && ((this.lastCall - previousCall) <= time)) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(() => fn(args), time);
    };
  }
}

const debouncedLogger = new Debounce(findWords, 500);

input.addEventListener('input', debouncedLogger);

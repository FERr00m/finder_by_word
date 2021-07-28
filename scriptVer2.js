'use strict';

const input = document.getElementById('input'),
  mainText = document.getElementById('text'),
  result = document.getElementById('result');


function findWords() {

  if (mainText.value.length > 0 && mainText.value.includes(input.value) && input.value !== '') {
    resultText = mainText.value.replaceAll(input.value, `<span class="finded">${input.value}</span>`);
    result.innerHTML = resultText;
  } else if (input.value === '') {
    result.innerHTML = '';
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

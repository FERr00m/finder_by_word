module.exports = function() {

  const input = document.getElementById('input'),
    text = document.getElementById('text');

  function setText() {
    text.textContent = input.value;
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

  const debouncedLogger = new Debounce(setText, 300);

  input.addEventListener('input', debouncedLogger);
}

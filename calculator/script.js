let screen = document.getElementById('screen');

  function appendToScreen(value) {
    if (value === 'DEL') {
      screen.innerText = screen.innerText.slice(0, -1);
    } else {
      screen.innerText += value;
    }
  }

  function clearScreen() {
    screen.innerText = '';
  }

  function toggleSign() {
    if (screen.innerText !== '' && screen.innerText !== '0') {
      screen.innerText = -parseFloat(screen.innerText);
    }
  }

  function deleteLastCharacter() {
    let currentText = screen.innerText;
    screen.innerText = currentText.substring(0, currentText.length - 1);
  }

  function calculate() {
    try {
      screen.innerText = eval(screen.innerText);
    } catch (error) {
      screen.innerText = 'Error';
    }
  }
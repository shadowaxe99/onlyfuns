const button = document.querySelector('#submit-button');
button.addEventListener('click', () => {
  const input = document.querySelector('#input-field');
  const value = input.value;
  alert(`You entered: ${value}`);
});
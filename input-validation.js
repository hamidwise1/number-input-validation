const inputNumbers = [...document.querySelectorAll("[type='number']")];
// $("#mainContent").one("focus",input[type="number"],handleInputFocus)
inputNumbers.forEach((inputNumber) => {
 inputNumber.addEventListener('focus', handleInputFocus, { once: true });
});
function handleInputFocus() {
 let preValue = this.value;
 let valueLength = 0;
 this.addEventListener('input', handleInputChange);
 this.addEventListener('blur', handleInputBlur);
 function handleInputChange(e) {
  const validInputType = e.inputType.includes('deleteContent');
  const inputValue = this.value;
  if (inputValue) {
   preValue = inputValue;
   valueLength = inputValue.length;
  }
  if (validInputType && !inputValue) {
   preValue = '';
   valueLength = 0;
  }
  if (!inputValue && !validInputType) {
   this.value = preValue;
  }
 }
 function handleInputBlur() {
  this.addEventListener('focus', handleInputFocus, { once: true });
  this.removeEventListener('input', handleInputChange);
  this.removeEventListener('blur', handleInputBlur);
 }
}

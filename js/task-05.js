const inputEl = document.querySelector('input#name-input');
console.log(inputEl);
const outputEl = document.querySelector('span#name-output');
console.log(outputEl);

inputEl.addEventListener("input", (event) => {    
    outputEl.textContent = event.currentTarget.value;
});
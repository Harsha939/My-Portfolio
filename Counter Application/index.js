let number = document.getElementById('number');
let incrementBtn = document.getElementById('incrementBtn');
let decrementBtn = document.getElementById('decrementBtn');
let input = document.getElementById('input');
let resetBtn = document.getElementById('resetBtn');


incrementBtn.addEventListener('click',()=>{
    let previousValue = number.textContent;
    let updatedValue = parseInt(previousValue) + parseInt(input.value);
    number.textContent = updatedValue;
});
decrementBtn.addEventListener('click',()=>{
    let previousValue = number.textContent;
    let updatedValue = parseInt(previousValue) - parseInt(input.value);
    number.textContent = updatedValue;
});

resetBtn.addEventListener('click',()=>{
    number.textContent = 0;
});

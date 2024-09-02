
const incbtn1 = document.querySelector('#incr1');
const decrbtn1 = document.querySelector('#decr1');
const totalcount1 = document.querySelector('#total1');
const percentage1 = document.querySelector('#percentage1');
const absincrbtn1 = document.querySelector('#absincr1');
const absdecrbtn1 = document.querySelector('#absdecr1');

const presentcnt1 = document.querySelector('#presentcount1');
const absentcnt1 = document.querySelector('#abscount1');

let presentcount1 = parseInt(localStorage.getItem('presentcount1')) || 0; 
let absentcount1 = parseInt(localStorage.getItem('absentcount1')) || 0;   
let total1 = 0;


presentcnt1.textContent = presentcount1;
absentcnt1.textContent = absentcount1;
totalcount1.textContent = presentcount1 + absentcount1;
total1 = presentcount1 * 100 / (presentcount1 + absentcount1 || 1); 
percentage1.textContent = Math.round(total1 * 100) / 100;

// Update present count
incbtn1.addEventListener('click', () => {
    presentcount1++;
    updateCounters();
    saveToLocalStorage();
});

decrbtn1.addEventListener('click', () => {
    if (presentcount1 > 0) { 
        presentcount1--;
        updateCounters();
        saveToLocalStorage();
    }
});

// Update absent count
absincrbtn1.addEventListener('click', () => {
    absentcount1++;
    updateCounters();
    saveToLocalStorage();
});

absdecrbtn1.addEventListener('click', () => {
    if (absentcount1 > 0) { 
        absentcount1--;
        updateCounters();
        saveToLocalStorage();
    }
});



const incbtn2 = document.querySelector('#incr2');
const decrbtn2 = document.querySelector('#decr2');
const totalcount2 = document.querySelector('#total2');
const percentage2 = document.querySelector('#percentage2');
const absincrbtn2 = document.querySelector('#absincr2');
const absdecrbtn2 = document.querySelector('#absdecr2');

const presentcnt2 = document.querySelector('#presentcount2');
const absentcnt2 = document.querySelector('#abscount2');

let presentcount2 = parseInt(localStorage.getItem('presentcount2')) || 0; 
let absentcount2 = parseInt(localStorage.getItem('absentcount2')) || 0;   
let total2 = 0;


presentcnt2.textContent = presentcount2;
absentcnt2.textContent = absentcount2;
totalcount2.textContent = presentcount2 + absentcount2;
total2 = presentcount2 * 100 / (presentcount2 + absentcount2 || 1); 
percentage2.textContent = Math.round(total2 * 100) / 100;

// Update present count
incbtn2.addEventListener('click', () => {
    presentcount2++;
    updateCounters();
    saveToLocalStorage();
});

decrbtn2.addEventListener('click', () => {
    if (presentcount2 > 0) { 
        presentcount2--;
        updateCounters();
        saveToLocalStorage();
    }
});

// Update absent count
absincrbtn2.addEventListener('click', () => {
    absentcount2++;
    updateCounters();
    saveToLocalStorage();
});

absdecrbtn2.addEventListener('click', () => {
    if (absentcount2 > 0) { 
        absentcount2--;
        updateCounters();
        saveToLocalStorage();
    }
});



const incbtn3 = document.querySelector('#incr3');
const decrbtn3 = document.querySelector('#decr3');
const totalcount3 = document.querySelector('#total3');
const percentage3 = document.querySelector('#percentage3');
const absincrbtn3 = document.querySelector('#absincr3');
const absdecrbtn3 = document.querySelector('#absdecr3');

const presentcnt3 = document.querySelector('#presentcount3');
const absentcnt3 = document.querySelector('#abscount3');

let presentcount3 = parseInt(localStorage.getItem('presentcount3')) || 0; 
let absentcount3 = parseInt(localStorage.getItem('absentcount3')) || 0;   
let total3 = 0;


presentcnt3.textContent = presentcount3;
absentcnt3.textContent = absentcount3;
totalcount3.textContent = presentcount3 + absentcount3;
total3 = presentcount3 * 100 / (presentcount3 + absentcount3 || 1); 
percentage3.textContent = Math.round(total3 * 100) / 100;

// Update present count
incbtn3.addEventListener('click', () => {
    presentcount3++;
    updateCounters();
    saveToLocalStorage();
});

decrbtn3.addEventListener('click', () => {
    if (presentcount3 > 0) { 
        presentcount3--;
        updateCounters();
        saveToLocalStorage();
    }
});

// Update absent count
absincrbtn3.addEventListener('click', () => {
    absentcount3++;
    updateCounters();
    saveToLocalStorage();
});

absdecrbtn3.addEventListener('click', () => {
    if (absentcount3 > 0) { 
        absentcount3--;
        updateCounters();
        saveToLocalStorage();
    }
});



const incbtn4 = document.querySelector('#incr4');
const decrbtn4 = document.querySelector('#decr4');
const totalcount4 = document.querySelector('#total4');
const percentage4 = document.querySelector('#percentage4');
const absincrbtn4 = document.querySelector('#absincr4');
const absdecrbtn4 = document.querySelector('#absdecr4');

const presentcnt4 = document.querySelector('#presentcount4');
const absentcnt4 = document.querySelector('#abscount4');

let presentcount4 = parseInt(localStorage.getItem('presentcount4')) || 0; 
let absentcount4 = parseInt(localStorage.getItem('absentcount4')) || 0;   
let total4 = 0;


presentcnt4.textContent = presentcount4;
absentcnt4.textContent = absentcount4;
totalcount4.textContent = presentcount4 + absentcount4;
total4 = presentcount4 * 100 / (presentcount4 + absentcount4 || 1); 
percentage4.textContent = Math.round(total4 * 100) / 100;

// Update present count
incbtn4.addEventListener('click', () => {
    presentcount4++;
    updateCounters();
    saveToLocalStorage();
});

decrbtn4.addEventListener('click', () => {
    if (presentcount4 > 0) { 
        presentcount4--;
        updateCounters();
        saveToLocalStorage();
    }
});

// Update absent count
absincrbtn4.addEventListener('click', () => {
    absentcount4++;
    updateCounters();
    saveToLocalStorage();
});

absdecrbtn4.addEventListener('click', () => {
    if (absentcount4 > 0) { 
        absentcount4--;
        updateCounters();
        saveToLocalStorage();
    }
});



const incbtn5 = document.querySelector('#incr5');
const decrbtn5 = document.querySelector('#decr5');
const totalcount5 = document.querySelector('#total5');
const percentage5 = document.querySelector('#percentage5');
const absincrbtn5 = document.querySelector('#absincr5');
const absdecrbtn5 = document.querySelector('#absdecr5');

const presentcnt5 = document.querySelector('#presentcount5');
const absentcnt5 = document.querySelector('#abscount5');

let presentcount5 = parseInt(localStorage.getItem('presentcount5')) || 0; 
let absentcount5 = parseInt(localStorage.getItem('absentcount5')) || 0;   
let total5 = 0;


presentcnt5.textContent = presentcount5;
absentcnt5.textContent = absentcount5;
totalcount5.textContent = presentcount5 + absentcount5;
total5 = presentcount5 * 100 / (presentcount5 + absentcount5 || 1); 
percentage5.textContent = Math.round(total5 * 100) / 100;

// Update present count
incbtn5.addEventListener('click', () => {
    presentcount5++;
    updateCounters();
    saveToLocalStorage();
});

decrbtn5.addEventListener('click', () => {
    if (presentcount5 > 0) { 
        presentcount5--;
        updateCounters();
        saveToLocalStorage();
    }
});

// Update absent count
absincrbtn5.addEventListener('click', () => {
    absentcount5++;
    updateCounters();
    saveToLocalStorage();
});

absdecrbtn5.addEventListener('click', () => {
    if (absentcount5 > 0) { 
        absentcount5--;
        updateCounters();
        saveToLocalStorage();
    }
});

// Function to update 
function updateCounters() {
    presentcnt1.textContent = presentcount1;
    absentcnt1.textContent = absentcount1;
    totalcount1.textContent = presentcount1 + absentcount1;
    total1 = presentcount1 * 100 / (presentcount1 + absentcount1 || 1); 
    percentage1.textContent = Math.round(total1 * 100) / 100;

    presentcnt2.textContent = presentcount2;
    absentcnt2.textContent = absentcount2;
    totalcount2.textContent = presentcount2 + absentcount2;
    total2 = presentcount2 * 100 / (presentcount2 + absentcount2 || 1); 
    percentage2.textContent = Math.round(total2 * 100) / 100;

    presentcnt3.textContent = presentcount3;
    absentcnt3.textContent = absentcount3;
    totalcount3.textContent = presentcount3 + absentcount3;
    total3 = presentcount3 * 100 / (presentcount3 + absentcount3 || 1); 
    percentage3.textContent = Math.round(total3 * 100) / 100;

    presentcnt4.textContent = presentcount4;
    absentcnt4.textContent = absentcount4;
    totalcount4.textContent = presentcount4 + absentcount4;
    total4 = presentcount4 * 100 / (presentcount4 + absentcount4 || 1); 
    percentage4.textContent = Math.round(total4 * 100) / 100;

    presentcnt5.textContent = presentcount5;
    absentcnt5.textContent = absentcount5;
    totalcount5.textContent = presentcount5 + absentcount5;
    total5 = presentcount5 * 100 / (presentcount5 + absentcount5 || 1); 
    percentage5.textContent = Math.round(total5 * 100) / 100;
}

// Function to save  to local storage
function saveToLocalStorage() {

    localStorage.setItem('presentcount1', presentcount1);
    localStorage.setItem('absentcount1', absentcount1);

    localStorage.setItem('presentcount2', presentcount2);
    localStorage.setItem('absentcount2', absentcount2);

    localStorage.setItem('presentcount3', presentcount3);
    localStorage.setItem('absentcount3', absentcount3);

    localStorage.setItem('presentcount4', presentcount4);
    localStorage.setItem('absentcount4', absentcount4);

    localStorage.setItem('presentcount5', presentcount5);
    localStorage.setItem('absentcount5', absentcount5);
}
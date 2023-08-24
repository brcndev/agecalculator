const dayError = document.querySelector('.day-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');
const dayResult = document.querySelector('.day-result');
const monthResult = document.querySelector('.month-result');
const yearResult = document.querySelector('.year-result');
const submitBtn = document.querySelector('.btn');
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const inputRequiredError = "This field is required";
const dataError = "Must be a valid date"
const inputDayError = "Must be a valid day";
const inputMonthError = "Must be a valid month";
const inputYearError = "Must be in the past";
const Canvas = document.querySelector('.can');
const labelDay = document.getElementById('label-day');
const labelMonth = document.getElementById('label-month');
const labelYear = document.getElementById('label-year');



function checkDayInput() {
    let value = inputDay.value;
    let monthValue = inputMonth.value
    if(value == ''){
        dayError.innerHTML = inputRequiredError;
        labelDay.style.color = 'hsl(0,100%,67%)';
        inputDay.style.borderColor = 'hsl(0,100%,67%)';
        return false;
    }
  
    else if (value < 1 || value > 31) {
        dayError.innerHTML = inputDayError;
        return false;
    }
    else if(value >= 31 && monthValue == 4 || value >= 31 && monthValue == 6 || value >= 31 && monthValue == 9 || value >= 31 && monthValue == 11){
        dayError.innerHTML = dataError;
        labelDay.style.color = 'hsl(0,100%,67%)';
        inputDay.style.borderColor = 'hsl(0,100%,67%)';
        return false;
    }

    else {
        dayError.innerHTML = '';
        return true
    }
}

function checkMonthInput() {
    let value = inputMonth.value;

    if(value == ''){
        monthError.innerHTML = inputRequiredError;
        labelMonth.style.color = 'hsl(0,100%,67%)';
        inputMonth.style.borderColor = 'hsl(0,100%,67%)';
        return false;
    }
    else if (value < 1 || value > 12) {
        monthError.innerHTML = inputMonthError;
        return false;
    }
    else {
        monthError.innerHTML = '';
        return true
    }
}

function checkYearInput() {
    let value = inputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if(value == ''){
        yearError.innerHTML = inputRequiredError;
        labelYear.style.color = 'hsl(0,100%,67%)';
        inputYear.style.borderColor = 'hsl(0,100%,67%)';
        return false;
    }
    else if (value > currentYear) {
        yearError.innerHTML = inputYearError;
        return false;
    }
    else {
        yearError.innerHTML = '';
        return true
    }
}


function calculateAge(birthday) {
    let birthdate = new Date(birthday);
    let today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if(months < 0 || (months === 0 && days < 0)) {
        years--;
        if(months === 0) {
            months = 11;
        } else {
            months = 12 + months;
        }
        days = 30 + days;
    }
    yearResult.innerHTML = years;
    monthResult.innerHTML = months;
    dayResult.innerHTML = days;
}

function calculateAll() {
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();

    if(!day || !month || !year) return
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calculateAge(birthday);
    Canvas.style.display = 'block';
    setTimeout(function () {
        Canvas.style.display = 'none';
    }, 8000);
}


const birthDay = document.getElementById('day');
const birthMonth = document.getElementById('month');
const birthYear = document.getElementById('year');
const button = document.getElementById('submit-button');
const form = document.getElementById('age-form');
const errorDay = document.getElementById('day-error');
const errorMonth = document.getElementById('month-error');
const errorYear = document.getElementById('year-error');
const dayOutput = document.getElementById('day-output');
const monthOutput = document.getElementById('month-output');
const yearyOutput = document.getElementById('year-output');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    // if(birthDay.value <= 0 || birthMonth.value <= 0 || birthYear.value <= 0 ||
    //     birthDay.value > 31 || birthMonth.value > 12 || birthYear.value > 2024 ){

    //     }
    //empty inputs or negative
    let isValid = true;
    if( birthDay.value === ''  )  {
        errorDay.textContent = 'This field is required';
        isValid=false;
        birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
    }else
    if(birthDay.value < 0 || birthDay.value > 31   )  {
        errorDay.textContent = 'Must be a valid day';
        birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
        isValid=false;
    }
    else{
        errorDay.textContent = '';
        birthDay.parentElement.querySelector('label[for="day"]').classList.remove('label-error');
    }
    
    if( birthMonth.value === '')  {
        errorMonth.textContent = 'This field is required';
        birthMonth.parentElement.querySelector('label[for="month"]').classList.add('label-error');
        isValid=false;
    }else
    if(birthMonth.value < 0 || birthMonth.value > 12 ){
        errorMonth.textContent = 'Must be a valid month';
        birthMonth.parentElement.querySelector('label[for="month"]').classList.add('label-error');
        isValid=false;
    } 
    else{
        errorMonth.textContent = '';
        birthMonth.previousElementSibling.querySelector('label[for="month"]').classList.remove('label-error');
    }
    
    if(birthYear.value === '' )  {
        errorYear.textContent = 'This field is required';
        birthYear.parentElement.querySelector('label[for="year"]').classList.add('label-error');
        isValid=false;
    }else
    if(birthYear.value < 0 || birthYear.value > 2024 ){
        errorYear.textContent = 'must be a valid year';
        birthYear.parentElement.querySelector('label[for="year"]').classList.add('label-error');
        isValid=false;
    }
    else{
        errorYear.textContent = '';
        birthYear.parentElement.querySelector('label[for="year"]').classList.remove('label-error');
    }

    //months with 31
    const monthC = [1,3,5,7,8,10,12];
    
    monthC.forEach(month => {
        if(birthMonth.value === month){
            if(birthDay.value > 31){
                errorDay.textContent ='Must be a valid day';
                birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
                errorMonth.textContent ='';
                isValid=false;
            }
        }
        else
        if(birthMonth === 2){
            if(birthDay > 28){
                errorDay.textContent ='Must be a valid day';
                birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
                isValid=false;
            }
        }
        else{
            birthDay.textContent ='';
            birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
        }
        
    });
    if(!isValid){
        return;

    }
    else
    if(isValid){
        birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
        birthMonth.parentElement.querySelector('label[for="month"]').classList.add('label-error');
        birthYear.parentElement.querySelector('label[for="year"]').classList.add('label-error');
        const date = new Date();
        const dob =birthYear.value + '-' +birthMonth.value + '-' +birthDay.value;
        const birthdate = new Date(dob); 
        const years =(date.getFullYear() - birthdate.getFullYear());
        const months =(date.getMonth() - birthdate.getMonth());
        const days =(date.getDate() - birthdate.getDate());

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
          }
          else
        
          // Adjust for negative months
          if (months < 0) {
            years--;
            months += 12;
          }

        yearyOutput.textContent = years;
        monthOutput.textContent = months;
        dayOutput.textContent = days ;
    }
    
      

});

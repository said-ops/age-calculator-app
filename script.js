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
        isValid=false;
        birthDay.parentElement.querySelector('label[for="day"]').classList.add('label-error');
    }
    else{
        errorDay.textContent = '';
        
    }
    
    if( birthMonth.value === '')  {
        errorMonth.textContent = 'This field is required';
        isValid=false;
        birthMonth.parentElement.querySelector('label[for="month"]').classList.add('label-error');
    }else
    if(birthMonth.value < 0 || birthMonth.value > 12 ){
        errorMonth.textContent = 'Must be a valid month';
        isValid=false;
        birthMonth.parentElement.querySelector('label[for="month"]').classList.add('label-error');
    } 
    else{
        
        errorMonth.textContent = '';
        
    }
    
    if(birthYear.value === '' )  {
        errorYear.textContent = 'This field is required';
        
        isValid=false;
        birthYear.parentElement.querySelector('label[for="year"]').classList.add('label-error');
    }else
    if(birthYear.value < 0 || birthYear.value > 2024 ){
        errorYear.textContent = 'must be a valid year';
        
        isValid=false;
        birthYear.parentElement.querySelector('label[for="year"]').classList.add('label-error');
    }
    else{
        errorYear.textContent = '';
        
    }

    //months with 31
    const monthC = [1,3,5,7,8,10,12];
    
    monthC.forEach(month => {
        if(birthMonth.value === month){
            if(birthDay.value > 31){
                errorDay.textContent ='Must be a valid day';
                
                errorMonth.textContent ='';
                isValid=false;
            }
        }
        else
        if(birthMonth === 2){
            if(birthDay > 28){
                errorDay.textContent ='Must be a valid day';
                isValid=false;
            }
        }
        
        
    });
    if(!isValid){
        return;

    }
    else
    if(isValid){
        
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

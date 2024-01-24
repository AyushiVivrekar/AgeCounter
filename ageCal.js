const dateInp = document.getElementById("date-value")
const calButton = document.getElementById("calButton")
const age = document.getElementById("age")

function alertMsg(){
    const dateValue = dateValue.value
    if(dateValue.trim=== ""){
        alert("Please Enter your Birthday")
         calButton.disabled = true;
         return false;
    }
    // errorAlert.innerHTML = dateValue
    calButton.disabled = true
    return true;
}

calButton.addEventListener('click', ()=>{
   const selectDate = new Date(dateInp.value)
    let currentYear = new Date().getFullYear();
    const selectedYear = selectDate.getFullYear();
    if(dateInp.value.trim() === ""){
        alert("please enter your birthday")
    }
    else{
      age.textContent = currentYear-selectedYear
    }
});
dateValue.addEventListener('blur', alertMsg)


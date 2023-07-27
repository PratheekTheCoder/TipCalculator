const button = document.querySelector(".btn"),
tip = document.querySelector(".tip"),
totalAmount = document.querySelector(".total-bill"),
errorMessage = document.querySelector(".btn-error");

// error message disapper after 5 seconds
const hideErrorMessage = () => {
setTimeout(()=> {
errorMessage.style.display = "none"
},5000);
}

// calculating tip
const calculateTip = ()=>{
const bill = document.querySelector(".bill-in").value;
const rating = document.querySelector(".rating").value;


if (bill === "" || rating === "") {
    errorMessage.style.display = "block"
    hideErrorMessage();
}else if(isNaN(bill)){
    errorMessage.innerHTML = "Please enter a number";
    errorMessage.style.display = "block"
    hideErrorMessage();
}else{
    let tipAmt = bill * rating;
    tipAmt = Math.round(tipAmt);
    tip.innerHTML = `Tip Amount is $ ${tipAmt}`;

    // total bill calc
    let totalBill = Number(bill) + tipAmt;
    totalAmount.innerHTML = `Total Amount is $ ${totalBill}`;
}
}

button.addEventListener("click",calculateTip);
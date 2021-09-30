const BillAmount = document.querySelector('#BillAmount');
const CashGiven = document.querySelector('#CashGiven');
const showbtn = document.querySelector('#show');
const noOfnotes = document.querySelectorAll('.noOfnotes');
const errorMessage = document.querySelector('#errorMessage');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

showbtn.addEventListener('click', () => {
    hideErrorMessage();
    let bill = Number(BillAmount.value);
    let cash = Number(CashGiven.value)

    if (bill > 0) {
       if (cash >= bill) {
            let amountshouldreturn = cash-bill
            CalculateNotesamountToBeReturned(amountshouldreturn);
          } else {
           showerror("you don't have money 😐😣");
        }
    } else {
        
        showerror("Bill amount should be greater than zero"); 
    }
})



function CalculateNotesamountToBeReturned(amountshouldreturn) {
        
        for(let i = 0; i < availableNotes.length; i++) {
            const numberOfNotes = Math.trunc(amountshouldreturn / availableNotes[i]);
            amountshouldreturn = amountshouldreturn % availableNotes[i];
            noOfnotes[i].innerText = numberOfNotes;   
         }
}
       
function hideErrorMessage() {
  errorMessage.style.display = "none";
    
}




function showerror(err) {
    
    errorMessage.style.display = "block";
    errorMessage.innerText = err;
}
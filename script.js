const bill_amount = document.querySelector("#bill-amount");
const cash_given = document.querySelector("#cash-given");
const button = document.querySelector("#butt");
const mess = document.querySelector(".message");
const arr = [2000,500,100,20,10,5,1];
const cash = document.querySelectorAll(".cash");

button.addEventListener("click",function(e) {
    e.preventDefault();
    let bill_value = parseInt(bill_amount.value);
    let cash_value = parseInt(cash_given.value);
    let return_value = parseInt(cash_value - bill_value);
    
    if(bill_value > 0 )
    {
        
        if(cash_value >= bill_value)
        {
            
            hideMessage();
            for (let i = 0; i < arr.length; i++) {
                let q = Math.floor(return_value / arr[i]);
                return_value = (return_value % arr[i]);
                cash[i].innerHTML = q;
                
            }
            
        }
        else
        {
        
            showMessage("Invalid number")
        }
        
    }
    else
    {
        showMessage("negative number");
    }
    
})

function showMessage(messa) {
    
    mess.style.display = "block";
    mess.innerHTML = messa;
}

const hideMessage = function(){
    mess.style.display = "none";
}
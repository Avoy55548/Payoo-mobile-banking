document.getElementById("loginbtn").addEventListener("click", function (event){
    event.preventDefault();
    const AccountNumber= document.getElementById("account-num").value;
    const pin= document.getElementById("pin").value;
    if(AccountNumber.length==11){
        if(pin==1234){
            window.location.href="./main.html";
        }
        else{
           alert("Invalid PIN");
        }
    }
    else{
        alert("Invalid Account");
    }
})



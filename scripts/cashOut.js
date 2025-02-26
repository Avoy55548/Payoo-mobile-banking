document.getElementById("cash-out").addEventListener("click", function(event) {
    event.preventDefault();
    const pin= document.getElementById('cash-out-pin').value;
    const convertedPin =parseInt(pin);
    const mainBalance= document.getElementById('main-balance').innerText;
    const convertedMainBalance= parseFloat(mainBalance);
    const Amount= document.getElementById('cashOut-amount-num').value;
    const convertedAmount= parseFloat(Amount);

    if(convertedPin==1234){
        const sum= convertedMainBalance-convertedAmount;
        document.getElementById('main-balance').innerText=sum;


        const container=document.getElementById("transaction-container");
        const p=document.createElement("p");
        p.innerText=`cashout ${Amount} from ${convertedPin} account`
        container.appendChild(p);
    }
    else{
        alert("Invalid Pin");
    }
})
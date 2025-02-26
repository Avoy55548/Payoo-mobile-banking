document.getElementById('add-money').addEventListener('click', function (event){
    event.preventDefault();
    const Amount= document.getElementById('amount-num').value;
    const convertedAmount= parseFloat(Amount);
    const pin= document.getElementById('pin').value;
    const convertedPin=parseInt(pin);
    const mainBalance= document.getElementById('main-balance').innerText;
    const convertedMainBalance= parseFloat(mainBalance);

    if(convertedPin==1234){
        const sum= convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText=sum;

        const container=document.getElementById("transaction-container");
        const p=document.createElement("p");
        p.innerText=`added ${Amount} from ${convertedPin} account`
        container.appendChild(p)
    }
    else{
        alert("Invalid Pin");
    }
}) 
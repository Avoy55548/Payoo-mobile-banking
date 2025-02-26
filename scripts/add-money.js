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
    }
    else{
        alert("Invalid Pin");
    }
}) 
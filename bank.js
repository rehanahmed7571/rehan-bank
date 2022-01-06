    // log in button handler
    let buttonInner = document.getElementById('buttonId').addEventListener('click',function(){ 
        const loginArea =document.getElementById('login-area');
        loginArea.style.display="none";
        document.getElementById('transection-area').style.display='block';
    });

    //deposit button handler
    document.getElementById('deposit-button').addEventListener('click',function(){

        const depositAmount= document.getElementById('deposit-amount').value;
        const depositNumber = parseFloat(depositAmount);

            
            updateAmount('depositCurrentBalance',depositNumber);
            updateAmount('baLanceStatus',depositNumber);

        document.getElementById('deposit-amount').value="";
    })

    function updateAmount(id, depositNumber){

        const balanceStatus = document.getElementById(id).innerText;
        const balanceStatusNumber = parseFloat(balanceStatus);
        const totalBalanceStatus = depositNumber + balanceStatusNumber;

            document.getElementById(id).innerText=totalBalanceStatus;

    }

    // withdrow button handler

    document.getElementById('Withdrowbtn').addEventListener('click',function(){

        const withdrowAmount = document.getElementById('withdrow-Amount').value;
        const withdrowAmountNumber = parseFloat(withdrowAmount);

        document.getElementById('withdrow-Amount').value="";

       updateAmount('baLanceStatus', -1 * withdrowAmountNumber);
        updateAmount('expense',withdrowAmountNumber);


            
        
    })
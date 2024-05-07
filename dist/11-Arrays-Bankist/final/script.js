"use strict";const account1={owner:"Jonas Schmedtmann",movements:[200,450,-400,3e3,-650,-130,70,1300],interestRate:1.2,pin:1111},account2={owner:"Jessica Davis",movements:[5e3,3400,-150,-790,-3210,-1e3,8500,-30],interestRate:1.5,pin:2222},account3={owner:"Steven Thomas Williams",movements:[200,-200,340,-300,-20,50,400,-460],interestRate:.7,pin:3333},account4={owner:"Sarah Smith",movements:[430,1e3,700,50,90],interestRate:1,pin:4444},accounts=[account1,account2,account3,account4],labelWelcome=document.querySelector(".welcome"),labelDate=document.querySelector(".date"),labelBalance=document.querySelector(".balance__value"),labelSumIn=document.querySelector(".summary__value--in"),labelSumOut=document.querySelector(".summary__value--out"),labelSumInterest=document.querySelector(".summary__value--interest"),labelTimer=document.querySelector(".timer"),containerApp=document.querySelector(".app"),containerMovements=document.querySelector(".movements"),btnLogin=document.querySelector(".login__btn"),btnTransfer=document.querySelector(".form__btn--transfer"),btnLoan=document.querySelector(".form__btn--loan"),btnClose=document.querySelector(".form__btn--close"),btnSort=document.querySelector(".btn--sort"),inputLoginUsername=document.querySelector(".login__input--user"),inputLoginPin=document.querySelector(".login__input--pin"),inputTransferTo=document.querySelector(".form__input--to"),inputTransferAmount=document.querySelector(".form__input--amount"),inputLoanAmount=document.querySelector(".form__input--loan-amount"),inputCloseUsername=document.querySelector(".form__input--user"),inputClosePin=document.querySelector(".form__input--pin"),displayMovements=function(e,t=!1){containerMovements.innerHTML="",(t?e.slice().sort((e,t)=>e-t):e).forEach(function(e,t){var n=0<e?"deposit":"withdrawal",t=`
      <div class="movements__row">
        <div class="movements__type movements__type--${n}">${t+1} ${n}</div>
        <div class="movements__value">${e}€</div>
      </div>
    `;containerMovements.insertAdjacentHTML("afterbegin",t)})},calcDisplayBalance=function(e){e.balance=e.movements.reduce((e,t)=>e+t,0),labelBalance.textContent=e.balance+"€"},calcDisplaySummary=function(t){var e=t.movements.filter(e=>0<e).reduce((e,t)=>e+t,0),e=(labelSumIn.textContent=e+"€",t.movements.filter(e=>e<0).reduce((e,t)=>e+t,0)),e=(labelSumOut.textContent=Math.abs(e)+"€",t.movements.filter(e=>0<e).map(e=>e*t.interestRate/100).filter((e,t,n)=>1<=e).reduce((e,t)=>e+t,0));labelSumInterest.textContent=e+"€"},createUsernames=function(e){e.forEach(function(e){e.username=e.owner.toLowerCase().split(" ").map(e=>e[0]).join("")})},updateUI=(createUsernames(accounts),function(e){displayMovements(e.movements),calcDisplayBalance(e),calcDisplaySummary(e)});let currentAccount,sorted=(btnLogin.addEventListener("click",function(e){e.preventDefault(),currentAccount=accounts.find(e=>e.username===inputLoginUsername.value),console.log(currentAccount),currentAccount?.pin===Number(inputLoginPin.value)&&(labelWelcome.textContent="Welcome back, "+currentAccount.owner.split(" ")[0],containerApp.style.opacity=100,inputLoginUsername.value=inputLoginPin.value="",inputLoginPin.blur(),updateUI(currentAccount))}),btnTransfer.addEventListener("click",function(e){e.preventDefault();var e=Number(inputTransferAmount.value),t=accounts.find(e=>e.username===inputTransferTo.value);inputTransferAmount.value=inputTransferTo.value="",0<e&&t&&currentAccount.balance>=e&&t?.username!==currentAccount.username&&(currentAccount.movements.push(-e),t.movements.push(e),updateUI(currentAccount))}),btnLoan.addEventListener("click",function(e){e.preventDefault();const t=Number(inputLoanAmount.value);0<t&&currentAccount.movements.some(e=>e>=.1*t)&&(currentAccount.movements.push(t),updateUI(currentAccount)),inputLoanAmount.value=""}),btnClose.addEventListener("click",function(e){e.preventDefault(),inputCloseUsername.value===currentAccount.username&&Number(inputClosePin.value)===currentAccount.pin&&(e=accounts.findIndex(e=>e.username===currentAccount.username),console.log(e),accounts.splice(e,1),containerApp.style.opacity=0),inputCloseUsername.value=inputClosePin.value=""}),!1);btnSort.addEventListener("click",function(e){e.preventDefault(),displayMovements(currentAccount.movements,!sorted),sorted=!sorted});const movements=[200,450,-400,3e3,-650,-130,70,1300],bankDepositSum=accounts.flatMap(e=>e.movements).filter(e=>0<e).reduce((e,t)=>e+t,0),numDeposits1000=(console.log(bankDepositSum),accounts.flatMap(e=>e.movements).reduce((e,t)=>1e3<=t?++e:e,0));console.log(numDeposits1000);let a=10;console.log(++a),console.log(a);const{deposits,withdrawals}=accounts.flatMap(e=>e.movements).reduce((e,t)=>(e[0<t?"deposits":"withdrawals"]+=t,e),{deposits:0,withdrawals:0}),convertTitleCase=(console.log(deposits,withdrawals),function(e){const t=e=>e[0].toUpperCase()+e.slice(1),n=["a","an","and","the","but","or","on","in","with"];e=e.toLowerCase().split(" ").map(e=>n.includes(e)?e:t(e)).join(" ");return t(e)});console.log(convertTitleCase("this is a nice title")),console.log(convertTitleCase("this is a LONG title but not too long")),console.log(convertTitleCase("and here is another title with an EXAMPLE"));
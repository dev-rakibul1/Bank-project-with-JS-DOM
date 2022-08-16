// Dom
const depositBtn = document.getElementById("deposit-btn");
const withdrowBtn = document.getElementById("withdrow-btn");
const totalDeposit = document.getElementById("total-deposit");
const totalBalance = document.getElementById("total-balance");
const totalWithdrow = document.getElementById("total-withdrow");
const amountError = document.getElementById("amount-error");

depositBtn.addEventListener("click", () => {
  const depositField = document.getElementById("deposit");
  const deposit = depositField.value;
  const newDeposit = parseFloat(deposit);

  // type check
  if (isNaN(newDeposit)) {
    amountError.innerText = "Please enter your amount (number)";
    amountError.style.opacity = "1";
    return;
  }

  // Total calcunations
  function calculation(dep) {
    // previsu amount
    const prevDepositString = totalDeposit.innerText;
    const prevDeposit = parseFloat(prevDepositString);

    // deposit amount calculation
    let totalDep = dep + prevDeposit;
    totalDeposit.innerText = totalDep;

    // total balance calculation
    const totalPrevStingBalance = totalBalance.innerText;
    const totalPrevBalance = parseFloat(totalPrevStingBalance);
    totalOrginalBlance = totalPrevBalance + dep;
    totalBalance.innerText = totalOrginalBlance;
  }

  // clear the deposit field
  depositField.value = "";

  calculation(newDeposit);
});

// total withdrow calculation
withdrowBtn.addEventListener("click", () => {
  // catch withdrow amaon
  const withdrow = document.getElementById("withdrow");
  const newWithdrowAmountString = withdrow.value;
  const newWithdrowAmount = parseFloat(newWithdrowAmountString);

  // type check
  if (isNaN(newWithdrowAmount)) {
    amountError.innerText = "Please enter your amount (number)";
    amountError.style.opacity = "1";
    return;
  }

  // withdrow calculation
  function withdrowCalculation(depo) {
    // prev withdrow amount
    const prevTotalWithdrowString = totalWithdrow.innerText;
    const prevTotalWithdrow = parseFloat(prevTotalWithdrowString);

    // total balance convert number
    const withdrowTotoalStringBlaance = totalBalance.innerText;
    const withdrowTotalPrevBalance = parseFloat(withdrowTotoalStringBlaance);
    console.log(withdrowTotalPrevBalance);

    if (depo > withdrowTotalPrevBalance) {
      amountError.innerText = "Your balance is low";
      amountError.style.opacity = "1";
      return;
    } else {
      // toal amoun withdrow
      const totalWithdrowBalance = withdrowTotalPrevBalance - newWithdrowAmount;
      totalBalance.innerText = totalWithdrowBalance;
    }

    // total amount
    const totalAmount = depo + prevTotalWithdrow;
    totalWithdrow.innerText = totalAmount;
    console.log(totalAmount);
  }

  // clear withdrow
  withdrow.value = "";

  withdrowCalculation(newWithdrowAmount);
});

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  console.log("---Bank Account Created ---");
  console.log("---Welcome to Dinesh Bank---");
  console.log("---------------------------------------------------");
  console.log(balance, "is your current balance");
  console.log("*********************");

  return {
    deposit(amount) {
      balance += amount;
      console.log("---Amount Deposited !!!---");
      console.log("*********************");
      console.log(amount, "added to your account");
      console.log(balance, "is your current balance");
      console.log("*********************");
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("insufficient Balance !!!");
        console.log("*********************");
      } else {
        balance -= amount;

        console.log("---Amount Withdrawed !!!---");
        console.log("*********************");
        console.log(amount, "withdraw from your account");
        console.log(balance, "is your current balance");
        console.log("*********************");
      }
    },

    getBalance() {
      console.log("---Getting your Account Balance....---");
      console.log("*********************");
      console.log(balance, "is your current account balance");
      console.log("*********************");
    },
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(300);
myAccount.getBalance();

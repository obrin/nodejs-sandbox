interface Account {
  money: number,
  deposit: (value:number) => void
}

let bankAccount: Account = {
  money: 2000,
  deposit(value:number): void {
    this.money += value;
  }
};

let myself: {name: string, bankAccount: Account, hobbies: Array<string>} = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);


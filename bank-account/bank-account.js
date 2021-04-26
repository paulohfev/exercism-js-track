export class BankAccount {
  constructor() {
    this.money = 0;
    this.isAccountOpen = false;
  }

  open() {
    if (this.isAccountOpen) throw new ValueError();
    this.isAccountOpen = true;
  }

  close() {
    if (!this.isAccountOpen) throw new ValueError();
    this.isAccountOpen = false;
    this.money = 0;
  }

  deposit(amount) {
    if (!this.isAccountOpen || amount < 0) throw new ValueError();
    return this.money += amount;
  }

  withdraw(amount) {
    if (!this.isAccountOpen || amount > this.money || amount < 0) {
      throw new ValueError();
    }

    return this.money -= amount;
  }

  get balance() {
    if (!this.isAccountOpen || this.money < 0) throw new ValueError();
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

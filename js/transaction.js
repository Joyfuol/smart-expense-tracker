export default class Transaction {
  constructor(description, amount, type, category, date) {
    if (!description.trim()) {
      throw new Error("Transaction description is required.");
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Amount must be a positive number.");
    }

    if (!["income", "expense"].includes(type)) {
      throw new Error("Type must be income or expense.");
    }

    if (!category.trim()) {
      throw new Error("Transaction category is required.");
    }

    if (!date || Number.isNaN(Date.parse(date))) {
      throw new Error("A valid transaction date is required.");
    }

    this.id = crypto.randomUUID();
    this.description = description.trim();
    this.amount = amount;
    this.type = type;
    this.category = category.trim();
    this.date = date;
  }
}
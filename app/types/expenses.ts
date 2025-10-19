
export interface IExpense extends IExpenseData {
  id: string
}

export interface IExpenseData {
  title: string
  amount: string
  date: string
}
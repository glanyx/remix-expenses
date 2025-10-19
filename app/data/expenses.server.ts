
import type { IExpenseData } from '~/types/expenses'
import { prisma } from './database.server'

export const addExpense = async (expenseData: IExpenseData) => {
  return await prisma.expense.create({
    data: {
      title: expenseData.title,
      amount: +expenseData.amount,
      date: new Date(expenseData.date)
    }
  }).catch(e => {
    console.log(e)
    throw e
  })
}
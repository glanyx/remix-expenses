import { redirect, useNavigate } from "react-router"
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"
import { addExpense } from "~/data/expenses.server"
import type { Route } from "./+types/expenses.add"
import type { IExpenseData } from "~/types/expenses"


const AddExpensesPage = () => {

  const navigate = useNavigate()

  const closeHandler = () => {
    navigate('..')
  }

  return(
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  )
}

export default AddExpensesPage

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  await addExpense(data as any as IExpenseData)
  return redirect('/expenses')
}
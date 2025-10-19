import { FaDownload, FaPlus } from "react-icons/fa"
import { Link, Outlet } from "react-router"
import ExpensesList from "~/components/expenses/ExpensesList"
import ExpensesHeader from "~/components/navigation/ExpensesHeader"

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'First Expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'Second Expense',
    amount: 16.99,
    date: new Date().toISOString(),
  }
]

const ExpensesLayout = () => {

  return(
    <>
      <ExpensesHeader />
      <Outlet />
      <main>
        <section id='expenses-actions' className='my-8 mx-0 flex justify-center gap-4'>
          <Link className="flex gap-4 items-center text-primary-800 bg-primary-10 py-2 px-6 rounded-4xl hover:bg-gray-100" to='add'>
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a className="flex gap-4 items-center text-gray-10 bg-transparent py-2 px-6 rounded-4xl hover:text-gray-100" href='/expenses/raw'>
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  )
}

export default ExpensesLayout
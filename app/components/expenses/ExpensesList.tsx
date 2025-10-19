import type { IExpense } from '~/types/expenses';
import ExpenseListItem from './ExpenseListItem';

interface IExpenseListProps {
  expenses: Array<IExpense>
}

const ExpensesList = ({ expenses }: IExpenseListProps) => {

  return (
    <ol className='max-w-[32rem] w-[32rem] my-8 mx-auto' id="expenses-list">
      {expenses.map((expense) => (
        <li className='w-full' key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;

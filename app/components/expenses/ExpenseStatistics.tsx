import { useMemo } from 'react';
import { type IExpense } from '~/types/expenses';

function calculateSummaryStatistics(expenses: Array<IExpense>) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

interface IExpenseStatisticsProps {
  expenses: Array<IExpense>
}

const ExpenseStatistics = ({
  expenses,
}: IExpenseStatisticsProps) => {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      <h2>Summary Statistics</h2>
      <dl className="grid grid-cols-2 gap-8">
        <div>
          <dt className='text-primary-100'>Total</dt>
          <dd className='m-0 text-primary-10 text-3xl'>${sum.toFixed(2)}</dd>
        </div>
        <div>
          <dt className='text-primary-100'>Average</dt>
          <dd className='m-0 text-primary-10 text-3xl'>${mean.toFixed(2)}</dd>
        </div>
        <div>
          <dt className='text-primary-100'> Min. Amount</dt>
          <dd className='m-0 text-primary-10 text-3xl'>${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          <dt className='text-primary-100'>Max. Amount</dt>
          <dd className='m-0 text-primary-10 text-3xl'>${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;

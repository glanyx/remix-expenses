import { Link } from "react-router";

interface IExpenseListItemProps {
  id: string
  title: string
  amount: number
}

const ExpenseListItem = ({
  id,
  title,
  amount,
}: IExpenseListItemProps) => {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="w-full my-6 mx-0 p-4 bg-primary-300 rounded-lg flex justify-between items-baseline text-gray-10">
      <div>
        <h2 className="m-0">{title}</h2>
        <p className="m-0">${amount.toFixed(2)}</p>
      </div>
      <menu className="m-0 p-0 flex items-center gap-4">
        <button className="bg-transparent border-none text-gray-0 p-0 hover:text-primary-100" onClick={deleteExpenseItemHandler}>Delete</button>
        <Link className="bg-transparent border-none text-gray-0 p-0 hover:text-primary-100" to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;

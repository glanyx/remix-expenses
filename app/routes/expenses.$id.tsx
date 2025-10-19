import { useNavigate } from "react-router"
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"


const UpdateExpensePage = () => {

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

export default UpdateExpensePage
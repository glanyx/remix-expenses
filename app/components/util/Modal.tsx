
interface IModalProps {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({
  children,
  onClose,
}: IModalProps) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;

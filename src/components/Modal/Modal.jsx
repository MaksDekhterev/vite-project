import s from "./Modal.module.scss"

export const Modal = ({onClose, children}) => {
  return (
    <div onClick={onClose} className={s.background}>{children}</div>
  )
}

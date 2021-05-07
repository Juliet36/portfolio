import './ButtonsContainer.css'

export default function ButtonsContainer(props) {
  return (
    <div className="buttons-container">
    {props.children}
    </div>
  )
}
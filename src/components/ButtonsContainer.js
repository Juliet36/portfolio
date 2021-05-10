import './ButtonsContainer.css'

export default function ButtonsContainer(props) {
  return (
    <div className={"buttons-container" + (props.alignStart ? " buttons-container--start" : "")}>
      {props.children}
    </div>
  )
}
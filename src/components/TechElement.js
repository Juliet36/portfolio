import './TechElements.css'

export default function TechElement(props) {
  return (
    <div className="tech-element">
      <img className="tech-element__icon" src={props.info.icon}/>
      <p className="tech-element__name">{props.info.name}</p>
      {props.isNotLast && <p className="tech-element__divider">+</p>}
    </div>
  )
}
import './TechElement.css'

export default function TechElement(props) {
  const { info, isNotLast } = { ...props }
  return (
    <div className="tech-element">
      <img className="tech-element__icon" src={info.icon}/>
      <p className="tech-element__name">{info.name}</p>
      {isNotLast && <p className="tech-element__divider">+</p>}
    </div>
  )
}
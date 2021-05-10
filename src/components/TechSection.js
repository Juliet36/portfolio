import './TechSection.css'
import TechElement from './TechElement.js'

export default function TechSection(props) {
  const { name, data } = { ...props }
  return (
    <div className="tech-section">
      <p className="tech-section__name">{name}:</p>
      <div className="tech-section__elements">
        {
          data.map((tech, i) => 
            <TechElement key={i} info={tech} isNotLast={i !== data.length-1} />
          )
        }
      </div>
    </div>
  )
}
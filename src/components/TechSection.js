import './TechSection.css'
import TechElement from './TechElement.js'

export default function TechSection(props) {
  return (
    <div className="tech-section">
    <p className="tech-section__name">{props.name}:</p>
    <div className="tech-section__elements">
      {
        props.data.map((tech, i) => 
          <TechElement info={tech} isNotLast={i !== props.data.length-1} />
        )
      }
    </div>
    </div>
  )
}
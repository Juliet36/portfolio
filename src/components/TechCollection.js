import { TECHS } from './constants.js'
import TechSection from './TechSection.js'
import './TechCollection.css'

const TECH_SECTION_NAMES = Object.keys(TECHS)

export default function TechCollection() {
  return (
    <div className="tech-collection">
      {TECH_SECTION_NAMES.map((section) =>
        <TechSection data={TECHS[section]} name={section}/>
      )}
    </div>
  )
}
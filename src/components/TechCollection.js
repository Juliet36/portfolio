import { TECHS } from '../constants/technologies.js'
import TechSection from './TechSection.js'

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
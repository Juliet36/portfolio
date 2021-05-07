import './ProjectSection.css'
import Project from './Project'

function ProjectSection(props) {
  return (
      <article className="project-section">
        <p className="body-paragraph"><b>{props.name}</b></p>
        <div className="projects-container">
          {
              props.data.map((project, i) => 
                <Project key={i} data={project} />
              )
          }
        </div>
      </article>
  )
}

export default ProjectSection
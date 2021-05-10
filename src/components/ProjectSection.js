import './ProjectSection.css'
import Project from './Project'

function ProjectSection(props) {
  const { name, data } = {...props}
  return (
      <article className="project-section">
        <p className="body-paragraph"><b>{name}</b></p>
        <div className="projects-container">
          {
            data.map((project, i) => 
              <Project key={i} data={project} />
            )
          }
        </div>
      </article>
  )
}

export default ProjectSection
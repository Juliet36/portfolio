import './Project.css'
import ButtonLink from './ButtonLink'

function Project(props) {
  let links = []
  switch (props.data.links.length) {
    case 0:
      links = false
      break
    case 1:
      links = <ButtonLink link={props.data.links[0]} text="Check it out →" plain={true} />
      break
    default:
      links = props.data.links.map((link, i) => 
       <ButtonLink key={i} link={link} text={"Example " + (i+1) + " →"} plain={true} partial={true} />)
      break
  }
  return (
    <>
      <div className="project">
        <div 
          className="project-image-container"
          style={{backgroundImage: `url('${props.data.image}')`}}>
        </div>
        <div className="project-overlay">
          <h3 className="project-name">{props.data.name}</h3>
          <p className="body-paragraph light">{props.data.description}</p>
          <div className="techs">{props.data.tech.map((x, i) => <div className="tech-box" key={i}><p className="tech-box__label">{x}</p></div>)}</div>
            { links && (
              <div className="buttons buttons--desktop">
                {links}
              </div>
            ) }
        </div>
      </div>
      <div className="project-info--mobile">
        <h3 className="project-name">{props.data.name}</h3>
        <p className="body-paragraph light">{props.data.description}</p>
        <div className="techs">{props.data.tech.map((x, i) => <div className="tech-box" key={i}><p className="tech-box__label">{x}</p></div>)}</div>
        <div className="buttons buttons--mobile">
          {links}
        </div>
      </div>
      </>
  )
}

export default Project
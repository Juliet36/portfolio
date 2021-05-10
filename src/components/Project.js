import './Project.css'
import ButtonLink from './ButtonLink'
import ButtonsContainer from '../components/ButtonsContainer'

function Project(props) {
  const { data } = { ...props }
  let links = []
  switch (data.links.length) {
    case 0:
      links = false
      break
    case 1:
      links = <ButtonLink link={data.links[0]} text="Check it out →" hasShadow={false} />
      break
    default:
      links = data.links.map((link, i) => 
       <ButtonLink key={i} link={link} text={"Example " + (i+1) + " →"} hasShadow={false}  />)
       links = <ButtonsContainer>{links}</ButtonsContainer>
      break
  }
  
  let techs = (
    <div className="techs">
      {data.tech.map((tech, i) => 
        <div className="tech-box" key={i}>
          <p className="tech-box__label">{tech}</p>
        </div>)}
    </div>
  )
  
  return (
    <>
      <div className="project">
        <div 
          className="project-image-container"
          style={{backgroundImage: `url('${data.image}')`}}>
        </div>
        <div className="project-overlay">
          <h3 className="project-name">{data.name}</h3>
          <p className="body-paragraph light">{data.description}</p>
          {techs}
          { links && (
            <div className="buttons buttons--desktop">
              {links}
            </div>
          ) }
        </div>
      </div>
      <div className="project-info--mobile">
        <h3 className="project-name">{data.name}</h3>
        <p className="body-paragraph light">{data.description}</p>
        {techs}
        <div className="buttons buttons--mobile">
          {links}
        </div>
      </div>
    </>
  )
}

export default Project
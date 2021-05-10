import About from '../pages/About'
import Projects from '../pages/Projects'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'
import Main from '../components/Main'
import './Content.css'

function Content(props) {
  let page = <></>
  switch(props.type) {
    case 'home':
      page = <About transition={props.transition} show={props.show} color={props.color} name={props.name} />
      break
    case 'projects':
      page = <Projects transition={props.transition} show={props.show} color={props.color} name={props.name} />
      break
    case 'about-me':
      page = <Experience transition={props.transition} show={props.show} color={props.color} name={props.name} />
      break
    case 'contact':
      page = <Contact transition={props.transition} show={props.show} color={props.color} name={props.name} />
      break
  }
  return (
    <Main handleMenuClick={props.handleMenuClick} showMenu={props.showMenu}>
      {page}
    </Main>
  )
}

export default Content
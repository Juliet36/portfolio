import About from '../pages/About'
import Projects from '../pages/Projects'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'
import Main from '../components/Main'

function Content(props) {
  switch(props.type) {
    case 'home':
      return <Main handleMenuClick={props.handleMenuClick} showMenu={props.showMenu}><About transition={props.transition} show={props.show} color={props.color} name={props.name} /></Main>
    case 'projects':
      return <Main handleMenuClick={props.handleMenuClick} showMenu={props.showMenu}><Projects transition={props.transition} show={props.show} color={props.color} name={props.name} /></Main>
    case 'about-me':
      return <Main handleMenuClick={props.handleMenuClick} showMenu={props.showMenu}><Experience transition={props.transition} show={props.show} color={props.color} name={props.name} /></Main>
    case 'contact':
      return <Main handleMenuClick={props.handleMenuClick} showMenu={props.showMenu}><Contact transition={props.transition} show={props.show} color={props.color} name={props.name} /></Main>
  }
}

export default Content
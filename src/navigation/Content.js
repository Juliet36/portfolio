import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import Main from './Main'

function Content(props) {
  console.log('props')
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
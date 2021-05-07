import {Route, Redirect} from 'react-router-dom'
import Content from './Content'

function Routes(props) {
  console.log(props.pages)
  return (
    <>
    {
      props.pages.map((page) =>
      <Route key={page.position} path={"/" + page.key}>
        <Content handleMenuClick={props.handleMenuClick} showMenu={props.showMenu} type={page.key} color={page.color} name={page.name} />
      </Route>
    )
    }
    <Route exact path="/">
      <Redirect to="/home"/>
    </Route>
  </>
  )
}

export default Routes
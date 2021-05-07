import {
  NavLink
} from 'react-router-dom'
import './Navigation.css'
import Content from './Content'
import { motion, AnimatePresence } from 'framer-motion'

function Navigation(props) {
  console.log(props)
  return (
        <motion.li 
        style={{order: props.position, backgroundColor: props.info.color}}
        className={
          (props.current === props.position ? "current" : "show")
          + ((props.animate && (props.prev === props.position)) ? ` animate animate--${props.direction}` : "")
        }>
          <p className={"link " + (props.current === props.position ? "hide" : "show")}>
            <div className="highlight">
              <NavLink exact onClick={() => props.handleClick(props.position)} to={`/${props.location}`}>
              {props.info.name}
              </NavLink>
            </div>
          </p>
        </motion.li>
  )
}

export default Navigation

//<Content transition={props.show} show={props.current === props.position} type={props.location} />
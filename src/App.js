import './App.css'
import { useState, useEffect } from 'react'
import {
  Switch,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { ReactComponent as Hamburger } from '../images/hamburger.svg'
import { WEB_PAGES } from './constants/pages'
import Navigation from './navigation/Navigation'
import Routes from './navigation/Routes'

export default function App() {
  const location = useLocation()
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)
  const [direction, setDirection] = useState('right')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [show, setShow] = useState(true)
  const [loading, setLoading] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  
  const getPos = (pathname) => {
    switch (pathname) {
      case '/projects':
        return 1
      case '/about-me':
        return 2
      case '/contact':
        return 3
      default:
        return 0
    }
  }
  function handleMenuClick() {
    setShowMenu(!showMenu)
  }
  
  useEffect(() => {
       // console.log(location)
       setCurrent(getPos(location.pathname))
   },[])

  function updateOrder(index) {
    if (showMenu) {
      setShowMenu(false)
    }
    setPrev(current)
    if (current < index) {
      setDirection('right')
    } else {
      setDirection('left')
    }
    setIsTransitioning(true)
    setCurrent(index)
    setShow(false)
    window.setTimeout(function() {
      setIsTransitioning(false)
      setShow(true)
    }, 500)
  }

  return (
    loading ?
      (<div>
      </div>) :
      (<div>
        <nav style={{zIndex: showMenu ? 15 : 4}}>
          <ul className={ showMenu ? "menu-show" : "menu-hide"}>
            {WEB_PAGES.map((page, i) => 
              <Navigation key={i} direction={direction} animate={isTransitioning} show={show} current={current} prev={prev} position={i} location={page.key} handleClick={updateOrder} info={page} />
            )}
          </ul>
        </nav>
        <div className={"hamburger" + (showMenu ? " animate-cross": " animate-burger")}>
          {
              <Hamburger onClick={handleMenuClick} />
          }
        </div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Routes pages={WEB_PAGES} handleMenuClick={handleMenuClick} showMenu={showMenu} />
          </Switch>
        </AnimatePresence>
      </div>)
  )
}